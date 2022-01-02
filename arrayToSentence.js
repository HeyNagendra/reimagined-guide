const celcius = [17, 21, 23, 54, 32, 12, 45, 67, 89, 90, 100];
const celciusArray = [];
// ... 17 degrees celcius in 1 days ... 21 degrees celcius in 2 days ... 23 degrees celcius in 3 days ...
for (let i = 0; i < celcius.length; i++) {
	if (i === celcius.length - 1) {
		celciusArray.push(`... ${celcius[i]} degrees celcius in ${i + 1} days ...`);
		break;
	}
	celciusArray.push(`... ${celcius[i]} degrees celcius in ${i + 1} days`);
}

const celciusString = celciusArray.join(' ');
console.log(celciusString);
