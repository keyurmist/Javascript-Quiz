// global declarations
let questionIndex = 0;
let secondsLeft = 10 * 5;
let quizComplete = false;

const startButton = document.getElementById("start-btn");

const bannerSection = document.getElementById("banner");

const mainElement = document.getElementById("main");

var timer = document.querySelector("#start-btn");

var currentTime = document.querySelector("#currentTime");

var holdInterval = 0;

var penalty = 5;

var questions = [
  {
      text: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
  },
  {
      text: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
  },
  {
      text: "Arrays in Javascript can be used to store ____.",
      choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      answer: "all of the above"
  },
  {
      text: "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parenthesis"],
      answer: "quotes"
  },
  {
      text: "A very useful tool for used during development and debugging for printing content to the debugger is:",
      choices: ["Javascript", "terminal / bash", "for loops", "console log"],
      answer: "console log"
  },

];

const initialiseLocalStorage = () => {
  const feedbackResultsFromLS = JSON.parse(localStorage.getItem("feedbackResults"));

  const allResultsFromLS = JSON.parse(localStorage.getItem("allResults"));

  if(!feedbackResultsFromLS) {
    localStorage.setItem("feedbackResults", JSON.stringify([]));
  }

  if(!allResultsFromLS) {
    localStorage.setItem("allResults", JSON.stringify([]));
  }
};

const storeInLS = (key, value) => {
  const arrayFromLS = JSON.parse(localStorage.getItem(key));

  arrayFromLS.push(value);

  localStorage.setItem(key, JSON.stringify(arrayFromLS));
};



const onLoad = () => {
  // initialise local storage
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

const removeStartSection = () => {
  bannerSection.remove();
};

const removeQuestionSection = () => {
  document.getElementById("question-container").remove();
};

timer.addEventListener("click", function () {
  // We are checking zero because its originally set to zero
  if (holdInterval === 0) {
      holdInterval = setInterval(function () {
          secondsLeft--;
          currentTime.textContent = "Time: " + secondsLeft;

          if (secondsLeft <= 0) {
              clearInterval(holdInterval);
              allDone();
              currentTime.textContent = "Time's up!";
          }
      }, 1000);
  }
  render(questionIndex);
});

function compare(event) {
  var element = event.target;

  if (element.matches("li")) {

      var createDiv = document.createElement("div");
      createDiv.setAttribute("id", "createDiv");
      // Correct condition 
      if (element.textContent == questions[questionIndex].answer) {
          score++;
          createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
          // Correct condition 
      } else {
          // Will deduct -5 seconds off secondsLeft for wrong answers
          secondsLeft = secondsLeft - penalty;
          createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
      }

  }
  // Question Index determines number question user is on
  questionIndex++;

  if (questionIndex >= questions.length) {
      // All done will append last page with user stats
      allDone();
      createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
  } else {
      render(questionIndex);
  }
  questionsDiv.appendChild(createDiv);
}

const startTimer = () => {
  // declare function to execute every 1 sec
  const countdown = () => {
    // decrement timer value
    // if quizComplete is true then stop timer
    // check if timer reaches 0
    // if true render game over
  };

  // setInterval of 1000ms (1s)
};


const handleOptionClick = (event) => {

const currentTarget = event.currentTarget;

const target = event.target;
  if(target.tagName === "LI") {
    const value = target.getAttribute("data-value");

    const question = questions[questionIndex].text;

    const answer = {
      question: question,
      value: value,
    };

    storeInLS("feedbackResults", answer);

    removeQuestionSection();

    if (questionIndex < questions.length - 1) {
      questionIndex += 1;
      renderQuestionSection();
    } else {
      renderResults();

      renderForm();
    }
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const fullName = document.getElementById("full-name").value;

  if (fullName) {
    const feedbackResults = JSON.parse(localStorage.getItem("feedbackResults"));

    const result = {
      fullName,
      feedbackResults,
    };

    storeInLS("allResults", result);

    localStorage.removeItem("feedbackResults");

    document.getElementById("feedback-form").remove();
  } else {
    alert("Please enter your name");
  }
};

const renderResults = () => {

};

const renderForm = () => {
  const section  =document.createElement("section");
  section.setAttribute("class", "feedback-form-section");
  section.setAttribute("id", "feedback-form");

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "title");
  h2.textContent = "Submit your Highscore";

  const form = document.createElement("form");

  const inputDiv = document.createElement("div");
  inputDiv.setAttribute("class", "form-control");

  const input = document.createElement("input");
  input.setAttribute("id", "full-name");
  input.setAttribute("class", "form-input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Enter full name");
  

  inputDiv.append(input);

  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "form-control");

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("class", "btn");
  button.textContent = "Submit";

  buttonDiv.append(button);

  form.append(inputDiv, buttonDiv);

  section.append(h2, form);

  mainElement.append(section);

  // add event listener for form submission
  form.addEventListener("submit", handleFormSubmit);
};

const renderQuestionSection = () => {

  const currentQuestion = questions[questionIndex];
  
  const section = document.createElement("section");
  section.setAttribute("class", "content-section question-container");
  section.setAttribute("id", "question-container");

  const h2 = document.createElement("h2");
  h2.setAttribute("class", "content-section-title");
  h2.textContent = `${questionIndex + 1}. ${currentQuestion.text}`;

  const ul = document.createElement("ul");
  ul.setAttribute("class", "feedback-list");

  const li1 = document.createElement("li");
  li1.setAttribute("class", "list-item");
  li1.setAttribute("data-value", currentQuestion.choices[0])
  li1.textContent = currentQuestion.choices[0];

  const li2 = document.createElement("li");
  li2.setAttribute("class", "list-item");
  li2.setAttribute("data-value", currentQuestion.choices[1])
  li2.textContent = currentQuestion.choices[1];

  const li3 = document.createElement("li");
  li3.setAttribute("class", "list-item");
  li3.setAttribute("data-value", currentQuestion.choices[2])
  li3.textContent = currentQuestion.choices[2];

  const li4 = document.createElement("li");
  li4.setAttribute("class", "list-item");
  li4.setAttribute("data-value", currentQuestion.choices[3])
  li4.textContent = currentQuestion.choices[3];

  ul.append(li1, li2, li3, li4);

  section.append(h2, ul);

  mainElement.append(section);

  section.addEventListener("click", handleOptionClick);

  // use HTML as guide and build in JS
  // append section to main
  // add click event listener on #question-section
};

const renderGameOver = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderAlert = (message, status) => {
  // use HTML as guide and build in JS
  // append div to #question-section
};


  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form


const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const startQuiz = () => {
  // remove start section
  // start timer
  // render timer section
  // render question section
};


const handleStartButtonClick = () => {
  initialiseLocalStorage();

  renderQuestionSection();

  removeStartSection();
};

startButton.addEventListener("click", handleStartButtonClick)
// add event listeners
// add document on load event listener
// add start button click event listener
