/* 
	https://projecteuler.net/problem=6
	
	The sum of the squares of the first ten natural numbers is,
	The square of the sum of the first ten natural numbers is,
	Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is.
	Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

	*/

const count = (n) => {
	let sumOfSquares = 0;
	const sum = ((n + 1) / 2 * n);
	for (let i = 1; i <= n; i++) {
		sumOfSquares += (i * i);
		console.log(i, i* i, sumOfSquares)
	}
	return Math.abs(sumOfSquares - sum * sum);
}

console.log(count(100));
