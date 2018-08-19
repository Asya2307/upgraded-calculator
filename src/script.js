document.querySelector('.calculate').addEventListener('click', (e) => {
    const value_1 = document.querySelector('.number-1').value;
    const value_2 = document.querySelector('.number-2').value;
    const value_cal = document.querySelector('.operation').value;
    if (value_cal == '+') {
        document.querySelector('.output').innerHTML = +value_1  + +value_2;
    } else if (value_cal == '-') {
        document.querySelector('.output').innerHTML = +value_1  - +value_2;
    } else if (value_cal == '/') {
        document.querySelector('.output').innerHTML = +value_1  / +value_2;
    } else {
        document.querySelector('.output').innerHTML = +value_1  * +value_2;
    }
    document.querySelector('.output').innerHTML = +value_1  + +value_2;
})