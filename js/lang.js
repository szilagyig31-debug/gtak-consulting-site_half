const translations = {
  en: {
    /* HERO */
    heroTitle: "Quality-driven IT consulting",
    heroText: "Enterprise QA, testing and release governance across Europe.",

    /* NAV */
    navHome: "Home",
    navServices: "Services",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact"
  },
  hu: {
    /* HERO */
    heroTitle: "Minőségvezérelt IT tanácsadás",
    heroText: "Vállalati szintű QA, tesztelés és release menedzsment Európa-szerte.",

    /* NAV */
    navHome: "Főoldal",
    navServices: "Szolgáltatások",
    navProjects: "Referenciák",
    navAbout: "Rólunk",
    navContact: "Kapcsolat"
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.innerText = translations[lang][key];
  });
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(localStorage.getItem("lang") || "en");
});
