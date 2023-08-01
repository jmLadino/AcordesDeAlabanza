var syllables = document.getElementsByClassName("syllable");

var TonalidadAmericana = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
var TonalidadLatina = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si"];

var escalaAmericana = ["C", "Cm", "Cm7", "C7", "C#", "C#m", "C#m7", "C#7", "D", "Dm", "Dm7", "D7", "D#", "D#m", "D#m7", "D#7", "E", "Em", "Em7", "E7", "F", "Fm", "Fm7", "F7", "F#", "F#m", "F#m7", "F#7", "G", "Gm", "Gm7", "G7", "G#", "G#m", "G#m7", "G#7", "A", "Am", "Am7", "A7", "A#", "A#m", "A#m7", "A#7", "B", "Bm", "Bm7", "B7"];
var escalaLatina = ["Do", "Dom", "Dom7", "Do7", "Do#", "Do#m", "Do#m7", "Do#7", "Re", "Rem", "Rem7", "Re7", "Re#", "Re#m", "Re#m7", "Re#7", "Mi", "Mim", "Mim7", "Mi7", "Fa", "Fam", "Fam7", "Fa7", "Fa#", "Fa#m", "Fa#m7", "Fa#7", "Sol", "Solm", "Solm7", "Sol7", "Sol#", "Sol#m", "Sol#m7", "Sol#7", "La", "Lam", "Lam7", "La7", "La#", "La#m", "La#m7", "La#7", "Si", "Sim", "Sim7", "Si7"];

function transposeNotes(semiTones) {
    for (var i = 0; i < syllables.length; i++) {
        var noteElement = syllables[i].querySelector(".note");
        var currentNote = noteElement.textContent;

        var NotaBase = currentNote.replace("m", "").replace("7", "");
        var Nota2 = currentNote.replace(NotaBase, ""); // solo queda el 7 y m

        if (TonalidadAmericana.includes(NotaBase)) {
            var currentIndex = TonalidadAmericana.indexOf(NotaBase);
            var transposedIndex = (currentIndex + semiTones + TonalidadAmericana.length) % TonalidadAmericana.length;
            noteElement.textContent = TonalidadAmericana[transposedIndex] + Nota2;
        }
        else {
            var currentIndex = TonalidadLatina.indexOf(NotaBase);
            var transposedIndex = (currentIndex + semiTones + TonalidadLatina.length) % TonalidadLatina.length;
            noteElement.textContent = TonalidadLatina[transposedIndex] + Nota2;
        }
    }
    mostrarAcordes();
}

function convertirNotacion() {
    for (var i = 0; i < syllables.length; i++) {
        var noteElement = syllables[i].querySelector(".note");
        var currentNote = noteElement.textContent;
        var notationType = noteElement.getAttribute("data-notation");

        if (notationType == "Latina") {
            var posicion = escalaLatina.indexOf(currentNote);
            if (posicion !== -1) {
                noteElement.textContent = escalaAmericana[posicion];
                noteElement.setAttribute("data-notation", "Americana");
            }
        }
        else {
            var posicion = escalaAmericana.indexOf(currentNote);
            if (posicion !== -1) {
                noteElement.textContent = escalaLatina[posicion];
                noteElement.setAttribute("data-notation", "Latina");
            }
        }
    }
    mostrarAcordes();
}

var AcordesOriginales = [];

function onLoad() {
    // acordes originales.
    var SyllablesActual = document.getElementsByClassName("syllable");
    for (var i = 0; i < SyllablesActual.length; i++) {
        var noteElement = SyllablesActual[i].querySelector(".note");
        AcordesOriginales.push(noteElement.textContent);
    }

    mostrarAcordes();
}

function TonalidadInicial() {
    var SyllablesActual = document.getElementsByClassName("syllable");
    for (var i = 0; i < syllables.length; i++) {
        var noteElement = SyllablesActual[i].querySelector(".note");
        noteElement.textContent = AcordesOriginales[i];
        noteElement.setAttribute("data-notation", "Latina");
    }
    mostrarAcordes();
}

function mostrarAcordes() {
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "";

    var SyllablesActual = document.getElementsByClassName("syllable");
    var Acordes = [];
    for (var i = 0; i < SyllablesActual.length; i++) {
        var noteElement = SyllablesActual[i].querySelector(".note");
        Acordes.push(noteElement.textContent.replace(new RegExp("#", 'g'), "Sost"));
    }

    var ListAcordesDistinct = getDistinctValues(Acordes);

    for (var i = 0; i < ListAcordesDistinct.length; i++) {
        var currentNote = ListAcordesDistinct[i];

        var imgElement = document.createElement("img");
        imgElement.src = "https://github.com/jmLadino/AcordesDeAlabanza/blob/main/FullChords/" + currentNote + ".png"
        imgElement.alt = currentNote;
        //imgElement.style.maxWidth = "100px";
        imgElement.style.width = "120px";
        imgElement.style.height = "170px";
        imgElement.style.margin = "5px";
        imageContainer.appendChild(imgElement);
    }
}



function getDistinctValues(array) {
    return array.filter((value, index, self) => self.indexOf(value) === index);
}

// Llamada a la función al cargar la página
document.addEventListener("DOMContentLoaded", onLoad);		

const DIVAcordes = document.getElementById("DIVAcordes");
const imageContainer = document.getElementById("imageContainer");
DIVAcordes.addEventListener("click", () => {
	if (imageContainer.style.display === "none") {
		imageContainer.style.display = "block";
	} else {
		imageContainer.style.display = "none";
	}
});
