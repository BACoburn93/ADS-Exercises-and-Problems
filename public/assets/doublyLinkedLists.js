//Data Structures - Doubly Linked List

class DllNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }
    push(val) {
        let newNode = new DllNode(val);
        if (!this.head) { //If empty, return undefined
            this.head = newNode; //Make the new Node but the head and tail
            this.tail = newNode;
        } else { //Otherwise
            this.tail.next = newNode; //Add new node to the end
            newNode.prev = this.tail; //Set prev of new node to be old tail
            this.tail = newNode; //Make new node the new tail
        }
        this.length++; //Increment length
        return this; //Return the doubly linked list
    }
    pop() {
        if (!this.head) return undefined; //If empty, return undefined
        let oldTail = this.tail; //Create vaiable to remove
        let newTail = oldTail.prev; //Create variable for new tail
        // let newTail = oldTail;
        if (this.length === 1) { //If length is 1, remove the node
            this.head = null;
            this.tail = null;
        } else { //Otherwise
            this.tail = newTail //The new tail will be oldTail.prev
            oldTail.prev = null; //Remove access to oldTail.prev from the deleted node
            newTail.next = null; //Remove access to the oldTail from the newTail
        }
        this.length--; //Decrement the length
        return oldTail; //Return the removed node
    }
    shift() {
        if (!this.head) return undefined; //If empty, return undefined
        let oldHead = this.head; //Create variable to store original head
        if (this.length === 1) { //Delete node if it is the only one
            this.head = null;
            this.tail = null;
        } else { //Otherwise
            this.head = oldHead.next; //The head is now the node after head
            oldHead.next = null; //The original head is null
            this.head.prev = null; //We break the link to the original head
        }
        this.length--; //Decrement length
        return oldHead; //Return deleted node
    }
    unshift(val) {
        let newNode = new DllNode(val); //Create a new node using a variable
        if (!this.head) { //If empty, create a new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head; //Have the node after the new node be the current head
            this.head.prev = newNode; //Have the new node be the current heads previous
            this.head = newNode; //Now make the new node the new head
        }
        this.length++; //Increment the length
        return this; //Return the list
    }
    get(index) {
        if (index < 0 || index >= this.length) return null; //If index is out of range, return null
        if (index <= Math.floor(this.length / 2)) { //If index is in first half...
            let count = 0; //Count starts at 0
            let getNode = this.head; //getNode is at the beginning
            while (count <= Math.floor(this.length / 2)) { //While loop for first half
                if (index === count) return getNode; //When index hits count, return the indexed node
                getNode = getNode.next; //Moves the node forward when looping
                count++; //Increments count for our loop
            }
        } else { //If index is in second half...
            let count = this.length - 1;  //Count starts at our lat index for going backwards
            let getNode = this.tail; //getNode is at the end and goes backwards
            while (count > Math.floor(this.length / 2)) { //While loop for second half from the end
                if (index === count) return getNode; //When index hits count, return the indexed node
                getNode = getNode.prev; //Moves the node backwards when looping
                count--; //Decrements count for our loop
            }
        }
    }
    set(index, val) {
        let foundNode = this.get(index); //Create a variable for the index we want
        if (!foundNode) {
            return false; //If there isn't a found Index, return false
        }
        foundNode.val = val; //Change the value of the index to be the value we input
        return true; //Return true
    }
    insert(index, val) {
        if (index < 0 || index >= this.length) return false; //If index is out of range, return false
        if (index === 0) { //If Index is 0, run this.unshift() on the value
            this.unshift(val);
            return true; //return true to stop the function
        }
        if (index === this.length - 1) { //If Index is the last index, run this.psh() on the value
            this.push(val);
            return true; //return true to stop the function
        }

        let newNode = new DllNode(val); //Create a variable for the new node
        let beforeInsert = this.get(index - 1); //Create a variable for node before insertion
        let afterInsert = this.get(index); //Create a variable for node after insertion

        newNode.prev = beforeInsert; //Sets th node before new node to be before the insert
        newNode.next = afterInsert; //Sets th node after new node to be after the insert
        afterInsert.prev = newNode; //Cuts the link from before the insert to the new node
        beforeInsert.next = newNode; //Cuts the link from after the insert to the new node
        this.length++; //Increments length
        return true; //returns true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined; //If index is out of range, return undefined
        if (index === 0) return this.shift(); //If index is 0, remove the first node
        if (index === this.length - 1) return this.pop(); //If index is the last node, remove it

        let nodeToDel = this.get(index); //Create a variable for the node we want to remove
        let beforeNode = this.get(index - 1); //Create a variable for the node before removed node
        let afterNode = this.get(index + 1); //Create a variable for the node after removed node

        beforeNode.next = afterNode; //Have the node before link to the node after the deleted node
        afterNode.prev = beforeNode; //Have the node after link to the node before the deleted node
        nodeToDel.next = null; //Remove the node 
        nodeToDel.prev = null; //Remove the node 

        this.length--; //Decrement the length
        return nodeToDel; //Return the node we removed
    }
    reverse() { //Gonna try to revamp
        let newTail = this.head; //Sets variables to swap the head and tail
        let newHead = this.tail;
        this.tail = newTail;
        this.head = newHead;

        let next = null; //Sets next and prev to default to null
        let prev = null;
        let node = this.tail; //Sets node to be the new tail

        let count = 0; //Used for the while loop

        while (count !== this.length) {
            next = node.next; //Has next equal the value after node
            node.next = prev; //The value after node then becomes previous
            prev = node; //Then, we move previous over to node
            node = next; //And finally we move node over to next (node.next)
            count++;
        }
        return this;
    }
}

let dllList = new DoublyLinkedList;

dllList.push(0);
dllList.push(1);
dllList.push(2);
dllList.push(3);
dllList.push(4);
dllList.push(5);
dllList.push(6);

// (null) <== (1) <===> (2) <===> (3) <===> (4) <===> (5) ==> (null)










