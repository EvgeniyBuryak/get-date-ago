let salaries = {
    "Jhon": 100,
    "Pete": 300,
    "Mary": 250,
};

function topSalary({ ...rest } = {}) { 

    let max = 0;
    let result = null;

    for (let [key, value] of Object.entries(rest)) {

        if (value > max) {
            max = value;
            result = key;
        }
    }
    
    return result;
}

alert(topSalary(salaries));
alert(topSalary());