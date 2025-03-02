// quiz data
const quizdata=[{
question:"1. Which of the following is the correct structure of a basic HTML document?",
options:[
   "<head><body><html></body></head>",
   "<html><body><head></html>",
   "<html><head><body></body></head></html>",
   "<body><head><html></head></body>", 
],
correct:2,
},
{
    question:"2. Which tag is used to define the title of an HTML document?",
options:[
   "<head>",
   "<html>",
   "<body>",
   "<title>", 
],
correct:3,
},
{
    question:"3. Which attribute is used to specify the source of an image in HTML?",
    options:[
       "src",
       "alt",
       "href",
       "link", 
    ],
    correct:0,
},
{
    question:"4. How do you add a comment in HTML?",
    options:[
       "//",
       "<!-- -->",
       "/* */",
       "#", 
    ],
    correct:1,
},
{
    question:"5. Which HTML tag is used to create a clickable button?",
    options:[
       "<button>",
       "<input type='button'>",
       "<click>",
       "Both A and B", 
    ],
    correct:3,
},

];
//initialization
const quiz=document.querySelector("#quiz");
//const scoreele=document.getElementsByClassName("score");
const answerele=document.querySelectorAll(".answer");
const [questionele,option1,option2,option3,option4]=document.querySelectorAll("#question, #option1, #option2, #option3, #option4");
const submitbtn=document.getElementById("submit");
let currentquiz=0;
let score=0;
// load quiz
const loadquiz=() =>{
    const {question,options}=quizdata[currentquiz];
    //console.log(options);
    questionele.innerText=question;
    //scoreele.innerText=`Your Score:${score}/${quizdata.length}`;
    //options.forEach((curop,index)=>(option1.innerText=curop));
    options.forEach((curop,index)=>window[`option${index+1}`].innerText=curop);
};
 
loadquiz();
//get answer on data
const getselectedoption=()=>{
    let ansindex;
    answerele.forEach((curop,index)=>{
        if(curop.checked){
            ansindex=index;
        }
    });
    return ansindex;
};
const deselectedAnswers=()=>{
    return answerele.forEach((curop)=>curop.checked=false);
};
submitbtn.addEventListener('click',()=>{
    const selectedoptionindex=getselectedoption();
    //console.log(selectedoptionindex);
    if(selectedoptionindex === quizdata[currentquiz].correct){
        score+=1;
    }
    currentquiz++;
    
    if(currentquiz<quizdata.length){
        deselectedAnswers();
        loadquiz();

    }
    else{
        quiz.innerHTML=`<div class="result">
        <h2> Your Score:${score}/${quizdata.length} Correct Answers</h2>
        <p> Congrats on completing</p>
        <button class="reload" onclick="location.reload()">Play Again</button>
        </div>`;
    }
});