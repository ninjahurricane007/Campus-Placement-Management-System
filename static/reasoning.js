const questions = [
    {
        question: "Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
        optionA: "20",
        optionB: "22",
        optionC: "23",
        optionD: "21",
        correctOption: "optionB"
    },

    {
        question: "FAG, GAF, HAI, IAH,___",
        optionA: "JAI",
        optionB: "IAK",
        optionC: "JAK",
        optionD: "IAH",
        correctOption: "optionC"
    },

    {
        question: "Which word does NOT belong with the others?",
        optionA: "Dodge",
        optionB: "Duck",
        optionC: "Avoid",
        optionD: "Flee",
        correctOption: "optionD"
    },

    {
        question: "Here are some words translated from an artificial language. gorblflur means fan belt  pixngorbl means ceiling fan arthtusl means tile roof  Which word could mean 'ceiling tile'?",
        optionA: "pixnarth",
        optionB: "arthflur",
        optionC: "flurgorbl",
        optionD: "gorbltusl",
        correctOption: "optionA"
    },

    {
        question: "Arrange the words given below in a meaningful sequence.  1. Word	2. Paragraph3. Sentence  4. Letters	 5. Phrase?",
        optionA: "4, 1, 5, 2, 3",
        optionB: "4, 1, 3, 5, 2",
        optionC: "4, 2, 5, 1, 3",
        optionD: "4, 1, 5, 3, 2",
        correctOption: "optionD"
    },

    {
        question: "Introducing a boy, a girl said, 'He is the son of the daughter of the father of my uncle.' How is the boy related to the girl?",
        optionA: "Nephew",
        optionB: "Brother",
        optionC: "Uncle",
        optionD: "Father",
        correctOption: "optionB"
    },

    {
        question: "Flow : River :: Stagnant : ?",
        optionA: "Rain",
        optionB: "Stream",
        optionC: "Pool",
        optionD: "Canal",
        correctOption: "optionC"
    },

    {
        question: "Choose the word which is different from the rest.",
        optionA: "Hanger",
        optionB: "Platform",
        optionC: "Park",
        optionD: "Dock",
        correctOption: "optionC"
    },

    {
        question: "Y is in the East of X which is in the North of Z. If P is in the South of Z, then in which direction of Y, is P?",
        optionA: "None of these",
        optionB: "North",
        optionC: "South",
        optionD: "East",
        correctOption: "optionA"
    },

    {
        question: `"Rahul put his timepiece on the table in such a way that at 6 P.M. hour hand points to North. In which direction the minute hand will point at 9.15 P.M. ?:`,
        optionA: "South-East",
        optionB: "North",
        optionC: "South",
        optionD: "West",
        correctOption: "optionD"
    },

    {
        question: "In which year was Rahul born ? Statements: Rahul at present is 25 years younger to his mother. Rahul's brother, who was born in 1964, is 35 years younger to his mother.?",
        optionA: "I alone is sufficient while II alone is not sufficient",
        optionB: "Both I and II are sufficient",
        optionC: "II alone is sufficient while I alone is not sufficient",
        optionD: "Either I or II is sufficient",
        correctOption: "optionB"
    },

    {
        question: "Which one of the following is always found in 'Bravery'?",
        optionA: "Courage",
        optionB: "Experience",
        optionC: "Power",
        optionD: "Knowledge",
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
        question: "A, P, R, X, S and Z are sitting in a row. S and Z are in the centre. A and P are at the ends. R is sitting to the left of A. Who is to the right of P ?",
        optionA: "X",
        optionB: "A",
        optionC: "S",
        optionD: "Z",
        correctOption: "optionA"
    },

    {
        question: "Five girls are sitting on a bench to be photographed. Seema is to the left of Rani and to the right of Bindu. Mary is to the right of Rani. Reeta is between Rani and Mary.Who is sitting immediate right to Reeta ?",
        optionA: "Reetha",
        optionB: "Rani",
        optionC: "Bindu",
        optionD: "Mary",
        correctOption: "optionD"
    },

    {
        question: "One morning Udai and Vishal were talking to each other face to face at a crossing. If Vishal's shadow was exactly to the left of Udai, which direction was Udai facing?",
        optionA: "East",
        optionB: "South",
        optionC: "North",
        optionD: "West",
        correctOption: "optionC"
    },

    {
        question: "The ratio between the perimeter and the breadth of a rectangle is 5 : 1. If the area of the rectangle is 216 sq. cm, what is the length of the rectangle?",
        optionA: "18 cm",
        optionB: "24 cm",
        optionC: "32 cm",
        optionD: "36 cm",
        correctOption: "optionA"
    },

    {
        question: "Pointing to a photograph of a boy Suresh said, 'He is the son of the only son of my mother., How is Suresh related to that boy?",
        optionA: "Uncle",
        optionB: "Cousin",
        optionC: "Father",
        optionD: "Brother",
        correctOption: "optionC"
    },

    {
        question: "If A + B means A is the brother of B; A - B means A is the sister of B and A x B means A is the father of B. Which of the following means that C is the son of M?",
        optionA: "N + M - F x C",
        optionB: "M x N - C + F",
        optionC: "F - C + N x M",
        optionD: "M - N x C + F",
        correctOption: "optionB"
    },

    {
        question: "Statements: All the locks are keys. All the keys are bats. Some watches are bats.  Conclusions: 1.Some bats are locks. 2.Some watches are keys. 3.All the keys are locks.?",
        optionA: "Only (1)",
        optionB: "Only (2)",
        optionC: "Only (1) and (2)",
        optionD: "Only (1) and (3)",
        correctOption: "optionA"
    },

    {
        question: "Statements: All the papers are books. All the bags are books. Some purses are bags. Conclusions: 1.Some papers are bags. 2.Some books are papers. 3.Some books are purses.?",
        optionA: "Only (1)",
        optionB: "Only (1) and (2)",
        optionC: "Only (1) and (3)",
        optionD: "Only (2) and (3)",
        correctOption: "optionD"
    },

    {
        question: "AZ, GT, MN, ?, YB?",
        optionA: "SJ",
        optionB: "SH",
        optionC: "YK",
        optionD: "TI",
        correctOption: "optionB"
    },

    {
        question: "One morning Udai and Vishal were talking to each other face to face at a crossing. If Vishal's shadow was exactly to the left of Udai, which direction was Udai facing??",
        optionA: "South",
        optionB: "Norht",
        optionC: "East",
        optionD: "West",
        correctOption: "optionB"
    },

    {
        question: "The total of the ages of Amar, Akbar and Anthony is 80 years. What was the total of their ages three years ago ?",
        optionA: "72 years",
        optionB: "77 years",
        optionC: "71 years",
        optionD: "70 years",
        correctOption: "optionC"
    },

    {
        question: "I have a few sweets to be distributed. If I keep 2, 3 or 4 in a pack, I am left with one sweet. If I keep 5 in a pack, I am left with none. What is the minimum number of sweets I have to pack and distribute ?",
        optionA: "37",
        optionB: "54",
        optionC: "10",
        optionD: "25",
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