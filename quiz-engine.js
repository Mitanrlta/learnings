// ===============================
// QUIZ ENGINE (LOGIKA SAJA)
// ===============================
window.QuizEngine = (() => {
  let quizData = null;
  let currentIndex = 0;
  let answers = [];
  let score = 0;
  let timer = null;
  let timeLeft = 0;

  // ===============================
  // INIT QUIZ
  // ===============================
  function init(indikator) {
    if (!window.QUIZ_DATA || !QUIZ_DATA[indikator]) {
      console.error("Quiz data tidak ditemukan untuk indikator:", indikator);
      quizData = null;
      return;
    }

    quizData = QUIZ_DATA[indikator];
    currentIndex = 0;
    answers = Array(quizData.questions.length).fill(null);
    score = 0;
    timeLeft = quizData.timeLimit;
  }

  // ===============================
  // QUESTION CONTROL
  // ===============================
  function getCurrentQuestion() {
    if (!quizData) return null;
    return quizData.questions[currentIndex];
  }

  function selectAnswer(optionIndex) {
    if (!quizData) return;
    answers[currentIndex] = optionIndex;
  }

  function getSelectedAnswer() {
    return answers[currentIndex];
  }

  function next() {
    if (!quizData) return;
    if (currentIndex < quizData.questions.length - 1) {
      currentIndex++;
    }
  }

  function prev() {
    if (!quizData) return;
    if (currentIndex > 0) {
      currentIndex--;
    }
  }

  function getProgress() {
    if (!quizData) return { current: 0, total: 0 };
    return {
      current: currentIndex + 1,
      total: quizData.questions.length,
    };
  }

  // ===============================
  // SCORE
  // ===============================
  function calculateScore() {
    if (!quizData) return 0;

    let correct = 0;
    quizData.questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });

    score = Math.round((correct / quizData.questions.length) * 100);

    return score;
  }

  function isPassed() {
    if (!quizData) return false;
    return score >= quizData.passingScore;
  }

  // ===============================
  // TIMER
  // ===============================
  function startTimer(onTick, onFinish) {
    stopTimer();

    timer = setInterval(() => {
      timeLeft--;

      if (onTick) onTick(timeLeft);

      if (timeLeft <= 0) {
        stopTimer();
        if (onFinish) onFinish();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  // ===============================
  // PUBLIC API
  // ===============================
  return {
    init,
    getCurrentQuestion,
    selectAnswer,
    getSelectedAnswer,
    next,
    prev,
    getProgress,
    calculateScore,
    isPassed,
    startTimer,
    stopTimer,
    get timeLeft() {
      return timeLeft;
    },
    get answers() {
      return answers;
    },
  };
})();
