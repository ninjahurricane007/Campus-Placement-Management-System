const questions = [
    {
        question: "What does HTML stand for?",
        optionA: "Home Tool Markup Language",
        optionB: "Hyper Text Markup Language",
        optionC: " Hyperlinks and Text Markup Language",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        optionA: "120 metres",
        optionB: "220 metres",
        optionC: "150 metres",
        optionD: "180 metres",
        correctOption: "optionC"
    },

    {
        question: "The ratio between the speeds of two trains is 7 : 8. If the second train runs 400 km in 4 hours, then the speed of the first train is:",
        optionA: "70 km/hr",
        optionB: "75.7 km/hr",
        optionC: "83 km/hr",
        optionD: "87.5km/hr",
        correctOption: "optionD"
    },

    {
        question: "5, 6, 9, 15, ?, 40",
        optionA: "25",
        optionB: "27",
        optionC: "33",
        optionD: "21",
        correctOption: "optionA"
    },

    {
        question: "Pointing to a photograph of a boy Suresh said, 'He is the son of the only son of my mother'. How is Suresh related to that boy?",
        optionA: "Brother",
        optionB: "Mother",
        optionC: "Cousin",
        optionD: "Father",
        correctOption: "optionD"
    },

    {
        question: "A train running at the speed of 60 km/hr crosses a pole in 9 seconds. What is the length of the train?",
        optionA: "180 metres",
        optionB: "150 metres",
        optionC: "324 metres",
        optionD: "120 metres",
        correctOption: "optionB"
    },

    {
        question: "A, B and C can do a piece of work in 20, 30 and 60 days respectively. In how many days can A do the work if he is assisted by B and C on every third day?",
        optionA: "12 days",
        optionB: "16 days",
        optionC: "15 days",
        optionD: "18 days",
        correctOption: "optionC"
    },

    {
        question: "A sum of money at simple interest amounts to Rs. 815 in 3 years and to Rs. 854 in 4 years. The sum is:",
        optionA: "Rs. 650",
        optionB: "Rs. 690",
        optionC: "Rs. 698",
        optionD: "Rs. 700",
        correctOption: "optionC"
    },

    {
        question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is",
        optionA: "16",
        optionB: "12",
        optionC: "18",
        optionD: "15",
        correctOption: "optionA"
    },

    {
        question: `"The population of a town increased from 1,75,000 to 2,62,500 in a decade. The average percent increase of population per year is:`,
        optionA: "6.8%",
        optionB: "8.2%",
        optionC: "4.3%",
        optionD: "5%",
        correctOption: "optionD"
    },

    {
        question: "It was Sunday on Jan 1, 2006. What was the day of the week Jan 1, 2010?",
        optionA: "Saturday",
        optionB: "Friday",
        optionC: "Sunday",
        optionD: "Monday",
        correctOption: "optionB"
    },

    {
        question: "A clock is started at noon. By 10 minutes past 5, the hour hand has turned through:",
        optionA: "155°",
        optionB: "145°",
        optionC: "160°",
        optionD: "175°",
        correctOption: "optionA"
    },


    {
        question: "The average of 20 numbers is zero. Of them, at the most, how many may be greater than zero?",
        optionA: "0",
        optionB: "19",
        optionC: "1",
        optionD: "10",
        correctOption: "optionB"
    },

    {
        question: "An error 2% in excess is made while measuring the side of a square. The percentage of error in the calculated area of the square is:",
        optionA: "4.04%",
        optionB: "5.04%",
        optionC: "4.84%",
        optionD: "5.02%",
        correctOption: "optionA"
    },

    {
        question: "Fate smiles ...... those who untiringly grapple with stark realities of life.",
        optionA: "with",
        optionB: "round",
        optionC: "over",
        optionD: "on",
        correctOption: "optionD"
    },

    {
        question: "Choose the word which is the exact OPPOSITE of RELINQUISH.",
        optionA: "Deny",
        optionB: "Renounce",
        optionC: "Possess",
        optionD: "Abdicate",
        correctOption: "optionC"
    },

    {
        question: "Choose the one which can be substituted for the given sentence:Extreme old age when a man behaves like a fool",
        optionA: "Dotage",
        optionB: "Senility",
        optionC: "Superannuation",
        optionD: "Imbecility",
        correctOption: "optionA"
    },

    {
        question: "SCD, TEF, UGH, ____, WKL",
        optionA: "UJI",
        optionB: "IJT",
        optionC: "VIJ",
        optionD: "CMN",
        correctOption: "optionC"
    },

    {
        question: "Marathon is to race as hibernation is to",
        optionA: "Winter",
        optionB: "sleep",
        optionC: "Dream",
        optionD: "Bear",
        correctOption: "optionB"
    },

    {
        question: "What least number must be added to 1056, so that the sum is completely divisible by 23 ?",
        optionA: "2",
        optionB: "5",
        optionC: "18",
        optionD: "21",
        correctOption: "optionA"
    },

    {
        question: "Find the greatest number that will divide 43, 91 and 183 so as to leave the same remainder in each case. ?",
        optionA: "13",
        optionB: "9",
        optionC: "7",
        optionD: "4",
        correctOption: "optionD"
    },

    {
        question: "The least perfect square, which is divisible by each of 21, 36 and 66 is: ?",
        optionA: "231444",
        optionB: "213444",
        optionC: "241443",
        optionD: "214333",
        correctOption: "optionB"
    },

    {
        question: "Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is:?",
        optionA: "1 : 5",
        optionB: "4 : 5",
        optionC: "2 : 5",
        optionD: "4 : 6",
        correctOption: "optionB"
    },

    {
        question: "A boat can travel with a speed of 13 km/hr in still water. If the speed of the stream is 4 km/hr, find the time taken by the boat to go 68 km downstream. ?",
        optionA: "1 hours",
        optionB: "3 hours",
        optionC: "4 hours",
        optionD: "6 hours",
        correctOption: "optionC"
    },

    {
        question: "ZA5, Y4B, XC6, W3D, _____ ?",
        optionA: "E7V",
        optionB: "V2E",
        optionC: "VE5",
        optionD: "VE7",
        correctOption: "optionD"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}