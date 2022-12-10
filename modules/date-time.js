import { DateTime } from './luxin.js';
const date = () => {
    const time = document.querySelector('.date');
    const dt = DateTime.now();
    time.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
  };
  
  // eslint-disable-next-line import/prefer-default-export
  export { date };