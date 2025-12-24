/**
 * SLL - remove Exercise
Implement the following on the SinglyLinkedList class

remove

This function should remove a node at a specified index in a SinglyLinkedList. It should return the removed node. if the index is valid, or undefined if the index is invalid.

Examples

(Note: you don't need to re-implement push, the tests will be provided with it)

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.remove(2).val; // 15
singlyLinkedList.remove(100); // undefined
singlyLinkedList.length // 3
singlyLinkedList.head.val // 5
singlyLinkedList.head.next.val // 10
singlyLinkedList.head.next.next.val // 20
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
        if(index === 0){
            return this.shift();
        } else if(index === this.length - 1){
            return this.pop();
        } else {
            let prevNode = this.get(index-1);
            let tempNode = prevNode.next;
            prevNode.next = prevNode.next.next;
            this.length--;
            return tempNode;
        }
    }
}
let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push('Hello')
singlyLinkedList.push('Arun')
singlyLinkedList.push('kumar')
singlyLinkedList.push('!!!')
