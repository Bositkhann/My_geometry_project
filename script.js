const questions = [
    { question: "Треугольник с равными сторонами называется равносторонним?", answer: true },
    { question: "Сумма углов треугольника равна 200 градусам?", answer: false },
    { question: "Квадрат — это параллелограмм с равными углами?", answer: true },
    { question: "Угол, равный 90 градусам, называется прямым?", answer: true },
    { question: "Круг имеет углы?", answer: false },
    { question: "Медиана треугольника делит его на две равные части?", answer: true },
    { question: "Сумма всех углов квадрата равна 360 градусам?", answer: true },
    { question: "В любом треугольнике сумма двух сторон всегда больше длины третьей стороны?", answer: true }
    // Добавь остальные вопросы до 30 или больше
];

let currentQuestion = 0;

function getRandomQuestion() {
    currentQuestion = Math.floor(Math.random() * questions.length);
    showQuestion();
}

function showQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    document.getElementById("feedback").innerText = "";
}

document.getElementById("yes").addEventListener("click", function() {
    checkAnswer(true);
});

document.getElementById("no").addEventListener("click", function() {
    checkAnswer(false);
});

document.getElementById("next").addEventListener("click", getRandomQuestion);

function checkAnswer(userAnswer) {
    if (userAnswer === questions[currentQuestion].answer) {
        document.getElementById("feedback").innerText = "Barakalla!";
    } else {
        document.getElementById("feedback").innerText = " Xato , To'g'ri javob: " + (questions[currentQuestion].answer ? "Ha" : "Yo'q");
    }
}

// Показать первый вопрос при загрузке страницы
getRandomQuestion();
