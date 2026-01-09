document.addEventListener("DOMContentLoaded", () => {
  const quizButtons = document.querySelectorAll(".btn-quiz");
  const quizModal = document.getElementById("quizModal");
  const quizSoal = document.getElementById("quizSoal");
  const quizQuestion = document.getElementById("quizQuestion");
  const quizOptions = document.getElementById("quizOptions");
  const quizProgress = document.getElementById("quizProgress");
  const quizTimer = document.getElementById("quizTimer");

  const btnNext = document.getElementById("btnNext");
  const btnPrev = document.getElementById("btnPrev");

  const resultModal = document.getElementById("quizResultModal");
  const resultTitle = document.getElementById("resultTitle");
  const resultScore = document.getElementById("resultScore");
  const resultDescription = document.getElementById("resultDescription");
  const btnRetry = document.getElementById("btnRetry");
  const btnLanjut = document.getElementById("btnLanjut");
  const iconPassed = document.getElementById("iconPassed");
  const iconFailed = document.getElementById("iconFailed");

  // 🔑 SIMPAN INDIKATOR AKTIF (INI KUNCI UTAMA)
  let activeIndikator = null;

  // ===============================
  // BUKA KUIS (SEMUA INDIKATOR)
  // ===============================
  quizButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.disabled) return;

      const indikator = Number(btn.dataset.indikator);
      if (!indikator) {
        console.error("Indikator tidak ditemukan");
        return;
      }

      activeIndikator = indikator; // ⬅⬅⬅ PENTING

      QuizEngine.init(indikator);

      quizModal.classList.remove("hidden");
      quizSoal.classList.remove("hidden");
      resultModal.classList.add("hidden");

      renderQuestion();
      updateProgress();

      QuizEngine.startTimer(updateTimer, finishQuiz);
    });
  });

  function renderQuestion() {
    const q = QuizEngine.getCurrentQuestion();
    if (!q) return;

    quizQuestion.textContent = q.question;
    quizOptions.innerHTML = "";

    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.textContent = opt;

      if (QuizEngine.answers[QuizEngine.getProgress().current - 1] === i) {
        btn.classList.add("active");
      }

      btn.addEventListener("click", () => {
        QuizEngine.selectAnswer(i);
        renderQuestion();
      });

      quizOptions.appendChild(btn);
    });

    btnPrev.style.display =
      QuizEngine.getProgress().current === 1 ? "none" : "inline-block";

    btnNext.textContent =
      QuizEngine.getProgress().current === QuizEngine.getProgress().total
        ? "Selesai"
        : "Next";
  }

  btnNext.addEventListener("click", () => {
    if (QuizEngine.getProgress().current === QuizEngine.getProgress().total) {
      finishQuiz();
    } else {
      QuizEngine.next();
      renderQuestion();
      updateProgress();
    }
  });

  btnPrev.addEventListener("click", () => {
    QuizEngine.prev();
    renderQuestion();
    updateProgress();
  });

  function updateProgress() {
    const p = QuizEngine.getProgress();
    quizProgress.textContent = `Pertanyaan ${p.current}/${p.total}`;
  }

  function updateTimer(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    quizTimer.textContent = `${String(m).padStart(2, "0")}:${String(s).padStart(
      2,
      "0"
    )}`;
  }

  // ===============================
  // SELESAI KUIS
  // ===============================
  function finishQuiz() {
    QuizEngine.stopTimer();

    const score = QuizEngine.calculateScore();
    const passed = QuizEngine.isPassed();

    quizSoal.classList.add("hidden");
    resultModal.classList.remove("hidden");

    iconPassed.classList.add("hidden");
    iconFailed.classList.add("hidden");
    btnRetry.classList.add("hidden");
    btnLanjut.classList.add("hidden");

    resultScore.textContent = `${score}/100`;

    if (passed) {
      resultTitle.textContent = "Lulus";
      resultDescription.textContent =
        "Nilai memenuhi standar. Klik untuk melanjutkan materi.";

      iconPassed.classList.remove("hidden");
      btnLanjut.classList.remove("hidden");

      // ✅ INDIKATOR PASTI BENAR
      document.dispatchEvent(
        new CustomEvent("quizPassed", {
          detail: { indikator: activeIndikator },
        })
      );
    } else {
      resultTitle.textContent = "Belum Lulus";
      resultDescription.textContent =
        "Nilai belum memenuhi standar. Silakan pelajari ulang materi.";

      iconFailed.classList.remove("hidden");
      btnRetry.classList.remove("hidden");

      document.dispatchEvent(new Event("quizFailed"));
    }
    LearningProgress.setQuizPassed(indikator);
  }

  btnRetry.addEventListener("click", () => {
    quizModal.classList.add("hidden");
    resultModal.classList.add("hidden");
  });

  btnLanjut.addEventListener("click", () => {
    quizModal.classList.add("hidden");
    resultModal.classList.add("hidden");
    // ❌ PINDAH STATE TETAP DI STATE.JS (BENAR)
  });
});
