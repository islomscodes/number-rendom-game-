const son = Math.floor(Math.random() * 100);
console.log(son);

const btn = document.getElementById("btn");
// const input = document.getElementById("input").value;
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const container = document.getElementById("container");
let limit = 10;
const span = document.getElementById("span");

const tugma = () => {
  console.log(--limit);
  if (limit > 0) {
    span.innerHTML = `${limit}`;
  } else {
    span.innerHTML = `imkoniyat qomadi`;
  }
  let input = document.getElementById("input").value;
  if (input == son) {
    win.classList.remove("d-none");
  } else if (limit == 0) {
    lose.classList.remove("d-none");
  }
  if (input > son) {
    span.innerHTML = ` ${limit} . Kichikroq son kiriting`;
  } else {
    span.innerHTML = ` ${limit} . Kattaroq son kiriting`;
  }
};
