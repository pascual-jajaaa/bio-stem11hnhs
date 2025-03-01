let quizData;
let currentQuestionIndex = 0;
let timer;
let timeLeft = 60;
let score = 0; // Initialize score
let userAnswers = []; // Array to store user answers

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

function submitQuiz() {
    clearInterval(timer);
    document.getElementById('questions-container').innerHTML = '<h2>Quiz Finished!</h2>';
    
    // Show user details section
    document.getElementById('user-details').classList.remove('hidden');

    // Calculate and display the score
    calculateScore();
}

function calculateScore() {
    quizData.questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="option"]:checked`);
        if (selectedOption && selectedOption.value === question.answer) {
            score++;
        }
    });

    // Display the score to the user
    alert(`Your score is: ${score} out of ${quizData.questions.length}`);
}

// Add event listener for the submit button
document.getElementById('submit-btn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const grade = document.getElementById('grade').value;
    const section = document.getElementById('section').value;

    // Handle the submission of user details here
    console.log(`Name: ${name}, Grade: ${grade}, Section: ${section}`);
    alert('Thank you for submitting your details!');
});