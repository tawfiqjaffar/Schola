const moment = require("moment-timezone");

function getToday() {
  let dayBefore = moment().format();
  dayBefore = dayBefore.slice(0, 10);

  return dayBefore;
}

function getDayAfter() {
  let dayAfter = moment().add("1", "d").format();
  dayAfter = dayAfter.slice(0, 10);

  return dayAfter;
}

function getStartWeek() {
  let startWeek = moment().startOf("week").format();
  startWeek = startWeek.slice(0, 10);

  return startWeek;
}

function getEndWeek() {
  let endWeek = moment().endOf("week").add("1", "d").format();
  endWeek = endWeek.slice(0, 10);

  return endWeek;
}

module.exports = {
  getToday,
  getDayAfter,
  getStartWeek,
  getEndWeek,
};
