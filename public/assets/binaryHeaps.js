//Binary Heaps

class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    insert(value) {
        this.values.push(value) //Push the value to the end of the array
        let index = this.values.length - 1; //Create a variable to index the value
        let parentIndex = Math.floor((index - 1) / 2); //Create a variable to index the parent of the index
        while (this.values[parentIndex] < this.values[index]) { //While the parent is less than the value
            let temp = this.values[parentIndex]; //Swap method
            this.values[parentIndex] = this.values[index];
            this.values[index] = temp;
            index = parentIndex; //We update index to be where the parentIndex was
            parentIndex = Math.floor((index - 1) / 2); //We update the new parentIndex to be where the parent of the index would be
        }
    }
    ExtractMax() {
        let max = this.values[0]; //Create a variable for the root
        let min = this.values[this.values.length - 1]; //Create a variable for the last element of the array
        let index = 0; //Creae a starting index value
        let leftIdx = index * 2 + 1; //Create a variable for the left child value
        let rightIdx = index * 2 + 2; //Create a variable for the right child value

        this.values.shift(); //First, remove the root element
        this.values.unshift(min); //Then, place a copy of the last element as the new root
        this.values.pop(); //Then, emove the last element

        while (true) {
            if (this.values[index] < this.values[leftIdx] || this.values[index] < this.values[rightIdx]) {
                if (this.values[leftIdx] > this.values[rightIdx] || !this.values[rightIdx]) {
                    let temp = this.values[index]; //Create a variable for the indexed value 
                    this.values[index] = this.values[leftIdx]; //Change the indexed value to be the left child
                    this.values[leftIdx] = temp; //Have the left child equal the original indexed value
                    index = leftIdx; //Change index to be where the left child node was
                    leftIdx = index * 2 + 1; //Set leftIndex to be the new left child node
                    rightIdx = index * 2 + 2; //Set right Index to be the new right child node
                } else if (this.values[rightIdx] > this.values[leftIdx] || !this.values[leftIdx]) {
                    let temp = this.values[index]; //Create a variable for the indexed value 
                    this.values[index] = this.values[rightIdx]; //Change the indexed value to be the right child
                    this.values[rightIdx] = temp; //Have the right child equal the original indexed value
                    index = rightIdx; //Change index to be where the right child node was
                    leftIdx = index * 2 + 1; //Set rightIndex to be the new right child node
                    rightIdx = index * 2 + 2; //Set left Index to be the new left child node
                } else {
                    return max; //Return the value that was removed from the heap
                }
            } else {
                return max; //Return thevalue that was removed from the heap
            }
        }
    }
}

// Swap the first value in the values property with the last one
// Pop from the values property, so you can return the value at the end
// Have the new root “sink down” to the correct spot…
//      Your parent index starts at 0 (the root)
//      Find the index of the left child: 2 * index + 1 (make sure it’s not out of bounds)
//      Find the index of the right child: 2 * index + 2 (make sure it’s not out of bounds)
//      If the left or right child is greater than the element…swap. If both left and right children are larger, swap with the largest child.
//      The child index you swapped to now becomes the new parent index.
//      Keep looping and swapping until neither child is larger than the element.
//      Return the old root!

//Visualized Max Binary Heap

//       55
//     /    \
//   39      41
//  /  \    /  \
// 18  27  12  33

const maxHeap = new MaxBinaryHeap;
maxHeap.insert(55);

//Priority Queue

class pqNode {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new pqNode(val, priority);
        let queue = this.values;
        queue.push(newNode)
        let index = queue.length - 1;
        let parentIndex = Math.floor((index - 1) / 2);
        while (index > 0) {
            if (queue[parentIndex].priority < queue[index].priority) break;
            let temp = queue[parentIndex];
            queue[parentIndex] = queue[index];
            queue[index] = temp;
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }
    //Need to fix where dequeue doesn't read priority and doesn't return the removed element (Using console.log to emulate the removed element, currently)
    //The function does still work, however
    dequeue() {
        let queue = this.values;
        let min = queue[0];
        let max = queue[queue.length - 1];
        let index = 0;
        let leftIdx = index * 2 + 1;
        let rightIdx = index * 2 + 2;

        console.log(min);

        queue.shift();
        queue.unshift(max);
        queue.pop();

        while (index < queue.length) {
            if (queue[index].priority >= queue[leftIdx].priority ||
                queue[index].priority >= queue[rightIdx].priority) {
                if (queue[leftIdx].priority <= queue[rightIdx].priority || !queue[rightIdx]) {
                    let temp = queue[index];
                    queue[index] = queue[leftIdx];
                    queue[leftIdx] = temp;
                    index = leftIdx;
                    leftIdx = index * 2 + 1;
                    rightIdx = index * 2 + 2;
                } else if (queue[rightIdx].priority <= queue[leftIdx].priority || !queue[leftIdx]) {
                    let temp = queue[index];
                    queue[index] = queue[rightIdx];
                    queue[rightIdx] = temp;
                    index = rightIdx;
                    leftIdx = index * 2 + 1;
                    rightIdx = index * 2 + 2;
                } else {
                    return min;
                }
            } else {
                return min;
            }
        }
    }
}



let minHeap = new PriorityQueue;
minHeap.enqueue(1, 1);
minHeap.enqueue(22, 2);
minHeap.enqueue(13, 1);
minHeap.enqueue(7, 2);
minHeap.enqueue(41, 3);
minHeap.enqueue(4, 2);
minHeap.enqueue(69, 1);
minHeap.enqueue(18, 3);
minHeap.enqueue(17, 2);
minHeap.enqueue(100, 0);






//  Head                         Tail
// (val0) -> (val1) -> (val3) -> (val4)



