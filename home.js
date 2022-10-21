window.onload = function () {
  document.getElementById("submit").addEventListener("click", run);
  document.getElementById("Reset").addEventListener("click", reset);
  document.getElementById("auto").addEventListener("click", auto);
};
let range = 100;
let tries = 0;
let num = Math.floor(Math.random() * range);
console.log(num);
function run() {
  document.getElementById("tes").innerHTML = " ";
  let numberGuess = document.getElementById("guess").value;
  if(numberGuess=="" || numberGuess==null){numberGuess=0}
  if (numberGuess > num) {
    document.getElementById("tess").innerHTML =
    numberGuess + " is too hight<br>" + document.getElementById("tess").innerHTML;
    tries += 1;
  } else if (numberGuess < num) {
    document.getElementById("tess").innerHTML =
    numberGuess + " is too low<br>" + document.getElementById("tess").innerHTML;
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
function auto() {
  tries = 0;
  document.getElementById("tess").innerHTML = " ";
  document.getElementById("tes").innerHTML = " ";
   autoGuess = range/2;
   temp = range/2;
   lasttemp= -100;
   for (let i = 0; i < 100; i++) {
   if (autoGuess > num) {
    document.getElementById("tess").innerHTML =
    autoGuess + " is too hight<br>" + document.getElementById("tess").innerHTML;
    

    autoGuess = autoGuess - parseInt(temp/2);
     temp = parseInt(temp/2);
     
     if(lasttemp == autoGuess )
     {
      autoGuess = autoGuess-1;
     }
     lasttemp = autoGuess;
     tries += 1;
  } else if (autoGuess < num) {
    document.getElementById("tess").innerHTML =
    autoGuess + " is too low<br>" + document.getElementById("tess").innerHTML;
    if(lasttemp == autoGuess )
    {
      autoGuess =  autoGuess+1;
    }
    autoGuess = parseInt(autoGuess+temp/2);
   temp = parseInt(temp/2);
   lasttemp = autoGuess;
   tries += 1;
  } else { 
      document.getElementById("tes").innerHTML =
        "it's " + num + "<br>"  + "it took(" + (tries + 1) + ") tries";;
    break;
  }
  document.getElementById("tes").innerHTML = "__________________________________" + document.getElementById("tess").innerHTML;
}

}

function reset() {
  tries = 0;
  num = Math.floor(Math.random() * range);
  console.log(num);
  document.getElementById("tess").innerHTML = " ";
  document.getElementById("tes").innerHTML = " ";
}
