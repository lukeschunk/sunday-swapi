export const list = (url, page) =>
  fetch(url + '?page=' + page).then(response => response.json());
