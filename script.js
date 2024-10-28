const questions = [
  
   
        { question: "Har bir uchburchakning burchaklarining yig'indisi 180 daraja.", answer: true },
        { question: "Ikki parallel to'g'ri chiziq kesishishi mumkin.", answer: false },
        { question: "To'g'ri burchakli uchburchakda gipotenuza eng uzun tomon.", answer: true },
        { question: "Rombning barcha tomonlari tengdir.", answer: true },
        { question: "Har bir to'rtburchakning burchaklari 90 daraja.", answer: false },
        
        { question: "Uchinchi burchakning o'rnini anglatadigan burchak to'g'ri burchakmi?", answer: false },
        { question: "Parallelogramma uchta tomon teng.", answer: false },
        { question: "Teng tomonli uchburchakda burchaklar teng.", answer: true },
        { question: "Ikki to'g'ri chiziq parallel bo'lsa, ularning burchaklari har doim 180 daraja bo'ladi.", answer: false },
        { question: "Har qanday to'g'ri burchakli uchburchakda 45 daraja burchak bo'lishi mumkin.", answer: true },
        { question: "Har bir rombda to'rt to'g'ri burchak mavjud.", answer: false },
        { question: "Ikki to'g'ri chiziq parallel bo'lsa, ularning burchaklari 90 daraja.", answer: false },
        { question: "Uchburchakning barcha burchaklari har doim 60 daraja bo'ladi.", answer: false },
        { question: "To'rtburchakda barcha burchaklar bir xil.", answer: true },
        { question: "Romb va parallelogramma har doim teng.", answer: false },
        { question: "To'g'ri burchakli uchburchakda burchaklarning yig'indisi 90 daraja.", answer: false },
        { question: "Barcha parallelogrammalarning diagonallari bir-birini kesadi.", answer: true },
        { question: "Burchaklar yig'indisi har doim 360 daraja.", answer: true },
        { question: "To'rtburchakdagi har bir burchakning yig'indisi 360 daraja.", answer: true },
        { question: "Uchinchi burchakning qiymati 90 daraja bo'lgan uchburchakda, qolgan burchaklar tengdir.", answer: false },
       ,
        { question: "Har bir parallelogramma ikkita qarama-qarshi to'g'ri burchakga ega.", answer: true },
        { question: "Rombda hamma burchaklar tengdir.", answer: false },
        { question: "To'rtburchakda ikkita diagonali har doim bir-birini kesishadi.", answer: true },
        { question: "Har qanday uchburchakda burchaklar orasida kesishadigan chiziqlar mavjud.", answer: true },
        
        { question: "Ikki parallel chiziq va ularga kesuvchi chiziq bilan hosil qilingan burchaklar teng.", answer: true },
        { question: "To'g'ri burchakli uchburchakda burchaklarning yig'indisi 270 daraja.", answer: false },
        { question: "To'rtburchakda har bir diagonalning uzunligi teng.", answer: false },
        { question: "Rombda faqat ikki burchak tengdir.", answer: false },
        { question: "Burchakning hosil bo'lishi uchun har doim uchta to'g'ri chiziq kerak.", answer: false },
        { question: "To'g'ri burchakli uchburchakda gipotenuza har doim eng uzun tomon.", answer: true },
        { question: "To'rtburchakda faqat 2 ta to'g'ri burchak mavjud.", answer: false },
        { question: "Burchakning hosil bo'lishi uchun kamida 2 ta to'g'ri chiziq kerak.", answer: true },
     
        { question: "To'rtburchakning har bir diagonali to'g'ri burchakli.", answer: false },
        { question: "Har qanday rombning diagonali teng.", answer: false },

        { question: "Burchaklarni o'lchashda har doim 90 daraja burchakdan foydalaniladi.", answer: false },
        
        { question: "Har qanday to'g'ri burchakli uchburchakda 3ta 90 daraja burchak mavjud.", answer: false },
        
        { question: "To'g'ri burchakli uchburchakning burchaklari 180 darajaga teng.", answer: true },
        { question: "Barcha parallelogrammalarning har bir tomonlari teng.", answer: false }
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
        document.getElementById("feedback").innerText = "Noto'g'ri , to'g'ri javob: " + (questions[currentQuestion].answer ? "Ha" : "Yo'q");
    }
}

// Показать первый вопрос при загрузке страницы
getRandomQuestion();
