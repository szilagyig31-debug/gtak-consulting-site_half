function acceptCookies() {
  localStorage.setItem("cookies", "accepted");
  document.getElementById("cookie-banner").style.display = "none";
}

window.onload = () => {
  if (!localStorage.getItem("cookies")) {
    document.getElementById("cookie-banner").style.display = "block";
  }
};
