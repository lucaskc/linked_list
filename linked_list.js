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
		this.length++
		return this
	}

	prepend(value) {
		const node = {
			value: value,
			next: this.head
		}
		this.head = node
		this.length++
		return this
	}

	find(value) {
		let node = this.head
		while(node !== null) {
			if(node.value === value)
				return node 	
			node = node.next
		}
		return undefined
	}

	delete(value) {
		//TODO
	}
}

const linkedList = new LinkedList(10)
console.log(linkedList)
linkedList.append(2)
linkedList.append(1)
console.log(linkedList)
linkedList.prepend(5)
console.log(linkedList)
linkedList.prepend(6)
console.log(linkedList)
console.log(linkedList.find(11))