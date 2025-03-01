let quizData;
let currentQuestionIndex = 0;
let timer;
let timeLeft = 60;

document.addEventListener("DOMContentLoaded", () => {
    fetch('quiz.json')
        .then(response => response.json())
        .then(data => {
            quizData = data;
            displayQuiz();
            startTimer();
        });
});

function displayQuiz() {
    document.getElementById('quiz-title').innerText = quizData.quizTitle;
    loadQuestion();
}

function loadQuestion() {
    const questionContainer = document.getElementById('questions-container');
    questionContainer.innerHTML = '';

    const question = quizData.questions[currentQuestionIndex];
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<p>${question.question}</p>`;

    if (question.image) {
        const img = document.createElement('img');
        img.src = question.image;
        img.alt = question.question;
        img.style.width = '100%';
        questionElement.appendChild(img);
    }

    question.options.forEach(option => {
        const optionElement = document.createElement('label');
        optionElement.classList.add('option');
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${option}"> ${option}
        `;
        questionElement.appendChild(optionElement);
    });

    questionContainer.appendChild(questionElement);
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            alert('Time is up!');
            submitQuiz();
        }
        }, 1000);
    }