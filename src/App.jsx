import "./App.css"
import { useState, useEffect } from 'react';
import { getData } from "./getData.js"
import { getLocalStorage, setLocalStorage, removeLocalStorage } from "./localstorage.js";
import Card from './components/Card.jsx';
import Header from "./components/Header.jsx";

const refreshLocalStorage = false;
if (refreshLocalStorage) removeLocalStorage();

const photoPoolSize = 30;
const photosToDisplay = 12;

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    requestData(`curated?page=1&per_page=${photoPoolSize}`)
      .then((result) => {
        setPhotos(addTitleToPhotos(randomSelection(result.photos, photosToDisplay)));
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  const photosInRandomOrder = randomizeArray(photos);

  if (clickedIds.size > maxScore) { setMaxScore(clickedIds.size) };

  if (clickedIds.size >= photosToDisplay) {
    setClickedIds(new Set());
  }

  const handleClick = (id) => {
    if (!clickedIds.has(id)) {
      const nextClickedIds = new Set([...clickedIds]);
      nextClickedIds.add(id);
      setClickedIds(nextClickedIds);
    } else {
      setClickedIds(new Set());
    }
  }

  return (
    <>
      <Header score={clickedIds.size} target={photos.length} maxScore={maxScore}/>
      <div className="gallery">
        {photosInRandomOrder.map((photo) => (
          <Card key={photo.id} photo={photo} onClick={handleClick} />
        ))}
      </div>
      <div className="attribution">
        <a href="https://www.pexels.com">Photos provided by Pexels</a>
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
  const localData = getLocalStorage() || {};

  if (localData && localData[currentDate] && localData[currentDate][query]) {
    console.log("Local data retrieved");
    return localData[currentDate][query];
  }

  const result = await getData(query);
  if (result.error) {
    console.log(result.error);
  } else {
    console.log("API queried");
    if (!localData[currentDate]) localData[currentDate] = {};
    localData[currentDate][query] = result;
    setLocalStorage(localData);
    return result;
  }
}

function randomizeArray(array) {
  // Use Fisher-Yates Shuffle to shuffle a duplicate of the array.
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]]
  }
  
  return newArray;
}

function randomSelection(array, numberToSelect) {
  if (!(array instanceof Array) || !Number.isInteger(numberToSelect)) {
    return new Error("Unexpected arguments to randomSelection()")
  }
  if (array.size >= numberToSelect) return array;

  const randomIndices = [];
  while (randomIndices.length < numberToSelect) {
    const n = Math.floor(Math.random() * array.length);
    if (!randomIndices.includes(n)) randomIndices.push(n)
  }
  randomIndices.sort();

  const output = [];
  randomIndices.forEach((i) => output.push(array[i]));
  return output;
}

function addTitleToPhotos(photos) {
  photos.forEach(photo => {
    const title = getTitle(photo.url);
    photo.title = title;
  })
  return photos;
}

function getTitle(str) {
  const maxWordCount = 3;

  if (
    (!str)
    || (typeof(str) !== "string")
    || (str.indexOf("photo/") == -1)
  ) return "untitled";

  const firstWords = str
    .slice(str.indexOf("photo/") + 6)
    .split("-")
    .splice(0, maxWordCount)
  
  const lastWord = firstWords[firstWords.length - 1];
  if (ignoredWordList.includes(lastWord)) {
    return firstWords.splice(0, maxWordCount - 1).join(" ");
  } else {
    return firstWords.join(" ");
  }
}

const ignoredWordList = [
  "a",
  "about",
  "above",
  "after",
  "among",
  "and",
  "at",
  "before",
  "behind",
  "below",
  "beneath",
  "beside",
  "between",
  "but",
  "by",
  "during",
  "for",
  "in",
  "inside",
  "into",
  "like",
  "near",
  "of",
  "off",
  "on",
  "onto",
  "opposite",
  "outside",
  "over",
  "past",
  "than",
  "through",
  "till",
  "to",
  "toward",
  "under",
  "underneath",
  "until",
  "upon",
  "versus",
  "with",
  "within",
  "without",
]
