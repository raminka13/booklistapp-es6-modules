import { DateTime } from './luxon.js';

export default class AddDate {
  static addDate = () => {
    const dateDiv = document.getElementById('my-date');
    const dateFormat = { ...DateTime.DATETIME_MED, weekday: 'long' };
    const date = DateTime.now().toLocaleString(dateFormat);
    dateDiv.textContent = date;
  };
}