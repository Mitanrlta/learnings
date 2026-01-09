document.addEventListener("DOMContentLoaded", () => {
  const states = [
    document.getElementById("preLearning"),
    document.getElementById("learningState"),
    document.getElementById("learningState2"),
    document.getElementById("learningState3"),
    document.getElementById("learningState4"),
    document.getElementById("learningState5"),
  ];

  function showState(index) {
    states.forEach((s, i) => {
      if (!s) return;
      s.classList.toggle("hidden", i !== index);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.updateBreadcrumbState) {
      window.updateBreadcrumbState(index);
    }
    LearningProgress.applyStateLock(index);

    if (window.updateBreadcrumbState) {
      window.updateBreadcrumbState(index);
    }
  }
  window.showState = showState;

  // ===============================
  // STATE 1 → STATE 2
  // ===============================
  const btnMulaiBelajar = document.getElementById("btnMulaiBelajar");
  if (btnMulaiBelajar) {
    btnMulaiBelajar.addEventListener("click", () => {
      if (btnMulaiBelajar.disabled) return;
      showState(1);
    });
  }

  // ===============================
  // TOMBOL BERIKUTNYA (SEMUA STATE)
  // ===============================
  document.addEventListener("click", (e) => {
    if (!e.target.matches("[id^='btnBerikutnya']")) return;

    const currentState = e.target.closest(".state");
    const index = states.indexOf(currentState);
    if (index === -1) return;

    showState(index + 1);
  });

  // ===============================
  // QUIZ LULUS → AKTIFKAN TOMBOL BERIKUTNYA
  // ===============================
  document.addEventListener("quizPassed", (e) => {
    const indikator = e.detail?.indikator;
    if (!indikator) return;

    const btnNext = document.getElementById(
      `btnBerikutnya${indikator === 1 ? "" : indikator}`
    );
    if (btnNext) {
      btnNext.disabled = false;
      btnNext.classList.remove("disabled");
    }

    // KUNCI QUIZ PERMANEN
    const btnQuiz = document.getElementById(
      `btnMulaiKuis${indikator === 1 ? "" : indikator}`
    );
    if (btnQuiz) {
      btnQuiz.disabled = true;
      btnQuiz.classList.add("disabled");
    }
  });
});
