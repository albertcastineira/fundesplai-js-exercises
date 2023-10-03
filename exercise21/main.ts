let score: number = 0;
let questionsJson = './questions.json';
let questionsList: questionsList;
let currentQuestion: Question;
let questionsCount: number = 0;
let selectedAnswer: string;

interface Question {
    answers: Array<Answer>,
    text: string,
    solutions: Array<string>
}

interface Answer {
    answer: string,
    option: string
}

interface questionsList {
    questions: Array<Question>
}


const questionText = document.querySelector("#question") as HTMLParagraphElement;
const scoreText = document.querySelector("#score") as HTMLParagraphElement;
const restartQuizBtn = document.querySelector("#restartQuizBtn") as HTMLButtonElement;
const quizArea = document.querySelector("#quizArea") as HTMLDivElement;
const buttons = [
    document.querySelector("#optionA") as HTMLButtonElement,
    document.querySelector("#optionB") as HTMLButtonElement,
    document.querySelector("#optionC") as HTMLButtonElement,
    document.querySelector("#optionD") as HTMLButtonElement
]

async function getQuizQuestions(): Promise<questionsList> {
    try {
        const response = await fetch(questionsJson);
        if (!response.ok) {
          throw new Error(`There was a problem importing the JSON`);
        }
        const data: questionsList = await response.json();
        return data;
      } catch (error) {
        throw new Error(`Error importing the JSON`);
    }
}

function getQuestion(num: number): Question {
    return questionsList.questions[num] as Question;
}

function mountQuestion(question: Question): void {
    currentQuestion = question;
    questionText.innerText = `${questionsCount+1}: ${question.text}`;
    question.answers.forEach(answer => {
        let index = question.answers.indexOf(answer);
        buttons[index].innerText = getQuestion(questionsCount).answers[index].answer;
    });
}

function selectThisAnswer(answerOption: string): void {
    selectedAnswer = answerOption;
    resolveQuestion(currentQuestion);
}

function resolveQuestion(question: Question): void {
    questionsCount++;
    if(question.solutions.includes(selectedAnswer)) {
        score ++;
    } else {
        score = score;
    }
    if(questionsCount < questionsList.questions.length) {
        mountQuestion(getQuestion(questionsCount));
    } else {
        showFinalScore();
    }
    
}

function showFinalScore(): void {
    quizArea.style.display = "none";
    scoreText.innerText = `Your final score is ${score.toString()} / ${questionsList.questions.length}`;
    scoreText.style.display = "block";
    restartQuizBtn.style.display = "block";

}

async function initQuiz(): Promise<any> {
    quizArea.style.display = "block";
    scoreText.style.display = "none";
    restartQuizBtn.style.display = "none";
    questionsCount = 0;
    score = 0;
    questionsList = await getQuizQuestions() as questionsList;
    mountQuestion(getQuestion(0));
    return questionsList;
}

initQuiz();