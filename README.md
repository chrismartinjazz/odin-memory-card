# odin-memory-card

Made for [The Odin Project](https://www.theodinproject.com/).

Memory Card game using pictures from the curated [Pexels](https://www.pexels.com) API feed. Click on each image only once. Image positions are randomized after each click. Click on the photo "name" to see the website for the photo, and the artist's name to see the Pexels website for the artist.

## Features

- The Pexels API doesn't provide 'titles' for photos, so these are derived from a shortened version of the photo URL, removing prepositions and certain other awkward words if they occur as the 3rd or 2nd and 3rd words of the title. For example:
  - "hiking in a" becomes "hiking" ("in" and "a" are both on ignored word list)
  - "close up of" becomes "close up" ("of" is on ignored word list)
  - "woman in park" becomes "woman in park" ("in" is on ignored work list, but "park" is not, so all three words remain)
- Uses localStorage to cache queries and responses, and will retrieve cached data rather than query the API if the API has already been called with the same query string on the same calendar day.
- Retrieves a list of 50 photo URLs and randomly selects 12 photos for each game. Refreshing the page randomizes the photo selection.
