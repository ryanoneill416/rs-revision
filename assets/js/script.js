const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const optionButtonElements = document.getElementById('option-buttons');
const signPlaceholder = document.getElementById('sign-holder');
const questionContainer = document.getElementById('question-container');
const homeButton = document.getElementById('home-btn');

let randomizedSigns;
let currentSign;

const roadSigns = [
    {
        sign: 'Sign 1',
        options: [
            {text: 'OptionA', correct: true},
            {text: 'OptionB', correct: false},
            {text: 'OptionC', correct: false},
            {text: 'OptionD', correct: false},
        ]
    },
    {
        sign: 'Sign 2',
        options: [
            {text: 'OptionAA', correct: false},
            {text: 'OptionBA', correct: true},
            {text: 'OptionCA', correct: false},
            {text: 'OptionDA', correct: false}
        ]
    }
]

// learned from w3schools arrow function
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentSign++;
    setNextSign();
})

/**
 * The main game function which triggers the quiz to start when the user selects the 'Start' button
 */
function startQuiz() {
    startButton.classList.add('hide');
    randomizedSigns = roadSigns.sort(() => Math.random() - .5);
    currentSign = 0;
    questionContainer.classList.remove('hide');
    setNextSign();
}

/**
 * The function the option buttons of the previous question 
 * Also presents the next road sign
 */
function setNextSign() {
    resetOptions();
    showSign(randomizedSigns[currentSign]);
}

/**
 * Sets current sign to answer
 * Makes button elements for the user to make their selection
 * Assigns correct datatype to correct answer
 */
function showSign(roadSign) {
    signPlaceholder.innerText = roadSign.sign;
    roadSign.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        if (option.correct) {
            button.dataset.correct = option.correct;
        }
        button.addEventListener('click', selectAnswer);
        optionButtonElements.appendChild(button);
    });
    nextButton.classList.add('hide');
}

/**
 * Adds selection function to option button
 * When the last question is answered the user will be provided with option of trying again
 * Similarly the next button will be removed
 */
function selectAnswer(e) {
    const selectedOption = e.target;
    const correct = selectedOption.dataset.correct;
    Array.from(optionButtonElements.children).forEach(button => {
        changeOptionColor(button, button.dataset.correct);
    })
    if (randomizedSigns.length > currentSign + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.classList.remove('hide');
        startButton.innerText = 'Restart Quiz';
        nextButton.classList.add('hide');
        homeButton.classList.remove('hide');
    }
    nextButton.classList.add('game-btn');
    startButton.classList.add('game-btn');
    homeButton.classList.add('game-btn');
}

/**
 * Removes previously added option buttons irrelevant to current question
 */
function resetOptions() {
    while (optionButtonElements.firstChild) {
        optionButtonElements.removeChild(optionButtonElements.firstChild);
    }
}

function changeOptionColor(element, correct) {
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

