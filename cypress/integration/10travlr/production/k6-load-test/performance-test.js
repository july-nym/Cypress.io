import { sleep } from 'k6';
import http from 'k6/http';
export let options = {
  duration: '1m',
  vus: 50,
};
export default function () {
  http.get('https://www.10travlr.com.au/');
  sleep(3);
}