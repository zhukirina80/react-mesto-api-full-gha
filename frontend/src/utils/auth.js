const baseUrl = 'https://auth.nomoreparties.co.'

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
  return sendRequestData(`${baseUrl}/signup`, {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      password: password,
      email: email,
    })
  })
}

export function authorize(email, password) {
  return sendRequestData(`${baseUrl}/signin`, {
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