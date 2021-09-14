
// first 557 lines are the questions arrays

const webDevQues = [
    num1 = {
        question : 'what year was javascript created ?',
        answer: 2,
        asked: false,
        options:[
            option1 = {
                value : '1994',
                number: 1
            },
            option2 = {
                value : '1995',
                number: 2
            },
            option3 = {
                value : '1993',
                number: 3
            },
            option4 = {
                value : '1996',
                number: 4
            }
        ]
    },
    num2 = {
        question : 'what is the correct console logging statements ?',
        answer: 3,
        asked: false,
        options:[
            option1 = {
                value : 'console.log{}',
                number: 1
            },
            option2 = {
                value : 'log()',
                number: 2
            },
            option3 = {
                value : 'console.log()',
                number: 3
            },
            option4 = {
                value : 'consoleLog()',
                number: 4
            }
        ]
    },
    num3 = {
        question : 'what does CSS stand for ?',
        answer: 2,
        asked: false,
        options : [
            option1 = {
                value : 'Cascading Simple Sheets',
                number: 1
            },
            option2 = {
                value : 'cascading styles sheets',
                number: 2
            },
            option3 = {
                value : 'Central Style Sheets',
                number: 3
            },
            option4 = {
                value : 'Cars SUVs Sailboats',
                number: 4
            }
        ]
    },
    num4 = {
        question : 'what does HTML stand for ?',
        answer: 1,
        asked: false,
        options : [
            option1 = {
                value : 'Hypertext Markup Language',
                number: 1
            },
            option2 = {
                value : 'Hypertext Markdown Language',
                number: 2
            },
            option3 = {
                value : 'Hyperloop Machine Language',
                number: 3
            },
            option4 = {
                value : 'Helicopters Terminals Motorboats Lamborginis',
                number: 4
            }
        ]
    },
];
const historyQues = [
    num1 = {
        question : 'what year did the titanic sink ?',
        answer: 3,
        asked: false,
        options:[
            option1 = {
                value : '2020',
                number: 1
            },
            option2 = {
                value : '1915',
                number: 2
            },
            option3 = {
                value : '1912',
                number: 3
            },
            option4 = {
                value : '1910',
                number: 4
            }
        ]
    },
    num2 = {
        question : 'which group of people once ruled norway ?',
        answer: 2,
        asked: false,
        options:[
            option1 = {
                value : 'nerds',
                number: 1
            },
            option2 = {
                value : 'vikings',
                number: 2
            },
            option3 = {
                value : 'arabs',
                number: 3
            },
            option4 = {
                value : 'romans',
                number: 4
            }
        ]
    },
    num3 = {
        question : 'who was the first king in england ?',
        answer: 4,
        asked: false,
        options : [
            option1 = {
                value : 'queen elizabeth',
                number: 1
            },
            option2 = {
                value : 'king eriksen',
                number: 2
            },
            option3 = {
                value : 'king patrick',
                number: 3
            },
            option4 = {
                value : 'king egbert',
                number: 4
            }
        ]
    },
    num4 = {
        question : 'Cleopatra 7 was a legendary ruler of ...',
        answer: 3,
        asked: false,
        options : [
            option1 = {
                value : 'america',
                number: 1
            },
            option2 = {
                value : 'lebanon',
                number: 2
            },
            option3 = {
                value : 'Egypt',
                number: 3
            },
            option4 = {
                value : 'saudi arabia',
                number: 4
            }
        ]
    },
    num5 = {
        question : 'In which civilization did the first Olympic games take place ?',
        answer: 1,
        asked: false,
        options : [
            option1 = {
                value : 'Ancient greece',
                number: 1
            },
            option2 = {
                value : 'Rome',
                number: 2
            },
            option3 = {
                value : 'Egypt',
                number: 3
            },
            option4 = {
                value : 'germany',
                number: 4
            }
        ]
    },
    num6 = {
        question : 'What was the name of the first video posted on youtube ?',
        answer: 1,
        asked: false,
        options : [
            option1 = {
                value : 'me at the zoo',
                number: 1
            },
            option2 = {
                value : 'hello youtube',
                number: 2
            },
            option3 = {
                value : 'hello world',
                number: 3
            },
            option4 = {
                value : 'first video ever',
                number: 4
            }
        ]
    },
    num7 = {
        question : 'What year wha the iphone invented ?',
        answer: 3,
        asked: false,
        options : [
            option1 = {
                value : '2005',
                number: 1
            },
            option2 = {
                value : '2006',
                number: 2
            },
            option3 = {
                value : '2007',
                number: 3
            },
            option4 = {
                value : '2008',
                number: 4
            }
        ]
    },
    num8 = {
        question : 'Who invented instagram ?',
        answer: 4,
        asked: false,
        options : [
            option1 = {
                value : 'kevin feidge',
                number: 1
            },
            option2 = {
                value : 'mark zuckerberg',
                number: 2
            },
            option3 = {
                value : 'Chris Hemsworth',
                number: 3
            },
            option4 = {
                value : 'kevin Systrom',
                number: 4
            }
        ]
    },
];
const cinemaQues = [
    num1 = {
        question : 'In The Matrix, does Neo take the blue pill or the red pill ?',
        answer: 1,
        asked: false,
        options:[
            option1 = {
                value : 'red',
                number: 1
            },
            option2 = {
                value : 'blue',
                number: 2
            }
        ]
    },
    num2 = {
        question : 'For what movie did Tom Hanks score his first Academy Award nomination ?',
        answer: 3,
        asked: false,
        options:[
            option1 = {
                value : 'cast away',
                number: 1
            },
            option2 = {
                value : 'the green mile',
                number: 2
            },
            option3 = {
                value : 'big',
                number: 3
            },
            option4 = {
                value : 'forrest gump',
                number: 4
            }
        ]
    },
    num3 = {
        question : 'What flavor of Pop Tarts does Buddy the Elf use in his spaghetti in Elf ?',
        answer: 2,
        asked: false,
        options : [
            option1 = {
                value : 'strawberry',
                number: 1
            },
            option2 = {
                value : 'chocolate',
                number: 2
            },
            option3 = {
                value : 'vanilla',
                number: 3
            }
        ]
    },
    num4 = {
        question : 'What pop vocal group performs at the wedding in Bridesmaids ?',
        answer: 4,
        asked: false,
        options : [
            option1 = {
                value : 'one direction',
                number: 1
            },
            option2 = {
                value : 'The Beatles',
                number: 2
            },
            option3 = {
                value : 'The Beach Boys',
                number: 3
            },
            option4 = {
                value : 'Wilson Phillips',
                number: 4
            }
        ]
    },
    num5 = {
        question : 'Who played Juror Number 8 in 12 Angry Men ?',
        answer: 1,
        asked: false,
        options : [
            option1 = {
                value : 'Henry Fonda',
                number: 1
            },
            option2 = {
                value : 'tom hanks',
                number: 2
            },
            option3 = {
                value : 'ed begley',
                number: 3
            },
            option4 = {
                value : 'jack klugman',
                number: 4
            }
        ]
    },
    num6 = {
        question : 'The head of what kind of animal is front-and-center in an infamous scene from The Godfather ?',
        answer: 3,
        asked: false,
        options : [
            option1 = {
                value : 'a dog',
                number: 1
            },
            option2 = {
                value : 'a cow',
                number: 2
            },
            option3 = {
                value : 'a horse',
                number: 3
            },
            option4 = {
                value : 'a bull',
                number: 4
            }
        ]
    },
    num7 = {
        question : 'What Hollywood movie star plays himself in Zombieland ?',
        answer: 2,
        asked: false,
        options : [
            option1 = {
                value : 'Woody Harrelson',
                number: 1
            },
            option2 = {
                value : 'Bill Murray',
                number: 2
            },
            option3 = {
                value : 'Jesse Adam Eisenberg',
                number: 3
            },
            option4 = {
                value : 'Avan Tudor Jogia',
                number: 4
            }
        ]
    },
    num8 = {
        question : 'What is the highest-grossing R-rated movie of all time ?',
        answer: 4,
        asked: false,
        options : [
            option1 = {
                value : 'deadpool',
                number: 1
            },
            option2 = {
                value : 'fifty shades of grey',
                number: 2
            },
            option3 = {
                value : 'the matrix reloaded',
                number: 3
            },
            option4 = {
                value : 'joker',
                number: 4
            }
        ]
    },
    num9 = {
        question : 'How many suns does Luke’s home planet of Tatooine have in Star Wars ?',
        answer: 1,
        asked: false,
        options : [
            option1 = {
                value : 'two',
                number: 1
            },
            option2 = {
                value : 'three',
                number: 2
            },
            option3 = {
                value : 'five',
                number: 3
            },
            option4 = {
                value : 'eight',
                number: 4
            }
        ]
    },
    num10 = {
        question : 'What is the highest-grossing movie of all time when not taking inflation into account ?',
        answer: 3,
        asked: false,
        options : [
            option1 = {
                value : 'avatar',
                number: 1
            },
            option2 = {
                value : 'deadpool',
                number: 2
            },
            option3 = {
                value : 'avengers: Endgame',
                number: 3
            },
            option4 = {
                value : 'joker',
                number: 4
            }
        ]
    },
    num11 = {
        question : 'What is the highest-grossing war movie of all time and Clint Eastwood’s highest-grossing movie ever ?',
        answer: 2,
        asked: false,
        options : [
            option1 = {
                value : 'Heartbreak Ridge',
                number: 1
            },
            option2 = {
                value : 'American Sniper ',
                number: 2
            },
            option3 = {
                value : 'The Outlaw Josey Wales',
                number: 3
            },
            option4 = {
                value : 'Flags of Our Fathers ',
                number: 4
            },
            option5 = {
                value : 'Letters From Iwo Jima ',
                number: 5
            }
        ]
    },
    num12 = {
        question : 'What Martin Scorsese movie holds the all-time record for F-bombs ?',
        answer: 5,
        asked: false,
        options : [
            option1 = {
                value : 'shutter island',
                number: 1
            },
            option2 = {
                value : 'the irishman',
                number: 2
            },
            option3 = {
                value : 'casino',
                number: 3
            },
            option4 = {
                value : 'silence',
                number: 4
            },
            option5 = {
                value : 'The Wolf of Wall Street ',
                number: 5
            }
        ]
    }
];


let questions = [];

let questionAsked = 0;
let answeredRight = 0;

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

const startBtn = document.getElementById('startBtn');
const noBtn = document.getElementById('noBtn');
const welcomeText = document.getElementsByClassName('welcomeText')[0];
const welcome__under = document.getElementsByClassName('welcome__under')[0];
const body = document.getElementById('body');
const subjectBackdrop = document.getElementById('backdrop');

noBtn.addEventListener('click', ()=>{
    alert('why');
});

// intialising the quiz div
const quizDiv = document.createElement('div');
quizDiv.classList.add('quizDiv');
quizDiv.classList.add('transition');
const questionText = document.createElement('h2');
questionText.setAttribute('id','question');
const optionsList = document.createElement('ul');
optionsList.classList.add('options');

function rand(length){
    return Math.floor(Math.random()*length);
}

// this function return the percentage of the questions answered right
function percentageFunc(input){
    return Math.floor((input * 100) / questions.length);
}

// this function evaluate the user based on the questions he got right
function evaluate(input){
    if(input === questions.length){
        return 'genius :o';
    }
    else if(input > Math.ceil(questions.length/1.5)){
        return 'great work';
    }
    else if(input >= Math.ceil(questions.length/2)){
        return 'you can do better';
    }
    else{
        return 'keep training :(';
    }
}

// filling the question array based on the topic choosed
function subjectChoosing(e){
    if(e.value === 'default'){
        questions = [];
    }else if(e.value === 'webDevQues'){
        questions = [...webDevQues];
    }else if(e.value === 'historyQues'){
        questions = [...historyQues];
    }else if(e.value === 'cinemaQues'){
        questions = [...cinemaQues];
    }
}

// we call this function when the user finishe the quiz to display the results
function initialisingResultDiv(){
    let result = document.createElement('div');
    result.classList.add('result');
    let result__left = document.createElement('div');
    result__left.classList.add('result__left');
    let result__heading = document.createElement('h2');
    result__heading.classList.add('result__heading');
    result__heading.innerText = 'your result :';
    let result__paragraph = document.createElement('p');
    result__paragraph.classList.add('result__paragraph');
    result__paragraph.innerText = `you answered ${answeredRight} questions right.`;
    let classification = document.createElement('p');
    classification.classList.add('classification');
    classification.innerText = `${evaluate(answeredRight)}`;
    let reset = document.createElement('button');
    reset.setAttribute('id','reset');
    reset.innerText = 'Try Again';
    let result__right = document.createElement('div');
    result__right.classList.add('result__right');
    let percentage = document.createElement('h2');
    percentage.classList.add('percentage');
    percentage.innerText = `${percentageFunc(answeredRight)}%`;
    result__left.appendChild(result__heading);
    result__left.appendChild(result__paragraph);
    result__left.appendChild(classification);
    result__left.appendChild(reset);
    result__right.appendChild(percentage);
    result.appendChild(result__left);
    result.appendChild(result__right);
    body.appendChild(result);
}

async function getQuestion(){
    const questionNum = questions[rand(questions.length)];

    // when all the questions are asked we display the user's result
    if(questionAsked === questions.length){
        body.innerHTML = '';
        initialisingResultDiv()
        
        document.getElementById('reset').addEventListener('click',()=>{
            window.location.reload();
        });
        return;
    }
    // to get a question that was not yet asked
    if(!questionNum.asked){
        questionText.innerHTML = questionNum.question;
        const answer = questionNum.answer;
        
        optionsList.innerHTML = '';
        questionNum.options.forEach(option =>{
            optionsList.innerHTML += `<li class="option__item transition" data-number="${option.number}">${option.value}</li>`;
        })
        optionsList.querySelectorAll('.option__item').forEach( option =>{
            option.addEventListener('click',()=>{
                // get to the next question
                if(option.getAttribute('data-number') == answer){
                    answeredRight++;
                    questionAsked++;
                    getQuestion();
                }
                else{
                    questionAsked++;
                    getQuestion();
                }
            })
        });
        
        await sleep(200)
        quizDiv.style.opacity = '1';
        quizDiv.style.transform = 'none';
        questionNum.asked = true;
    }
    // if the question was already asked we fetch another 
    else{
        getQuestion()
    }
}

startBtn.addEventListener('click',async ()=>{

    if(questions.length === 0){
        alert('please choose a topic');
        return
    }
    startBtn.style.transform = 'translateY(300px)';
    await sleep(100);
    noBtn.style.transform = 'translateY(300px)';
    await sleep(100);
    document.getElementById('backdrop').style.transform = 'translateY(500px)';
    await sleep(200);
    welcome__under.style.transform = 'translateY(500px)';
    await sleep(200);
    welcomeText.style.animationName = 'hanging';
    await sleep(1500)
    body.innerHTML = '';

    quizDiv.appendChild(questionText)
    quizDiv.appendChild(optionsList);
    body.appendChild(quizDiv);

    getQuestion();
});
