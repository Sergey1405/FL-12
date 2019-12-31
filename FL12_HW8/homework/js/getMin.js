function getMin() {
    let k = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (k > arguments[i]) {
            k = arguments[i]
        }
    }
    return k;
}

console.log(getMin(3, 0, -3));