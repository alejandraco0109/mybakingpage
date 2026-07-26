const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }

  return res.json();
}

export function searchRecipes(query) {
  return fetch(`${BASE_URL}/search.php?s=${query}`)
    .then(checkResponse);
}