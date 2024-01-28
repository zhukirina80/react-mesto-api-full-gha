const baseUrl = 'http://localhost:3000';
//const baseUrl = 'https://api.zhukirina.nomoredomainsmonster.ru';

function sendRequestData(url, options) {
  return fetch(url, options)
  .then((res) => {
    if(res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}

export function register(email, password) {
  return sendRequestData(`${baseUrl}/sign-up`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      password: password,
      email: email,
    })
  })
}

export function authorize(email, password) {
  return sendRequestData(`${baseUrl}/sign-in`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      password: password,
      email: email,
    })
  })
}

export function checkToken(token) {
  return sendRequestData(`${baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  })
}
