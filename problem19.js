/* 
	https://projecteuler.net/problem=19

	How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
	*/

const sundaysOnFirstOfMonth = () => {
	let result = 0;
	const iDate = new Date('Jan 1, 1901 12:00:00');
	for (let y = 1901; y <= 2000; y++) {
		iDate.setFullYear(y);
		for (let m = 1; m <= 12; m++) {
			iDate.setDate(1)
			iDate.setMonth(m);
			if (iDate.getDay() === 0) result++
		}
	}
	return result;
}

const start = performance.now();
const result = sundaysOnFirstOfMonth();
const duration = performance.now() - start;
console.log();
console.log('Sundays fell on the first of the month during the twentieth century:', result);
console.log('Duration:', Math.round(duration / 1000), 'sec');
