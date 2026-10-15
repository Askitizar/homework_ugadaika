// Инициализация переменных состояния игры
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Получаем элементы из DOM
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const message = document.getElementById('message');
const attemptsCount = document.getElementById('attempts-count');
const restartBtn = document.getElementById('restart-btn');

// Функция проверки введенного числа
function checkGuess() {
    const userGuess = Number(userInput.value);

    // Проверка на валидность ввода
    if (!userInput.value || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Пожалуйста, введите число от 1 до 100!';
        message.style.color = '#dc3545';
        return;
    }

    // Увеличиваем счетчик попыток
    attempts++;
    attemptsCount.textContent = attempts;

    // Логика сравнения
    if (userGuess > secretNumber) {
        message.textContent = 'Загаданное число меньше';
        message.style.color = '#ffc107';
    } else if (userGuess < secretNumber) {
        message.textContent = 'Загаданное число больше';
        message.style.color = '#17a2b8';
    } else {
        message.textContent = `Вы угадали! Это было число ${secretNumber}.`;
        message.style.color = '#28a745';
        
        // Завершение игры / показ кнопки перезапуска
        checkBtn.disabled = true;
        userInput.disabled = true;
        restartBtn.classList.remove('hidden');
    }

    // Очищаем поле ввода и возвращаем фокус
    userInput.value = '';
    userInput.focus();
}

// Функция сброса игры (новая игра)
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

// Обработчики событий
checkBtn.addEventListener('click', checkGuess);

// Поддержка нажатия клавиши Enter в поле ввода
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

restartBtn.addEventListener('click', resetGame);