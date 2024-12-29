import "../styles/Card.css";

export default function Card({ photo, onClick }) {
  return (
    <div className="card" onClick={() => onClick(photo.id)} >
      <img className="card__image" src={photo.src.portrait} />
      <div className="card__title">{photo.title}</div>
    </div>
  )
}