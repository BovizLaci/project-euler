/* 
	https://projecteuler.net/problem=4
	
	Largest palindrome product

	 palindromic number reads the same both ways.
	 The largest palindrome made from the product
	 of two 2-digit numbers is 9009 = 91 × 99.
	 Find the largest palindrome made from the
	 product of two 3-digit numbers.

	*/


const isPalindrom = (number) => {
	let numStr = number.toString();
	return numStr === numStr.split('').reverse().join('');
}


const largestPalindrom = () => {
	let
		max = 0,
		i, j = 999;

	for (let i = 999; i > 0; i--) {
		for (let j = i; j > 0; j--) {
			if (isPalindrom(i * j) && ((i * j) > max)) {
				max = i * j;
				console.log(i, j, i * j)
				break;
			}
		}
	}
	return max;
}


console.log(largestPalindrom());
