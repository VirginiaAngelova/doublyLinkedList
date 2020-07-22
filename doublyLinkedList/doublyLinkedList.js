class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        let current = null;
    }
    add(element) {
        let node = new Node(element)
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            //move the pointer tail
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.print();
    }
    print() {
        let pointer = this.tail;
        while (pointer) {
            console.log(pointer.value);
            pointer = pointer.next;
        }
    }
   printNew() {
        let pointer = this.head;
        while (pointer) {
            console.log(pointer.value);
            pointer = pointer.next;
        }
    }

    addInBegining(element) {
        let node = new Node(element);
        //if there is no nodes
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        console.log("Add  new element in the begining");
        this.printNew();
    }
}
let dll = new DoublyLinkedList();
dll.add("Pesho");
dll.add("Mimi");
dll.add("Ivana");

dll.addInBegining("Mitko");
dll.addInBegining("Filip");
dll.addInBegining("Naty");




/*dll.appendAt(1,"gdg");*/










