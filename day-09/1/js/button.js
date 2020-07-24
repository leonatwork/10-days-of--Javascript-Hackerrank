const btn = document.getElementById("btn");

btn.onclick = function () {
  let i = parseInt(btn.innerHTML);
  btn.innerHTML = i + 1;
};
