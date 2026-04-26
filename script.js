const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const nav = document.querySelector(".nav");
const reveals = document.querySelectorAll(".reveal");
const toTopBtn = document.querySelector(".to-top-btn");
const domainSection = document.getElementById("domain");
const navAnchors = [...document.querySelectorAll("#navLinks a")];
const pageSections = [...document.querySelectorAll("main section[id], header[id]")];
const heroBgSlider = document.getElementById("heroBgSlider");

if (year) year.textContent = new Date().getFullYear();

if (heroBgSlider) {
  const imageList = (heroBgSlider.dataset.images || "")
    .split(",")
    .map((img) => img.trim())
    .filter(Boolean);
  const layers = heroBgSlider.querySelectorAll(".hero-bg-layer");

  if (imageList.length && layers.length >= 2) {
    let activeLayerIndex = 0;
    let imageIndex = 0;
    layers[activeLayerIndex].style.backgroundImage = `url("${imageList[imageIndex]}")`;

    if (imageList.length > 1) {
      setInterval(() => {
        const nextLayerIndex = activeLayerIndex === 0 ? 1 : 0;
        imageIndex = (imageIndex + 1) % imageList.length;
        layers[nextLayerIndex].style.backgroundImage = `url("${imageList[imageIndex]}")`;
        layers[nextLayerIndex].classList.add("hero-bg-layer--active");
        layers[activeLayerIndex].classList.remove("hero-bg-layer--active");
        activeLayerIndex = nextLayerIndex;
      }, 4500);
    }
  }
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.12 }
);

reveals.forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 24);

  const currentY = window.scrollY;

  if (toTopBtn && domainSection) {
    const showAfterY = domainSection.offsetTop + domainSection.offsetHeight;
    toTopBtn.classList.toggle("visible", currentY > showAfterY);
  }

  const markerY = currentY + 120;
  let activeId = "home";
  for (const section of pageSections) {
    if (markerY >= section.offsetTop) activeId = section.id;
  }
  navAnchors.forEach((a) => {
    const href = a.getAttribute("href")?.replace("#", "");
    a.classList.toggle("active", href === activeId);
  });

});

const contactForm = document.getElementById("contactForm");
const contactFormNext = document.getElementById("contactFormNext");
if (contactForm && contactFormNext) {
  if (location.protocol === "https:" || location.protocol === "http:") {
    const u = new URL(window.location.href);
    u.hash = "contact";
    contactFormNext.value = u.toString();
  }

  const submitBtn = contactForm.querySelector('button[type="submit"]');
  contactForm.addEventListener("submit", () => {
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
    }
  });
}

