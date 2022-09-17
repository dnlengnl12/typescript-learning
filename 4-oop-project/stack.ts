// {
// 	interface Stack {
// 		readonly length: number;
// 		push(item: string): void;
// 		pop(): string;
// 	}

// 	class Node {
// 		element: string;
// 		next: Node | null;
// 		constructor(element: string) {
// 			this.element = element;
// 			this.next = null;
// 		}
// 	}

// 	class StackImpl implements Stack {
// 		private size: number;
// 		get length() {
// 			return this.size;
// 		}
// 		private head: Node;

// 		constructor() {
// 			this.head = new Node('head');
// 			this.size = 0;
// 		}

// 		private append(item: string) {
// 			const newNode = new Node(item);
// 			let currentNode = this.head;

// 			while (currentNode.next !== null) {
// 				currentNode = currentNode.next;
// 			}

// 			currentNode.next = newNode;
// 			this.size++;
// 		}

// 		private remove() {
// 			let currentNode = this.head;
// 			let previousNode = this.head;
// 			while (currentNode.next !== null) {
// 				previousNode = currentNode;
// 				currentNode = currentNode.next;
// 			}
// 			currentNode = previousNode;
// 			currentNode.next = null;
// 			this.size--;
// 		}

// 		private findLastItem(): string {
// 			let currentNode = this.head;

// 			while (currentNode.next !== null) {
// 				currentNode = currentNode.next;
// 			}

// 			return currentNode.element;
// 		}

// 		push(item: string) {
// 			this.append(item);
// 		}

// 		pop(): string {
// 			if (this.size < 1) {
// 				return '안됨';
// 			}
// 			const item = this.findLastItem();
// 			this.remove();
// 			return item;
// 		}
// 	}
// 	const stack = new StackImpl();
// 	stack.push('hi');
// 	stack.push('hello');
// 	stack.push('world');
// 	stack.push('this');
// 	stack.push('is');
// 	stack.push('Stack!!!');
// 	console.log(stack.length);
// 	console.log(stack.pop());
// 	console.log(stack.pop());
// 	console.log(stack.pop());
// 	console.log(stack.pop());
// 	console.log(stack.pop());
// 	console.log(stack.pop());
// 	console.log(stack.pop());
// 	stack.push('캬~');
// 	console.log(stack.pop());
// 	console.log(stack.length);
// }

{
	interface Stack {
		readonly length: number;
		push(item: string): void;
		pop(): string;
	}

	interface Node {
		value: string;
		next?: Node;
	}

	class StackImpl implements Stack {
		private size: number;
		private head?: Node;

		get length() {
			return this.size;
		}

		constructor() {
			this.size = 0;
		}

		push(item: string) {
			const node: Node = { value: item, next: this.head };
			this.head = node;
			this.size++;
		}
		/**
		 * {1, null} -> {2, {1, null}} -> {3, {2, {1, null}}}
		 *
		 */

		pop() {
			if (this.head == null) {
				throw new Error('Stack is empty!');
			}
			const node = this.head;
			this.head = node.next;
			this.size--;
			return node.value;
		}
	}

	const stack = new StackImpl();
	stack.push('hi');
	stack.push('hello');
	stack.push('world');
	stack.push('this');
	stack.push('is');
	stack.push('Stack!!!');
	console.log(stack.length);
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.pop());
	console.log(stack.pop());
	stack.push('캬~');
	console.log(stack.pop());
	console.log(stack.length);
}
