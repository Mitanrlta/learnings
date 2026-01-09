// ==============================
// BREADCRUMBS STATE - FINAL
// ==============================

// urutan state HARUS SAMA dengan state.js
const stateList = [
  { id: "preLearning", label: "Pengantar" },
  { id: "learningState", label: "Ind 1" },
  { id: "learningState2", label: "Ind 2" },
  { id: "learningState3", label: "Ind 3" },
  { id: "learningState4", label: "Ind 4" },
  { id: "learningState5", label: "Review" },
];

// ==============================
// RENDER BREADCRUMBS
// ==============================
function renderStateBreadcrumbs(currentIndex) {
  const container = document.getElementById("breadcrumbs");
  if (!container) return;

  container.innerHTML = "";

  const items = [
    {
      label: "Kelas",
      onClick: () => (window.location.href = "kelas.html"),
    },
    {
      label: "XI",
      onClick: () => (window.location.href = "pertemuan.html"),
    },
    {
      label: "Pertemuan 2",
      onClick: () => (window.location.href = "pertemuan.html"),
    },
  ];

  // 🔥 TAMBAHKAN STATE SEBELUM CURRENT
  for (let i = 0; i < currentIndex; i++) {
    items.push({
      label: stateList[i].label,
      onClick: () => window.showState(i),
    });
  }

  // render
  items.forEach((item, index) => {
    const el = document.createElement("span");
    el.textContent = item.label;
    el.classList.add("link");
    el.addEventListener("click", item.onClick);

    container.appendChild(el);

    if (index < items.length - 1) {
      const sep = document.createElement("span");
      sep.textContent = " > ";
      container.appendChild(sep);
    }
  });
}

// ==============================
// OBSERVE STATE CHANGE
// ==============================
function observeStateChange() {
  const states = [
    "preLearning",
    "learningState",
    "learningState2",
    "learningState3",
    "learningState4",
    "learningState5",
  ];

  const observer = new MutationObserver(() => {
    const activeIndex = states.findIndex(
      (id) => !document.getElementById(id)?.classList.contains("hidden")
    );

    if (activeIndex !== -1) {
      renderStateBreadcrumbs(activeIndex);
    }
  });

  states.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el, { attributes: true });
  });
}

// ==============================
// INIT
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  observeStateChange();
  renderStateBreadcrumbs(0); // STATE 1
});
