// create the current score
localStorage.setItem("currentScore", 0);
// create the best/max score
localStorage.setItem("bestScore", {"user": null, "score": null});
// save the current state
localStorage.setItem("state", "start");
// figure out the question number
localStorage.setItem("questionNumber", 0);


var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "Arrays in JavaScript can be used to store",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "booleans"
    
},
{
    title: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes"
    
},
{
    title: "A very useful tool used during development and debugging for printing content to the debugger is",
    choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
    answer: "console log"
    
},
];

// function to save the score
function scoreSave(hit) {
    // we get add the value of the answer to the existing score
    var answer = hit + localStorage.getItem("currentScore");
    // we save the current score
    localStorage.setItem("currentScore", answer);
}

// clear elelemnts
function clear_buttons(){
    // first remove all the buttons from the div
    //  https://medium.com/front-end-weekly/remove-all-children-of-the-node-in-javascript-968ad8f120eb
    var qDiv = document.getElementById("qDiv");
    qDiv.querySelectorAll('*').forEach(n => n.remove());
}



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

function display_answer(answer="Correct"){
    var node = document.createElement("H3");
    var node2 = document.createElement("HR");
    var textnode = document.createTextNode(answer);
    // We add the text to the buttons
    node.appendChild(textnode);
    // We add a break before each button
    document.getElementById("qDiv").appendChild(node2);
    // We add the button 
    document.getElementById("qDiv").appendChild(node);
    
}

// setTimeout(myFunction, 3000);



function execute(the_answer=""){

    var state = localStorage.getItem("state");
    if (state == 'start'){
        // get the first question
        var Q = questions[0];
        // we set the next question for when the button is hit
        // localStorage.setItem("currentScore", 1);
        // set state to be question
        localStorage.setItem("state", "questions");
        // we first change the question header
        // qHeader
        document.getElementById("qHeader").innerHTML = Q["title"];
        // We remove the paragraph description
        document.getElementById("paragraph").innerHTML = "";
        // Remove our buttons
        clear_buttons();
        // We add the answer buttons
        create_buttons(Q);  

    }

    else if (state == 'questions'){
        var Qnum = Number(localStorage.getItem("questionNumber"));
        // get the current question question
        var Q_curr = questions[Qnum]; 
        // get the current question question

        // validate the answer
        if (the_answer == questions[Qnum]["answer"]){
           var current_score = localStorage.getItem("currentScore") + 1;
           display_answer("Correct");
           setTimeout(console.log('Correct'), 3000)
        }
        else {
            display_answer("Incorrect");
            setTimeout(console.log('Incorrect'), 3000);
        }


        // build next question
        if (Qnum >= (questions.length)) {
            localStorage.setItem("state", "submit");
        }
        else {
            // the question
            var Q = questions[Qnum+1];

            console.log(Qnum+1);            
            document.getElementById("qHeader").innerHTML = Q["title"];
            // Remove our buttons
            clear_buttons();
            // We add the answer buttons
            create_buttons(Q);  
            localStorage.setItem("questionNumber", Qnum+1);            

        }
    }

    else if (state == 'submit'){

        // set state to be question
        localStorage.setItem("state", "topScore");        
    }
    else if (state == 'topScore'){


        // set state to be question
        localStorage.setItem("state", "start");           
    }  
}  