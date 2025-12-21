const translations = {
  en: {
    /* ===== NAV ===== */
    navHome: "Home",
    navServices: "Services",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",

    /* ===== HERO ===== */
    heroTitle: "Quality-driven IT consulting",
    heroText: "Enterprise QA, testing and release governance across Europe.",

    /* ===== SERVICES ===== */
    servicesTitle: "Our services",
    serviceTesting: "Software Testing",
    serviceTestingText: "End-to-end enterprise testing services.",
    serviceTdm: "Test Data Management",
    serviceTdmText: "Secure and compliant test data handling.",
    serviceRelease: "Release Management",
    serviceReleaseText: "Predictable and controlled releases.",

    /* ===== PROJECTS ===== */
    projectsTitle: "Project references",
    projectKh: "Core banking QA transformation.",
    projectOne: "Telecom platform testing and releases.",
    projectYettel: "Digital channel quality assurance.",

    /* ===== ABOUT ===== */
    aboutTitle: "About us",
    aboutText:
      "GTAK Consulting is owned by six senior professionals with decades of enterprise QA experience.",

    partnerRole1: "QA Strategy & Governance",
    partnerRole2: "Test Architecture",
    partnerRole3: "Automation Excellence",

    /* ===== CONTACT ===== */
    contactTitle: "Contact",
    contactText:
      "Get in touch with us to discuss how we can support your IT quality goals.",

    /* ===== CTA ===== */
    ctaTitle: "Let’s build quality into your IT systems",
    ctaText: "Talk to our experts and see how GTAK can support your delivery.",
    ctaButton: "Contact us"
  },

  hu: {
    /* ===== NAV ===== */
    navHome: "Főoldal",
    navServices: "Szolgáltatások",
    navProjects: "Referenciák",
    navAbout: "Rólunk",
    navContact: "Kapcsolat",

    /* ===== HERO ===== */
    heroTitle: "Minőségvezérelt IT tanácsadás",
    heroText:
      "Vállalati szintű QA, tesztelés és release menedzsment Európa-szerte.",

    /* ===== SERVICES ===== */
    servicesTitle: "Szolgáltatásaink",
    serviceTesting: "Szoftvertesztelés",
    serviceTestingText:
      "Vállalati rendszerek teljes körű funkcionális és rendszer tesztelése.",
    serviceTdm: "Tesztadat-menedzsment",
    serviceTdmText:
      "Biztonságos és szabályozott tesztadat-kezelési megoldások.",
    serviceRelease: "Release menedzsment",
    serviceReleaseText:
      "Tervezett, átlátható és kontrollált élesítések.",

    /* ===== PROJECTS ===== */
    projectsTitle: "Projekt referenciák",
    projectKh: "Core banking rendszerek minőségbiztosítása.",
    projectOne: "Telekommunikációs platform tesztelése.",
    projectYettel: "Digitális csatornák QA támogatása.",

    /* ===== ABOUT ===== */
    aboutTitle: "Rólunk",
    aboutText:
      "A GTAK Consulting hat tapasztalt szakember tulajdonában áll, több évtizedes vállalati QA tapasztalattal.",

    partnerRole1: "QA stratégia és irányítás",
    partnerRole2: "Teszt architektúra",
    partnerRole3: "Automatizálási kiválóság",

    /* ===== CONTACT ===== */
    contactTitle: "Kapcsolat",
    contactText:
      "Vegye fel velünk a kapcsolatot, hogy megismerjük minőségbiztosítási kihívásait.",

    /* ===== CTA ===== */
    ctaTitle: "Építsük be a minőséget IT rendszereibe",
    ctaText:
      "Vegye fel a kapcsolatot szakértőinkkel és beszéljük át az együttműködést.",
    ctaButton: "Kapcsolat"
  }
};

/* ===== ENGINE ===== */
function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  setLang(localStorage.getItem("lang") || "en");
});
