const carousel = document.getElementById("carousel");
const image = document.querySelector("img");

carousel.addEventListener("mousemove", (e) => {
  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  console.info({ y }, { x });
  image.style.transformOrigin = `${x}px ${y}px`;
  image.style.transform = "scale(2)";
});

carousel.addEventListener("mouseleave", () => {
  image.style.transformOrigin = `center center`;
  image.style.transform = "scale(1)";
});
