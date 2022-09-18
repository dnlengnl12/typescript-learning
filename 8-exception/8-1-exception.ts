function readFile(fileName: string): string {
	if (fileName === 'not exist!') {
		throw new Error(`file not exist! ${fileName}`);
	}
	return 'file contents';
}

function closeFile(fileName: string) {
	//
}

const fileName = 'file';
console.log(readFile(fileName));
closeFile(fileName);
