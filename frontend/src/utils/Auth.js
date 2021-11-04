class Auth {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  register(password, email) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        "password": password,
        "email": email
      })
      })
      .then(this._handleResponse);
  }

  authorize(password, email) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        "password": password,
        "email": email
      })
      })
      .then(this._handleResponse);
  }

  checkToken() {
    return fetch(`${this._baseUrl}/identify`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
      })
      .then((res) => {
        if(res.ok) {
          return res;
        }
        return Promise.reject(`Ошибка: ${res.status}`);
        }
      );
  }

  logout() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
      })
      .then(this._handleResponse);
  }

  _handleResponse(res) {
    if(res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const auth = new Auth ({
  baseUrl: 'http://api.mesto.vab.nomoredomains.rocks',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default auth;