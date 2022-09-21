//Data Structures - Singly Linked List

class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.score = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return `${this.firstName} ${this.lastName} is expelled!`
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} time(s).`
    }
    addScore(score) {
        this.scored.push(score);
        return this.scores;
    }
    calculateAverage() {
        let sum = this.scores.reduce(function (a, b) { return a + b })
        return sum / this.scores.length;
    }
    static enrollStudents() {
        return 'Enrolling Students!'
        //Must use the class name instead of the individual variable created using the class structure to call the static function
        //Student(enrollStudents)
    }
}

let firstStudent = new Student('Colt', 'Steele', 3);
let secondStudent = new Student('Blue', 'Steele', 2);
let thirdStudent = new Student('Brandon', 'Coburn', 4);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

//Singly Linked Lists

// Piece of data - val
// reference next nnode - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//Singly Linked List

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }
    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop() {
        let currTail = this.head; //Create a variable for the last node
        let newTail = currTail; //Create a variable for the next to last node
        if (!this.head) {
            return undefined;
        }
        while (currTail.next) { //While there is a next following currTail (Until we reach the end)
            newTail = currTail; //Move the newTail up to currTail
            currTail = currTail.next; //Move the currTail up to the next newTail
        }
        this.tail = newTail; //Now that we've reached the end, make the tail the value of the newTail
        this.tail.next = null; //Make the node following the newTail (The one we want to remove) null
        if (this.length > 0) { //Prevents popping the list into the negatives
            this.length--; //declare the length of the list to be one less
        }
        if (this.length === 0) { //Pops if there is only one node in the list
            this.head = null;
            this.tail = null;
        }
        return currTail; //return the node that was removed
    }
    shift() {
        if (!this.head) return undefined; //If it is empty, return undefined
        let headToDel = this.head; //Creates a variable so that current this.head to be a removable variable
        let deletedHead = headToDel; //Creates a variable to return
        this.head = headToDel.next; //Sets this.head to be the next node
        headToDel = null; //Removes the removable this.head
        this.length--; //Decrements length to watch the new length
        if (this.length === 0) { //Removes the tail value as well
            this.tail = null;
        }
        return deletedHead; // Returns the element that was removed
    }
    unshift(val) {
        let value = new Node(val); //Use a variable to create a new Node
        let nextHead = this.head; //Creates a variable to store the current head
        if (!this.head) { //Sets the head and tail to be the new Node if the SLL was empty
            this.head = value;
            this.tail = this.head;
        } else {
            this.head = value; //The new head is the new Node
            this.head.next = nextHead; //The head following the new head is the previous head
        }
        this.length++; //Increment the length
        return value; //Return the new Node created
    }
    get(index) {
        if (index < 0 || index >= this.length) return null; //We don't want our input to not have a value for SLL
        let current = this.head; //We target the head with a variable to traverse from
        let count = 0; //We use this to bind the while loop to our index input
        while (count !== index) { //While count is not equal to index
            current = current.next; //We make curremt equal the next value
            count++; //We incrememnt count (To keep it matching our index and to prevent infinite looping)
        }
        return current; //We return where curremmt is
    }
    set(index, val) {
        let node = this.get(index); //Create a variable for selected node (The one we select with get)
        if (this.get(index) === null) { //If this function returns null, this returns false
            return false;
        }
        node.val = val; //Change the value of val to equal the val from the set function argument
        return true; //Return true when the code runs
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false; //If the index is less than 0 or greater than length, return false
        if (index === 0) { //If the index is 0, add the new node to the beginning
            this.unshift(val);
            return true;
        }
        if (index === this.length) { // If the index equals the length of the list, add it to the end
            this.push(val);
            return true;
        }

        let prevNode = this.get(index - 1); //Create a variable for the previous node
        let currNode = this.get(index); //Create a variable for the node to be inserted into
        let newNode = new Node(val); //Create a variable for a new node
        prevNode.next = newNode; //The precious nodes next node value is the newly created node
        newNode.next = currNode; //The node following the new node is the node in which our index is being inserted
        length++; //Incrememnt the length by one
        return true; //Return true
    }
    remove(index) {
        if (index < 0 || index > this.length - 1) return undefined; //If the index is less than 0 or greater than length - 1, return undefined
        if (index === 0) return this.shift();  //If the index is 0, remove the first node
        if (index === this.length - 1) return this.pop(); // If the index equals the length of the list - 1, remove the last node

        let prev = this.get(index - 1); //Create a variable for the previous node
        let removedNode = this.get(index); //Create a variable for the node to be removed
        prev.next = removedNode.next; //Have the next value of the previous node equal the next value of the current node
        length--; //Decrement the ;ength by one
        return removedNode; //Return the node that was removed
    }
    reverse() {
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

// Swap the head and tail
// Create a variable called next
// Create a variable called prev
// Create a variable called node and initialize it to the head property
// Loop through the list
// Set next to be the next property on whatever node is
// Set the next property on the node to be whatever prev is
// Set prev to be the value of the node variable
// Set the node variable to be the value of the next variable






let list = new SinglyLinkedList();
list.push(39);
list.push(49);
list.push(59);
list.push(69);
list.push(79);





