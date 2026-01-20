/**
 * Problem: Reverse a linked list in groups of given size
 * Link: https://www.geeksforgeeks.org/dsa/reverse-a-linked-list-in-groups-of-given-size-iterative-approach/
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function reverseKGroup(head, k) {
    if (head === null) {
        return head;
    }

    let curr = head;
    let newHead = null;
    let tail = null;

    while (curr !== null) {
        let groupHead = curr;
        let prev = null;
        let nextNode = null;
        let count = 0;

        // Reverse the nodes in the current group
        while (curr !== null && count < k) {
            nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
            count++;
        }

        // If newHead is null, set it to the
        // last node of the first group
        if (newHead === null) {
            newHead = prev;
        }

        // Connect the previous group to the 
        // current reversed group
        if (tail !== null) {
            tail.next = prev;
        }

        // Move tail to the end of the 
        // reversed group
        tail = groupHead;
    }

    return newHead;
}

function printList(head) {
    let curr = head;
    const out = [];
    while (curr !== null) {
        out.push(curr.data.toString());
        curr = curr.next;
    }
    console.log(out.join(" -> "));
}


// Driver Code

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

head = reverseKGroup(head, 3);
printList(head);