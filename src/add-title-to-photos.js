import { ignoredWordList } from "./ignored-word-list.js";

export function addTitleToPhotos(photos) {
  photos.forEach((photo) => {
    const title = getTitle(photo.url);
    photo.title = title;
  });
  return photos;
}

function getTitle(str) {
  const maxWordCount = 3;

  if (!str || typeof str !== "string" || str.indexOf("photo/") == -1)
    return "untitled";

  const firstWords = str
    .slice(str.indexOf("photo/") + 6)
    .split("-")
    .splice(0, maxWordCount);

  /*
  If 3rd word is not on the ignored word list, return all three words.
  Otherwise, if the 2nd word is not ignored, return the first two words.
  Otherwise, return the first word only.
  */
  if (!ignoredWordList.includes(firstWords[2])) return firstWords.join(" ");

  if (!ignoredWordList.includes(firstWords[1]))
    return firstWords.splice(0, maxWordCount - 1).join(" ");

  return firstWords.splice(0, maxWordCount - 2);
}
