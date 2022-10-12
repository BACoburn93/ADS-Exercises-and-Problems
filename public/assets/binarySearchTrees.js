//Binary Search Tree and Tree Traversal

class BstNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new BstNode(value);//Create a variable to make a new node
        let insertNode = (node, newNode) => { //Create a recursive function to loop
            if (newNode.value > node.value) { //If newNode is greater than node...
                if (node.right === null) { //And if there is no node.right
                    node.right = newNode; //node.right equals the new node
                } else { //Otherwise...
                    insertNode(node.right, newNode); //Run this function again from the node.right
                }
            } else if (newNode.value < node.value) { //If newNode is less than node...
                if (!node.left) { //If there is no node.left
                    node.left = newNode; // node.left equals the new node
                } else { //Otherwise...
                    insertNode(node.left, newNode); //Run the function using the node.left
                }
            } else { //If the newNode already exists within our tree
                console.log(`${newNode.value} is already inside of the tree!`); //Log an error
                return; //Stop the loop
            }
        }
        if (!this.root) this.root = newNode; //If there is no root, make the new node the root
        else { //Otherwise...
            insertNode(this.root, newNode); //Run the function using the root node
        }
        return this; //Return the tree when the function is complete
    }
    find(value) {
        let temp = this.root; //Set variable for the root and traversing node
        if (!this.root) return false; //If there is no root, return false
        else {
            while (true) { //While nothing is returned
                if (value === temp.value) return true; //If the value is equal to the traversing node return true
                else if (value > temp.value) { //If the value is greater than the traversing node
                    if (!temp.right) { //And there is no right value for the traversing node
                        return false; //Return false
                    }
                    else { //Otherwise, 
                        temp = temp.right; //the traversing node becomes the right value
                    }
                } else { //If the alue is less than the traversing node
                    if (!temp.left) { //If there is no left value for the traversing node
                        return false; //Return false
                    }
                    else { //Otherwise, 
                        temp = temp.left; //The traversing node becomes the left value
                    }
                }
            }
        }
    }
    bfs() {
        let temp = this.root; //Create a variable to declare the shifted node
        let queue = []; //Crete an array to act as a queue line for nodes
        let visited = []; //Create an array to store queued node values
        queue.push(temp); //Star by pushing the root into the queue
        while (queue.length) { //While we have something in the queue
            temp = queue.shift(); //Have temp equal the value of the first node to be shifted from queue
            visited.push(temp.value); //Push the value of the shifed node to our returned array
            if (temp.left) { //If there is a left value from our shifted node...
                queue.push(temp.left); //Push the left value node into the queue
            }
            if (temp.right) { //If there is a right value from our shifted node...
                queue.push(temp.right); //Push the right value node into the queue
            }
        }
        return visited; //Return all of the values from the Binary Search Tree
    }
    dfsPreOrder() {
        let current = this.root; //Create a variable for the root to call with our helper
        let values = []; //Create an empty array to store our values into
        let helper = (node) => { //Helper function
            values.push(node.value); //Push the node value of the node input with the function into values array
            if (node.left) helper(node.left); //If there is a node.left, call this function with that node
            if (node.right) helper(node.right); //If there is a node.right, call this function with that node
        }
        helper(current); //Invoke our helper function
        return values; //Return the array with our preordered values
    }
    dfsPostOrder() {
        let current = this.root; //Create a variable for the root to call with our helper
        let values = []; //Create an empty array to store our values into
        let helper = (node) => { //Helper function
            if (node.left) helper(node.left); //If there is a node.left, call this function with that node
            if (node.right) helper(node.right); //If there is a node.right, call this function with that node
            values.push(node.value); //Push the node value of the node input with the function into values array
        }
        helper(current); //Invoke our helper function
        return values; //Return the array with our preordered values
    }
    dfsInOrder() {
        let current = this.root; //Create a variable for the root to call with our helper
        let values = []; //Create an empty array to store our values into
        let helper = (node) => { //Helper function
            if (node.left) helper(node.left); //If there is a node.left, call this function with that node
            values.push(node.value); //Push the node value of the node input with the function into values array
            if (node.right) helper(node.right); //If there is a node.right, call this function with that node
        }
        helper(current); //Invoke our helper function
        return values; //Return the array with our preordered values
    }
}




const tree = new BinarySearchTree();
tree.root = new BstNode(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


