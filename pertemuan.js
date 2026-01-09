/* =========================
   STATE
========================= */
let currentDate = new Date(); // tanggal yang sedang ditampilkan
let selectedSemester = null;
let selectedDate = null;

const pertemuanContainer = document.getElementById("pertemuanContainer");
const semesterSelect = document.getElementById("semesterSelect");
const calendarStrip = document.querySelector(".calendar-strip");
// pertemuan.js

function initBreadcrumbs() {
  if (typeof setBreadcrumbs !== "function") {
    console.warn("setBreadcrumbs belum siap");
    return;
  }

  setBreadcrumbs([
    { label: "Kelas", target: "kelas.html" },
    { label: "XI", target: "pertemuan.html?id=2" },
  ]);
}

// tunggu DOM + render lain selesai
setTimeout(initBreadcrumbs, 0);

/* =========================
   DATA DUMMY (NANTI GANTI FIREBASE)
========================= */

const dataPertemuan = {
  ganjil: [
    {
      no: 1,
      judul: "Permodelan Perangkat Lunak",
      tanggal: "01 Jan 2026",
      progress: 100,
      locked: true,
    },
    {
      no: 2,
      judul: "Entity Relationship Diagram",
      tanggal: "08 Jan 2026",
      progress: 0,
      locked: false,
    },
    {
      no: 3,
      judul: "Database",
      tanggal: "15 Jan 2026",
      progress: 0,
      locked: true,
    },
    {
      no: 4,
      judul: "Stuktur Data",
      tanggal: "22 Feb 2026",
      progress: 0,
      locked: true,
    },
    {
      no: 5,
      judul: "Stuktur Data",
      tanggal: "29 Feb 2026",
      progress: 0,
      locked: true,
    },
    {
      no: 6,
      judul: "Stuktur Data",
      tanggal: "06 Feb 2026",
      progress: 0,
      locked: true,
    },
  ],
  genap: [],
};

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {
  pertemuanContainer.classList.add("hidden");
  renderCalendar();
});

/* =========================
   SEMESTER
========================= */

semesterSelect.addEventListener("change", () => {
  selectedSemester = semesterSelect.value;

  if (!selectedSemester) {
    pertemuanContainer.classList.add("hidden");
    return;
  }

  renderPertemuan();
});

/* =========================
   KALENDER
========================= */

function renderCalendar() {
  const daysShort = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  calendarStrip.innerHTML = "";

  const today = new Date();
  today.setHours(0, 0, 0, 0); // ⬅️ WAJIB

  for (let i = -7; i <= 7; i++) {
    // ⬅️ BIKIN BAR PENUH
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);
    date.setHours(0, 0, 0, 0); // ⬅️ WAJIB

    const dayEl = document.createElement("div");
    dayEl.className = "calendar-day";

    const isToday = date.getTime() === today.getTime();

    if (isToday) {
      dayEl.classList.add("today"); // ⬅️ BUKAN active
      selectedDate = date;
    }

    dayEl.innerHTML = `
      <span class="day-name">${daysShort[date.getDay()]}</span>
      <span class="day-date">${date.getDate()}</span>
    `;

    dayEl.addEventListener("click", () => {
      document
        .querySelectorAll(".calendar-day")
        .forEach((d) => d.classList.remove("active"));

      dayEl.classList.add("active");
      selectedDate = date;
    });

    calendarStrip.appendChild(dayEl);
  }
}

document.querySelector(".calendar-nav.prev").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() - 7);
  renderCalendar();
});

document.querySelector(".calendar-nav.next").addEventListener("click", () => {
  currentDate.setDate(currentDate.getDate() + 7);
  renderCalendar();
});

/* =========================
   RENDER PERTEMUAN
========================= */

function renderPertemuan() {
  if (!selectedSemester) return;

  const list = document.querySelector(".pertemuan-list");
  list.innerHTML = "";

  const data = dataPertemuan[selectedSemester];

  if (data.length === 0) {
    list.innerHTML = `<p style="padding:16px;color:#777">Belum ada pertemuan.</p>`;
    pertemuanContainer.classList.remove("hidden");
    return;
  }

  data.forEach((item) => {
    const row = document.createElement("div");
    row.className = "pertemuan-item";
    if (item.locked) {
      row.classList.add("locked");
    } else if (item.progress === 100) {
      row.classList.add("completed");
    } else {
      row.classList.add("active");
    }

    row.innerHTML = `
  <div class="pertemuan-no">${item.no}</div>
  <div class="pertemuan-judul">${item.judul}</div>
  <div class="pertemuan-tanggal">${item.tanggal}</div>

  <div class="progress-wrapper">
    <div class="progress-bar">
      <span style="width:${item.progress}%"></span>
    </div>
    <span class="progress-label">${item.progress}%</span>
  </div>
`;

    if (!item.locked) {
      row.addEventListener("click", () => {
        window.location.href = "belajar.html";
      });
    }

    list.appendChild(row);
  });
}

console.log("pertemuan.js loaded");
