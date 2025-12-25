/**
 * Extra Challenge: SLL - rotate Exercise
Implement the following on the SinglyLinkedList class

rotate

This function should rotate all the nodes in the list by some number passed in. For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.

Time Complexity: O(N), where N is the length of the list.

Space Complexity: O(1)

Examples

(Note: push is implemented to help you test your rotate function)

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(3);
singlyLinkedList.head.val; // 20
singlyLinkedList.head.next.val; // 25
singlyLinkedList.head.next.next.val; // 5
singlyLinkedList.head.next.next.next.val; // 10
singlyLinkedList.head.next.next.next.next.val; // 15
singlyLinkedList.tail.val; // 15
singlyLinkedList.tail.next; // null
var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(-1);
singlyLinkedList.head.val; // 25
singlyLinkedList.head.next.val; // 5
singlyLinkedList.head.next.next.val; // 10
singlyLinkedList.head.next.next.next.val; // 15
singlyLinkedList.head.next.next.next.next.val; // 20
singlyLinkedList.tail.val; // 20
singlyLinkedList.tail.next // null
var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(1000);
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.head.next.next.next.val; // 20
singlyLinkedList.head.next.next.next.next.val; // 25
singlyLinkedList.tail.val; // 25
singlyLinkedList.tail.next // null
 */
class Node {
    constructor(val) {
        this.val = val
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }
    pop() {
        if (!this.head)
            return;
        let current = this.head
          , prevTail = this.head;
        while (current.next) {
            prevTail = current;
            current = current.next;
        }
        this.tail = prevTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head)
            return;
        let currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        let currentVal = new Node(val);
        if (!this.head) {
            this.head = currentVal;
            this.tail = currentVal;
        } else {
            currentVal.next = this.head;
            this.head = currentVal;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index > this.length - 1) {
            return null;
        }
        let iterator = 0;
        let currentVal = this.head;
        while (iterator < index) {
            currentVal = currentVal.next;
            iterator++;
        }
        return currentVal;
    }
    set(index, value) {
        let currentVal = this.get(index);
        if (currentVal) {
            currentVal.val = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        let checkIndex = this.get(index - 1);
        if (!checkIndex) {
            return false;
        }
        if (index === 0) {
            this.unshift(value);
            this.length++;
            return true;
        } else if (index == this.length) {
            this.push(value);
            this.length++;
            return true;
        } else {
            let newNode = new Node(value);
            let iterator = 0;
            let prevVal = this.head;
            while (iterator < index - 1) {
                prevVal = prevVal.next;
                iterator++;
            }
            let currentVal = prevVal.next;
            newNode.next = currentVal;
            prevVal.next = newNode;
            this.length++;
            return true;
        }

    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.shift();
        } else if (index === this.length - 1) {
            return this.pop();
        } else {
            let prevNode = this.get(index - 1);
            let tempNode = prevNode.next;
            prevNode.next = prevNode.next.next;
            this.length--;
            return tempNode;
        }
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next = null;
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    rotate(n) {
        var trueN = ((n % this.length) + this.length) % this.length;
        if (trueN === 0 || this.length < 2)
            return this;
        var count = 0;
        var cur = this.tail;
        this.tail.next = this.head;
        while (count < trueN) {
            cur = cur.next;
            count++
        }
        this.tail = cur
        this.head = cur.next
        this.tail.next = null;
        return this;
    }
    print() {
        let arr = [];
        let node = this.head;
        while (node) {
            arr.push(node.val);
            node = node.next;
        }
        console.log(arr)
    }
}
let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push('1')
singlyLinkedList.push('2')
singlyLinkedList.push('3')
singlyLinkedList.push('4')
singlyLinkedList.push('5')
