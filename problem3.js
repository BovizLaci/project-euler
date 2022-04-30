/* 
	https://projecteuler.net/problem=3

	The prime factors of 13195 are 5, 7, 13 and 29.

	What is the largest prime factor of the number 600851475143 ?

	import { performance } from '../perf_hooks';

	*/


const isPrime = (value) => {
	let result = true;
	const maxPossible = Math.floor(Math.sqrt(value));
	if (maxPossible >= 2) {
		for (let i = 2; (i <= maxPossible) && (result); i++) {
			if (isPrime(i)) {
				if ((value % i) === 0) {
					result = false;
				}
			}
		}
	}
	return result;
}


const maxPrimeFactor = (value) => {
	const maxPossible = Math.floor(Math.sqrt(value));
	let result = 1;

	for (let i = maxPossible; (i > 1) && (result === 1) ; i--) {
		if (((value % i) == 0) && isPrime(i)) result = i
	}
	return result;
}


const start = performance.now();
const result = maxPrimeFactor(600851475143);
const duration = performance.now() - start;
console.log();
console.log('Result:', result, 'Duration:', duration, 'us');
