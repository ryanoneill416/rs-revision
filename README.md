# Road Sign Revision

Road Sign Revision is an interactive learning environment for those who are learning to drive and those looking to test their knowledge of the tricky road signs currently on Irish Roads. it is a fully responsive, mobile and desktop friendly resource which allows users to choose from an array of options for each of the highlighted road signs, which will then provide them with a score and indication of what needs to be improved or celebrated. 

![Responsiveness Mockup](/assets/media/rsr-mockups.webp)

## Home Page Features

- __The Road Sign Revision Logo and Subtitle__
  - Existing at the top of the designated quiz container, the Road Sign Revision logo is at the center of the user's attention.
  - The text element below the heading prompts the user to take action and begin the quiz.

![Logo/Heading](/assets/media/rsr-logo.webp)

- __Main Menu__
  - This section houses the buttons in which will begin the quiz according to the user's choice.
  - The user can choose between a 'Full Quiz' or a 'Pop Quiz'.
  - The 'Full Quiz' consists of twenty randomised road signs.
  - The 'Pop quiz' consists of ten randomised road signs.
  - Upon hovering with the mouse, the buttons grow in size and background color darkens slightly to indicate emphasis.

![Main Menu](/assets/media/rsr-menu.webp)

- __Footer__
  - Existing at the very bottom of the quiz container, the footer provides users with two external links.
  - Upon pressing the Github icon, the user is brought to my Github profile in a new tab.
  - Upon pressing the LinkedIn icon, the user is brought to my LinkedIn profile in a new tab.
  - When hovering above the icons with the mouse, the icons grow and their color darkens.

![Footer Area](/assets/media/rsr-footer.webp)

## In-Game Features

- __Question Area__
  - The question area houses the road sign in which the user is being quizzed.
  - The shown road sign changes depending on the randomised question being shown.
  - The road sign is displayed by a classification that changes the background of the defined area.
  - The question area incorporates a soft box shadow to improve contrast and page readability.

![Question Area](/assets/media/rsr-signholder.webp)

- __Answer Selection__
  - The answer selection area displays four possible answers for users to choose from.
  - When the screen width reaches a maximum value the answers will be displayed as a single column of four rather than two columns of two.
  - When an answer is selected the user is shown the correct and incorrect answers.
  - The correct answer will be highlighted in green and the incorrect in red.

![Answer Selection](/assets/media/rsr-answer-options.webp)

- __Next Question__
  - The next button brings the user to the next question.
  - The next question will be randomly generated and displayed to the user.
  - The previous answer selection area will be removed with a new one being displayed thereafter.

![Next Button](/assets/media/rsr-next-btn.webp)

## End-Game Features

- __End-Game Showcase__
  - The end of game showcase is displayed at the end of the quiz and changes based on the user's score.
  - If a user's score is over 66% the following will occur:
    - The title will display 'Congrats'.
    - The subheading will display 'you're a road sign aficionado'.
    - The picture displayed will be a picture celebrating.

![End Game Showcase Pass](/assets/media/rsr-end-game.webp)

  - If a user's score is under 66% the following will occur:
    - The title will display 'Oops'.
    - The subheading will display 'A little more studying is needed'.
    - The picture displayed will be someone studying.
    - At the bottom of the div the user's score will be presented as the score compared to the possible score.

![End Game Showcase Fail](/assets/media/rsr-end-game-fail.webp)

- __Home Button__
  - The home button is presented below the End-Game showcase.
  - It is shown at the end of the quiz to guide the user back to the main menu.

![Home Button](/assets/media/rsr-home-btn.webp)