const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // SIMPAN STATUS LOGIN (OPSIONAL)
  localStorage.setItem("isLogin", "true");

  // LANGSUNG KE BERANDA
  window.location.href = "beranda.html";
});
