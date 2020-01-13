//Task 1
function convert(...arg) {
    for (let i = 0; i < arg.length; i++) {
        if (typeof arg[i] === 'string') {
            arg[i] = Number.parseInt(arg[i]);
        } else if (typeof arg[i] === 'number') {
            arg[i] = String(arg[i])
        }

    }
    console.log(arg);
}

convert('1', 2, 3, '4', '6');




//2 task

const executeforEach = (arr0, arr1) => {
    let arr = [];
    for (let i = 0; i < arr0.length; i++) {

        arr0[i] = arr1(arr0[i]);
    }
    arr.push(arr1);
}
executeforEach([1, 2, 3], function(el) {
    console.log(el * 2);
})

//task3
let mapArray = (arr0, arr1) => {
    for (let i = 0; i < arr0.length; i++) {
        if (typeof arr0[i] === 'string') {
            arr0[i] = Number(arr0[i]);

        }

    }

    executeforEach(arr0, arr1);

    console.log(arr0);

}

mapArray([2, '5', 8, '7'], function(el) {
    return el + 3
})

//8 task

function substitute(arr) {


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 30) {
            arr[i] = '*'
        }
    }

    return arr;
}

console.log(substitute([58, 14, 48, 2, 31, 29]))

//task 5

function flipOver(str) {
    const t = [];


    for (let i = str.length; i >= 0; i--) {

        t.push(str[i]);

    }
    const z = t.join('');
    console.log(z);
}

flipOver('hey world');




//task 6

function makeListFromRange([a, b]) {
    let t = [a];
    while (a < b) {
        a++;
        t.push(a);
    }
    console.log(t);
}

makeListFromRange([2, 7]);


//task4
let filterArray = (arr0, arr1) => {
    let arr2 = [];
    for (let i = 0; i < arr0.length; i++) {
        if (arr0[i] % 2 === 0) {
            arr2.push(arr0[i])
        }
    }


    executeforEach(arr0, arr1);

    console.log(arr2);

}

filterArray([2, 5, 8, 9, 10], function(el) {
    return el % 2 === 0
})

//task7

const actors = [{
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];


function getArrayOfKeys(actors) {
    const r = [];
    for (let t of actors) {
        r.push(t.name);
    }
    console.log(r);
}

getArrayOfKeys(actors, 'name');

//task10
function formatDate(date) {




    const hours = date.getHours();
    const minutes = date.getMinutes();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();


    console.log(`${year}/${month}/${day} ${hours}:${minutes}`);
}

formatDate(new Date('2019-01-27T01:10:00'));
formatDate(new Date());




//task9

function getPastDay(date, daysminus) {
    const date1 = new Date(date.getTime());
    date1.setDate(date1.getDate() - daysminus);
    console.log(date1.getDate())
}
const date = new Date(2019, 0, 2);
getPastDay(date, 2);