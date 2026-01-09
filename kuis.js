document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // ELEMENT
  // ===============================
  const btnMulaiKuis = document.getElementById("btnMulaiKuis");
  const quizModal = document.getElementById("quizModal");
  const quizQuestion = document.getElementById("quizQuestion");
  const quizOptions = document.getElementById("quizOptions");
  const quizTimer = document.getElementById("quizTimer");
  const quizProgress = document.getElementById("quizProgress");
  const btnNext = document.getElementById("btnNext");
  const btnPrev = document.getElementById("btnPrev");

  if (!btnMulaiKuis || !quizModal) {
    console.error("❌ Elemen quiz tidak lengkap");
    return;
  }

  // ===============================
  // DATA SOAL (5 SOAL)
  // ===============================
  const questions = [
    {
      q: "Apa kepanjangan dari HTML?",
      options: [
        "Hyper Text Markup Language",
        "High Text Machine Language",
        "Hyper Tool Markup Language",
        "Home Tool Markup Language",
      ],
      answer: 0,
    },
    {
      q: "Tag HTML untuk paragraf adalah?",
      options: ["<div>", "<span>", "<p>", "<h1>"],
      answer: 2,
    },
    {
      q: "Tag pembungkus utama HTML adalah?",
      options: ["<head>", "<body>", "<html>", "<main>"],
      answer: 2,
    },
    {
      q: "Tag untuk judul terbesar?",
      options: ["<h6>", "<h4>", "<title>", "<h1>"],
      answer: 3,
    },
    {
      q: "HTML digunakan untuk?",
      options: [
        "Mengatur database",
        "Membuat struktur halaman",
        "Mengatur server",
        "Membuat animasi",
      ],
      answer: 1,
    },
  ];

  // ===============================
  // STATE
  // ===============================
  let currentIndex = 0;
  let answers = new Array(questions.length).fill(null);
  let timeLeft = 300; // 5 menit
  let timer = null;

  // ===============================
  // OPEN QUIZ
  // ===============================
  btnMulaiKuis.addEventListener("click", () => {
    quizModal.classList.remove("hidden");
    startQuiz();
  });

  // ===============================
  // START QUIZ
  // ===============================
  function startQuiz() {
    currentIndex = 0;
    answers.fill(null);
    timeLeft = 300;

    renderQuestion();
    startTimer();
  }

  // ===============================
  // TIMER
  // ===============================
  function startTimer() {
    clearInterval(timer);
    updateTimerUI();

    timer = setInterval(() => {
      timeLeft--;
      updateTimerUI();

      if (timeLeft <= 0) {
        clearInterval(timer);
        finishQuiz();
      }
    }, 1000);
  }

  function updateTimerUI() {
    const min = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const sec = String(timeLeft % 60).padStart(2, "0");
    quizTimer.textContent = `${min}:${sec}`;
  }

  // ===============================
  // RENDER QUESTION
  // ===============================
  function renderQuestion() {
    const q = questions[currentIndex];
    quizQuestion.textContent = q.q;
    quizProgress.textContent = `Pertanyaan ${currentIndex + 1}/${
      questions.length
    }`;

    quizOptions.innerHTML = "";

    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.textContent = opt;

      if (answers[currentIndex] === idx) {
        btn.classList.add("active");
      }

      btn.addEventListener("click", () => {
        answers[currentIndex] = idx;
        renderQuestion();
      });

      quizOptions.appendChild(btn);
    });

    btnPrev.style.display = currentIndex === 0 ? "none" : "inline-block";
    btnNext.textContent =
      currentIndex === questions.length - 1 ? "Selesai" : "Next";
  }

  // ===============================
  // NAVIGATION
  // ===============================
  btnNext.addEventListener("click", () => {
    if (currentIndex === questions.length - 1) {
      finishQuiz();
    } else {
      currentIndex++;
      renderQuestion();
    }
  });

  btnPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
    }
  });

  // ===============================
  // FINISH
  // ===============================
  function finishQuiz() {
    clearInterval(timer);

    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) score++;
    });

    alert(`Kuis selesai!\nSkor kamu: ${score}/${questions.length}`);

    quizModal.classList.add("hidden");
  }
});
