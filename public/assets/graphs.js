//Graphs

class Graph {
    constructor() {
        this.adjacencyList = {}
    }
    addVertex(keyName) {
        if (!this.adjacencyList[keyName]) {
            return this.adjacencyList[keyName] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2].push(vertex1)
            this.adjacencyList[vertex1].push(vertex2)
        } else return undefined;
    }
    removeEdge(v1, v2) {
        let v1List = this.adjacencyList[v1];
        let v2List = this.adjacencyList[v2];
        let v1End = v1List.length - 1;
        let v2End = v2List.length - 1;
        for (let i = 0; i < v1End + 1; i++) {
            if (v1List[i] === v2) {
                let temp = v1List[i];
                v1List[i] = v1List[v1End];
                v1List[v1End] = temp;
                v1List.pop();
            }
        }
        for (let i = 0; i < v2End + 1; i++) {
            if (v2List[i] === v1) {
                let temp = v2List[i];
                v2List[i] = v2List[v2End];
                v2List[v2End] = temp;
                v2List.pop();
            }
        }
        return this.adjacencyList;
    }
    removeVertex(vertex) {
        const vertexList = this.adjacencyList[vertex].length //Create a variable for the length of the vertex array
        for (let i = 0; i < vertexList; i++) {//Loop through the whole array of the vertex
            const adjacentVertex = this.adjacencyList[vertex].pop(); //Remove each of the elements winthin the array as a variable to call upon (When Removing)
            this.removeEdge(adjacentVertex, vertex); //Call to remove all instances of the vertex from each element within it
        }
        delete this.adjacencyList[vertex]; //Delete the vertex as a whole (Rather than leavign an empty array)
    }
    dfsRecursive(firstVertex) {
        const result = []; //Create an array to return the results
        const visited = {}; //Create an object to store the values we have already explored
        const adjacencyList = this.adjacencyList; //Create a variable to call on our adjacencylist so it can be used due to this being different in our helper function

        let helper = (vertex) => { //Make a helper function
            if (!vertex) return null; //If there is no vertex, retun null
            visited[vertex] = true; //Pushes the vertex into the object with the value true
            result.push(vertex); //Pushes the vertex into the array
            adjacencyList[vertex].forEach(adjVertex => { //For each neighbor to the vertex
                if (!visited[adjVertex]) { //If we do not have it in the visited object
                    return helper(adjVertex) //Return the function with the vertex that wasn't visited
                }
            })
        }

        helper(firstVertex) //Call the helper function with the first vertex we input
        return result; //return the result of all vertices
    }
    dfsIterative(start) {
        const stack = []; //Create a stack simulator using an array
        const result = []; //Create an array to return the results
        const visited = {}; //Create an object to store the values we have already explored
        const adjacencyList = this.adjacencyList; //Create a variable to call on our adjacencylist so it can be used due to this being different in our helper function
        stack.push(start); //Push the input variable into the stack
        while (stack.length) { //While the stack is not empty
            let vertex = stack.pop(); //Create a variable to be the last element in which we are taking from the stack
            if (!visited[vertex]) { //If the vertex we popped from stack isn't in the visited object
                visited[vertex] = true; //We put it in the visited object as true
                result.push(vertex); // We push the vertex into the result array
                adjacencyList[vertex].forEach(neighbor => { // For eaach adjacent element to that vertex
                    if (!visited[neighbor]) { //If it is not in the visited object
                        stack.push(neighbor); //We push it onto the stack
                    }
                })
            }
        }
        return result; //Return the result
    }
    bfs(start) {
        const queue = []; //Make an array for the queue
        const result = []; //Make an array to return the values for
        const visited = {}; //Make an object to keep track of what we have visited
        const adjacencyList = this.adjacencyList; //Create a variable for this.adjacencyList (not needed)
        queue.push(start); //Push the input into the queue
        visited[start] = true; //Mark our input as visited
        while (queue.length) { //While the queue isn't empty
            let vertex = queue.shift(); //Create a variable to remove the first element (dequeue the queue array)
            result.push(vertex); //Push the value of the variable into the result array
            adjacencyList[vertex].forEach(neighbor => { //While the neighbors of the dequeued vertex
                if (!visited[neighbor]) { //If we run into one that hasn't been "visited"
                    visited[neighbor] = true; //Mark it as visited
                    queue.push(neighbor); //Push the vertex marked as true into the queue
                }
            })
        }
        return result; //Return the array with all of the vertices
    }
}

let myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');
myGraph.addVertex('E');
myGraph.addVertex('F');
myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
myGraph.addEdge('B', 'D');
myGraph.addEdge('C', 'E');
myGraph.addEdge('D', 'E');
myGraph.addEdge('D', 'F');
myGraph.addEdge('E', 'F');

// myGraph.addVertex('Dallas');
// myGraph.addVertex('Tokyo');
// myGraph.addVertex('Aspen');
// myGraph.addVertex('Ohio');
// myGraph.addVertex('Rome');
// myGraph.addEdge('Dallas', 'Tokyo');
// myGraph.addEdge('Dallas', 'Aspen');
// myGraph.addEdge('Dallas', 'Rome');
// myGraph.addEdge('Aspen', 'Rome');
// myGraph.addEdge('Ohio', 'Rome');
// myGraph.addEdge('Tokyo', 'Ohio');









// removeVertex(vertex) {
    //     while (this.adjacencyList[vertex].length) {
    //         const adjacentVertex = this.adjacencyList[vertex].pop();
    //         this.removeEdge(vertex, adjacentVertex);
    //     }
    //     delete this.adjacencyList[vertex];
    // }