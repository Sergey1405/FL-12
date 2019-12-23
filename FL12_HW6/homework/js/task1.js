let a = prompt('Value a', '');
let b = prompt('Value b', '');
let c = prompt('Value c', '');
let x1;
let x2;
const t = 2;
const z = 4;

const D = Math.pow(b, t) - z * a * c;


if (isNaN(a) === true || isNaN(b) === true || isNaN(b) === true) {
    console.log('Invalid input data')
} else if (D < 0) {
    console.log('No solutions')
} else if (a === 0 && b === 0 && c === 0) {
    console.log('x also equals 0')
} else {
    x1 = (-b + Math.sqrt(D)) / t * a;
    x2 = (-b - Math.sqrt(D)) / t * a;
    console.log(x1);
    console.log(x2);
}
