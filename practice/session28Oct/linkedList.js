

class Node{
    constructor(value){
        this.data = value;
        this.next = null;
    }

    // insertion of node at front
    // insertionAtFront(value){
    //     this.data = value;
    //     this.next = head;
    //     head = this
    // }

    // // insertion of node at last
    // insertionAtLast(value){
    //     let curr = head;
    //     while(curr.next != null){
    //         curr = curr.next;
    //     }
    //     this.data = value
    //     curr.next = this;
    // }
}

class linkedList{
    constructor(head = null){
        this.head = head;
    }
    insertionAtFront(value){
        this.data = value;
        this.next = head;
        head = this
    }
}

// let node = new Node(4)
let newLL = new linkedList()
insertionAtFront(5);
// insertionAtFront(10);
// insertionAtLast(2)
console.log(newLL)