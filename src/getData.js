export async function getData(query) {
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
