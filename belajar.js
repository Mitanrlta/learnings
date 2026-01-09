// STATE GLOBAL
let sudahAbsen = false;

// ELEMENT
const btnAbsensi = document.getElementById("btnAbsensi");
const modalAbsensi = document.getElementById("absensiModal");
const btnBatal = document.getElementById("btnBatalAbsensi");
const btnSimpan = document.getElementById("btnSimpanAbsensi");
const btnMulai = document.getElementById("btnMulaiBelajar");

const inputNama = document.getElementById("namaSiswa");
const inputKelas = document.getElementById("kelasSiswa");

// BUKA MODAL
btnAbsensi.addEventListener("click", () => {
  modalAbsensi.classList.remove("hidden");
});

// TUTUP MODAL
btnBatal.addEventListener("click", () => {
  modalAbsensi.classList.add("hidden");
});

// SIMPAN ABSENSI
btnSimpan.addEventListener("click", () => {
  const nama = inputNama.value.trim();
  const kelas = inputKelas.value.trim();

  if (!nama || !kelas) {
    alert("Nama dan kelas wajib diisi");
    return;
  }

  sudahAbsen = true;

  modalAbsensi.classList.add("hidden");
  LearningProgress.setAbsensiDone();

  // UNLOCK MULAI BELAJAR
  btnMulai.classList.remove("disabled");
  btnMulai.disabled = false;
});
