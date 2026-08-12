import fetch from 'isomorphic-fetch';
import { authHeader } from '../utils/auth';

// Built per request, not once at import: the token is usually issued after this module is
// evaluated, and it rotates while the app is open.
const buildHeaders = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  Authorization: authHeader(),
  OPTIONS: '',
});

export function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: buildHeaders(),
    body: JSON.stringify(data),
  }).then((response) => response);
}

export function get(url) {
  return fetch(url, {
    method: 'GET',
    headers: buildHeaders(),
  }).then((response) => response.json());
}
