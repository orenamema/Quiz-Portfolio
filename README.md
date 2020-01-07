# Quiz-Portfolio
# Web APIs Homework: Code Quiz

## Introduction

In this assignment we were asked to build a code quiz with multiple-choice questions. It needed to be timer-based quiz application that stores high scores client-side. Following are the rules of the quiz:

* The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.


* Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.


* Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).


* When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.

![alt text](https://github.com/orenamema/Quiz-Portfolio/raw/master/assets/images/quiz2.gif)


There are 3 files:

* `index.html`
* `questions.js`
* `style.css`

Here is the link to the page https://orenamema.github.io/Quiz-Portfolio/

## Requirements

Following are the requirements that the page needs to meet.

* Functional, deployed application.
* GitHub repository with README describing project.
* The first view of the application displays a button that starts the quiz.
* Clicking the start button displays a series of questions.
* Once the quiz begins, a timer starts.
* If a question is answered incorrectly, additional time is subtracted from the timer.
* The timer stops when all questions have been answered or the timer reaches 0.
* After the game ends, the user can save their initials and score to a highscores view using local storage.


## Website

Functions for the buttons:

```javascript

   function create_buttons(Q){
    // We add the answer buttons
    var i;
    for (i = 0; i < Q['choices'].length; i++) {
        var node = document.createElement("BUTTON");
        var node2 = document.createElement("BR");
        var textnode = document.createTextNode(Q['choices'][i]);
        // We add execute functionality to the buttons 
        node.setAttribute("onclick", "execute('" + Q['choices'][i] + "')");
        // We add the text to the buttons
        node.appendChild(textnode);
        // We add a class to the node
        node.classList.add("quizButton");
        // We add a break before each button
        document.getElementById("qDiv").appendChild(node2);
        // We add the button 
        document.getElementById("qDiv").appendChild(node);
    }        
}


  
