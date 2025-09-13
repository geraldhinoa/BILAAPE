document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Bila Apee siap dipakai!");

  // Navbar toggle
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Dark Mode Toggle
  const darkModeBtn = document.getElementById("darkModeToggle");
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Simpan preferensi di localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      darkModeBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      darkModeBtn.textContent = "🌙";
    }
  });

  // Load preferensi user
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeBtn.textContent = "☀️";
  }

  // Tombol pesan ke WhatsApp
  const buttons = document.querySelectorAll(".btn-pesan");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const menuName = button.dataset.menu;
      const url = `https://wa.me/6281234567890?text=Halo,%20saya%20mau%20pesan%20${encodeURIComponent(
        menuName
      )}`;
      window.open(url, "_blank");
    });
  });

  // Animasi scroll (fade-in)
  const sections = document.querySelectorAll(".section, .card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
});
// Validasi Form Kontak
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Semua field harus diisi!");
    return;
  }

  if (!email.match(emailPattern)) {
    alert("⚠️ Masukkan email yang valid!");
    return;
  }

  alert("✅ Pesan berhasil dikirim!");
  this.reset();
});
