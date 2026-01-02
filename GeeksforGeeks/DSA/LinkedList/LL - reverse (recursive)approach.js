// Singly linked list node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Iterative, in-place O(1) extra space
function reverseIterative(head) {
  let prev = null;
  let curr = head;
  while (curr) {               // use `while (curr)` not `while (curr?.data)`
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev; // new head
}

// Recursive solution (uses call stack O(n))
function reverseRecursive(head) {
  if (!head || !head.next) return head; // empty or single node
  const newHead = reverseRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

// Helper to build and print list (for testing)
function toArray(head) {
  const out = [];
  let cur = head;
  while (cur) {
    out.push(cur.data);
    cur = cur.next;
  }
  return out;
}

// Example usage / tests
function test() {
  // build 1 -> 2 -> 3 -> 4
  // const a = new Node(1);
  // const b = new Node(2);
  // const c = new Node(3);
  // const d = new Node(4);
  // a.next = b; b.next = c; c.next = d;

  // console.log('original:', toArray(a));                 // [1,2,3,4]
  // const it = reverseIterative(a);
  // console.log('iterative:', toArray(it));               // [4,3,2,1]

  // rebuild for recursive test
  const p = new Node(1);
  const q = new Node(2);
  const r = new Node(3);
  p.next = q; q.next = r;
  console.log('original small:', toArray(p));           // [1,2]
  const rc = reverseRecursive(p);
  console.log('recursive:', toArray(rc));               // [2,1]

  // edge cases
  // console.log('empty:', toArray(reverseIterative(null))); // []
  // const single = new Node(0);
  // console.log('single:', toArray(reverseRecursive(single))); // [0]
}

test();