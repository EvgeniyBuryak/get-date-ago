let salaries = {
    "Jhon": 100,
    "Pete": 300,
    "Mary": 250,
};

function topSalary(obj) { 
    let max = 0;
    let result;
    for (let [key, value] of Object.entries(obj)) {

        if (value > max) {
            max = value;
            result = key;
        }
    }
    return result;
}

alert(topSalary(salaries));