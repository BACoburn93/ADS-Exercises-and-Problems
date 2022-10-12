
//Our Hash Function

function hash(key, arrayLen) {
    let total = 0; //start with a numbered variable to add to
    let WEIRD_PRIME = 31; //Create a variable that is a prime number to refer to
    for (let i = 0; i < Math.min(key.length, 100); i++) { //Limit the looping to 100 (For faster performance)
        let char = key[i]; //Assign a variable to be the array character 0 - 99
        let value = char.charCodeAt(0) - 96; //Assign each character a value a = 1, b = 2 etc.
        total = (total * WEIRD_PRIME + value) % arrayLen; //Make sure that there is always a prime number when assigning the value to reduce collision
    }
    return total; //Return the total
}

//Hash Table Class

class HashTable {
    constructor(size = 53) { //We want the default size to be a prime number
        this.keyMap = new Array(size); //We make a new array of the size nd store it as "keyMap"
    }
    _hash(key) {
        let total = 0; //start with a numbered variable to add to
        let WEIRD_PRIME = 31; //Create a variable that is a prime number to refer to
        for (let i = 0; i < Math.min(key.length, 100); i++) { //Limit the looping to 100 (For faster performance)
            let char = key[i]; //Assign a variable to be the array character 0 - 99
            let value = char.charCodeAt(0) - 96; //Assign each character a value a = 1, b = 2 etc.
            total = (total * WEIRD_PRIME + value) % this.keyMap.length; //We are now moduloing the total with the length of the created keymap, rather than the array length
        }
        return total; //Return the total
    }
    set(key, val) {
        let index = this._hash(key); //Create a variable that calls from our hsh function
        if (!this.keyMap[index]) { //If there is nothing set at this index...
            this.keyMap[index] = []; //this index is now an array
        }
        this.keyMap[index].push([key, val]); //Push the key and value in as its own array within this indexes array
    }
    get(key) {
        let index = this._hash(key); //Createvariable for our hashed keys returned number
        if (!this.keyMap[index]) return undefined; //If there is nothing set in this index. return undefined
        for (let i = 0; i < this.keyMap[index].length; i++) { //Loop based on the length of the keyMaps specific indexes array of strings
            if (this.keyMap[index][i][0] === key) { //If our key is equal to the first string in this.keyMap[index]
                return this.keyMap[index][i][1]; //Return the second string (Our value in the key/value pair)
            }
        }
    }
    keys() {
        let keysArr = [] //Make an array to store keys data to return
        for (let i = 0; i < this.keyMap.length; i++) { //Loop over the whole keyMap
            if (this.keyMap[i]) { //For each key within the keyMap
                for (let j = 0; j < this.keyMap[i].length; j++) { //For each array within the keyMap[i]
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]); //Push the key string into the keyArr array
                    }
                }
            }
        }
        return keysArr; //Return the keysArr array
    }
    values() {
        let valsArr = [] //Make an array to store the values data to return
        for (let i = 0; i < this.keyMap.length; i++) { //Loop over the whole keyMap
            if (this.keyMap[i]) { //For each value within the keyMap
                for (let j = 0; j < this.keyMap[i].length; j++) { //For each array within the keyMap[i]
                    if (!valsArr.includes(this.keyMap[i][j][1])) { //So long as there no duplicates
                        valsArr.push(this.keyMap[i][j][1]) //Pushes the value string into the values array
                    }
                }
            }
        }
        return valsArr; //Return the values array
    }
}

let myHash = new HashTable();
myHash.set('aliceblue', '#f0f8ff');
myHash.set('blue', '#0000ff');
myHash.set('bluegreen', '#0d98ba');
myHash.set('greenblue', '#1164b4');
myHash.set('orange', '#ffa500');
myHash.set('redorange', '#ff5349');
myHash.set('yellow', '#ffff00');
myHash.set('yelowgreen', '#9acd32');
myHash.set('violet', '#ee82ee');
myHash.set('purple', '#800080');
myHash.set('magenta', '#ff00ff');
myHash.set('pink', '#ffc0cb');

