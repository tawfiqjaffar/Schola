const moment = require('moment-timezone');

function getDayBefore() {
  var dayBefore = moment().subtract('1', 'd').format();
  dayBefore = dayBefore.slice(0, 10);

  return (dayBefore);
}

function getDayAfter() {
  var dayAfter = moment().add('1', 'd').format();
  dayAfter = dayAfter.slice(0, 10);

  return (dayAfter);
}

function getStartWeek() {
  var startWeek = moment().startOf('week').subtract('1', 'd',).format();
  startWeek = startWeek.slice(0, 10);

  return (startWeek);
}

function getEndWeek() {
  var endWeek = moment().endOf('week').add('1', 'd',).format();
  endWeek = endWeek.slice(0, 10);

  return (endWeek);
}

module.exports = {
  getDayBefore,
  getDayAfter,
  getStartWeek,
  getEndWeek,
};
