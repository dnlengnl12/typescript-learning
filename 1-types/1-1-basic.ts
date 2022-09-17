{
	/**
	 * primitive: number, string, boolean, bigint, null, undefined, symbol
	 */

	//number
	const num: number = -6;

	//string
	const str: string = 'hello';

	//boolean
	const boal: boolean = false;

	//undefined
	let age: number | undefined;

	//null
	let person: string | null;

	//unknown
	let notSure: unknown = 0;
	notSure = 'he';
	notSure = true;

	//any
	let anything: any = 0;
	anything = 'hello';

	//void
	function print(): void {
		return;
	}

	//never
	function throwError(message: string): never {
		//message -> server(log)
		throw new Error(message);
	}

	//object
	let obj: object;
	function acceptSomeObject(obj: object) {}
	acceptSomeObject({ name: 'lsh' });
	acceptSomeObject({ animal: 'dog' });
}
