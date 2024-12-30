import { setLocalStorage, getLocalStorage } from "./local-storage";

/* 
Check if there is already an API query result in local storage for the current date and query. If there is not,
query the API and store the data. If there is, retrieve the stored data.
*/
export async function requestData(query) {
  const currentDate = new Date().toDateString();
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

async function getData(query) {
  const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
  const baseUrl = "https://api.pexels.com/v1/";
  try {
    const response = await fetch(`${baseUrl}${query}`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    if (response.ok) {
      const json = await response.json();
      return json;
    } else if (response.status === 400 || response.status === 429) {
      return { error: "Location not found" };
    } else {
      return { error: `Unexpected error: ${response.status}` };
    }
  } catch {
    return { error: "Network error or API unreachable" };
  }
}
