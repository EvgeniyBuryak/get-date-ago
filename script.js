let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365));

function getDateAgo(date, days) {

    date.setDate(date.getDate() - days);
    let result = date.getDate();

    date.setDate(result + days);
    return result;
}

alert(date);