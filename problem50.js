/* 
	https://projecteuler.net/problem=50

	Consecutive prime sum
	
	The prime 41, can be written as the sum of six consecutive primes:
	
	41 = 2 + 3 + 5 + 7 + 11 + 13
	This is the longest sum of consecutive primes that adds to a prime below one-hundred.
	The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.
	
	Which prime, below one-million, can be written as the sum of the most consecutive primes?

	*/


/* 
Search for prime factor method
 */
const consecutivePrimeSum = (sum) => {

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
	sumOfPrimes = 2;
	let i = 3
	while (sumOfPrimes < sum) {
		if (isPrime(i, primes)) {
			primes.push(i);
			sumOfPrimes += i;
			console.log(i, sumOfPrimes);
		}
		i++;
	}
	
	indexOfLastPrimeInSum = primes.length - 2
	sumOfPrimes -= primes[indexOfLastPrimeInSum + 1];
	const maxFactorOfSum = Math.floor(Math.sqrt(sumOfPrimes));

	for (let i = primes[indexOfLastPrimeInSum] + 1; i <= maxFactorOfSum; i++) {
		if (isPrime(i, primes)) {
			primes.push(i);
		}
		i++;
	}

	i = indexOfLastPrimeInSum;
	while (!isPrime(sumOfPrimes, primes)) {
		console.log(i, sumOfPrimes);
		sumOfPrimes -= primes[i]
		i--
	}
	console.log(primes, i + 1)
	return sumOfPrimes
}

const sum = 1000;
const start = performance.now();
// const result = maxPrimeFactor(600851475143);
const result = consecutivePrimeSum(sum);
const duration = performance.now() - start;
console.log();
console.log(`Longest consecutive prime sum below ${sum}:`, result);
console.log('Duration:', Math.round(duration / 1000), 'sec');

/*
Nem jó a megolds, mert a prímeket a legelejétől adtam össze,
de a feladat csak annyit ír, hogy egymás utáni prímeket kell összeadni, azt nem, hogy melyikkel kezdődjön.

A helyes megoldási módszer az lenne, hogy a legnagyobb 1.000.000 alatti prímtől visszafelé összegeket képzünk és azokat vizsgáljuk, hogy prím-e
*/
