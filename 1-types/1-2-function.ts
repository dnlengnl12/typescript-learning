{
	// Javascript
	// function isAdd(num1, num2) {
	// 	return num1 + num2;
	// }

	// Typescript
	function add(num1: number, num2: number): number {
		return num1 + num2;
	}

	function fetchNum(id: string): Promise<number> {
		return new Promise((resolve, reject) => {
			resolve(100);
		});
	}

	function printName(firstName: string, lastName?: string) {
		console.log(firstName);
		console.log(lastName);
	}
	printName('Steve', 'Jobs');
	printName('Steve');

	//Default parameter
	function printMessage(message: string = 'default Message') {
		console.log(message);
	}
	printMessage();

	//Rest parameter
	function addNumbers(...numbers: number[]): number {
		return numbers.reduce((a, b) => a + b);
	}
	console.log(addNumbers(1, 2));
}
