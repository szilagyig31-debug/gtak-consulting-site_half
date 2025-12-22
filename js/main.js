document.addEventListener("DOMContentLoaded", () => {
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });

  setLang(localStorage.getItem("lang") || "hu");

  if (!localStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookie-banner")?.classList.add("show");
  }
});

const dict = {
  hu: {
    navHome: "Főoldal",
    navServices: "Szolgáltatások",
    navProjects: "Referenciák",
    navAbout: "Rólunk",
    navContact: "Kapcsolat",
    heroTitle: "Minőségvezérelt IT tanácsadás",
    heroText: "Tesztelés, QA és release management.",
    cookieText: "Ez az oldal cookie-kat használ.",
    cookieAccept: "Elfogadom"
  },
  en: {
    navHome: "Home",
    navServices: "Services",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    heroTitle: "Quality-driven IT consulting",
    heroText: "Enterprise testing and QA services.",
    cookieText: "This website uses cookies.",
    cookieAccept: "Accept"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = dict[lang][el.dataset.i18n];
  });
  localStorage.setItem("lang", lang);
}

function acceptCookies() {
  localStorage.setItem("cookiesAccepted", "true");
  document.getElementById("cookie-banner").classList.remove("show");
}
