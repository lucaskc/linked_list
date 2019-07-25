class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head
		this.length = 1
	}

	append(value) {
		const node = {
			value: value,
			next: null
		}
		this.tail.next = node
		this.tail = node
		//if the list is empty, our new element is going to be the head too
		if(this.head.value === undefined) {
			this.head = node
		}
		this.length++
		return this
	}

	prepend(value) {
		const node = {
			value: value,
			next: this.head
		}
		// if(this.head.next.value) {
		// 	this.tail = node
		// 	this.head.next = null
		// }
		this.head = node
		this.length++
		return this
	}

	returnUndefIfEmpty() {
		if(this.length === 0) {
			return undefined
		}		
	}

	find(value) {
		this.returnUndefIfEmpty()

		let node = this.head
		while(node) {
			if(node.value === value)
				return node 	
			node = node.next
		}
		return undefined
	}

	deleteFromHead() {
		this.returnUndefIfEmpty()

		const value = this.head.value
		if(this.length === 1) {
			const node = {
				value: undefined,
				next: null
			}
			this.head = node
			this.tail = this.head
			this.length--
			return value
		}
		this.head = this.head.next
		this.length--

		return value
	}

	delete(value) {
		this.returnUndefIfEmpty()

		if(this.head.value === value) {
			this.deleteFromHead()
		}

		let previousNode = this.head
		let currentNode = this.head.next
		
		while(currentNode) {
			if(currentNode.value === value) {
				break;
			}
			previousNode = currentNode
			currentNode = currentNode.next
		}

		//if we haven't found the element to be deleted, return undefined
		if(!currentNode) {
			return undefined
		}
		//if our deleting element next node is null, it mean's we've reached the tail of the list, so it must be updated to the previous
		if(!currentNode.next) {
			this.tail = previousNode
		}

		//our previous node should skip our deleted element and point to the next one
		previousNode.next = currentNode.next
		this.length--
		return this
	}
}

//some tests
const linkedList = new LinkedList(10)
// console.log(linkedList)
linkedList.append(2)
linkedList.append(1)
// console.log(linkedList)
// linkedList.prepend(5)
// console.log(linkedList)
// linkedList.prepend(6)
// console.log(linkedList)
// console.log(linkedList.find(10))
// console.log(linkedList.delete(10))
linkedList.delete(10)
linkedList.delete(1)
linkedList.delete(2)
linkedList.prepend(5)
console.log(linkedList)