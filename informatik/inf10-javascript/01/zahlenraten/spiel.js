// Zahlenraten
let geheimzahl = Math.floor(Math.random() * 100) + 1;
let versuche = 0;
let maxVersuche = 7;

function raten() {
  let eingabe = document.getElementById("tipp").value;
  let tipp = Number(eingabe);
  versuche = versuche + 1;

  if (tipp === geheimzahl) {
    zeige("Treffer! Versuche: " + versuche);
    spielEnde();
  } else if (versuche >= maxVersuche) {
    zeige("Verloren! Die Zahl war " + geheimzahl);
    spielEnde();
  } else if (tipp > geheimzahl) {
    zeige(tipp + " ist zu groß.");
  } else {
    zeige(tipp + " ist zu klein.");
  }
  document.getElementById("zaehler").textContent = versuche;
}

function zeige(text) {
  document.getElementById("meldung").textContent = text;
}

function spielEnde() {
  document.getElementById("knopf").disabled = true;
}
