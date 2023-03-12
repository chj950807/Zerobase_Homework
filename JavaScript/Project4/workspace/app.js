import DatePicker from "./index.js";
import { calendarInit } from "./calendar.js";

const $date_picks = [...document.querySelectorAll(".calendar")];

$date_picks.forEach(() => {
  DatePicker();
});

calendarInit();

