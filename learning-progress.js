// ===============================
// LEARNING PROGRESS (GLOBAL)
// ===============================
window.LearningProgress = (() => {
  const STORAGE_KEY = "learning_progress_v1";

  let progress = {
    absensiDone: false,
    quizPassed: {}, // { indikator: true }
  };

  // ===============================
  // LOAD & SAVE
  // ===============================
  function load() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        progress = JSON.parse(saved);
      } catch (e) {
        console.warn("Progress rusak, reset.");
      }
    }
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  // ===============================
  // ABSENSI
  // ===============================
  function setAbsensiDone() {
    progress.absensiDone = true;
    save();
  }

  function isAbsensiDone() {
    return progress.absensiDone === true;
  }

  // ===============================
  // QUIZ
  // ===============================
  function setQuizPassed(indikator) {
    progress.quizPassed[indikator] = true;
    save();
  }

  function isQuizPassed(indikator) {
    return progress.quizPassed[indikator] === true;
  }

  // ===============================
  // APPLY UI LOCK (DIPANGGIL SAAT STATE AKTIF)
  // ===============================
  function applyStateLock(stateIndex) {
    // STATE 1 → ABSENSI
    if (stateIndex === 0) {
      const btnAbsensi = document.getElementById("btnAbsensi");
      if (btnAbsensi && isAbsensiDone()) {
        btnAbsensi.disabled = true;
        btnAbsensi.classList.add("disabled");
      }
      return;
    }

    // STATE 2+ → QUIZ
    const indikator = stateIndex; // state 2 = indikator 1
    const btnQuiz = document.getElementById(
      `btnMulaiKuis${indikator === 1 ? "" : indikator}`
    );

    if (btnQuiz && isQuizPassed(indikator)) {
      btnQuiz.disabled = true;
      btnQuiz.classList.add("disabled");
    }
  }

  // ===============================
  // INIT
  // ===============================
  load();

  return {
    // absensi
    setAbsensiDone,
    isAbsensiDone,

    // quiz
    setQuizPassed,
    isQuizPassed,

    // ui
    applyStateLock,
  };
})();
