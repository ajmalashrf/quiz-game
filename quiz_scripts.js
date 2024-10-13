const correctAnswers = {
    cpu: 'central processing unit',
    psu: 'power supply unit',
    gpu: 'graphics processing unit',
    pdu: 'protocol data unit',
    url: 'uniform resource locator'
};

function submitQuiz() {
    let score = 0;
    const totalQuestions = 5;

    // Get the user's selected answers
    const userAnswers = {
        cpu: document.querySelector('input[name="cpu"]:checked')?.value,
        psu: document.querySelector('input[name="psu"]:checked')?.value,
        gpu: document.querySelector('input[name="gpu"]:checked')?.value,
        pdu: document.querySelector('input[name="pdu"]:checked')?.value,
        url: document.querySelector('input[name="url"]:checked')?.value
    };

    // Calculate the score
    for (let key in correctAnswers) {
        if (userAnswers[key] && userAnswers[key].toLowerCase() === correctAnswers[key]) {
            score++;
        }
    }

    // Show results
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-section').style.display = 'block';
    document.getElementById('score').innerText = `You got ${score} out of ${totalQuestions} correct!`;
    document.getElementById('percentage').innerText = `Your score percentage is ${(score / totalQuestions) * 100}%`;
}

function restartQuiz() {
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('result-section').style.display = 'none';
    document.querySelectorAll('input[type="radio"]').forEach((input) => input.checked = false);
}
