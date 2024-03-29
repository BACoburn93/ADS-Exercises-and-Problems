d3.selectAll("li").style("font-size", function () {
    return Math.random() * 40 + "px";
});

d3.selectAll("li").style("background-color", function (_, idx) {
    return idx % 2 === 0 ? "lightgrey" : "white";
})

d3.select(".outer")
        .style("color", "purple")
    .select("div")
        .style("font-size", "30px")
        .style("background-color", "orange")
    .select("div")
        .style("border", "8px solid blue")

d3.select("h1").on("click", () => {
    console.log("Event Listener Triggered")
})


d3.select("#new-note").on("submit", () => {
    d3.event.preventDefault();
    const input = d3.select("input");
    d3.select('#notes') //Selects the notes ID
        .append("p") //Appends a paragraph to the notes id
        .classed("note", true) //Gives the appended paragraph a class of note
        .text(input.property("value")) //Accesses the value property from the note paragraph and gives it an inner text value based on what was in the input
        input.property("value", ""); //Clears the input after the note is submitted
});

d3.selectAll("p").remove();

d3.select("document").on("DOMContentLoaded", () => {
    const wordCount = 10;
    const guessCount = 4;
    let password = '';
  
    var start = d3.select('#start');
    start.on('click', function() {
      toggleClasses(d3.select('#start-screen'), 'hide', 'show');
      toggleClasses(d3.select('#game-screen'), 'hide', 'show');
      startGame();
    });
  
    function toggleClasses(element) {
      for (let i = 1; i < arguments.length; i++) {
        element.classList.toggle(arguments[i]);
      }
    }
  
    function startGame() {
      // get random words and append them to the DOM
      const wordList = d3.select('#word-list');
      // 'words' constiable is from words.js
      const randomWords = getRandomValues(words, wordCount); // eslint-disable-line no-undef
      randomWords.forEach(function(word) {
        const li = document.createElement('li');
        li.innerText = word;
        wordList.appendChild(li);
      });
  
      // set a secret password and the guess count display
      password = getRandomValues(randomWords, 1)[0];
      setGuessCount(guessCount);
  
      // add update listener for clicking on a word
      wordList.addEventListener('click', updateGame);
    }
  
    function getRandomValues(array, numberOfVals) {
      return shuffle(array).slice(0, numberOfVals);
    }
  
    function shuffle(array) {
      var arrayCopy = array.slice();
      for (var idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
        // generate a random index between 0 and idx1 (inclusive)
        var idx2 = Math.floor(Math.random() * (idx1 + 1));
  
        // swap elements at idx1 and idx2
        var temp = arrayCopy[idx1];
        arrayCopy[idx1] = arrayCopy[idx2];
        arrayCopy[idx2] = temp;
      }
      return arrayCopy;
    }
  
    function setGuessCount(newCount) {
      guessCount = newCount;
      d3.select('#guesses-remaining').innerText =
        'Guesses remaining: ' + guessCount + '.';
    }
  
    function updateGame(e) {
      if (e.target.tagName === 'LI' && !e.target.classList.contains('disabled')) {
        // grab guessed word, check it against password, update view
        let guess = e.target.innerText;
        let similarityScore = compareWords(guess, password);
        e.target.classList.add('disabled');
        e.target.innerText = guess + ' --> Matching Letters: ' + similarityScore;
        setGuessCount(guessCount - 1);
  
        // check whether the game is over
        if (similarityScore === password.length) {
          toggleClasses(document.getElementById('winner'), 'hide', 'show');
          this.removeEventListener('click', updateGame);
        } else if (guessCount === 0) {
          toggleClasses(document.getElementById('loser'), 'hide', 'show');
          this.removeEventListener('click', updateGame);
        }
      }
    }
  
    function compareWords(word1, word2) {
      if (word1.length !== word2.length) {
        throw 'Words must have the same length';
      }
      var count = 0;
      for (var i = 0; i < word1.length; i++) {
        if (word1[i] === word2[i]) count++;
      }
      return count;
    }
});

//------------------------------------------------------------------

//Guessing Game Solution

document.addEventListener('DOMContentLoaded', function () {
    var wordCount = 10;
    var guessCount = 4;
    var password = '';
  
    d3.select("#start")
      .on("click", function () {
        toggleClasses(d3.select('#start-screen'), 'hide', 'show');
        toggleClasses(d3.select('#game-screen'), 'hide', 'show');
        startGame();
      })
  
    function toggleClasses(selection) {
      for (var i = 1; i < arguments.length; i++) {
        var classIsSet = selection.classed(arguments[i]);
        selection.classed(arguments[i], !classIsSet);
      }
    }
  
    function startGame() {
      // get random words and append them to the DOM
      var wordList = d3.select("#word-list");
      var randomWords = getRandomValues(words, wordCount);
      randomWords.forEach(function (word) {
        wordList
          .append("li")
          .text(word);
      });
  
      // set a secret password and the guess count display
      password = getRandomValues(randomWords, 1)[0];
      setGuessCount(guessCount);
  
      // add update listener for clicking on a word
      wordList.on('click', updateGame);
    }
  
    function getRandomValues(array, numberOfVals) {
      return shuffle(array).slice(0, numberOfVals);
    }
  
    function shuffle(array) {
      var arrayCopy = array.slice();
      for (var idx1 = arrayCopy.length - 1; idx1 > 0; idx1--) {
        // generate a random index between 0 and idx1 (inclusive)
        var idx2 = Math.floor(Math.random() * (idx1 + 1));
  
        // swap elements at idx1 and idx2
        var temp = arrayCopy[idx1];
        arrayCopy[idx1] = arrayCopy[idx2];
        arrayCopy[idx2] = temp;
      }
      return arrayCopy;
    }
  
    function setGuessCount(newCount) {
      guessCount = newCount;
      d3.select("#guesses-remaining")
        .text("Guesses remaining: " + guessCount + ".");
    }
  
    function updateGame(event) {
      var tgt = d3.select(event.target);
      console.log(tgt)
      if (tgt.node().tagName === "LI" && !tgt.classed("disabled")) {
        // grab guessed word, check it against password, update view
        var guess = tgt.text();
        var similarityScore = compareWords(guess, password);
        tgt.classed("disabled", true)
          .text(guess + " --> Matching Letters: " + similarityScore);
        setGuessCount(guessCount - 1);
  
        // check whether the game is over
        if (similarityScore === password.length) {
          toggleClasses(d3.select("#winner"), 'hide', 'show');
          d3.select(this).on('click', null);
        } else if (guessCount === 0) {
          toggleClasses(d3.select("#loser"), 'hide', 'show');
          d3.select(this).on('click', null);
        }
      }
    }
  
    function compareWords(word1, word2) {
      if (word1.length !== word2.length) throw "Words must have the same length";
      var count = 0;
      for (var i = 0; i < word1.length; i++) {
        if (word1[i] === word2[i]) count++;
      }
      return count;
    }
  });
  
  // Joins (Enter and Exit Selections)

  var quotes = [
    {
      quote: "I see dead people.",
      movie: "The Sixth Sense",
      year: 1999,
      rating: "PG-13"
    }, {
      quote: "May the force be with you.",
      movie: "Star Wars: Episode IV - A New Hope",
      year: 1977,
      rating: "PG"
    }, {
      quote: "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
      movie: "Dirty Harry",
      year: 1971,
      rating: "R"
    }, {
      quote: "You had me at 'hello.'",
      movie: "Jerry Maguire",
      year: 1996,
      rating: "R"
    }, {
      quote: "Just keep swimming. Just keep swimming. Swimming, swimming, swiming.",
      movie: "Finding Nemo",
      year: 2003,
      rating: "G"
    }
  ];
  
  const colors = {
    "G": "#3cff00",
    "PG": "#f9ff00",
    "PG-13": "#ff9000",
    "R": "#ff0000"
  }
  
  d3.select("#quotes")
    .style("list-style", "none")
    .selectAll("li") // Despite there being no li's, D3 still selects all li's without it being null
    .data(quotes) // We are saying that we want to take each piece of data in the quotes object and attach it as a dOM element -- In this case, an LI
    // This happens because D3 will create some placeholder nodes that we can access later in the DOM
    // D3 uses an enter method that will create a D3 selection with those enter nodes
    .enter() // Gain access to the enter section of D3
    .append("li") // We then append the li's to the plaeholders with D3
    .text((d) => { // For each node, we fill the innerText with a quote frmo our data
      return `"${d.quote}" - ${d.movie} (${d.year})`;
    })
    .style("margin", "20px")
    .style("padding", "20px")
    // .style("font-size", d => d.quote.length < 25 ? "2em" : "1em")
    .style("background-color", d => colors[d.rating])
    .style("border-radius", "8px")
    .style("font-weight", "600");
  
    // function (d, i) {
    //   // write code here
    // }
    // // d = Data bound to the current element
    // // i = Index of the current elememt in the selection


