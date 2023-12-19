class API {
  static #host = 'http://localhost:3001';

  constructor() { throw new Error('cant has instance');}

  static get host() { return API.#host; }
};

export default API;
