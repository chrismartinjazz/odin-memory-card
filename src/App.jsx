import "./App.css"
import { useState, useEffect } from 'react';
import { getData } from "./getData.js"
import { getLocalStorage, setLocalStorage } from "./localstorage.js";
import Card from './components/Card.jsx';

export default function App() {
  const [photos, setPhotos] = useState([]);
  // const [clickedIds, setClickedIds] = useState([]);

  useEffect(() => {
    requestData("curated?page=1&per_page=12")
      .then((result) => {
        setPhotos(result.photos);
      })
  }, []);

  const photosInRandomOrder = randomizeArray(photos);
  
  return (
    <>
      <div className="gallery" onClick={(e) => console.log(e.target.id)} >
        {photosInRandomOrder.map((photo) => (
          <Card key={photo.id} photo={photo} />
        ))}
      </div>
    </>
  )
}

/* 
Check if there is already an API query result in local storage for the current date and query. If there is not,
query the API and store the data. If there is, retrieve the stored data.
*/
async function requestData(query) {
  const currentDate = (new Date()).toDateString();
  const localData = getLocalStorage();

  if (localData[currentDate][query]) {
    console.log("Local data retrieved", localData[currentDate][query]);
    return localData[currentDate][query];
  }

  const result = await getData(query);
  if (result.error) {
    console.log(result.error);
  } else {
    console.log("API queried", result);
    if (!localData[currentDate]) localData[currentDate] = {};
    localData[currentDate][query] = result;
    setLocalStorage(localData);
    return result;
  }
}

function randomizeArray(input) {
  // Use Fisher-Yates Shuffle to shuffle a duplicate of the array.
  const output = [...input];

  for (let i = output.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [output[i], output[randomIndex]] = [output[randomIndex], output[i]]
  }
  
  return output;
}