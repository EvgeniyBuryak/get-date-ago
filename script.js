let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365));

function getDateAgo(date, days) {
    let saveDate = date.toString().split(' '); // Fri Jan 02 2015 00:00:00 GMT+0600 (Novosibirsk Standard Time)
    
    date.setDate(date.getDate() - days);
    let result = date.getDate();

    // Перевод из строки в формат числа
    let months = ["Jan", "Feb", "Mart", "Apr", "Jun", "Jul", "и т.д.","Dec"];
    for (let i = 0; i < months.length - 1; i++) {
        if (saveDate[1] != months[i]) {
            continue;
        }
        saveDate[1] = i;
    }

    date = new Date(new Date(+saveDate[3], +saveDate[1], +saveDate[2]));
    //date.setDate(result + days);
    return result;
}

alert(date);