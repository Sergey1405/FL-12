function isLeapYear(m) {
    const divider = 4;
    const divider1 = 100;
    let date = new Date(m);
    let year = date.getFullYear();

    if (date === isNaN) {
        console.log('invalid Date')
    } else if (year % divider === 0 || year % divider1 !== 100) {
        return 'The year is leap'
    } else {
        return 'The year is not leap'
    }
}

console.log(isLeapYear('2020-01-01 00:00:00'))