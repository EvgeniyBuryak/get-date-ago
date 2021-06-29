let salaries = {
    "Jhon": 100,
    "Pete": 300,
    "Mary": 250,
};

function topSalary({ ...rest } = {}) { 
    let max = 0;
    let result;
    for (let [key, value] of Object.entries(rest)) {

        if (value > max) {
            max = value;
            result = key;
        }
    }
    if (max == 0) return null;
    return result;
}

alert(topSalary(salaries));
alert(topSalary());