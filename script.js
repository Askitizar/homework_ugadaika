let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const message = document.getElementById('message');
const attemptsCount = document.getElementById('attempts-count');
const restartBtn = document.getElementById('restart-btn');

function checkGuess() {
    const userGuess = Number(userInput.value);

    if (!userInput.value || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Пожалуйста, введите число от 1 до 100!';
        message.style.color = '#dc3545';
        return;
    }

    attempts++;
    attemptsCount.textContent = attempts;

    if (userGuess > secretNumber) {
        message.textContent = 'Загаданное число меньше';
        message.style.color = '#ffc107';
    } else if (userGuess < secretNumber) {
        message.textContent = 'Загаданное число больше';
        message.style.color = '#17a2b8';
    } else {
        message.textContent = `Вы угадали! Это было число ${secretNumber}.`;
        message.style.color = '#28a745';
        
        checkBtn.disabled = true;
        userInput.disabled = true;
        restartBtn.classList.remove('hidden');
    }

    userInput.value = '';
    userInput.focus();
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsCount.textContent = attempts;
    message.textContent = '';
    
    userInput.value = '';
    userInput.disabled = false;
    checkBtn.disabled = false;
    
    restartBtn.classList.add('hidden');
    userInput.focus();
}

checkBtn.addEventListener('click', checkGuess);

userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

restartBtn.addEventListener('click', resetGame);