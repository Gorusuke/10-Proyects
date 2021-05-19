const div = document.querySelector(".holis");
const text = "I'm trying to make a write text!!";

let index = 0;

function writeText() {
  div.innerHTML = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
}

setInterval(writeText, 100);
