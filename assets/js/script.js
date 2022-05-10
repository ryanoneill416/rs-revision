const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const submitButton = document.getElementById('submit-btn');
const studyButton = document.getElementById('revision');
const homeButton = document.getElementById('home-btn');
const popButton = document.getElementById('pop-quiz-btn');
const optionButtonElements = document.getElementById('option-buttons');
const signPlaceholder = document.getElementById('sign-holder');
const questionContainer = document.getElementById('question-container');
const mainMenu = document.getElementById('main-menu');
const scoreboard = document.getElementById('score');
const endGame = document.getElementById('endgame-area');
const endHeading = document.getElementById('present-end');
const endSubtext = document.getElementById('subtext-end');
const endGamePic = document.getElementById('end-pic');

let randomizedSigns;
let currentSign;
let score = 0
let possibleScore;

const roadSigns = [
    {
        sign: 'sign1',
        options: [
            {text: 'Start of obstruction', correct: true},
            {text: 'All roads diverging', correct: false},
            {text: 'Tunnel entrance ahead', correct: false},
            {text: 'Road with many bends', correct: false},
        ]
    },
    {
        sign: 'sign2',
        options: [
            {text: 'Steep incline ahead', correct: false},
            {text: 'Continuous dips in road', correct: false},
            {text: 'Hump or ramp', correct: true},
            {text: 'Bend in road ahead', correct: false},
        ]
    },
    {
        sign: 'sign3',
        options: [
            {text: 'Three-way lane split', correct: false},
            {text: 'Lanes rejoin at crossover', correct: false},
            {text: 'Lanes diverge at crossover', correct: true},
            {text: 'Dangerous road junction', correct: false},
        ]
    },
    {
        sign: 'sign4',
        options: [
            {text: 'Cul-de-sac ahead', correct: false},
            {text: 'Offside lane closed', correct: true},
            {text: 'Nearside lane closed', correct: false},
            {text: 'Start of dual-carriageway', correct: false},
        ]
    },
    {
        sign: 'sign5',
        options: [
            {text: 'Overhead electrical cables', correct: true},
            {text: 'Car chargers ahead', correct: false},
            {text: 'Power outage', correct: false},
            {text: 'Electric tram lane', correct: false},
        ]
    },
    {
        sign: 'sign6',
        options: [
            {text: 'Road closure', correct: false},
            {text: 'No parking', correct: false},
            {text: 'No walking', correct: false},
            {text: 'Clearway', correct: true},
        ]
    },
    {
        sign: 'sign7',
        options: [
            {text: 'Parking allowed', correct: false},
            {text: 'Parking prohibited', correct: true},
            {text: 'No pedestrians', correct: false},
            {text: 'Pedestrianised street', correct: false},
        ]
    },
    {
        sign: 'sign8',
        options: [
            {text: 'Start of motorway', correct: false},
            {text: '4 Lane motorway', correct: false},
            {text: 'Loading bay', correct: false},
            {text: 'Max speed of 80km', correct: true},
        ]
    },
    {
        sign: 'sign9',
        options: [
            {text: 'Road with many bends', correct: false},
            {text: 'Dangerous corners ahead', correct: false},
            {text: 'Slippery road', correct: true},
            {text: 'Heavy rainfall', correct: false},
        ]
    },
    {
        sign: 'sign10',
        options: [
            {text: 'Single lane', correct: true},
            {text: 'Construction work ahead', correct: false},
            {text: 'One way traffic', correct: false},
            {text: 'Roadworks end ahead', correct: false},
        ]
    },
    {
        sign: 'sign11',
        options: [
            {text: 'OptionAd', correct: true},
            {text: 'OptionBd', correct: false},
            {text: 'OptionCd', correct: false},
            {text: 'OptionDd', correct: false},
        ]
    },
    {
        sign: 'sign12',
        options: [
            {text: 'OptionAd', correct: false},
            {text: 'OptionBd', correct: false},
            {text: 'OptionCd', correct: true},
            {text: 'OptionDd', correct: false},
        ]
    },
    {
        sign: 'sign13',
        options: [
            {text: 'OptionAd', correct: false},
            {text: 'OptionBd', correct: true},
            {text: 'OptionCd', correct: false},
            {text: 'OptionDd', correct: false},
        ]
    },
    {
        sign: 'sign14',
        options: [
            {text: 'OptionAd', correct: false},
            {text: 'OptionBd', correct: false},
            {text: 'OptionCd', correct: false},
            {text: 'OptionDd', correct: true},
        ]
    },
    {
        sign: 'sign15',
        options: [
            {text: 'OptionAd', correct: false},
            {text: 'OptionBd', correct: true},
            {text: 'OptionCd', correct: false},
            {text: 'OptionDd', correct: false},
        ]
    },
    {
        sign: 'sign16',
        options: [
            {text: 'OptionAd', correct: true},
            {text: 'OptionBd', correct: false},
            {text: 'OptionCd', correct: false},
            {text: 'OptionDd', correct: false},
        ]
    },
    {
        sign: 'sign17',
        options: [
            {text: 'OptionAd', correct: false},
            {text: 'OptionBd', correct: false},
            {text: 'OptionCd', correct: true},
            {text: 'OptionDd', correct: false},
        ]
    },
    {
        sign: 'sign18',
        options: [
            {text: 'OptionAd', correct: true},
            {text: 'OptionBd', correct: false},
            {text: 'OptionCd', correct: false},
            {text: 'OptionDd', correct: false},
        ]
    },
    {
        sign: 'sign19',
        options: [
            {text: 'OptionAd', correct: false},
            {text: 'OptionBd', correct: false},
            {text: 'OptionCd', correct: false},
            {text: 'OptionDd', correct: true},
        ]
    },
    {
        sign: 'sign20',
        options: [
            {text: 'OptionAd', correct: false},
            {text: 'OptionBd', correct: true},
            {text: 'OptionCd', correct: false},
            {text: 'OptionDd', correct: false},
        ]
    }
]

// learned from w3schools arrow function
// The adding of event listeners
startButton.addEventListener('click', startQuiz);
nextButton.addEventListener('click', () => {
    currentSign++;
    setNextSign();
})

submitButton.addEventListener('click', () => {
    displayEndGame();
    startButton.classList.remove('hide');
    startButton.innerText = 'Try Again';
    homeButton.classList.remove('hide');
    questionContainer.classList.add('hide');
    submitButton.classList.add('hide');
})

popButton.addEventListener('click', startPopQuiz);

/**
 * The main game function which triggers the quiz to start when the user selects the 'Start' button
 */
function startQuiz() {
    popButton.classList.add('hide')
    startButton.classList.add('hide');
    mainMenu.classList.add('hide');
    studyButton.classList.add('hide');
    randomizedSigns = roadSigns.sort(() => Math.random() - .5);
    currentSign = 0;
    score = 0;
    scoreboard.innerHTML = 0;
    questionContainer.classList.remove('hide');
    setNextSign();
}

/**
 * Another game mode selection for a user who only wants to answer half as many questions
 * Splices randomisedsigns into an array of half the length
 */
function startPopQuiz() {
    startButton.classList.add('hide');
    popButton.classList.add('hide');
    mainMenu.classList.add('hide');
    studyButton.classList.add('hide');
    randomizedSigns = roadSigns.sort(() => Math.random() - .5);
    randomizedSigns = randomizedSigns.splice(0,10);
    currentSign = 0;
    score = 0;
    scoreboard.innerHTML = 0;
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
 * Bug fixed that would add class instead of replace
 */
function showSign(roadSign) {
    signPlaceholder.className = roadSign.sign;
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
    homeButton.classList.add('hide');
    endGame.classList.add('hide');
}

/**
 * Adds selection function to option button
 * When the last question is answered the user will be provided with option of trying again
 * Similarly the next button will be removed
 * Correct answer can only be pressed once to avoid inappropriate increase in score
 */
function selectAnswer(e) {
    const selectedOption = e.target;
    const correct = selectedOption.dataset.correct;
    if (correct) {
        increaseScore();
        selectedOption.disabled = true;
    }
    Array.from(optionButtonElements.children).forEach(button => {
        changeOptionColor(button, button.dataset.correct);
    })
    if (randomizedSigns.length > currentSign + 1) {
        nextButton.classList.remove('hide');
    } else {
        nextButton.classList.add('hide');
        submitButton.classList.remove('hide');
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

/**
 * Changes color of option buttons after selection to show the correct/incorrect values
 */
function changeOptionColor(element, correct) {
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/**
 * Increases score of user everytime a correct answer is selected
 */
function increaseScore() {
    score++;
    scoreboard.innerHTML = score;
    possibleScore = randomizedSigns.length;
    scoreboard.textContent += " / " + possibleScore;
}

/**
 * Changes what imagery and heading is displayed at the end of the quiz
 */
function displayEndGame() {
    endGame.classList.remove('hide');
    if (score <= (randomizedSigns.length / 1.33)) {
        endGamePic.className = 'failpic';
        endHeading.innerText = 'Oops!';
        endSubtext.innerText = 'A little studying is needed :)'
    } else {
        endGamePic.className = 'passpic';
        endHeading.innerText = 'Congrats!';
        endSubtext.innerText = "You're a road sign aficionado :)"
    }
}


  