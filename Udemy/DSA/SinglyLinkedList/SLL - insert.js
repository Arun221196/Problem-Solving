/**
 * insert value at specific index.
 * if index is 0 unshift will be used
 * if need to add at last push will be used
 * 
 * SLL - insert Exercise
Implement the following on the SinglyLinkedList class

insert

This should insert a node at a specified index in a SinglyLinkedList. It should return true if the index is valid, and false if the index is invalid (less than 0 or greater than the length of the list).

Examples

(Note: you don't need to re-implement push, the tests will be provided with it)

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.insert(2,12); // true
singlyLinkedList.insert(100,12); // false
singlyLinkedList.length // 5
singlyLinkedList.head.val // 5
singlyLinkedList.head.next.val // 10
singlyLinkedList.head.next.next.val // 12
singlyLinkedList.head.next.next.next.val // 15
singlyLinkedList.head.next.next.next.next.val // 20
 
singlyLinkedList.insert(5,25); // true
singlyLinkedList.head.next.next.next.next.next.val //25
singlyLinkedList.tail.val // 25

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
    insert(index, value){
        let checkIndex = this.get(index-1);
        if(!checkIndex){
            return false;
        }
        if(index === 0){
            this.unshift(value);
            this.length++;
            return true;
        }
        else if(index == this.length){
            this.push(value);
            this.length++;
            return true;
        }
        else{
            let newNode = new Node(value);
            let iterator = 0;
            let  prevVal = this.head;
            while(iterator < index-1){
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
    insert(index, val){ // better code(optimized)
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}
let singlyLinkedList  = new SinglyLinkedList();
// list.push('Hello')
// list.push('Arun')
// list.push('kumar')
// list.push('!!!')
