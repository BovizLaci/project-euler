const isPrime = (value, primesLessThanValue) => {
	let result = true;
	const maxPossible = Math.floor(Math.sqrt(value));
	if (primesLessThanValue.length > 0) {
		for (let i = 0; (primesLessThanValue[i] <= maxPossible) && (result); i++) {
			if ((value % primesLessThanValue[i]) === 0) {
				result = false;
			}
		}
	}
	return result;
}

const primesLessThan = (value) => {
	const primes = [];
	for (let i = 2; i <= value; i++) {
		if (isPrime(i, primes)) {
			primes.push(i)
			// console.log(i);
			// process.stdout.write(`${i}, `);
		}
	}
	return primes;
}

const max = 100000000;
const start = performance.now();
// const result = maxPrimeFactor(600851475143);
const result = primesLessThan(max);
const duration = performance.now() - start;
console.log();
console.log('Result:', result, result.length, 'Duration:', duration)
