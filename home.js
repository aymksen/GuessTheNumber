window.onload = function () {
  document.getElementById("submit").addEventListener("click", run);
  document.getElementById("Reset").addEventListener("click", reset);
};

let tries = 0;
let num = Math.floor(Math.random() * 100);
console.log(num);
function run() {
  let numberGuess = document.getElementById("guess").value;
  if (numberGuess > num) {
    document.getElementById("tess").innerHTML =
      "too hight<br>" + document.getElementById("tess").innerHTML;
    tries += 1;
  } else if (numberGuess < num) {
    document.getElementById("tess").innerHTML =
      "too low<br>" + document.getElementById("tess").innerHTML;
    tries += 1;
  } else {
    if (tries == 0) {
      document.getElementById("tes").innerHTML =
        "Wow it's " + num + "<br>" + "(1) try";
    } else {
      document.getElementById("tes").innerHTML =
        "You are Right it's " + num + "<br>" + "(" + (tries + 1) + ") tries";
    }
  }

  document.getElementById("guess").value = "";
}

function reset() {
  tries = 0;
  num = Math.floor(Math.random() * 100);
  console.log(num);
  document.getElementById("tess").innerHTML = " ";
  document.getElementById("tes").innerHTML = " ";
}
