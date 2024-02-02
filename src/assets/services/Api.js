// All of our endpoints
import axios from 'axios';

// const baseURL = 'http://localhost:3001/cards/';
const baseURL = 'https://backend1-htk8.onrender.com/cards/';

export function getCards() {
  const URL = baseURL;
  const response = axios.get(`${URL}`);
  return response;
}

// Show one
export function getCard(id) {
  const URL = `${baseURL}/${id}`;
  const response = axios.get(URL);
  return response;
}

// Create the Card
export function createCard(card) {
  const URL = baseURL;
  const response = axios.post(URL, card);
  return response;
}
// Edit the Card
export function editCard(id, updatedCard) {
  const URL = `${baseURL}${id}`;
  const response = axios.put(URL, updatedCard);
  return response;
}

// Delete the Card
export function deleteCard(id) {
  const URL = `${baseURL}/${id}`;
  const response = axios.delete(URL);
  return response;
}
