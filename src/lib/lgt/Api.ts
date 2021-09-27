import { LRUCache } from 'typescript-lru-cache';
import axios from 'axios';

class Api {
  apiUrl: string;

  cache: LRUCache;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
    this.cache = new LRUCache<string, string>();
  }

  async get(endpoint: string) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    return axios
      .get(`${this.apiUrl}${endpoint}`, { headers })
      .then((response) => response.data);
  }

  async post(endpoint: string, data: object) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    return axios
      .post(`${this.apiUrl}${endpoint}`, data, { headers })
      .then((response) => response.data);
  }
}

export default Api;
