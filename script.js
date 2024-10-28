const questions = [
   const questions = [
    { question: "Ikki perpendikulyar to'g'ri chiziq orasidagi burchak qancha?", correctAnswer: "Ha" },
    { question: "Uchburchakning burchaklarining yig'indisi 180 darajaga tengmi?", correctAnswer: "Ha" },
    { question: "To'g'ri moinada barcha tomonlar tengmi?", correctAnswer: "Ha" },
    { question: "Barcha romblar – parallelogrammalarmi?", correctAnswer: "Ha" },
    { question: "Uchburchak ikki to'g'ri burchakka ega bo'lishi mumkinmi?", correctAnswer: "Yo'q" },
    { question: "Diskning maydoni πr² formulasiga ko'ra hisoblanadimi?", correctAnswer: "Ha" },
    { question: "Teng tomonli uchburchakning barcha tomonlari tengmi?", correctAnswer: "Ha" },
    { question: "Parallel to'g'ri chiziqlar kesishadimi?", correctAnswer: "Yo'q" },
    { question: "To'g'ri burchakli uchburchakda gipotenuza – eng uzun tomonmi?", correctAnswer: "Ha" },
    { question: "To'rtburchakning maydoni uning tomonlari ko'paytmasiga tengmi?", correctAnswer: "Ha" },
    { question: "To'g'ri burchakli uchburchakning burchaklari har doim tengmi?", correctAnswer: "Yo'q" },
    { question: "To'rtburchaklar 360 daraja yig'indisiga egami?", correctAnswer: "Ha" },
    { question: "To'rtburchak – parallelogrammani o'z ichiga oladimi?", correctAnswer: "Ha" },
    { question: "Romb ham parallelogrammadirmi?", correctAnswer: "Ha" },
    { question: "Uchburchakda har bir tomonning uzunligi ikki boshqa tomonning uzunligiga teng bo'lishini taklif etuvchi ushbu formula to'g'rimi?", correctAnswer: "Yo'q" },
    { question: "Ovozli burchakning barcha burchaklari tengmi?", correctAnswer: "Ha" },
    { question: "Uchburchakning uzun tomoni gipotenuza deb atalishini taklif etuvchi formula to'g'rimi?", correctAnswer: "Ha" },
    { question: "Butun 360 darajali bir qismdan turgan kvadratdan olingan burchak to'g'rimi?", correctAnswer: "Ha" },
    { question: "Barcha to'rtburchaklar 360 darajali burchaklar orasida bo'ladimi?", correctAnswer: "Ha" },
    { question: "Uchburchakda parallel to'g'ri chiziqlar bormidi?", correctAnswer: "Ha" },
    { question: "Uchburchakda burchaklar bormidi?", correctAnswer: "Ha" },
    { question: "Butun uchburchakda 3 burchak bormidi?", correctAnswer: "Ha" },
    { question: "To'rtburchaklarning uzunliklari to'rt chiziqdan iboratmi?", correctAnswer: "Ha" },
    { question: "Parallel to'g'ri chiziqlar har doim paralleldir?", correctAnswer: "Ha" },
    { question: "Uchburchakda barcha burchaklar tengmi?", correctAnswer: "Ha" },
    { question: "Ikki to'rtburchakda 90 darajaga teng burchaklar bormidi?", correctAnswer: "Ha" },
    { question: "Uchburchaklarda 3 burchak bormidi?", correctAnswer: "Ha" },
    { question: "Disk va kvadratning uzunliklari bir xilmi?", correctAnswer: "Yo'q" },
    { question: "To'rtburchak – parallelogrammani o'z ichiga oladimi?", correctAnswer: "Ha" },
    { question: "Butun uchburchak uzunliklari 90 darajali uzunlikda bo'ladimi?", correctAnswer: "Ha" },
    { question: "Ikki parallel to'g'ri chiziqni kesgan to'g'ri chiziq va burchak bormidi?", correctAnswer: "Ha" },
    { question: "Romb va to'rtburchakning har biri 90 darajaga tengmi?", correctAnswer: "Yo'q" },
    { question: "Uchburchaklarning uch burchagi bormidi?", correctAnswer: "Ha" },
    { question: "To'rtburchakda faqat 1 burchak bormidi?", correctAnswer: "Yo'q" },
    { question: "Parallel to'g'ri chiziqlar har doim uzun bo'ladimi?", correctAnswer: "Ha" },
    { question: "To'rtburchak – parallelogrammani o'z ichiga oladimi?", correctAnswer: "Ha" },
    { question: "Ushbu uchburchakning burchagi 90 darajaga tengmi?", correctAnswer: "Ha" },
    { question: "Uchburchak uzunliklari 3 ta bir xil uzunlikda bo'ladimi?", correctAnswer: "Ha" },
];

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
