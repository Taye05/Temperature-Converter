function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
}

function temperatureConverter(Num) {
  Num = parseFloat(Num);
  document.getElementById("outputFahrenheit").innerHTML = (Num * 9) / 5 + 32;
}
