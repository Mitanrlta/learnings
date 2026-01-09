function setBreadcrumbs(items) {
  const container = document.getElementById("breadcrumbs");

  if (!container) {
    console.warn("Breadcrumbs container not found");
    return;
  }

  container.innerHTML = "";

  items.forEach((item, index) => {
    const el = document.createElement("span");
    el.textContent = item.label;

    if (item.target) {
      el.classList.add("link");
      el.addEventListener("click", () => {
        window.location.href = item.target;
      });
    }

    container.appendChild(el);

    if (index < items.length - 1) {
      const sep = document.createElement("span");
      sep.textContent = " > ";
      container.appendChild(sep);
    }
  });
}

window.setBreadcrumbs = setBreadcrumbs;
