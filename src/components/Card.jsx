import "../styles/Card.css";

export default function Card({ photo }) {
  const title = getTitle(photo.url)

  return (
    <div className="card" id={photo.id} >
      <img className="card__image" src={photo.src.portrait} />
      <div className="card__title">{title}</div>
    </div>
  )
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
