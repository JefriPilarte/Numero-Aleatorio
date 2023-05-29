function getRandom() {
  var desde = document.getElementById("desde").value;
  var hasta = document.getElementById("hasta").value;

  document.getElementById("valor").innerHTML = getRandomvalor(
    parseInt(desde),
    parseInt(hasta)
  );
}

function getRandomvalor(desde, hasta) {
  return Math.round(Math.random() * (hasta - desde)) + desde;
}
