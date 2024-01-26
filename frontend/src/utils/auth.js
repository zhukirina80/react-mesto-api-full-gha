const baseUrl = 'http://localhost:3000';
//const baseUrl = 'https://api.zhukirina.nomoredomainsmonster.ru';

// function sendRequestData(url, options) {
//   return fetch(url, options)
//   .then((res) => {
//     if(res.ok) {
//       return res.json()
//     }
//     return Promise.reject(`Ошибка: ${res.status}`);
//   })
// }

export function register(email, password) {
  return fetch(`${baseUrl}/sign-up`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      password: password,
      email: email,
    })
  })
  .then((res) => {
    if(res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

export function authorize(email, password) {
  return fetch(`${baseUrl}/sign-in`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      password: password,
      email: email,
    })
  })
  .then((res) => {
    if(res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

export function checkToken() {
  const token = localStorage.getItem('jwt');
  return fetch(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
  .then((res) => {
    if(res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}
