/**
 * 0 -> 1 -> 2 -> 3 -> null
 * set node value based on position.
 * set(2,5) -> 5 
 * 0 -> 1 -> 5 -> 3 -> null
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
    get(index){
        if(index < 0 || index > this.length - 1){
            return null;
        }
        let iterator = 0;
        let  currentVal = this.head;
        while(iterator < index){
            currentVal = currentVal.next;
            iterator++;
        }
        return currentVal;
    }
    set(index, value){
        let currentVal = this.get(index);
        if(currentVal){
            currentVal.val = value;
            return true;
        }
        return false;
    }
}
let list = new SinglyLinkedList();
list.push('Hello')
list.push('Arun')
list.push('kumar')
list.push('!!!')
