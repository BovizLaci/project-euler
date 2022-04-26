function sumOfEvenFibonacciNumbersLessOrEqualThan4million() {
	let fiboNumberPrev = 1; // 1st fibo number
	let fiboNumber = 2; // 2nd fibo number
	let result = 2;
	let order = 0; // Every 3rd fibo numbers is even (2., 5., 8., etc)
	let exceeded = false;
	do {
		const newFiboNumber = fiboNumber + fiboNumberPrev;
		fiboNumberPrev = fiboNumber;
		fiboNumber = newFiboNumber;
		order++;
		if (fiboNumber <= 4000000) {
			if (order === 3) {
				result = result + fiboNumber;
				order = 0;
			}
		} else {
			exceeded = true;
		}
	} while (!exceeded);
	return result;
}

console.log("Result:", sumOfEvenFibonacciNumbersLessOrEqualThan4million());