export function randomizeArray(array) {
  // Use Fisher-Yates Shuffle to shuffle a duplicate of the array.
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
  }

  return newArray;
}

export function randomSelection(array, numberToSelect) {
  if (!(array instanceof Array) || !Number.isInteger(numberToSelect)) {
    return new Error("Unexpected arguments to randomSelection()");
  }
  if (array.size >= numberToSelect) return array;

  const randomIndices = [];
  while (randomIndices.length < numberToSelect) {
    const n = Math.floor(Math.random() * array.length);
    if (!randomIndices.includes(n)) randomIndices.push(n);
  }
  randomIndices.sort();

  const output = [];
  randomIndices.forEach((i) => output.push(array[i]));
  return output;
}
