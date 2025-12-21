const translations = {
  en: {
    heroTitle: "Quality-driven IT consulting",
    heroText: "Enterprise QA, testing and release governance across Europe."
  },
  hu: {
    heroTitle: "Minőségvezérelt IT tanácsadás",
    heroText: "Vállalati szintű QA, tesztelés és release menedzsment Európa-szerte."
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
