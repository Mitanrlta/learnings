let players = {};

// ===============================
// BUTTON KUIS
// ===============================
const btnMulaiKuis1 = document.getElementById("btnMulaiKuis");
const btnMulaiKuis2 = document.getElementById("btnMulaiKuis2");
const btnMulaiKuis3 = document.getElementById("btnMulaiKuis3");
const btnMulaiKuis4 = document.getElementById("btnMulaiKuis4");
const btnSelesaiPertemuan = document.getElementById("btnSelesaiPertemuan");

// ===============================
// YOUTUBE API READY
// ===============================
function onYouTubeIframeAPIReady() {
  createPlayer(1, "ytPlayer", "yFf4LiJIumM");
  createPlayer(2, "ytPlayer2", "7lfTrvb11_4");
  createPlayer(3, "ytPlayer3", "gnhuBuUZgHg");
  createPlayer(4, "ytPlayer4", "fgQh_ZdaOEU");
  createPlayer(5, "ytPlayer5", "W-dHWol8cxs"); // rangkuman (tanpa kuis)
}

// ===============================
// CREATE PLAYER GENERIC
// ===============================
function createPlayer(indikator, elementId, videoId) {
  players[indikator] = new YT.Player(elementId, {
    videoId,
    playerVars: {
      rel: 0,
      modestbranding: 1,
    },
    events: {
      onStateChange: (event) => onPlayerStateChange(event, indikator),
    },
  });
}

// ===============================
// VIDEO STATE CHANGE
// ===============================
function onPlayerStateChange(event, indikator) {
  if (event.data === YT.PlayerState.ENDED) {
    unlockQuiz(indikator);
  }
}

// ===============================
// UNLOCK KUIS
// ===============================
function unlockQuiz(indikator) {
  if (indikator === 1 && btnMulaiKuis1) {
    btnMulaiKuis1.disabled = false;
    btnMulaiKuis1.classList.remove("disabled");
  }

  if (indikator === 2 && btnMulaiKuis2) {
    btnMulaiKuis2.disabled = false;
    btnMulaiKuis2.classList.remove("disabled");
  }

  if (indikator === 3 && btnMulaiKuis3) {
    btnMulaiKuis3.disabled = false;
    btnMulaiKuis3.classList.remove("disabled");
  }

  if (indikator === 4 && btnMulaiKuis4) {
    btnMulaiKuis4.disabled = false;
    btnMulaiKuis4.classList.remove("disabled");
  }
  // ===============================
  // INDIKATOR 5 (RANGKUMAN)
  // ===============================
  if (indikator === 5 && btnSelesaiPertemuan) {
    btnSelesaiPertemuan.disabled = false;
    btnSelesaiPertemuan.classList.remove("disabled");
  }

  // indikator 5 (RANGKUMAN) → TIDAK ADA KUIS
  console.log("Video selesai untuk indikator", indikator);
}

// ===============================
// LOCK KUIS (JIKA GAGAL)
// ===============================
function lockQuiz(indikator) {
  const player = players[indikator];

  if (!player) return;

  if (indikator === 1 && btnMulaiKuis1) {
    btnMulaiKuis1.disabled = true;
    btnMulaiKuis1.classList.add("disabled");
  }

  if (indikator === 2 && btnMulaiKuis2) {
    btnMulaiKuis2.disabled = true;
    btnMulaiKuis2.classList.add("disabled");
  }

  if (indikator === 3 && btnMulaiKuis3) {
    btnMulaiKuis3.disabled = true;
    btnMulaiKuis3.classList.add("disabled");
  }

  if (indikator === 4 && btnMulaiKuis4) {
    btnMulaiKuis4.disabled = true;
    btnMulaiKuis4.classList.add("disabled");
  }

  player.seekTo(0);
  player.pauseVideo();
}

// ===============================
// ❗ JANGAN DIUBAH (PUNYAMU)
// ===============================
document.addEventListener("quizFailed", (e) => {
  const indikator = e.detail?.indikator || 1;
  lockQuiz(indikator);

  // reset video ke awal TANPA autoplay
  if (player && typeof player.seekTo === "function") {
    player.seekTo(0);
    player.pauseVideo(); // optional, biar aman
  }
});
if (btnSelesaiPertemuan) {
  btnSelesaiPertemuan.addEventListener("click", () => {
    // ganti sesuai tujuanmu
    window.location.href = "pertemuan.html";
    // atau:
    // window.location.href = "/dashboard";
  });
}
