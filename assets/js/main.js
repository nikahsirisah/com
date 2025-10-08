// Jalankan setelah DOM siap
document.addEventListener("DOMContentLoaded", function () {

  /* 🌟 Inisialisasi AOS (animasi on scroll) */
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }

  /* 🌿 Highlight menu aktif (navbar) */
  const navLinks = document.querySelectorAll(".nav-link");
  const currentURL = window.location.href;
  navLinks.forEach((link) => {
    if (link.href === currentURL) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  /* 🧭 Navbar scroll shadow effect */
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("shadow-sm", "bg-white");
    } else {
      navbar.classList.remove("shadow-sm", "bg-white");
    }
  });

  /* 🔄 Smooth scroll ke anchor link */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  /* 💬 Simulasi kirim form (halaman kontak) */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Terima kasih! Pesan Anda telah kami terima dan akan segera kami tanggapi.");
      this.reset();
    });
  }

  /* 📱 Tombol WhatsApp otomatis (opsional: bisa kustom nomor admin) */
  const waButtons = document.querySelectorAll("a[href*='wa.me']");
  waButtons.forEach((btn) => {
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener noreferrer");
  });

});
