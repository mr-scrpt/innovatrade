document.addEventListener("DOMContentLoaded", () => {
  const linkRedirect = localStorage.getItem("loginlink");
  if (linkRedirect) {
    localStorage.clear();
    setTimeout(() => {
      window.location.replace(linkRedirect);
    }, 3000);
  }
});
