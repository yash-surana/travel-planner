import { FAKE_API } from './urls';

export async function fakeAPI() {
  const response = await fetch(FAKE_API, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const responseJSON = await response.json();
  return;
}
