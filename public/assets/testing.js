//Closures Practice

function rollDie(d20) {
    console.log(`You rolled ${d20} Twenty-Sided Dice`);
    const d20Arr = [];
    let totalDamage = 0;
    for (let i = 0; i < d20; i++) {
        const dice1 = Math.floor(Math.random() * 20) + 1;
        d20Arr.push(dice1);
    }
    console.log(d20Arr);

    return function (d12) {
        console.log(`You rolled ${d12} Twelve-Sided Dice`);
        const d12Arr = [];
        for (let i = 0; i < d12; i++) {
            const dice2 = Math.floor(Math.random() * 12) + 1;
            d12Arr.push(dice2);
        }
        const calcD12 = d12Arr.reduce((acc, next) => {
            return acc += next;
        }, 0)
        console.log(d12Arr);
        totalDamage += calcD12;
        console.log('You dealt ' + totalDamage + ' Damage!');

        return function (d10) {
            console.log(`You rolled ${d10} Ten-Sided Dice`);
            const d10Arr = [];
            for (let i = 0; i < d10; i++) {
                const dice3 = Math.floor(Math.random() * 10) + 1;
                d10Arr.push(dice3)
            }
            const calcD10 = d10Arr.reduce((acc, next) => {
                return acc += next;
            }, 0)
            console.log(d10Arr);
            totalDamage += calcD10;
            console.log('You dealt ' + totalDamage + ' Damage!');

            return function (d8) {
                console.log(`You rolled ${d8} Eight-Sided Dice`);
                const d8Arr = [];
                for (let i = 0; i < d8; i++) {
                    const dice4 = Math.floor(Math.random() * 8) + 1;
                    d8Arr.push(dice4);
                }
                const calcD8 = d8Arr.reduce((acc, next) => {
                    return acc += next;
                }, 0)
                console.log(d8Arr);
                totalDamage += calcD8;
                console.log('You dealt ' + totalDamage + ' Damage!');

                return function (d6) {
                    console.log(`You rolled ${d6} Six-Sided Dice`);
                    const d6Arr = [];
                    for (let i = 0; i < d6; i++) {
                        const dice5 = Math.floor(Math.random() * 6) + 1;
                        d6Arr.push(dice5);
                    }
                    const calcD6 = d6Arr.reduce((acc, next) => {
                        return acc += next;
                    }, 0)
                    console.log(d6Arr);
                    totalDamage += calcD6;
                    console.log('You dealt ' + totalDamage + ' Damage!');

                    return function (d4) {
                        console.log(`You rolled ${d4} Four-Sided Dice`);
                        const d4Arr = [];
                        for (let i = 0; i < d4; i++) {
                            const dice6 = Math.floor(Math.random() * 4) + 1;
                            d4Arr.push(dice6);
                        }
                        const calcD4 = d4Arr.reduce((acc, next) => {
                            return acc += next;
                        }, 0)
                        console.log(d4Arr);
                        totalDamage += calcD4;
                        console.log('You dealt ' + totalDamage + ' Damage!');
                    }
                }
            }
        }
    }
}

function outer(input1) {
    const beginning = 'Closures are';
    return function (input2) {
        const middle = ' Awesome!'
        return function (input3) {
            console.log(beginning + middle + " Unless of course you don't understand them");
            console.log(input1 + input2 * input3);
        }
    }
}

function trigger() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    const randomNum2 = Math.floor(Math.random() * 100) + 1;
    const randomNum3 = Math.floor(Math.random() * 100) + 1;
    return outer(randomNum)(randomNum2)(randomNum3);
}

function counter(name, num) {
    let count = 0;
    return function () {
        count++;
        if (count >= num) return `Game Over - ${name} Wins!`;
        else return `${name} has ${count} point(s)!`;
    }
}

const player1 = counter('Brandon', 10);
const player2 = counter('Derreck', 10);
const player3 = counter('Caleb', 10);

function routine() {
    const workouts = ['Bench Press', 'Dips', 'Pectoral Flys'];
    return {
        showRoutine: function () {
            return workouts.slice();
        },
        addWorkout: function (workout) {
            workouts.push(workout)
            return workouts.slice();
        },
        removeWorkout: function (workout) {
            for (let i = 0; i < workouts.length; i++) {
                if (workouts[i] === workout) {
                    workouts.splice(i, 1);
                }
            }
            return this.showRoutine();
        }
    }
}

const lift1 = routine();
const lift2 = routine();

//'this' Practice

// const wizard = {
//     firstName: 'Azrileth',
//     lastName: 'Firstborn',
//     specialty: 'Conjuration',
//     preparedSpell: ["Wish", "Shield", "Mage Armor", "Summon Elemental", "Azrileth's Conjured Weaponry"],
//     castSpell: function () {
//         const randomNum = Math.floor(Math.random() * this.preparedSpell.length);
//         return this.preparedSpell[randomNum];
//     },
//     items: {
//         armor: 'Robe of the Archmagi',
//         weapons: 'Blade of Azrileth',
//         magicItems: ['Bag of Holding', 'Staff of the Magi', 'Belt of Storm Giant Strength', 'Mask of the Dragon Queen'],
//         determineContext: function () {
//             return 'I cast ' + wizard.castSpell();
//         }

//     }
// }

// const azrilethCast = wizard.castSpell()
// wizard.items.determineContext.call(wizard); //If I were to use this.castSpell in determineContext

//OOP

class HouseSchema {
    constructor(bedrooms, bathrooms, sqFeet) {
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.sqFeet = sqFeet;
    }
}

const revisedHouse = new HouseSchema(2, 2, 1000);
const revisedHouse2 = new HouseSchema(2, 2, 1000);
const revisedHouse3 = new HouseSchema(2, 2, 1000);

class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name + ' just barked!')
    }
}

// const lazarus = new Dog('Lazarus', 3);
const finnegan = new Dog('Finnegan', 1);

function personSubtract(a, b, c) {
    return this.firstName + " subtracts " + (a - b - c);
}

function subtractFourNumbers(a, b, c, d) {
    return a - b - c - d;
}

var person = {
    firstName: 'Brandon'
}

class Character {
    constructor(name, level, classification, archetype) {
        this.name = name;
        this.level = level;
        this.classification = {
            classification: [classification]
        };
    }
}


const azrileth = new Character('Azrileth', 50, 'Wizard', 'Conjuration');


const archmage = {
    firstName: "Azrileth",
    classification: "Wizard",
    preparedSpells: {
        1: ["Mage Armor", "Shield"],
        2: ["Misty Step", "Hold Person"],
        3: ["Counterspell", "Dispel Magic"],
        4: ["Conjure Minor Elementals", "Greater Invisibility"],
        5: ["Conjure Elemental", "Planar Binding"],
        6: ["Instant Summons", "Summon Fiend"],
        7: ["Force Cage", "Simulacrum"],
        8: ["Clone", "Demiplane"],
        9: ["Blade of Disaster", 'Wish']
    },
    spellSlots: {
        1: 4,
        2: 4,
        3: 4,
        4: 4,
        5: 4,
        6: 4,
        7: 4,
        8: 4,
        9: 4
    },
    cast(level, spell) {
        for (let key in this.spellSlots) {
            const parsedKey = parseInt(key);
            if (parsedKey === level) {
                this.spellSlots[key]--;
            }
        }
        if (level === 1) return `${this.firstName} casts ${spell}! Using one spell slot of ${level}st level.`
        if (level === 2) return `${this.firstName} casts ${spell}! Using one spell slot of ${level}nd level.`
        if (level === 3) return `${this.firstName} casts ${spell}! Using one spell slot of ${level}rd level.`
        else return `${this.firstName} casts ${spell}! Using one spell slot of ${level}th level.`
    },
    accumulateValues(...args) { // archmage.accumulateValues.apply(azrael, nums)
        let sum = 0;
        for (let i = 0; i < args.length; i++) {
            sum += args[i];
        }
        return `${this.firstName} determined the sum of the array to be ${sum}`;
    },
    displaySpells() {
        return this.preparedSpells;
    },
    addSpell(level, spell) {
        this.preparedSpells[level].push(spell);
        return this.preparedSpells;
    },
    removeSpell(level, name) {
        for (let spell of this.preparedSpells[level]) {
            if (spell === name) {
                this.preparedSpells[level].splice(spell, 1);
                return this.preparedSpells;
            };
        }
        return `${name} does not exist at the Spell Level of ${level}. Run displaySpells() to see what exists.`;
    },
    familiar: {
        firstName: "Lazarus",
        cast: {
            castingTime: "1 bonus action",
            activate() {
                const spellList = ["Fireball", "Lightning Bolt", "Ice Storm", "Chain Lightning"]
                const spellDecider = Math.floor(Math.random() * spellList.length); //0 - 3 (2)
                const spell = spellList[spellDecider]; // spellList[2] = "Ice Storm"
                return `${this.firstName} casts ${spell}!` // Azrael casts Ice Storm!
            }
        }
    },
    apprentice: {
        firstName: "Azrael",
        schoolOfMagic: "Illusion",
        preparedSpells: {
            1: ["Mage Armor", "Shield"],
            2: ["Misty Step", "Hold Person"],
            3: ["Counterspell", "Dispel Magic"],
            4: ["Hallucinatory Terrain"],
            5: [],
            6: [],
            7: [],
            8: [],
            9: []
        },
        spellSlots: {
            1: 4,
            2: 3,
            3: 3,
            4: 1,
            5: 0,
            6: 0,
            7: 0,
            8: 0,
            9: 0
        },
        displaySpells() {
            return archmage.displaySpells.call(azrael); //azrael variable defined below
        },
        addSpell() {
            return archmage.addSpell.bind(azrael); //azrael.addSpell()(1-9, "SpellName")
            // const add = archmage.addSpell.bind(azrael);
            // return add; 
        },
        removeSpell() {
            return archmage.removeSpell.bind(azrael); //azrael.removeSpell()(1-9, "SpellName")
            // const discard = archmage.removeSpell.bind(azrael);
            // return discard;
        },
        accumulateValues() {
            const accrue = archmage.accumulateValues.apply(azrael)
            return accrue;
        }
    }
}

const azrael = archmage.apprentice;
const lazarus = archmage.familiar;
const lazarusCast = lazarus.cast.activate.bind(lazarus); // lazarusCast()
const azraelCast = archmage.cast.bind(azrael); // azraelCast()

const nums = [1, 2, 3, 4, 5];


// ***************************************************What to Review***********************************************
//--------\\
// Priority \\
//---------\\
// Closures and Keyword 'this'
// Call, Apply, and Bind
// AJAX
// Async Functions ES2017
//-----------------------\\

//-------------\\
// Some Practice \\
//--------------\\
// Rest and Spread
// Super and Extends
// Promises Assignment
//--------------------\\

//------------------\\
// Just some refresher \\
//-------------------\\
// Generators
// Additional ES2015 Methods
//--------------------------\\

//***************************************************Notes Code**************************************************\\

function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz"
    if (num % 3 === 0) return "Fizz"
    if (num % 5 === 0) return "Buzz"
    else return num;
}