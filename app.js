
// Global variables 
const word = document.querySelector('.word');
const timeLeft= document.getElementById('time');
const scoreLeft = document.getElementById('score');
const output = document.querySelector('.output');
const input = document.querySelector('input');
const amountWords = document.getElementById('words-amount');
const easy = document.querySelector('.easy');
const medium = document.querySelector('.medium');
const hard = document.querySelector('.hard');
const game = document.querySelector('#game');
const levels = document.querySelector('#levels');
let time = [5, 4, 3];
let score = 0;
let isPlaying;  
let words = [
  'school',
  'theory',
  'dictionary',
  'yearbook',
  'football',
  'university',
  'rock',
  'road',
  'highway',
  'letter',
  'eating',
  'bedroom',
  'wardrobe',
  'shelves',
  'weather',
  'cloud',
  'toronto',
  'michigan',
  'belt',
  'jeans',
  'jealous',
  'create',
  'cake',
  'brothers',
  'parents',
  'buddie',
  'wonderfull',
  'feature',
  'schedule',
  'flashlight',
  'mood',
  'character',
  'toward',
  'straight',
  'boomer',
  'youth',
  'cooking',
  'freezer',
  'lake',
  'river',
  'backboard',
  'london',
  'boston',
  'rocket',
  'tomato',
  'silver',
  'terraria',
  'shadow',
  'flame',
  'busy'
];

// function for button events
function initStyleToButton() {
  levels.style.display = 'none';
  game.style.display = 'block';
}

// Button events
easy.addEventListener('click', function() {
  time = time[0];
  initStyleToButton();
  // init basic value
  initbasic(timeLeft, scoreLeft)
  // get arrays words into html output 
    showWord(words);
  // checking word input with word displayed
    input.addEventListener('input', match1);
  //counting time % ending game
    const counting = setInterval(timing, 1000);
  // Init amount of the words array into html words-amount
    initAmount();
})

medium.addEventListener('click', function() {
  time = time[1];
  initStyleToButton();
  // init basic value
  initbasic(timeLeft, scoreLeft)
  // get arrays words into html output 
    showWord(words);
  // checking word input with word displayed
    input.addEventListener('input', match2);
  //counting time % ending game
    const counting = setInterval(timing, 1000);
  // Init amount of the words array into html words-amount
    initAmount();
})

hard.addEventListener('click', function() {
  time = time[2];
  initStyleToButton();
  // init basic value
  initbasic(timeLeft, scoreLeft)
  // get arrays words into html output 
    showWord(words);
  // checking word input with word displayed
    input.addEventListener('input', match3);
  //counting time % ending game
    const counting = setInterval(timing, 1000);
  // Init amount of the words array into html words-amount
    initAmount();
})

  function initbasic(timeLeft, scoreLeft) {
    timeLeft.innerHTML = time;
    scoreLeft.innerHTML = score;
  }
  
  function showWord(words) {
    word.innerHTML = words[Math.floor(Math.random() * words.length)];
    if(words.length === 0) {
      delete words;
      word.innerHTML = "You won the game!";
      input.remove();
      timelabel.remove();
    }
  }
  
  function timing() {
    if(time > 0) {
      time--;
    } else if (time === 0) {
      isPlaying = false;
    } 
    if (!isPlaying && time === 0) {
      word.innerHTML = 'Game Over';
      output.innerHTML = '<p>Refresh page</p>';
      input.remove();
      timelabel.remove();
    }
    timeLeft.innerHTML = time;
  }
  
  function match1() {
    if(matchCondition()) {
      isPlaying = true;
      output.innerHTML = '';
      input.value = '';
      score++;
      time = 6;
      let removeWord = words.filter(function(element) {
        return element !== word.innerHTML;
      })
      words = removeWord;
      console.log(words)
      showWord(words);
      initAmount()
    } 
    scoreLeft.innerHTML = score;
  
    let number = input.value.length - 1;
    if(input.value.slice(-1) === word.innerHTML[number]) {
      input.style.color = "#061e3e";
    } else {
      input.style.color = "red";
    }
  }

  function match2() {
    if(matchCondition()) {
      isPlaying = true;
      output.innerHTML = '';
      input.value = '';
      score++;
      time = 5;
      let removeWord = words.filter(function(element) {
        return element !== word.innerHTML;
      })
      words = removeWord;
      console.log(words)
      showWord(words);
      initAmount()
    } 
    scoreLeft.innerHTML = score;
  
    let number = input.value.length - 1;
    if(input.value.slice(-1) === word.innerHTML[number]) {
      input.style.color = "#061e3e";
    } else {
      input.style.color = "red";
    }
  }
  
  
  function match3() {
    if(matchCondition()) {
      isPlaying = true;
      output.innerHTML = '';
      input.value = '';
      score++;
      time = 4;
      let removeWord = words.filter(function(element) {
        return element !== word.innerHTML;
      })
      words = removeWord;
      console.log(words)
      showWord(words);
      initAmount()
    } 
    scoreLeft.innerHTML = score;
  
    let number = input.value.length - 1;
    if(input.value.slice(-1) === word.innerHTML[number]) {
      input.style.color = "#061e3e";
    } else {
      input.style.color = "red";
    }
  }
  
  
  function matchCondition(){
    if(input.value === word.innerHTML) {
      return true;
    } else {
      return false;
    }
  }
  
  function initAmount() {
    amountWords.innerHTML = words.length;
  }


