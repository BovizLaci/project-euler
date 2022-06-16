/* 
	https://projecteuler.net/problem=7

	10001st prime
	
	By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
	What is the 10 001st prime number?

	*/


/* 
Search for prime factor method
 */
const nThPrime = (n) => {

	const isPrime = (value, primesLessThanValue) => {
		let result = true;
		const maxPossible = Math.floor(Math.sqrt(value));
			for (let i = 0; (primesLessThanValue[i] <= maxPossible) && (result); i++) {
				if ((value % primesLessThanValue[i]) === 0) {
					result = false;
				}
			}
		return result;
	}

	const primes = [2];
	let i = 3
	while (primes.length < n) {
		if (isPrime(i, primes)) {
			primes.push(i);
		}
		i++;
	}
	return primes.pop();
}

const nTh = 10001;
const start = performance.now();
// const result = maxPrimeFactor(600851475143);
const result = nThPrime(nTh);
const duration = performance.now() - start;
console.log();
console.log(`${nTh}th prime:`, result);
console.log('Duration:', Math.round(duration / 1000), 'sec');
