const change = document.getElementById('change');
const color = document.getElementById('color');

const body = document.body;

change.addEventListener('click', changeBG);

function changeBG() {
  const col1 = randomRGB();
  const col2 = randomRGB();
  const col3 = randomRGB();

  const colorString = `rgb(${col1}, ${col2}, ${col3})`;

  body.style.background = colorString;

  color.innerText = colorString;
}

function randomRGB() {
  return Math.floor(Math.random() * 256);
}
