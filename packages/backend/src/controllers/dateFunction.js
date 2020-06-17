function getStartDay() {
  const startDay = new Date();
  startDay.setHours(0);
  startDay.setMinutes(0);
  startDay.setSeconds(0);

  return startDay;
}

function getEndDay() {
  const endDay = new Date();
  endDay.setHours(23);
  endDay.setMinutes(59);
  endDay.setSeconds(59);

  return endDay;
}

function getStartWeek() {
  const today = new Date();

  let day = today.getDay() - 1; // L'index commence à 0 pour Dimanche
  if (day < 0) day = 6;
  const date = today.getDate();
  const month = today.getMonth() + 1; // L'index commence à 0 pour Janvier
  const year = today.getFullYear();

  const fromStr = `${year}-${month}`;
  const from = new Date(fromStr);
  from.setDate(date - day);

  return from;
}

function getEndWeek() {
  const today = new Date();

  let day = today.getDay() - 1;
  if (day < 0) day = 6;
  const date = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  const toStr = `${year}-${month}`;
  const to = new Date(toStr);
  to.setDate(date + (6 - day));
  return to;
}

module.exports = {
  getStartDay,
  getEndDay,
  getStartWeek,
  getEndWeek,
};
