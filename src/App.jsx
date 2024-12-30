import "./App.css"
import { useState, useEffect } from 'react';
import { requestData } from "./request-data.js"
import { addTitleToPhotos } from "./add-title-to-photos.js";
import { randomizeArray, randomSelection } from "./array-helpers.js";
import Card from './components/Card.jsx';
import Header from "./components/Header.jsx";

// photoPoolSize sets the number of photo links to get from the Pexels API.
// photosToDisplay sets the number of photos from the pool to use in the game.
const photoPoolSize = 50;
const photosToDisplay = 12;

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());
  const [maxScore, setMaxScore] = useState(0);

  // Return the query result from localStorage or from the Pexels API.
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

  // If the user has won, reset the counter.
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
    <div className="container">
      <div className="main">
        <Header score={clickedIds.size} target={photos.length} maxScore={maxScore}/>
        <div className="gallery">
          {photosInRandomOrder.map((photo) => (
            <Card key={photo.id} photo={photo} onClick={handleClick} />
          ))}
        </div>
      </div>
      <footer>
        <a href="https://www.pexels.com">Photos provided by <span className="text--emphasis">Pexels</span></a>
      </footer>
    </div>
  )
}

