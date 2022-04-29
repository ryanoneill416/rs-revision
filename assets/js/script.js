const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const optionButtonElements = document.getElementById('option-buttons');
const signPlaceholder = document.getElementById('sign-holder');
const questionContainer = document.getElementById('question-container');

let randomizedSigns;
let currentSign;

const roadSigns = [
    {
        sign: 'Sign 1',
        options: [
            {text: 'OptionA', correct: true},
            {text: 'OptionB', correct: true},
            {text: 'OptionC', correct: true},
            {text: 'OptionD', correct: true},
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
 * The main game function which triggers the quiz to start when the useer selects the 'Start' button
 */
function startQuiz() {
    startButton.classList.add('hide');
    randomizedSigns = roadSigns.sort(() => Math.random() - .5);
    currentSign = 0;
    questionContainer.classList.remove('hide');
    setNextSign();
}

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
}

function selectAnswer() {

}

function resetOptions() {

}