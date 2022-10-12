// Weighted Graph Class

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2, weight){
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    Dijkstra(start, end) { //A, E
        const distances = {}; //Set each key to be every vertex in the adjacencyList with value infinity, start = 0
        const previous = {}; //Mark which vertices have been explored from
        const path = []; //Designates the outcome to show the fastest path (Returned at the end)
        const nodes = new PrioQueue(); //Create node for PriorityQueue
        for (let node in this.adjacencyList) { //For each vertiex...
            if (node === start) { //If the vertex is equaal to the start input
                distances[start] = 0; //TWe add it to the distances with the value of 0
                nodes.enqueue(node, 0); //We add the start to the nodes queue and give it a priority of 0
            } else { //Otherwise
                distances[node] = Infinity; //We add it to the distances with a value of infinity
                nodes.enqueue(node, Infinity); //We add it to the nodes queue and give it a priority of infinity
            }
            previous[node] = null; //We make sure that all of the values in the previous object are null
        }
        while (nodes.values.length) { //While there is a length to the priority queue
            let smallest = nodes.dequeue().val; //We remove the first vertex and make it a variable
            if (smallest === end) { //If the vertex we removed was equal to the end input
                while (previous[smallest]) { //While there is a smallest value recorded in previous
                    path.push(smallest); //We push it into the path
                    smallest = previous[smallest]; //And the smallest is now equal to the one before (leads from end to start)
                }
                path.push(start); //We unshift the starting vertex to the path
                return path.reverse(); //Then return the path in the correct order
            }
            for (let neighbor in this.adjacencyList[smallest]) { //For each neighbor of the smallest node
                let accumulatedNode = this.adjacencyList[smallest][neighbor]; //Create variable for the neighbor
                let accumulatedWeight = distances[smallest] + accumulatedNode.weight; //Accumulate priority value
                let nextNode = accumulatedNode.node; //Create a variable to lead to the neighbors neighbors
                if (accumulatedWeight < distances[nextNode]) { //If the new weight is less than the previous
                    distances[nextNode] = accumulatedWeight; //The new distance is saved in distances
                    previous[nextNode] = smallest; //The current smallest becomes the new previous for the next node
                    nodes.enqueue(nextNode, accumulatedWeight); //We add the node into the priority with the updated priority value
                }
            }
        }
    }
}

class PrioQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new DijkstrasNode(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            console.log(this.values[idx], parent);
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class DijkstrasNode {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

var graph2 = new WeightedGraph()
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addVertex("E");
graph2.addVertex("F");
graph2.addVertex("G");

graph2.addEdge("A","B", 4);
graph2.addEdge("A","C", 3);
graph2.addEdge("A","D", 7);
graph2.addEdge("B","D", 1);
graph2.addEdge("B","F", 4);
graph2.addEdge("C","E", 5);
graph2.addEdge("D","E", 2);
graph2.addEdge("D","F", 2);
graph2.addEdge("D","G", 7);
graph2.addEdge("E","G", 2);
graph2.addEdge("F","G", 2);

let newPrio = new PrioQueue();

// class WeightedGraph {
    //     constructor() {
    //         this.adjacencyList = {}; //Use adjacencyList as an object, like with normal graphs
    //     }
    //     addVertex(vertex) {
    //         if (!this.adjacencyList[vertex]) {
    //             return this.adjacencyList[vertex] = [];
    //         }
    //     }
    //     addEdge(vertex1, vertex2, weight) {
    //         this.adjacencyList[vertex1].push({ node: vertex2, weight }) //Instead of a normal grapg, we apply a weight
    //         this.adjacencyList[vertex2].push({ node: vertex1, weight }) //as a value in an object, when pushing the edge
    //     } //Between the two vertices
    //     Dijkstra(start, end) { //A, E
    //         const distances = {}; //Set each key to be every vertex in the adjacencyList with value infinity, start = 0
    //         const previous = {}; //Mark which vertices have been explored from
    //         const path = []; //Designates the outcome to show the fastest path (Returned at the end)
    //         const nodes = new PrioQueue(); //Create node for PriorityQueue
    //         for (let node in this.adjacencyList) { //For each vertice...
    //             if (node === start) { //If the vertex is equaal to the start input
    //                 distances[start] = 0; //TWe add it to the distances with the value of 0
    //                 nodes.enqueue(node, 0); //We add the start to the nodes queue and give it a priority of 0
    //             } else { //Otherwise
    //                 distances[node] = Infinity; //We add it to the distances with a value of infinity
    //                 nodes.enqueue(node, Infinity); //We add it to the nodes queue and give it a priority of infinity
    //             }
    //             previous[node] = null; //We make sure that all of the values in the previous object are null
    //         }
    //         while (nodes.values.length) { //While there is a length to the priority queue
    //             let smallest = nodes.dequeue().val; //We remove the first vertex and make it a variable
    //             if (smallest === end) { //If the vertex we removed was equal to the end input
    //                 while (previous[smallest]) { //While there is a smallest value recorded in previous
    //                     path.push(smallest); //We push it into the path
    //                     smallest = previous[smallest]; //And the smallest is now equal to the one before (leads from end to start)
    //                 }
    //                 path.push(start); //We unshift the starting vertex to the path
    //                 return path.reverse(); //Then return the path in the correct order
    //             }
    //             for (let neighbor in this.adjacencyList[smallest]) { //For each neighbor of the smallest node
    //                 let accumulatedNode = this.adjacencyList[smallest][neighbor]; //Create variable for the neighbor
    //                 let accumulatedWeight = distances[smallest] + accumulatedNode.weight; //Accumulate priority value
    //                 let nextNode = accumulatedNode.node; //Create a variable to lead to the neighbors neighbors
    //                 if (accumulatedWeight < distances[nextNode]) { //If the new weight is less than the previous
    //                     // console.log(nodes, accumulatedNode, nextNode, accumulatedWeight);
    //                     distances[nextNode] = accumulatedWeight; //The new distance is saved in distances
    //                     previous[nextNode] = smallest; //The current smallest becomes the new previous for the next node
    //                     nodes.enqueue(nextNode, accumulatedWeight); //We add the node into the priority with the updated priority value
    //                 }
    //             }
    //         }
    //     }
    // }
    
    
    // let graph = new WeightedGraph();
    // graph.addVertex('A');
    // graph.addVertex('B');
    // graph.addVertex('C');
    // graph.addVertex('D');
    // graph.addVertex('E');
    // graph.addVertex('F');
    // graph.addEdge('A', 'B', 4);
    // graph.addEdge('A', 'C', 2);
    // graph.addEdge('C', 'D', 2);
    // graph.addEdge('C', 'F', 4);
    // graph.addEdge('D', 'F', 1);
    // graph.addEdge('D', 'E', 3);
    // graph.addEdge('F', 'E', 1);
    // graph.addEdge('B', 'E', 3);
    
    // class PrioQueue {
    //     constructor() {
    //         this.values = [];
    //     }
    //     enqueue(val, priority) {
    //         this.values.push({ val, priority }); //We are enqueing the value and the edge weight as priority
    //         this.sort(); //Then, after pushing it to the end, we resort it to position it in the queue based on the weight so we can dequeue it at the appropriate time 
    //     };
    //     dequeue() {
    //         return this.values.shift(); //Every time we dequeue, it will give whatever has the lowest priority
    //     }
    //     sort() {
    //         this.values.sort((a, b) => a.priority - b.priority); //We write a function to sort through the values of the edge weight (priority)
    //     };
    // }



