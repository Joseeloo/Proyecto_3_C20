const empresaToggle = document.getElementById("empresaDropdown");
const dropdownMenu = empresaToggle.nextElementSibling;
empresaToggle.addEventListener("click", function (e) {
  e.preventDefault(); // evita scroll al hacer click
  dropdownMenu.classList.toggle("show");
});
document.addEventListener("click", function (e) {
  if (!empresaToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
    dropdownMenu.classList.remove("show");
  }
});
dropdownMenu.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
  });
});
const navbarCollapse = document.getElementById("navbarSupportedContent");
document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    if (
      navbarCollapse.classList.contains("show") &&
      link.id !== "empresaDropdown" // 👈 NO cerrar si es Empresa
    ) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});
document.querySelectorAll(".dropdown-item").forEach(item => {
  item.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});
