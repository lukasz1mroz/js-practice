const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".images img");

imgs.forEach((img) =>
  img.addEventListener("click", (e) => (current.src = e.target.src))
);
