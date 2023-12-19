class API {
  static #host = 'http://localhost:3001';

  constructor() { throw new Error('cant has instance');}

  static get host() { return API.#host; }
  static start() {
    return fetch(API.#host + '/start')
    .then(r => r.json());
  }
};

export default API;
