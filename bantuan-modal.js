const btnHelp = document.getElementById("btnHelpIcon");
const helpModal = document.getElementById("helpModal");
const closeHelp = document.getElementById("closeHelp");
const goHelpPage = document.getElementById("goHelpPage");

btnHelp?.addEventListener("click", () => {
  helpModal.classList.remove("hidden");
});

closeHelp?.addEventListener("click", () => {
  helpModal.classList.add("hidden");
});

goHelpPage?.addEventListener("click", () => {
  window.location.href = "bantuan.html";
});
