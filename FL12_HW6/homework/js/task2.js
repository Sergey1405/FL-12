let a = prompt('Value a', '');
let b = prompt('Value b', '');
let c = prompt('Value c', '');



if (a === '' || a === undefined || b === '' || b === undefined || c === '' || c === undefined) {
    console.log('input values should be ONLY numbers');
} else if (a === 0 || b === 0 || c === 0) {
    console.log('A triangle must have 3 sides with a positive definite length ')
} else if (a + b <= c || c + b <= a || c + a <= b) {
    console.log('Triangle doesn’t exist')
} else if (a === b && b === c) {
    console.log('equivalent')
} else if (a === b || b === c || c === a) {
    console.log('	isosceles')
} else if (a !== b && b !== c && c !== a) {
    console.log('Scalene triangle')
}
