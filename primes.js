/* 
Comb method
 */
const primesLessThan2 = (value) => {
	const markPrimes = Array(value + 1).fill(1);
	markPrimes[0] = 0; markPrimes[1] = 0
	const maxPossible = Math.floor(Math.sqrt(value));
	for (let i = 0; i <= maxPossible; i++) {
		if (markPrimes[i] === 1) {
			for (let j = 2*i; j <= value; j = j + i) {
				markPrimes[j] = 0;
			}
		}
	}
	const result = markPrimes.map((item, index) => { if (item === 1) return index}).filter(item => item);
	return result;
}

/* 
Search for prime factor method
 */
const primesLessThan = (value) => {

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
	for (let i = 3; i <= value; i++) {
		if (isPrime(i, primes)) {
			primes.push(i)
			// console.log(i);
			// process.stdout.write(`${i}, `);
		}
	}
	return primes;
}

const max = 500;
const start = performance.now();
// const result = maxPrimeFactor(600851475143);
const result = primesLessThan2(max);
const duration = performance.now() - start;
console.log();
console.log(`Primes until ${max}:`, result);
console.log('Primes:', result.length);
console.log('Prime / Natural ratio:', Math.round(result.length / max * 10000) / 100, '%');
console.log('Duration:', Math.round(duration / 1000), 'sec');
