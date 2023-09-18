// Start quiz button 
function runQuiz() { 
    var score = 0;
    for (var i = 0; i < questionsArr.length; i++) {
         var question = questionsArr [i]
         var answer = confirm(question)
        if (answer === true) {
             score++
        }
    }  
    if (score >= 5){
        alert ("You got 100%")
    } 
    if (score <= 0){
        alert ("You got 0%")
    }
    Math.round(score);
    }

//Global variable named questionsArr
    var questionsArr = [ 
    {
        question: "Is a starfish an invertebrate?",
        answer: true
    },
    {
        question: "Do insects have six legs?",
        answer: true
    },
    {
        question: "Do most jellyfish have tentacles?",
        answer: true
    },
    {            
        question: "Are bats are the only mammals that can fly?",
        answer: true
    },
    {
        question: "Do some hummingbirds weigh less than a penny?",
        answer: true
    }
];