const btn = document.getElementById("btn");

btn.addEventListener(
  "click",
  () => (document.body.style.background = randomBg())
);

const randomBg = () => `hsl(${Math.floor(Math.random() * 360)}, 75%, 60%)`;
