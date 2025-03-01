document.addEventListener('DOMContentLoaded', function() {
    const quizTitle = document.getElementById('quiz-title');
    const questionsContainer = document.getElementById('questions-container');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const quizSubmitBtn = document.getElementById('quiz-submit-btn');
    const userDetails = document.getElementById('user-details');
    const detailsSubmitBtn = document.getElementById('details-submit-btn');
    const timer = document.getElementById('timer');
    const timeDisplay = document.getElementById('time');
    let timeLeft = 100;
    let currentQuestionIndex = 0;
    let questions = [];

    // Fetch quiz data
    fetch('./quiz.json')
        .then(response => response.json())
        .then(data => {
            quizTitle.textContent = data.quizTitle;
            questions = data.questions;
            showQuestion(currentQuestionIndex);
        });

    // Timer countdown
    const countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            showUserDetailsForm();
        } else {
            timeLeft--;
            timeDisplay.textContent = timeLeft;
        }
    }, 1000);

    // Show a specific question
    function showQuestion(index) {
        questionsContainer.innerHTML = '';
        const question = questions[index];
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            ${question.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;
        questionsContainer.appendChild(questionDiv);
        if (index === questions.length - 1) {
            nextQuestionBtn.classList.add('hidden');
            quizSubmitBtn.classList.remove('hidden');
        } else {
            nextQuestionBtn.classList.remove('hidden');
            quizSubmitBtn.classList.add('hidden');
        }
    }

    // Show user details form
    function showUserDetailsForm() {
        questionsContainer.classList.add('hidden');
        nextQuestionBtn.classList.add('hidden');
        quizSubmitBtn.classList.add('hidden');
        userDetails.classList.remove('hidden');
    }

    // Handle next question button click
    nextQuestionBtn.addEventListener('click', () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    });

    // Handle quiz submit button click
    quizSubmitBtn.addEventListener('click', () => {
        showUserDetailsForm();
    });

    // Handle user details submit button click
    detailsSubmitBtn.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const grade = document.getElementById('grade').value;
        const section = document.getElementById('section').value;
        if (name && grade && section) {
            alert('Details submitted successfully!');
        } else {
            alert('Please fill in all details.');
        }
    });
});