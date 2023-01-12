import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
  setTimeout(function() {
    document.getElementsByTagName('title')[0].innerHTML = 'One new message';
}, 3000);
});
