// global declarations
let questionIndex = 0;
let timerValue = 10 * 5;
let quizComplete = false;

const startButton = document.getElementById("start-btn");

const bannerSection = document.getElementById("banner");

const mainElement = document.getElementById("main");

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

const validateAnswer = () => {
  // get answer clicked from user
  // get the correct answer for question
  // compare the 2 answers
  // if incorrect subtract 5 seconds from timerValue
  // if incorrect render error alert with message and status
  // if correct render success alert with message and status
  // set timeout for 500ms and then go to next question
  // if question is last question set quizComplete to true and then render form
  // if question is not last question then increment question index and render next question
};

const handleFormSubmit = () => {
  // get value from input
  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const renderTimerSection = () => {
  // use HTML as guide and build in JS
  // append section to main
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

const renderResults = () => {

};

const renderForm = () => {

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
  renderQuestionSection();

  removeStartSection();
};

startButton.addEventListener("click", handleStartButtonClick)
// add event listeners
// add document on load event listener
// add start button click event listener
