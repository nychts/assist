// Spielfeld: baut 25 Felder (Nummer 0 bis 24) und stellt male(nr) bereit.
// Diese Datei musst du nicht ändern. Deine Schleifen schreibst du in schleifen.js.

let feld = document.getElementById("feld");

for (let i = 0; i < 25; i++) {
  let zelle = document.createElement("div");
  zelle.className = "zelle";
  zelle.id = "f" + i;
  zelle.textContent = i;
  feld.appendChild(zelle);
}

function male(nr) {
  let zelle = document.getElementById("f" + nr);
  if (zelle === null) {
    console.warn("Feld " + nr + " gibt es nicht. Erlaubt sind 0 bis 24.");
    return;
  }
  zelle.classList.add("gemalt");
}
