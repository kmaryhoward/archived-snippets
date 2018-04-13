// flow control

function basicTeenager(age) { if (age>=13 && age<20)
    { return 'You are a teenager!' }
    
    }
    
    function teenager(age) { if (age>=13 && age<20) { return 'You are a teenager!' }
    else { return 'You are not a teenager' }
    
    }
    function ageChecker(age) { if (age>=13 && age<20) { return 'You are a teenager!' }
    else if (age<=12) { return 'You are a kid' }
    else if (age>19) { return 'You are a grownup' }
    
    }
    function ternaryTeenager(age) { return (age>=13 && age<20) ?  'You are a teenager' :
    'You are not a teenager'
    
    }
    function switchAge(age) { switch (true) { case (age>=13 && age<20):
    return 'You are a teenager';
    break;
    default:
    return 'You have an age' }
    
    
    }

// math

function add(a, b) {
    return a + b
  }
  function subtract(a, b) {
    return a - b
  }
  function multiply(a, b) {
    return a * b
  }
  function divide(a, b) {
    return a / b
  }
  var n = 281
  function inc(n) {
    return n+= 1
  }
  var n = 50
  function dec(n) {
    return n-= 1
  }
  var n = '114'
  function makeInt(n) {
    var b = '2328 * 0'
    var c = 'sldkjflksjf';
    switch (true) { case n === n:
    return parseInt(n, 10);
  break;
  case n === b:
  return parseInt(n, 10);
  break;
  case n === c:
  return parseInt(n, 10)
  } }
  var n = '2.222'
  function preserveDecimal(n) {
    var a = 'sldkjflksjf';
    switch (true) {case n === n:
    return parseFloat(n);
  break;
  case n === a:
  return parseFloat(n)
  }
  }

// scope

var animal = 'dog'
function myAnimal() {
return animal;}
  function yourAnimal() {
    var animal = 'cat';
    console.log('${animal}');
    return animal;
  }
var n = 525
function add2(n) {
  return n + 2
}
var theFunk = funkyFunction()
function funkyFunction() {
  return theFunk;
function theFunk() {
  var theFunk = 'FUNKY!';
  return theFunk
}
}
var theFunk = theFunk()

// hoisting

function callMe() {
    var lyric = "maybe"
    console.log("I just met you...");
    console.log("and this is crazy..");
    console.log("but here's my number..");
    console.log("so call me");
    return lyric;
  }
  
  function crazy() {
    function thisIsCrazy() {
      console.log("hey!!!")
    }
    return thisIsCrazy();
  }
  function sayMyName() {
    var name = "Kristin";
  function sayMy(){
      console.log(name);
    }
    return sayMy();
  }

  // arrays

  var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(anotherBar, Barz) {
  return [Barz, ...anotherBar]
}
function destructivelyAddElementToBeginningOfArray(anotherBar, Barz) {
  anotherBar.unshift(Barz);
  return anotherBar
}
function addElementToEndOfArray(anotherBar, Barz) {
  return [...anotherBar, Barz]
}
function destructivelyAddElementToEndOfArray(anotherBar, Barz) {
  anotherBar.push(Barz);
  return anotherBar
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyremoveElementFromBeginningOfArray(anotherBar) {
  anotherBar.shift();
  return anotherBar
}
function removeElementFromBeginningOfArray(anotherBar) {
  return anotherBar.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(anotherBar) {
  anotherBar.pop();
  return anotherBar
}
function removeElementFromEndOfArray(anotherBar) {
  return anotherBar.slice(0, anotherBar.length -1)
}

// more arrays

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(anotherBar, Barz) {
  return [Barz, ...anotherBar]
}
function destructivelyAddElementToBeginningOfArray(anotherBar, Barz) {
  anotherBar.unshift(Barz);
  return anotherBar
}
function addElementToEndOfArray(anotherBar, Barz) {
  return [...anotherBar, Barz]
}
function destructivelyAddElementToEndOfArray(anotherBar, Barz) {
  anotherBar.push(Barz);
  return anotherBar
}
function accessElementInArray(array, index) {
  return array[index]
}
function destructivelyremoveElementFromBeginningOfArray(anotherBar) {
  anotherBar.shift();
  return anotherBar
}
function removeElementFromBeginningOfArray(anotherBar) {
  return anotherBar.slice(1)
}
function destructivelyRemoveElementFromEndOfArray(anotherBar) {
  anotherBar.pop();
  return anotherBar
}
function removeElementFromEndOfArray(anotherBar) {
  return anotherBar.slice(0, anotherBar.length -1)
}

// objects

var playlist = { TRex: "Monolith" }
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

// loops

function theBeatlesPlay(musician, instrument) {
    var playlist = [];
    for (let i = 0; i < instrument.length; i++) {
      playlist.push(`${musician[i]}` + " plays " + `${instrument[i]}`); }
    return playlist;
  }
  function johnLennonFacts(facts) {
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
      newFacts[i] = facts[i] + "!!!";
      i++;
    }
    return newFacts;
  }
  function iLoveTheBeatles(number) {
    var newList = [];
    do { newList.push("I love the Beatles!");
  number++; }
  while (number < 15);
  return newList;
  }

  // arrays and loops

  function takeANumber(line, name) {
    var someDeli = line.push(name);
    var goodDeli = `Welcome, ${name}. You are number ${line.length} in line.`;
    return goodDeli;
  }
  function nowServing(line) {
    var someLine = [];
    for (let i = 0; i < line.length; i++) {
      var first = line.splice(0, 1);
      someLine.push(`Currently serving ${first}.`);
      return someLine;
    }
    return "There is nobody waiting to be served!";
  }
  function currentLine(line) {
    if(!line.length) {
      return "The line is currently empty.";
    }
    var lineUpdate = [];
    for (let i = 0; i < line.length; i++) {
    lineUpdate.push(i+1 + ". " + line[i]); }
  console.log("The line is currently: " + lineUpdate)
  return "The line is currently: " + lineUpdate.join(', ');
  }

// shopping cart

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemPrice = Math.floor(Math.random() * (100-1)) + 1;
  var newCart = Object.assign({}, { [item] : itemPrice });
  cart.push(newCart);
  console.log(`${item} has been added to your cart.`);
  return cart;
}
function viewCart() {
  var blankSlate = [];
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else { for (var i in cart) {
    var idx = 0;
    var item = Object.keys(cart[0])[idx];
    var itemCost = cart[0][item];
    var anotherItem = Object.keys(cart.slice(-1)[0])
    var anotherItemCost = cart.slice(-1)[0][anotherItem];
    var goodItem = Object.keys(cart.slice(-2)[0]);
    var goodItemCost = cart.slice(-2)[0][goodItem];
    var funItem = Object.keys(cart.slice(-3)[0]);
    var funItemCost = cart.slice(-3)[0][funItem];
    switch (true) { case (cart.length === 1):
  console.log(`In your cart, you have ${item} at $${itemCost}.`);
  break;
  case (cart.length === 2):
    console.log(`In your cart, you have ${item} at $${itemCost} and ${anotherItem} at $${anotherItemCost}.`);
    break;
    case (cart.length === 3):
    console.log(`In your cart, you have ${item} at $${itemCost}, ${goodItem} at $${goodItemCost}, and ${anotherItem} at $${anotherItemCost}.`);
    break;
    default:
    console.log(`In your cart, you have ${item} at $${itemCost}, ${funItem} at $${funItemCost}, ${goodItem} at $${goodItemCost}, and ${anotherItem} at $${anotherItemCost}.`);
  }
}
}
}
function total() {
  var totalCost = 0;
  for (var i in cart) {
  var item = Object.keys(cart[i]);
  var itemCost = cart[i][item];
  totalCost += itemCost;
}
return totalCost;
}

function removeFromCart(item) {
  for (var i in cart) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  }
      console.log("That item is not in your cart.");
}

function placeOrder(number) {
    if (number === undefined) {
      console.log("Sorry, we don't have a credit card on file for you.");
    } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`);
    cart = [];
    }
  }

  // callbacks
  function iterativeLog(array) {
    array.forEach(function(element, index) {
      console.log(`${index}: ${element}`);
    });
  }
  function iterate(callback) {
    var funTimes = ["dog", "cat", "mouse"];
    funTimes.forEach(function(){
      callback(funTimes);
      });
    return funTimes;
  }
  function doToArray(array, callback) {
    array.forEach(function(){
      callback(array);
    });
  }

  // DOM

  function getFirstSelector(selector) {
    const el1 = document.querySelector(selector);
    return el1;
  }
  function nestedTarget() {
    const el2 = document.getElementById("nested").getElementsByClassName("target")[0];
    return el2;
  }
  function increaseRankBy(n) {
    const el3 = document.getElementById("app").getElementsByClassName("ranked-list");
    for (let i = 0; i < el3.length; i++) {
      el3[i].innerHTML = parseInt(el3[i]);
    }
    return el3;
  }
  function deepestChild() {
    const el4 = document.querySelectorAll("#grand-node div");
    if (!el4.length) {return
      false; } else {
        return el4[el4.length -1];
      }
  }

  // konami 

  const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let index = 0;
function init() {
  document.addEventListener('keydown', function(e) {
  const key = parseInt(e.which || e.detail);
    if (key === code[index]) {
      index++;
      if (index === code.length) {
        window.alert('You are awesome!');
        index = 0;
        e.preventDefault();
    }
  } else {
      index = 0;
    }
  console.log(e.which);
  console.log(index);
  console.log(key);
});
}

// rock dodger

const DODGER = document.getElementById('dodger');
const GAME = document.getElementById('game');
const GAME_HEIGHT = 400;
const GAME_WIDTH = 400;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const ROCKS = [];
const START = document.getElementById('start');

var gameInterval = null;

function checkCollision(rock) {

    const top = positionToInteger(rock.style.top);

    if (top > 360) {
        const dodgerLeftEdge = positionToInteger(DODGER.style.left);
        const dodgerRightEdge = dodgerLeftEdge + 40;
        const rockLeftEdge = positionToInteger(rock.style.left);
        const rockRightEdge = rockLeftEdge + 20;

        if ((rockLeftEdge <= dodgerLeftEdge && rockRightEdge >= dodgerLeftEdge) ||
            (rockLeftEdge >= dodgerLeftEdge && rockRightEdge <= dodgerRightEdge) ||
            (rockLeftEdge <= dodgerRightEdge && rockRightEdge >= dodgerRightEdge)) {
            return true;
        }
    }
}

function createRock(x) {
    const rock = document.createElement('div');
    rock.className = 'rock';
    rock.style.left = `${x}px`;

    var top = 0;
    rock.style.top = top;

    GAME.appendChild(rock);

    function moveRock() {
        rock.style.top = `${top += 2}px`;

        if (checkCollision(rock)) {
            return endGame();
        } else if (top < GAME_HEIGHT) {
            window.requestAnimationFrame(moveRock);
        } else {
            rock.remove();
        }
    }

    window.requestAnimationFrame(moveRock);

    ROCKS.push(rock);
    return rock;
}

function endGame() {
    clearInterval(gameInterval);
    ROCKS.forEach(function(rock) {
        rock.remove();
    });
    window.removeEventListener('keydown', moveDodger);
    window.location.reload();
    return alert('YOU LOSE!');
}

function moveDodger(e) {

    var keyArr = [LEFT_ARROW, RIGHT_ARROW];

    if ([keyArr].indexOf(e.which) > -1) {
        e.preventDefault();
        e.stopPropagation();
    }
    if (e.which === LEFT_ARROW) {
        moveDodgerLeft();
        e.preventDefault();
        e.stopPropagation();
    } else if (e.which === RIGHT_ARROW) {
        moveDodgerRight();
        e.preventDefault();
    }
}


function moveDodgerLeft() {
    window.requestAnimationFrame(function() {
        var left = positionToInteger(dodger.style.left);

        if (left > 0) {
            dodger.style.left = `${left - 4}px`;
        }
    })
}

function moveDodgerRight() {
    window.requestAnimationFrame(function() {
        var left = positionToInteger(dodger.style.left);

        if (left < 360) {
            dodger.style.left = `${left + 4}px`;
        }
    })
}

function positionToInteger(p) {
    return parseInt(p.split('px')[0]) || 0;
}

function start() {
    window.addEventListener('keydown', moveDodger);

    START.style.display = 'none';

    gameInterval = setInterval(function() {
        createRock(Math.floor(Math.random() * (GAME_WIDTH - 20)));
    }, 1000);
}
