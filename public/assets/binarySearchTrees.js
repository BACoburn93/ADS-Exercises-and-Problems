
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
}



const tree = new BinarySearchTree();
tree.root = new BstNode(10);
tree.insert(3);
tree.insert(6);
tree.insert(9);
tree.insert(12);
tree.insert(15);
tree.insert(18);
tree.insert(21);
tree.insert(8);
tree.insert(16);
tree.insert(24);

//Tree Traversal


