function startquiz() {
  document.getElementById('startcard').style.display = "none";
  document.getElementById('questioncard').style.display = "block";
  setInterval(countdown, 1000);
}

function nextquestion() {
  document.getElementById('questntxt').innerHTML = questions[index].questionText;
  for (i = 0; i < optioncard.length; i++) {
    optioncard[i].innerHTML = questions[index].options[i];
  }
  document.getElementById('responsecard').style.display = "none";
}

var questions = [
  {
    questionText: "Commonly used data types DO NOT include:",
    options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts",
  },
  {
    questionText: "Arrays in JavaScript can be used to store ______.",
    options: [
      "1. numbers and strings",
      "2. other arrays",
      "3. booleans",
      "4. all of the above",
    ],
    answer: "4. all of the above",
  },
  {
    questionText:
      "String values must be enclosed within _____ when being assigned to variables.",
    options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes",
  },
  {
    questionText:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    options: [
      "1. JavaScript",
      "2. terminal/bash",
      "3. for loops",
      "4. console.log",
    ],
    answer: "4. console.log",
  },
  {
    questionText:
      "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
    options: ["1. break", "2. stop", "3. halt", "4. exit"],
    answer: "1. break",
  },
];

var optioncard = document.getElementsByClassName('optioncard');
index = 0;
score = 0;
function option(n) {
  if (optioncard[n].innerHTML == questions[index].answer) {
    optionresponse();
    score += 20;

    index++;
    if (index < questions.length) {
    setInterval(nextquestion, 1000);
    } else {
      scoresheetdisplay()
    }

  } else {
    document.getElementById('responce').innerHTML = "Incorrect!";
    document.getElementById('responsecard').style.display = "block";
    timerindex -= 10;
  }
}

function optionresponse(){
  document.getElementById('responce').innerHTML = "Correct!";
  document.getElementById('responsecard').style.display = "block";
}

function scoresheetdisplay() {
  timerindex = 0;
  document.getElementById('questioncard').style.display = "none";
  document.getElementById('scoredisplay').innerHTML = "Your Final score is " + score + ".";
  document.getElementById('scoresheet').style.display = "block";
}

timerindex = 50;
function countdown() {
  if (timerindex <= 51 && timerindex >= 1) {
    timerindex--
    document.getElementById('countdown').innerHTML = "" + timerindex + " seconds";
  } 
  else{
    scoresheetdisplay();
  }
}

function scoresubmit() {
  var initialsinput = document.getElementById('initialsinput').value;
  if (initialsinput) {
    document.getElementById('scoresheet').style.display = "none";
    localStorage.setItem(initialsinput, score);
    location.replace('highscores.html');
  } else {
    document.getElementById('initialsresponce').style.color = "red";
    document.getElementById('initialsresponce').innerHTML = "Enter your initials!";
  }
  
}

function viewhighsores() {
  document.getElementById('startcard').style.display = "none";
  document.getElementById('questioncard').style.display = "none";
  document.getElementById('scoresheet').style.display = "none";
  location.replace('highscores.html');
}

function clearinputerror(){
  document.getElementById('initialsresponce').innerHTML = "";
}