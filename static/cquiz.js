const questions = [
    {
        question: "By default a real number is treated as a",
        optionA: "float",
        optionB: "double",
        optionC: "long double",
        optionD: "far double",
        correctOption: "optionB"
    },

    {
        question: "Which of the following is not logical operator?",
        optionA: "||",
        optionB: "&&",
        optionC: "&",
        optionD: "!",
        correctOption: "optionC"
    },

    {
        question: "Which of the following is the correct usage of conditional operators used in C?",
        optionA: "a>b ? c=30;",
        optionB: "a>b ? c=30 : c=40;",
        optionC: "return (a>b)?(a:b)",
        optionD: "max = a>b ? a>c?a:c:b>c?b:c",
        correctOption: "optionD"
    },

    {
        question: "Can you combine the following two statements into one?  char *p;  p = (char*) malloc(100);",
        optionA: "char *p = (char*)malloc(100);",
        optionB: "char p = *malloc(100);",
        optionC: "char *p = (char) malloc(100);",
        optionD: "char *p = (char *)(malloc*)(100);",
        correctOption: "optionA"
    },

    {
        question: "If a variable is a pointer to a structure, then which of the following operator is used to access data members of the structure through the pointer variable?",
        optionA: ".",
        optionB: "&",
        optionC: "*",
        optionD: "->",
        correctOption: "optionD"
    },

    {
        question: "What does the following declaration mean?  int (*ptr)[10];",
        optionA: "ptr is array of pointers to 10 integers",
        optionB: "ptr is a pointer to an array of 10 integers",
        optionC: "ptr is an array of 10 integers",
        optionD: "ptr is an pointer to array",
        correctOption: "optionB"
    },

    {
        question: "Which of the following function is more appropriate for reading in a multi-word string?",
        optionA: "printf()",
        optionB: "scanf()",
        optionC: "gets()",
        optionD: "puts()",
        correctOption: "optionC"
    },

    {
        question: "How will you free the allocated memory ?",
        optionA: "remove(var-name);",
        optionB: "delete(var-name);",
        optionC: "free(var-name);",
        optionD: "dalloc(var-name);",
        correctOption: "optionC"
    },

    {
        question: "Which standard library function will you use to find the last occurance of a character in a string in C?",
        optionA: "strrchr()",
        optionB: "strrchar()",
        optionC: "strchr()",
        optionD: "strnchr()",
        correctOption: "optionA"
    },

    {
        question: `"What is the purpose of fflush() function.`,
        optionA: "flushes only specified stream.",
        optionB: "flushes input/output buffer.",
        optionC: "flushes file buffer.",
        optionD: "flushes all streams and specified streams.",
        correctOption: "optionD"
    },

    {
        question: "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
        optionA: "4",
        optionB: "5",
        optionC: "7",
        optionD: "10",
        correctOption: "optionB"
    },

    {
        question: "What will the function randomize() do in Turbo C under DOS?",
        optionA: "returns a random number generator with a random value based on time.",
        optionB: "return a random number with a given seed value.",
        optionC: "return a random number with a given seed value.",
        optionD: "returns a random number.",
        correctOption: "optionA"
    },


    {
        question: "Declare the following statement?' An array of three pointers to chars'.",
        optionA: "char **ptr[3];",
        optionB: "char *ptr[3];",
        optionC: "char *ptr[3]();",
        optionD: "char (*ptr[3])();",
        correctOption: "optionB"
    },

    {
        question: "What do the following declaration signify?  int (*pf)();",
        optionA: "pf is a pointer to a function which return int",
        optionB: "pf is a function of pointer variable.",
        optionC: "pf is a function pointer.",
        optionD: "pf is a pointer to function.",
        correctOption: "optionA"
    },

    {
        question: "Which of the following will directly stop the execution of a Thread?",
        optionA: "notify()",
        optionB: "notifyall()",
        optionC: "exits synchronized code",
        optionD: "wait()",
        correctOption: "optionD"
    },

    {
        question: "What is the name of the method used to start a thread execution?:",
        optionA: "init()",
        optionB: "run()",
        optionC: "start()",
        optionD: "resume()",
        correctOption: "optionC"
    },

    {
        question: "Which of the following would compile without error??",
        optionA: "int a = Math.abs(-5);",
        optionB: "int b = Math.abs(5.0)",
        optionC: "int c = Math.abs(5.5F);",
        optionD: "int d = Math.abs(5L);",
        correctOption: "optionA"
    },

    {
        question: "Only the garbage collection system can destroy an object.?",
        optionA: "Runtime.getRuntime().gc()",
        optionB: "x.finalize()",
        optionC: "Only the garbage collection system can destroy an object.",
        optionD: "x.delete()",
        correctOption: "optionC"
    },

    {
        question: "Which of the following is equivalent to random.randrange(3)?",
        optionA: "range(3)",
        optionB: "random.choice(range(0, 3))",
        optionC: "random.shuffle(range(3))",
        optionD: " random.select(range(3))",
        correctOption: "optionB"
    },

    {
        question: "What will be the output of the following Python code?  x = 'abcd'  for i in range(x):  print(i)?",
        optionA: "error",
        optionB: "abcd",
        optionC: "1234",
        optionD: "none of the above",
        correctOption: "optionA"
    },

    {
        question: "What type of data is: a=[(1,1),(2,4),(3,9)] ?",
        optionA: "Invalid type",
        optionB: "Tuples of lists",
        optionC: "Array of tuples",
        optionD: "List of tuples",
        correctOption: "optionD"
    },

    {
        question: "What is called when a function is defined inside a class?",
        optionA: "Module",
        optionB: "Method",
        optionC: "Class",
        optionD: "Another function",
        correctOption: "optionB"
    },

    {
        question: "What will be the output of the following Python code? >>>list('a#b#c#d'.split('#'))",
        optionA: "[‘abcd’]",
        optionB: "[‘a’, ‘b’, ‘c’, ‘d’]",
        optionC: " [‘a b c d’]",
        optionD: "[‘a#b#c#d’]",
        correctOption: "optionB"
    },

    {
        question: " Suppose B is a subclass of A, to invoke the __init__ method in A from B, what is the line of code you should write??",
        optionA: " B.__init__(A)",
        optionB: "A.__init__(B)",
        optionC: " A.__init__(self)",
        optionD: "B.__init__(self)",
        correctOption: "optionC"
    },

    {
        question: " If b is a dictionary, what does any(b) do?",
        optionA: "Method any() doesn’t exist for dictionary",
        optionB: "Returns True if all keys of the dictionary are true",
        optionC: " Returns False if dictionary is empty",
        optionD: "Returns True if any key of the dictionary is true",
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