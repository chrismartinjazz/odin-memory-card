import "../styles/Card.css";

export default function Card({ photo, onClick }) {
  return (
    <div className="card" onClick={() => onClick(photo.id)} >
      <img className="card__image" src={photo.src.portrait} />
      <div className="card__text">
        <a className="card__title" href={photo.url}>{photo.title}</a>
        <br />
        <a className="card__photographer" href={photo.photographer_url}>{photo.photographer}</a>
      </div>
    </div>
  )
}