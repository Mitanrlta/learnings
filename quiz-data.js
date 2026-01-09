// ===============================
// QUIZ DATA (AMAN, TANPA DOM)
// ===============================
window.QUIZ_DATA = {
  1: {
    indikator: 1,
    passingScore: 70,
    timeLimit: 300, // detik (5 menit)

    questions: [
      {
        question: "ERD digunakan untuk?",
        options: [
          "Mendesain tampilan aplikasi",
          "Menggambarkan hubungan antar data",
          "Menjalankan program",
          "Mengatur hak akses pengguna",
        ],
        answer: 1,
      },
      {
        question: "ERD paling tepat digunakan pada tahap?",
        options: [
          "Sebelum database dibuat",
          "Setelah aplikasi jadi",
          "Saat pengujian sistem",
          "Saat sistem berjalan",
        ],
        answer: 0,
      },
      {
        question: "ERD membantu perancang sistem karena?",
        options: [
          "Menampilkan kode program",
          "Mengoptimalkan performa sistem",
          "Mengatur hak akses user",
          "Memudahkan melihat struktur data",
        ],
        answer: 3,
      },
      {
        question: "ERD menggambarkan data dalam bentuk?",
        options: [
          "Teks naratif",
          "Diagram hubungan",
          "Tabel laporan",
          "Grafik statistik",
        ],
        answer: 1,
      },
      {
        question: "Tujuan utama ERD adalah membuat sistem menjadi?",
        options: [
          "Lebih terstruktur",
          "Lebih menarik",
          "Lebih cepat dijalankan",
          "Lebih aman dari kesalahan",
        ],
        answer: 0,
      },
    ],
  },
  2: {
    indikator: 2,
    passingScore: 70,
    timeLimit: 300,

    questions: [
      {
        question: "Objek utama yang datanya disimpan disebut?",
        options: ["Atribut", "Entitas", "Relasi", "Kardinalitas"],
        answer: 1,
      },
      {
        question: "Informasi detail dari entitas disebut?",
        options: ["Relasi", "Kardinalitas", "Atribut", "Primary key"],
        answer: 2,
      },
      {
        question: "Hubungan antara dua entitas disebut?",
        options: ["Atribut", "Entitas", "Relasi", "Tabel"],
        answer: 2,
      },
      {
        question: "Contoh atribut dari entitas Siswa adalah?",
        options: ["Meminjam", "NIS", "Mengambil", "Mengajar"],
        answer: 1,
      },
      {
        question: "Contoh relasi yang benar adalah?",
        options: [
          "Siswa – NIS",
          "Buku – Judul",
          "Siswa meminjam Buku",
          "Rak – Nomor",
        ],
        answer: 2,
      },
    ],
  },
  3: {
    indikator: 3,
    passingScore: 70,
    timeLimit: 300,

    questions: [
      {
        question: "Langkah awal analisis data adalah?",
        options: [
          "Memahami alur sistem",
          "Membuat ERD",
          "Menentukan atribut",
          "Menentukan primary key",
        ],
        answer: 0,
      },
      {
        question: "Entitas diperoleh dari?",
        options: [
          "Warna diagram",
          "Objek penting dalam sistem",
          "Nama tabel database",
          "Jenis laporan",
        ],
        answer: 1,
      },
      {
        question: "Atribut yang baik harus?",
        options: [
          "Banyak jumlahnya",
          "Unik secara visual",
          "Mudah dihias dalam diagram",
          "Relevan dengan sistem",
        ],
        answer: 3,
      },
      {
        question: "Relasi ditentukan berdasarkan?",
        options: [
          "Hubungan antar objek dalam proses",
          "Urutan alfabet",
          "Jumlah atribut",
          "Warna simbol",
        ],
        answer: 0,
      },
      {
        question: "Analisis kebutuhan data bertujuan untuk?",
        options: [
          "Mempercepat coding",
          "Menghindari data tidak perlu",
          "Memperindah diagram",
          "Menambah jumlah tabel",
        ],
        answer: 1,
      },
    ],
  },
  4: {
    indikator: 4,
    passingScore: 70,
    timeLimit: 300,

    questions: [
      {
        question: "Dalam sistem perpustakaan, Siswa termasuk?",
        options: ["Atribut", "Relasi", "Kardinalitas", "Entitas"],
        answer: 3,
      },
      {
        question: "Entitas Peminjaman diperlukan karena?",
        options: [
          "Tidak memiliki atribut",
          "Menyimpan data transaksi",
          "Hanya sebagai pelengkap",
          "Tidak berhubungan dengan siswa",
        ],
        answer: 1,
      },
      {
        question: "Relasi yang tepat pada kasus perpustakaan adalah?",
        options: [
          "Buku mengajar Siswa",
          "Buku meminjam Siswa",
          "Siswa meminjam Buku",
          "Rak membaca Buku",
        ],
        answer: 2,
      },
      {
        question:
          "Satu siswa dapat meminjam banyak buku menunjukkan kardinalitas?",
        options: ["One-to-one", "One-to-many", "Many-to-many", "Many-to-one"],
        answer: 1,
      },
      {
        question: "Setelah semua komponen jelas, langkah terakhir adalah?",
        options: [
          "Menggambar ERD lengkap",
          "Menghapus atribut",
          "Mengubah studi kasus",
          "SMenentukan bahasa pemrograman",
        ],
        answer: 0,
      },
    ],
  },
};

// nanti indikator 2, 3, dst tinggal nambah di sini
