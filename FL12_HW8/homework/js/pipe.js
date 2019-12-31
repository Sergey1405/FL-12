function addOne(x) {
	return x+1;
}

function pipe(number){
	for (let i = 0; i < arguments.length; i++){
		number = arguments[i](number);
	}
	
	return number;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));