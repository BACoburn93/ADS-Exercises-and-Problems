// let stack = [];

// stack.push('Google');
// stack.push('Instagram');
// stack.push('YouTube');
// console.log(stack); //Google, Instagram, YouTube
// stack.pop();
// console.log(stack); //Google, Instagram
// stack.pop();
// stack.pop();

//This will emulate a stack because you are adding and taking out at the end of the array
//We can also use shift and unshift

// stack.unshift('Created new file');
// stack.unshift('Resized file');
// stack.unshift('Cloned out wrinkle'); 
// console.log(stack); // Created new file, Resized file, Cloned out wrinkle
// stack.shift(); 
// console.log(stack); //Resized file, Cloned out wrinkle
// stack.shift();
// stack.shift();

//This method also works because we are altering it from the beginning in both cases
//Shift and Unshift are less efficient, because they cause the rest of the array to be reindexed

//Writing Our Own Stack 

class stackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    push(value) { //Despite being push, it puts the new node at the beginning (It is a stack)
        const newNode = new stackNode(value); //creates a variable for the created node
        if (this.length === 0) { //If the list is empty, the list first and last is newNode
            this.first = newNode;
            this.last = newNode;
        } else { //Otherwise...
            const stackVar = this.first; //Cretate a variable to use for the stack 
            this.first = newNode; //Set the first node of the list to be the newNode
            this.first.next = stackVar; //Have the node after the newly created node be the one from the stack
        }
        this.length++;
        return newNode;
    }
    pop() {  //Despite being pop this removes from the beginning of the list (It is a stack)
        if (!this.first) return null; //Return null if the list is empty
        const temp = this.first; //Create a variable to call back on
        if (this.length === 1) { //If there is only one element, this.last is also null
            this.first = null;
            this.last = null;
        } else { //Otherwise, 
            this.first = temp.next; //the first element becomes the element after temp
        }
        this.length--; //Decrememnt the length
        return temp; //Return the node that was removed
    }
}

let stackList = new Stack();
stackList.push(99);
stackList.push(88);
stackList.push(77);
stackList.push(66);
stackList.push(55);
stackList.push(44);
stackList.push(33);

//Queues
//Queue Classes

class QueueNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    enqueue(val) {
        const newNode = new QueueNode(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.length;
    }
    dequeue() {
        if (!this.first) return null;
        const queue = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.length--;
        return queue;
    }
}

let queue = new Queue();
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(9);
queue.enqueue(12);
queue.enqueue(15);


//Making a queue with an Array

let q = [];

q.push('FIRST');
q.push('SECOND');
q.push('THIRD');

q.shift(); //Removes FIRST
q.shift(); //Removes SECOND
q.shift(); //Removes THIRD

//HOWEVER, this can be inefficient since removing from the beginning will reindex everything

q.unshift('FIRST');
q.unshift('SECOND');
q.unshift('THIRD');

q.pop(); //Removes FIRST
q.pop(); //Removes SECOND
q.pop(); //Removes THIRD

//HOWEVER, every time we unshift, we are reindexing so this is also less efficient
//This is why it is more efficient to use Classes, so that we may use queues to push/pop