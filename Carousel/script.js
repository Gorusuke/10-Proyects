const images = document.getElementById("images");
const img = document.querySelectorAll("img");
console.info(img.length);

let index = 0;

function run() {
  index++;
  if (index >= img.length) index = 0;
  images.style.transform = `translateX(${-index * 600}px)`;
}

setInterval(run, 3000);
