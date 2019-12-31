function makeNumber(x) {
    var y = x.replace(/\D/g, '');
    return y;

}


function countNumbers(str) {

    let object = {};
    makeNumber(str).split('').map(c => {
        if (object[c]) {
            object[c] += 1;
        } else {
            object[c] = 1;
        }
		return object[c];
    });
    return object;
}

console.log(countNumbers('erer384jj4444666888jfd123'))