function getStartDay() {
    var startDay = new Date();
    startDay.setHours(0);
    startDay.setMinutes(0);
    startDay.setSeconds(0);

    return startDay;
}

function getEndDay() {
    var endDay = new Date();
    endDay.setHours(23);
    endDay.setMinutes(59);
    endDay.setSeconds(59);

    return endDay;
}

function getStartWeek() {
    var today = new Date();
    
    var day = today.getDay()-1; // L'index commence à 0 pour Dimanche
    if (day < 0)
        day = 6;
    var date = today.getDate();
    var month = today.getMonth() + 1; // L'index commence à 0 pour Janvier
    var year = today.getFullYear();

    var fromStr = year + "-" + month;
    var from = new Date(fromStr);
    from.setDate(date-day);

    return from;
}

function getEndWeek() {
    var today = new Date();
    
    var day = today.getDay()-1;
    if (day < 0)
        day = 6;
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    var toStr = year + "-" + month;
    var to = new Date(toStr);
    to.setDate(date+(6-day));
    return to;
}

module.exports = {
    getStartDay,
    getEndDay,
    getStartWeek,
    getEndWeek,
};
