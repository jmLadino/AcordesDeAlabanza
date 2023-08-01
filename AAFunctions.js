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
        imgElement.src = buscarAcorde(currentNote);  //"FullChords/" + currentNote + ".png"
        imgElement.alt = currentNote;
        //imgElement.style.maxWidth = "100px";
        imgElement.style.width = "120px";
        imgElement.style.height = "170px";
        imgElement.style.margin = "5px";
        imageContainer.appendChild(imgElement);
    }
}

function buscarAcorde(searchText) {
    debugger;

    var resultado = "";
    const textoBusqueda = searchText.toLowerCase();

    for (const item of AcordesArrayLinks) {
        if (item["acorde"].toString().toLowerCase() === textoBusqueda) {
            resultado = item.linkacorde;
            break;
        }
    }
    return resultado;
}

const AcordesArrayLinks = [{ acorde: "A7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi_-Q2Z_931nhFZmfDSdAhfv2FWksZDDN67JBvxVGdMWGFFNTeIdDJjHD9SJuWHz5WM0fjmIAbyB22zdQ1pGNz5us7ivI8oNt6ePV3G2bUCEstgnwwm4uUB2Bh6hcnz8TOGqeOtI9HgQurgUCTr1PPYVwW6SqGkkNI-dWoxAMb5VTm0eecdlOcPuo4EcQo/s320/A7.png" },
{ acorde: "A", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqBsayw8wfAbV08bYfjB13-xPUd_7quVdXCKhqB53R1JU8PHbrAeBGBk-YfWO9Cnd1GGB06YNH4KADZTZRVKf0gFsSl3amB927JZGMQl8sETtsGIV9Y9ZKIZpNN_JSfrQKrmaWgKz1063HFOPEO4zxk4xSeeSpb1iJ6FiW5VgZpM8fqKAR6ZjY9k_uuxs/s320/A.png" },
{ acorde: "Am7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1Uz_fJrA45qDYoiLKz1LVBOKSnADN567VEnegltRU-JQeNoTEE2w0Zib2juQuMyjY19F0KQbilpkw-2qxOFhpzEAkscNZOFutQO60yAHkGc9UBkp95GtH6kD1ofhojMRjFDBeBrtIlKJOHhEBvuVQhAgxsVACx784ylnl462zfMnxIN5wzk4-wZxZ3XA/s320/Am7.png" },
{ acorde: "Am", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix-F4xdXj33gYDlYqUI2fjlC7c0rk6XGV-j1bSQjf0dIPhsCsuumuhftLxxQeFNJJV8HgmCCINeg_ajZMqpSodVWcU2PDZC1Fr7rgZeXNsxHfuT_KlYjmy6TAjpcMM2r-YXY59yZBWkzriygTSnG08cDQD4srXAvESoC8Ka_F7ZmwHtohCH61YhAGF0h8/s320/Am.png" },
{ acorde: "ASost7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgDRj27yjwsbNey6MAR-0EgLEC82Ni9B3LUZT2LbUh58k8ZvGvF4CLfHsJtw8yj1kGdFY4PusbNgj_2pOUcqtjxCvL4y7wIQ4YSWqEb8UzKz8fqDiwJOKyWamfRVMtY_ILu-kji77_Rmh6neeeK1nnQh6Kzo9OYkhoxXqDs4fZRKqKDzFSJkKeo5TcN8Z8/s320/ASost7.png" },
{ acorde: "ASost", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSCLJ9WKDlJPULYNwhnaFEPN7HUK_8yARkiYkVx10jFZIt7Uyshp8Y7wJFGzcfPWUCjd0cTjQzt68CyC9oIduRtBGT1n3kpqUcnlFpr-oGEOv8STc_LpkKzr2PRVUUEDOpVZalPpc-e87AzqnJ0ubQauEAbYM6NWBJjrI2_8U3ZfelVXTLOfRxPTrpVzo/s320/ASost.png" },
{ acorde: "ASostm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3D0e5OE7uPtwErhD92aSuw-PgtS0TSA7Ff6C7nt5WPxD5T2p1cxSvr3GKfGebN3J1nBq1WxYGTqeKBILdmTPVASXbJLKl0VaVeyOW4FqZ4dCDLc5PVe78k3Lfyarity2f_I6vYIf_gFO2AH0RcTSAFh6Bt6sM5i0iOwNBDhoz6R-07o9wfXxzI-H4xys/s320/ASostm7.png" },
{ acorde: "ASostm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiknCRgNaQOGY3FGyitdrRylq1Kua3PI4ceLu5HLFcNlX-FoFVYVrxRs-gEfG7pyJeRFSlew0VpFnelHwDmluVTc-kuBql5O08AazCW9DIYGelIF5lsKeFd2lKXRl6S5AKerDw3xNc0ZjA1TRwSYuIBo4WF99qhodlZu7OEmSL2hurtobeerKVF72Ky10k/s320/ASostm.png" },
{ acorde: "B7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5_yKgFvvLyyUIpEvBIsjizyKv9YtacH87Dp2cWGP64KdveqWVxYPAM-9Q9q_9IQ00fAuA0YVV7YjsN4BDxhSwGFHFGSCcdYzvetUWrQx4T5hCNWVrxgv_qPSm635O6jLi6wTB6Bg0tbgJh_-Z2FrD-g1n6ZpaJQoJqzFO38CJN5kIqkpj2zYbM9dHjrg/s320/B7.png" },
{ acorde: "B", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhE2WcY5kflZvwcxCnt7ns7IjOyVrY-kvmrKsBPBtMVtfqb2f2ljE5xx0pzdpz511bov4BCDeO09zn8EnppC85nDJG0uZhYOj6jjjieNvetSVFbupW26EYqRmrlWgtHzMEspkbtWlVDmGnTfYh1Oa8o90Dy3G0BWquqaL-9TOJ_4GsCzbBimPfmRiBGGQw/s320/B.png" },
{ acorde: "Bm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjz59rMzXD69R2NaoRrG7Wb8dI66mvx99aNlaCe1Y6QMzOELUOVErOWvOQtHKmsv9RpWcDTKf1Y1yV4T25gqDn6IDVaH7B-TbQLA4X_UkvQK_0DyWW6kU4OqbgQXiQwy-o2Vz7eToxNinVb6d63xtxrx2nsHQ_Gq_fVjK1dAiCTPCev0IlInjsrbNmZ_-8/s320/Bm7.png" },
{ acorde: "Bm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4VM0HLo2xdvKSgO-pxMMCVEwwAaTsQ-5lItpPVH-vAGfghX2SvJkPznfdhSlUL_Tlm2um--QGErf4whW4tFg5-Gj-XnUvZ4KT7ub6o-EGHRdl-vQBf9x_YGTyH93wmqiaNGINaHGt38UrgJhB84Aiyro6OMdgE8C4e67qrXNC5IVUHTJ2EfEWl3nyags/s320/Bm.png" },
{ acorde: "C7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXBqlzIWSCKVYSDo8pw6adDiX-PzRJAhBvJhbfv6O4XAIbAKoN3HwxPcZHiQDWK1qIxCXjWFOV34EduDpNdMg_A8FKFgncfuyPPMvKnbXC5vHqtBnBLEETP6vnG3nom-WkKTBvS7nKd38G8ejQA1569zJEHil9vByDc8EzLCGXxVWtdkpf1NRpeXN0yck/s320/C7.png" },
{ acorde: "C", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0mbio3Nh4B3c4NUITZ5r5FZCO8i6Swo0DTnR6fVtvxwd74_G3OsG9dRAztPqgWJM6aYfUd6o37Dg1jFk2RAo2catjojg-pvZUCkDAwiOEvFHSn_AfXOqNbtIXk9xZtKb5mthAzDcuiTAqJKter4mMHh0SEzchzeZ1s1noQtbO3LTXQJ_pWfDlTjXacJQ/s320/C.png" },
{ acorde: "Cm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiebqFneHOE1Vk_YmC65TWnqhOtw4zQlt5Uwj5nnaRSt39Q6zc1k1r7l1kZH7FxqxgK8IyucbPODwOGMsBeYvnsi5km7hAnyG3nYKIz5xpPHIh3DkDRBIrZLzJLHk1az1MOfPFVWEV3d7qP1p29J8-eK5anfoHjH0ynVRkkmEERCnzK6KNs0qWQC7rGMuM/s320/Cm7.png" },
{ acorde: "Cm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuVViL3Ok-iGYeShKOrgAw_bTgIZxV6smy_m0lmYHVf025rBvrpkEMCHOgQa5zIx5OH5xfqsHhBX0rEtic3NwlZ96T78tMs5wj_WxYsMD2KmpxlUy4YwI7GIaQ7AViQjy3YSQSfTHrcefUNMKpW309kWWSNbqDzIqXvrpWJeFNyv3ZwpBB3CLM0eWJwTE/s320/Cm.png" },
{ acorde: "CSost7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoAdo0v1AkBZXc44_7isfa5_RsdHelLzkYrKZpGKj00uQs0k_1d4JmZhDOeamZkj-qWQf64CE4ZnzWY51nSbDBU3GA0RU892oNrKluY9t7WqNoe5yibU8VrSKvBUqevxqK5y-HEVG4e8HpqnhybP_UElYOUytBxqA2oBXNSe12uGCfMwCo00DrzG86NM8/s320/CSost7.png" },
{ acorde: "CSost", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFBg8Qd7Efq7UoRXePX81TeN6PRDcGPCLAUP3HY8yydJbrgRdJjGURDSET_H926eC9_6UaPhd3D9i4KaqLf7tTeDdJpSN4N5XTZMfMUeRqP5huqCnSHbta6G4003WqP1gOxbuvzx79Ez99JHncJ26HYdQ0in5AMglYtQC294VpLNsVV8apWCXo2BsSY2I/s320/CSost.png" },
{ acorde: "CSostm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXBHCrxCogtHiWzb1KOpC-TFBRWOIA0WhSjyYFPIl7BlUXrpprY026610FRhVAVDcmPiV2dhSEuEq06i9wVXkvyIJQ9gDCWolw5zLHIoz4RbTnxKabwPua8mU5fh1epE6HRZ_UugZMy5L8K_u8V6-DLIX8BKXBTyjuiU2KVS08AN_3IdWzM9If5eSS4U4/s320/CSostm7.png" },
{ acorde: "CSostm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgkHvhyDuJsMdOFuq_x57zgRLqkEfdR07u81xYKrdDFSW2tIaAM0W2BgaifdVOCkmD4sNy2l82xblhFYE71IGHU-90gY-EP7MntFrGY2nbGSkUhU_AlkcLeq1cZLGBM61Z57TzrMS7hqFGNNKtXrThnTDX5MIIYUMLUq8plMjGbqerG2LmwJSvY2T7RHE/s320/CSostm.png" },
{ acorde: "D7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjC8bHD42PWvSEDEGYSamdHkxZPZYuNH1QM7DLkFAE7m41y7AojBYpkLGMt0C3H4QHNsZDFAVYIH7JV0uskpRShUtev7sY8CTIe7FFTUDMzAC0rqgabHP7m_sUjiHrTaLhoCzPs67l9zMvgHp_xOg_CzMvBm8Ts49uWNJAFXkP7NMrmYJbkaYr871Ibe3A/s320/D7.png" },
{ acorde: "D", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh4vN_sQ5wRGxaKCF4TkEtEGr0tnXttMRbS4jU9VTSqhr-mRKL1-JxYA8HkHKZ1WDq1cKYLIMAZSsUy_3fNRb9iw0pwZCHsoygP_8tLx74cWsy9SrsWsiAbbze8BPcExKeXVEsFLK1h0EEhxLTeL_SmSefRm7SW8FqLBtyGdH0EBVqMCtlQwI6umpStiMA/s320/D.png" },
{ acorde: "Dm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0KY4oAkK1SVm7wp9WUvQYiHWu-bycpWYST3yv7N4DAughYHKsFCotA0mdG1AHZq2vpcBWr1Qmum4F8-vPiepCD3SvQkpYdjqd8sZHejTBmc_r0XS-KMjyLYam8fwhtVxCGLXlKbtdqwqeGK_XVMfmoOlipBDHsGEw4uHWd4DIT_6sXxtZU9YCEkEMy6A/s320/Dm7.png" },
{ acorde: "Dm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxjlzwLTquBpWH2KT98lQtAI16NHg11lGbip4TZOW9nuL7iKe9EmZbfG6yFsVThUG6EBuz9HKDGy_RDWAO8ElEL9204W2BH6XXA1fjIIWFJiIelaC7yyvxCTcrN8M8LWODXWB-8bRdGe0S_aK5Jv2wkPVBFQK_4rpdgbViUwO6HvNVXvbvMOev-umznAM/s320/Dm.png" },
{ acorde: "Do7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiguYSKPXm3br1BdpY10l96ji7mvCIYL1x-HAYn0Sr4Km6k2ll6p0CKtFAmZsmr5sGeFTCiOQdGeyJrKSdzVy7Og6_GZ5ACQ_6hX_b91rCXi4j-eV0HIv_CrtufEJsveLXlzw-sBNf8S6az9HRwT_QXB4JyOHBnumY13HZt4GeJ2-7Ae3I4pLNqTVW0kk/s320/Do7.png" },
{ acorde: "Do", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWYLdPAN0gHInqClx_ETOcq276_zpzRTujJfNZ-R8sEJFKDOuGK1MWHNDKhl-y5qNRm9_qdWo_1yqg6oW8kqqQBUe-Zy9SENYV7lM3JBnqUEUTKnxoOm1hAjsch9GoKe8nbYAHZeHu_k-KkCpThr6ozwv8lsu52B4geYNS7tpeev-Xer7NcXpRh6PvjTU/s320/Do.png" },
{ acorde: "Dom7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6ICbjvtM6MYQhyjEfADSasRAwc29O0PYKJlTA3CNWLBtrumrsiRCgR4Jio2P0MDjLoyPjCL2mt8w1RyntTFH6X_DCrW8Ou5NqaUauTVSwZJz8urym5j2LbwPxLaQT7VnbdX_i46xmt_7En7I0nGXIX3CkDI27J8OHn5LUcFEU1ujtNPNu-H4AuMHtMTc/s320/Dom7.png" },
{ acorde: "Dom", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvMIu88RVV0eH8BuvexM6bXirEB1ck1Hx-sZnYTSDTpFx0vwrP-9oZALfCMwy1I3in3bdV3SmoRfT_YF1WChHk121u8Y_tfligSWvr-6hdN9vRvAgMYiXo8dJgEH4aJyQilg-V3dBFPPCVT-vF5tJaF1mphaYwLtzo2eleJNayCEKOpyrFFh9l3q7ycpM/s320/Dom.png" },
{ acorde: "DoSost7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgzvRfZSknCSRSCGDUan9eweAwMd6GOKeniwFufvLpWd20_5vjB-9MiwUDKpIWNfZUPYZchcubzj02ZzEjOro1quj0Gp82YV-Hgx6ESvCaL8Bxk5VRIZmhjnMANklWKYFgYvYbEwwPCX5-PAkZNX-MoDgkPp6KdnBbxvkSsooYQcDQ9eF953jrRhJOmHIY/s320/DoSost7.png" },
{ acorde: "DoSost", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZWlSw5w8nURVqfGyIWxbY0KnCtdIW-g77aIPHKh2KhkCLmVdpug2iomcRVcVDMxx5F92NPlhveSztPwKEi4rekjql6DwgipFYWr_ilG8cnPOMMQujm5w1kj4mkY1bj51qE5Z1iP8o8PhuxlrvLLQYvnZ8x0a-Ep8XMK8HRvaOaEeEqrifopIDVHIzcr0/s320/DoSost.png" },
{ acorde: "DoSostm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6NKCOhfS8b5IhuvONXvypS3G8-wyV2UO_k5FzOBRh-DVxr7-OTGYACQTo1PoIvwOPGL4j09OvSxY5vdc1Idp26JI-6TSkgAvcln17I9fXvCudsmAVEnPQCjvD8tlS-h8gPfzj_iDaynG2oMox9BDv198ctMyusVUsPg6BOFNshSGM8nVf7NBHlF5XaeU/s320/DoSostm7.png" },
{ acorde: "DoSostm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAmpzez1ibZOg57G2sm30GFpPmStJj7zEOAQTIBi7cCDusxUYQi6R-x1Qym2S4torDR5khEpkRZL_ZZjYGXKIqJc2p0s35YGs2bW256cxlFXV4A11xTRcO1e3kN4yGeiO5MeYnWmXsgUYRUkOayvr7YF9j62p5bDe_0rxx3V-532gRPymXQ9awWdGBYEQ/s320/DoSostm.png" },
{ acorde: "DSost7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-NUxNyn2kF8lHVvsV50nxbOknS8AbtS9Cb5Orx2lm-3n3Xtyog2sqKnoNdS6rDbXJzKEk7xA4IHEWBqdqxhO7nsgcYBaPDA2aXwlI58VZDKBKcP4-n_UaVIhgxXzRNBo6kxcPpMbVDJ4Cy_S-006TfEHcgxXlWq4go7IHCLbyHL9ebbOm8NsGKHTBMpU/s320/DSost7.png" },
{ acorde: "DSost", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEvpw1goh0lHEk3URv12-owVDKAyyC8FQBQPwk6aojv-_vyJVktvMrIXCtOqqFXai6CHNEbGVqtfPwkecZFBMhnjuTMqTH77valTBP7kUWN2hiFyA-3VBMuckC9Z2DuzrRs-WhgFKNwZH3y15Z8wXaIQTXq0vFDeHl2Nke-0lod4Ud3xOzLY-cLKiBExY/s320/DSost.png" },
{ acorde: "DSostm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgKSUR8h5a7IXUn-uJF-hKFLuPX8UoD53mzT0audq2oNqhKErRh18kVlGEO_QxVtr990ggDDNP1VDz7sZsa6xkrine95XVAQ7BlXM1a3SJ0B6J9TXCIS0yXFNKoc_QyR1yUHNkxtG_ggOmqjTyvT7B5mdRIuGYdXkipcDvq-LwgUgyMJq-_FN5V9Qcnhg0/s320/DSostm7.png" },
{ acorde: "DSostm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdx2bLzbMhzRaNulj5iv3hEa5Pf0duxd3pw7hQXewH4_vwWzLo_DyBOeLZnDrSZraO_Nmqd5q0SEdgsJJQzHjuv-ssqX8J1Syo7HSEgups5JEDNHyemB4G8o6LIBhHFLBua1YS5F2KJBi656oFxBuRROvX0IY4ZBtpv7x53aeg9Uv9vw7T0N0xAim_8G0/s320/DSostm.png" },
{ acorde: "E7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKiEoQSMtXaYgEIulrro7j3ivaF5nBkZg7qL4I8HM1JvwD9N7-GocQvAbeQsUp8WP8CDdHNXh0uP-kiaDpVy96n4xn2aWRGhIIWaqZo-vHd2ez2xKqHKnbf4Bz57nJxdQjaEohe195fhF21RSomm3IWY7K4cjPnnjG72BHqzKEe4z9rHnptSarmGJ3zAg/s320/E7.png" },
{ acorde: "E", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYYFmtnczLpTRUVGhbkuC6Fb_4cYuhX3rK6VETISRZlbKgqCjYojkWAG1n-p0bYY6lm3FE2rVz69Dc40-_x1q85adEAz80tp2-PvNrrYfQsLcUWZM_eS0L7iccMJsV8Ga35td2t_Olwp-JuPDeMy31syzoJS1VqE0pI5OQsyS6GkRJl8ZxI63FzhVjXA0/s320/E.png" },
{ acorde: "Em7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhWKr7BzGyf--DTIAi1v9I1uR93J-P9j7EceJnFcOCprUwdGhFZLmaHZpixImrCqvRebGIBNIp4t78U5pmzQygLdI_xk05kayoMzzP-QKfMkgF-p4IdVKARbsq3R1ptC2BuDJw3fZkUcPyQChk7ZgTPLGRW1ESOFzEd92h8fdPZkB6lqU6DaGsy7rboME/s320/Em7.png" },
{ acorde: "Em", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjRsxsl7s5OLnEvc-xj8B2qkeWfUwLWFdAHn1BuXsnkGqrM76QQSRCsyHfdlKA0Cmsv2Quh7-tm4HNZvgjSQiu8CJKopWmq8iJ6SmeqTmMjyQ4WbqEyxg74y1y9kjqBWhWtatStAio6tY9ztnKq3mN_Uuf8kPbr2s6c2Q2U7rmjw_QVAd4iJdNPFXHhExA/s320/Em.png" },
{ acorde: "F7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2wuNegductsvAHVUI2QoxG8ImMyhmbbohW84Ei1-aKE0UlY5Qht8qcGcPBHxz0qW-rJCMVOmqSVMAySIcQOLrgPGh_h1TklGpVjBTIjRnC2Yu41prp2hjtHWEY1oH-SOEAkcrqhpcNwZCzCVqLf1OPvsOoia82y7KBeflS9rMJS6jvsZCMu6LQAllGgM/s320/F7.png" },
{ acorde: "F", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgN84S-WFHNxf4zYynKRoc1x6pj9wIfk7RZjriMeh30U2Rmb6p8wD3TyHyklf29Lv8fL8-MWGvZkt5S6VeTzdpaZU5o6GoJ-BdfAJ-UQ-wq67CxPnIMEEDy5GGOeXAlpTdF5wXSQ2A48EQcY4oq75k2r59jrpl1X_7i5r0GdiqxhFc5vh4B8AEN6X5yPXc/s320/F.png" },
{ acorde: "Fa7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiu6q9wtJhvDiTkArXmxlkksHLhfcffpE5S0HlSdYCT7mb1phSVAipDUg37SwITWuPA1CWb8WyBhgCv6xK0bMNToC39luIvE842nMha_MyGK5oqGz20cmtuJf-f8qFMWto2uXRohqgdmnZl_jIUN5iETFzrXEbscyHVayZAd3UwRq_IoZzN_2h3zREi6GA/s320/Fa7.png" },
{ acorde: "Fa", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0lufTr-NVKLXbAKvfayDWj3x930JFfUgrQjFTlBt_LJ67-1iN5G17He_zaOvPJ1lRbkicw5zk0UNRioUSGegpgWfzFZgS4jk1lgWpxu0ock9HwXSHjMBDK_KVfYmPdOmOuid9RyVDC7Q9cpGI1EtPNInt6I9CQnofLluk5oQjhDY17JFHD9loszauO74/s320/Fa.png" },
{ acorde: "Fam7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQgsFdCBrwpbA9i-zN98fvqq1BZoZFFMwmZE8a2p6Dw39xrKC0rZT3c_LQCuKwoQW40Xh6i5tw0A8Px_1PsGbeqh9ydqG5wewcMrO41p6zkyjZmZbtuMohHb_4NeFzx7yxrMzNp1rIPbP82kd99inG9hsFhhAUFeiVLNV1xdVZV7wXOfyEEFGCnV6L90E/s320/Fam7.png" },
{ acorde: "Fam", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisYodVXUYJGuScy61cQar5pMMkmgT0oofVWWUcRPqKdYpZXqHw6Yb9MViRb5GP5fBOS9PkoIJ37KekNAfqpG_NWmFdTl-g4PTYD0jq_sdsdksGpkejoAjmriEmeTCdOBrD0U061aILA5atV1Uh1mBGbZjT3P50HvrSn43sn080SC8dLGVhevGFVDAA8i8/s320/Fam.png" },
{ acorde: "FaSost7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJYHYBUAsJYVite78nYYnKFRklXZdr10g8XQzZl5lskrCrn65BcgixJoSPBb1H0W2G7J9HNZo5re1--yKgGM68zt_Q0xJSvL3gCjDu9ZY6s-1sx-jDPrJwaoYMUxNRr3dJo1LqOxD1y53-UbpNgjdiW9ga8RHF6GCErbvMsymU2zpR1MOrdlOF3UJRApA/s320/FaSost7.png" },
{ acorde: "FaSost", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNSBm2KitFspEGmibdZebe0R7uL5osxJfqx3_zl34O0nC9MzVUEwL-CjurnJJtaPiqh_18dSVQ7xuNw7DldO8p_jziJ9qvRNNRYzqkJ9PheE9OTGm2gLyX9dbilVIElbOfSkLDzE2qDzXG4diECX7JB1eH_0BbKnYq7xh_FgEQKq0UXoNYserwr8sIMrY/s320/FaSost.png" },
{ acorde: "FaSostm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFlkez8Fq-wEQTMD7d3x4clYlr2W4g_c4E6Fqd7AaXkzgjiZVHUWCso6jJIrM_1944-z1WiuzHqOUgSyt3QPCZyNHZ0ZkohshB7IfjoOh7q5DC_JbZALe5784ihdpdo8vpydQr4Ze5cBwkukfUeCekgx5Ukias_WhJUtJN_b7RXonV6UXluKe9U3vK7nk/s320/FaSostm7.png" },
{ acorde: "FaSostm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhC0_GPzB7EVMld9JY-x-pz74wocxCZR3h87qPkfDWODYBQx-hO9McxanQInLQeNgba4sNZOVLy6GYuD7wpX21YX16vBNIl9eqM1i1MRr436OKoLTeJ_KpIhIGIQPCD-iTRocMNRSpTwp48qYcyjB1tJ9WpK1c_1ZwUgvYBRnn_flB__AXOuub_4nmMdWQ/s320/FaSostm.png" },
{ acorde: "Fm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhBfbtNjxQ4dEOz-B0egR4dpOVJ661HGWxdPRIVJHddXjC0kgtVYkFP9BszvbB-Gqzq803Ww73xni-RbBryRsPDdDTzoWUsYtFDIGplvOgPHvAVk6sLgHCjqhcts5za5JGlorKO9-meFJ2fMJDPdhzbHXUmPRnfFPKR_k8hErRn9b8kW326ZV0Foo5IrxA/s320/Fm7.png" },
{ acorde: "Fm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTBF3RU5ic5MwalYQ9shBTkPhobCo3TZfmyFxgXMHc6GN_B0QTTiKG73xte74wYYl3adTB2sReF-8OMS7v4DTfXdE8swv5otxLlx1tdXSFw1wOmLpk2xUi20aEDGuayE9zv9bcPtDldstcFtGh2C15jYMB7WdqvN1yxFZeMZulqzYxXE-X7hYicHuRXWs/s320/Fm.png" },
{ acorde: "FSost7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPND5Y1_rT1uHDtQokQG6H99ezkg2yiT-ud61k1LmOc2gRz4Cc2nyhnc0FIiafToCkAedyTwFHa0XegsdbnTQ9yG7v7qcUc7nTqZ5tpFTw5rS6Y84Yf8pIDSjoVdt6q5sDCJLUbZQmiFQUnTdoXuOmqimR7sZawtNWTtF_yPdly7SVvIAwGlRm9DtPb88/s320/FSost7.png" },
{ acorde: "FSost", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRyPQjI2rm6NNJvpQEsRF9Kb_VOS7QrQ9_7bV8MSYIV9mbSLqQdBFI7Iq0Eodf1-qTdaYw4lA1DKN3KRiYSebMFUMb5U6hMxKjgxP4nd69e8tWGkCi5yHPJZiymAt0OpAHSJzfXlY6N61Egct9wVS0gNevJfqW3uW01_RplXTtS9G3PI6sCcvnKDfpRJU/s320/FSost.png" },
{ acorde: "FSostm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgNApHw5ClP5KEUn_j8Sne2roQnt5jZbGk7XqVeVJIr2YbKW-h0Uia-V296CbY_JHC0ec2wiwJy2smJpBioJbXkcar_0lSKazPu5gN169IVVIkqoSdterCaOQy9t8FJV_7WdnQIqvAL424UsyAgaK3algs20NVpqdXVYv5tqE2uly82FS28Ioja6mzQQvI/s320/FSostm7.png" },
{ acorde: "FSostm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTi0T_DpYVpR5o5gLIyoVKJVzTbGH53_5JHNJu3bunP3vgTtHBi_63hznti9Lm5Ah8gztGSm2NhmJZxhiA-GgEtpe08EKwzzZOkE05U5y_i9yIz1svFHhvdtzcdo41F_gOsT3TBLwrbHVL2Hxq3B56yogPOjl7l_TwyX1ewEQ_h7ICBgFSPO--Q-xU8MY/s320/FSostm.png" },
{ acorde: "G7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBN7VyuZ6ryK9RdqRG1GqktAKKdr08YW2AGHAtbwriPRvuPkZuktOujreoRB0pd5iOfOhdcXPxRauguT8hBUzqGR4YOds1BtTpLNEZDZd7pk45mcV2RQCA7ihXhdmoknRiwof-1_C3xBiJxL2xjqnSFnc_whNIHyO60zdVu95LqWiwRQvCsU5hWyDaYtU/s320/G7.png" },
{ acorde: "G", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimVXYHXSIoTkgxYncEHvCkd-CNZBiHGdqvSTiwrmaih30qS5-S4jC8uI6bhGDG5FLrgpYpPc74GOa03bQ-I6H2Bmh0J60qEM5g_KwmxhtbSBGBXXQuOSeVFvrCOXKT00KRrUEy9a9QBN4S2mCX2Ay_rEjT8cvQFWLlL3lHrnY_qjrWPdlpAHfsy9zgHCs/s320/G.png" },
{ acorde: "Gm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIno3zJz-oBNb7mIus5XZDZsaQrebf1Mm4iJPRd5AAYQ8tJ5fkaQu4M21aNHBb4s80TiqfV1gIEefG7TDrcR5h6GuGJnbIndHbZAgT9yDAlqEAZSly5AAyOURg1Sn1VhIzqGU_vqEyCDapfcE6KiK3MUu5-gZ-8tTsJhI0Mm0euJMrRfb7esCzdw-OVec/s320/Gm7.png" },
{ acorde: "Gm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEie7TebkjNwMuqbeIxPyvMdlqC6NgL5n5R5T-zmXidY0oqtw2PAU9bbTxy0z6YNc9cFr9qZD_1FhU1Xh60FWlgrs_o81BimuDy2C4dwhXN3fw9hRszWsA-FOTJd-pL-dADwydP1pYAaNXv6OV0_SXzc37rwNi6aP6RB-lH6Q0n0Bx-JEWfruo3cSWOlR80/s320/Gm.png" },
{ acorde: "GSost7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5_bnWGLiwxF5zq6AK4A5LU1ApK3iAvH3kN0mp9ElkmE3wwRMnsVl_60jQsbuZckRGjr40LUNhvBgg7yXSGN7p082nay2RDHux0ZleSvO85DrevOZBRiT0nrmernqgOciYv-pTsSfQfT5YRsGo06GBcqD4gOiZrScCVLnaV013vbaT2T4Jcrfn9QSaE2M/s320/GSost7.png" },
{ acorde: "GSost", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8o7EZU-eHGu3kq2FS0n9TKaUF46-eMn1qh37jWaVf2vohVGsxuEiJF6j4n3CgPCu32Rb6GnZb5gSR5jY7Regk9hjnbXzFWm-TvYFuy7yIS3Mbsoc73_XSMUPhL-5xLNLi5ud1WRyO3sp5CWDXPg71KnLiRrEEDIHQ_5P2wGJo5OPNa8FfntMDktgpOWw/s320/GSost.png" },
{ acorde: "GSostm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifZjvhMrJbyF2dHdAhn5jpxiK6gpKM82xNXGzsUHbAl67lEzGRbk0anc80H4UjSQSZEX9Za6wBVDpnhjujJ4HUrx6B8aJ8GY7f5qZEbinJ5Xaj3IBOY9IcUkXQ-Kg9T1zA3sr92CbKq4vWjTv93tW8DLYSG51bV-sONazc72Zhvzc6ex4MH9JYxQD8OZU/s320/GSostm7.png" },
{ acorde: "GSostm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh55nZJPlNDlkYdTvOzVBl9vf2jY2xjeAnBjK_Mu2bjbN0HyBPR2W1tQ5d9JYhPZbhDupmexOeW6QyHZMNk0iGqaXBuqthDjhP_Rt6Hw1BQmHBKZzjXq-JdpcDDeL-_w6H0jWrF0rIJRAz6JHZTRMBTeAL7jeoxO5arE3WkdLXJRvWHoAMd5cId1EgxR0Q/s320/GSostm.png" },
{ acorde: "La7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjef4DhBUH2klZtnK3urVBjw41eA9CIY_D3FRzzK6Jkopk2-gykrOk8bqAreXnCRvIfRnFC3opeCDCsF5d93CpiyyfvlasP23IRRrN5ot2cYEhlYjPtsGz1bvHwfOzwLFYvuYRsTHJd4thuv0MB870vxknO0MvuSfZyDSqWzxKir6puUOOr5RnVqnDn9Ag/s320/La7.png" },
{ acorde: "La", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlDPycKcmLAcruzRXZulh8uMmWxFW5Z4aZQQyCO3C9hC1szsDBUpaGh-3f9lgQzmdOzRNUboFwDBKLPRxZpEIRUUYDSKGTRT13AQ40YCR13wWsSzuqmwDkhNWJc1zjRzV7lBjdtmU6YE-XEsW7tQK6_eF91ldhCKcKAX0JTt6VYxYMnlHOUgL23tXsNT0/s320/La.png" },
{ acorde: "Lam7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqJxkUKpeQZ5NnbOtQWpxeUhPuHltHjGdoTYOn1fR9VjiRS9gq4dnuBrXYXx1hCgvwT9zIKoGjl91r_9GRonnMgfmMBmvuabEnIropgeF1HiZO5DFYOk3NmbkIAeMs1Qs2xQGiwFjJtxAsjK0cgYgo2fo5RxuhVYBWfRz3F7H6FXjPFwPn_LclDDZsW-s/s320/Lam7.png" },
{ acorde: "Lam", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg8Vn-NB3fn2IHusMmvaB73b64JA_Lha4GTxXvisyl5u_VExlx-_FWymDNL9cqVjxFyrnfI5L0JNm2KFNQS3AJ5Xm2Nuvg7xWh13gop0x0fAFikX0iLOUYayIrEGvsSQCSmx9HkNcDu0kvovi5mWuUCtxYePiHc38tiCwT71VIl9xcFi_vDO6RS37cRtYk/s320/Lam.png" },
{ acorde: "LaSost7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiFQ6qtGxrizNYimz4d6NUa_XMZg1pqF7ERpTEquuqs3AoHS-4ARPmUNgLcop86U3-j_twZL-BJzYpIdchOxfwwaOQoz53WYCMgppd3wTZRuD8C8DmBTecGxPLRDuvsbo8lOM3oTOv2oynZTzi5mYQjbVPcWaDisJI-lzQ4koHqI_q08VxEvHukFZ5vx_k/s320/LaSost7.png" },
{ acorde: "LaSost", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFBoDgnexUtwQqQu_NM1lshtfjuEAa_zpUrGQEtHi1N39cIBjb858J9s14gasw8Fb0hwb86U9SgdXM-Ohe8dEXHb0KtenOAL3H3oaQ60oll8cmLclN4iwWbFH4Vz5gi8w2bev29yKUy3R1b0N-mih6Rl9jX4ipopYXz0kDjO_oO2yJL71qHkrcVVDa44I/s320/LaSost.png" },
{ acorde: "LaSostm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDGLLmmOipDPvvsTTxWNiF3GtehHv1S5tNM67S4zc8bDnP6_FpNu8OFRDxhIFPpko5JNSm8IX_iJJT9jBx6oGhSEy5mBHLcBSR9Nsr94svtP6rG96amo_Vlh_j0rxKvmubp_5i1AhOWUsJkAu6RhrfwCOyWO2G25VFbBPngfpuPrvvNCMOM1Unuf0PtbQ/s320/LaSostm7.png" },
{ acorde: "LaSostm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzDQJGGOTA6yJ6PSDUsNAEWFt-RMjHe2wWfR_W0NYfxtckyI_0Kv5nS4XNRCQEOK7NziAelYDaps7SVAd2VGlvvc_e0oAT5BG1Q7hHx0xI_CBwH0sjIt34n8v-CUBHmPLitfX7lbcIqDJPn9eQ16wNwUDhvABzTd4nnqtzmVA6NDbayQMxpzXTJrT1WSY/s320/LaSostm.png" },
{ acorde: "Mi7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjOML9cz1WET9YQyqwaU9mV0FOrH5EDB_EA_ld7txynvy4umZbRe_FVpp50w4_0_K_7FzVLihU18yvGq2Vr_JnrBz_0vNQJIZsxnREmsLv3nMPUjdrgLQNqmyJ_8KTM86IABQOSPzNUDhNnnRl7-CHDH4E_9fBI-wz3P1nxc3nn_0brrYwgGKuZHZhySsU/s320/Mi7.png" },
{ acorde: "Mi", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6XP1Hj6LUQ2EpIhl6N2pkwp6AZVnetKrs4maCvDq2ge06TdRbMwJKNxYkax8yqX8Bg6yWxgHSnJEmuYd7hG0pCmq8xO3pDeRr9uU76Oiph2Z3UbnHi9NSu168nOD4cC1iaKBuYAmLDWHUZyI0dQuHoHWDJZAKuktC3EWEIJAaRarMFrP3O2mk4X_rF8I/s320/Mi.png" },
{ acorde: "Mim7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7GSnJyYJmTuKIs5F4wlpyTVg2wIKG65TmSl1m96rDtb96urBbtTqHqxomFK6UOi5DMKdTu3kl1LgLz_Z2ejGdIpZO1bgWtn7t0_uog7QVbi83Iw3EJZiY5ThqrUwlquTQLmpwRaDv67BlprhoTBunU4VzeT6i9RoY_nHAmp0I_WdLisDAWGJzEcx5R7Y/s320/Mim7.png" },
{ acorde: "Mim", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju9dAN59RW-HXDMKrD6Rj8BjVaKbR4Q1ihaCKEt-6l-U3hUVKF7tNk1TO07CbzXuQJkBUSI2LilQFDFpLNQ3Q43ecH4CKz6P21zMUoyyN1uRFHygykJTGiiurOC-Le_uQOVij0wWzdOAjq6raaLgs4KuQxJiHBxgpvsr-2Y2-qIz-h5okE5BXkk4a58As/s320/Mim.png" },
{ acorde: "Re7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgS8fmCridLov8z7R8nFWjtq-DybL69ekfaw50_bQ4OwEpSl69qSbQm71OqSKIUPZd84aRnqz2E745fC07MHVSq6WlIdm3NaBoWq7T1HWQpxwD64E4udZXYW38DYLtwFqj-u464nI6nt7iNK2or1-YnVMl5DcnAmFBswMHriUsk-PZ-5Rgim9JQblE-5oM/s320/Re7.png" },
{ acorde: "Re", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhN57nKM0Gkmz28yyf9kAcYuOaknXO4FZUSFOTKjA0zFpxHR4Wj2GcZrjx4Z24K1h7br9x3XyffmXDVNUVFNqEPicySjVlRXumEIrXMiEWXKg-Ephmj4RjAbEmFynOd2IiyXe5BVrzxQgHSYQoQhNIY7SO_dyeetpwXVGknE3I7zUZt9VWgLDvw9Axdiug/s320/Re.png" },
{ acorde: "Rem7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5lA9WsN9KYruJDs9EIMwQXPuGJ5V4qiuNvhBj10HilPNo5O23TiFDLlKvWtbGDQfx8JR1jInTJJmNfzLASHMjnnEqBtbCaVBGINBeTSrWUBvmu54El2Yy7PKrDNpMsgQAb0gwmHf4SZKHERnhz9cNhqwvneHPs5pKhEdO0_-aOhOdsJxDRaiMXhMWo7s/s320/Rem7.png" },
{ acorde: "Rem", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-R3onsAr2iWxEnBJWxVY0OIR_i1nC15v66oaUfAkdxOGK70Wprc60ivKIk-tcSG4zuQg7rOgDckRk-rWFSnyD-MuiHfgg-mB2StsQ0FKEwh6b5lweoB5p2x_S6tdMKa7XofrIYNQeVj3ahMNKOjRFIdhz8UMmG08_U68akeQYSuZRmJ96zAhC9FVWJsQ/s320/Rem.png" },
{ acorde: "ReSost7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXV3KWquXLWfmgQeGO21TON95Qby4pSDBZmiJaOkWasFbFLWr12gwEuhRBGG3ex-LU1q36JGPKABwqjLqE6nuemBXdb8x0NGfDKVPRnp7OryCk6ZUQEZqS_ou47iwz6D1lVKiFkkNZhJPz_KRvmKXQ1DxkplbCgooPiZqhJfXSwHAawi0r8KKYXS6O_Kk/s320/ReSost7.png" },
{ acorde: "ReSost", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjr-o7opd3Iy-OujoxKDI2epjHB7SM9nV6qUytbSfqiX-Pljph46nZoKUNjoDChGI6iRhx9RVK_jhq8dNdg5UsAagfnHJSJzwDyNlOpFVpmMhAHM2Z_myy8vXfuFF7mNioBchPMhvOiQgp-bdl97zNYuLf8HG-xX1nf_sTWVmuK3so5Dj3vDryElAMC19s/s320/ReSost.png" },
{ acorde: "ReSostm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZEGVyKAuQfQDdJTZLCXM90ZHyYTTGfL8NQjLmJEFtsXDGR1JwmW3SsVnLUVF0nOoPboSlrBXjn3m5nqJJ_eXIQTnyv8gQxKnuhHViYOzXu7DaT6iJe6vPcQsDyubnRhOU_0wbyJNiTZxBt5Bpnmfku48NneNpofQhzSDy26tBh_CRuovelZ9_efTwEqc/s320/ReSostm7.png" },
{ acorde: "ReSostm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlkjiDQEzDgkT-nWaMeiSWifNzUxz5MWzYIpnBA0klbd2k4Pmn1eJUl1P7emw5pRqXv4zgn1Yj5cyA-g_fyI4wbuZddrfKl8QYaD2JshnNIFnrdsYxfevG08KVsZx-tL2QXGVO0hBL9YRprpecemxsWtvo64rKMIR_pTrymdvSWTzxObtMu1MNa_0D_Oo/s320/ReSostm.png" },
{ acorde: "SI7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjlUq4KhDlVPE8uzRxrKsv1oJi0b9aW73RRWQXu6LagLtaaNAKny1u1t6e3-G9u---lXDvLQIDPPfzrR5uvWQJberfq0VB4YQwGuD4foWiPnArx1vmrorE2LgehTouHs7vYHWAE8xY9IQfhMIzh80_gHdl7QCBtmUO0z_N4Sf9mhtLQhd3_2lKnUC2P_-8/s320/SI7.png" },
{ acorde: "SI", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiympZPqEU_L0u6vQQAbyuh6kndjfEkDU6heawLIVxsS0287B4Vcv5pKvJRNr7xJEKgLa62clFKAvkFiJ0OWMjjwfIDP3kq-cfbXIF2A3FCS5nvgPPsENzLqbDEbCV64UdPjEnXIxkMnRG7etWcMVm8lHyPXK4p1NXptR_r0HJ6W8uDhuItmz4ApQqpiwM/s320/SI.png" },
{ acorde: "SIm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-hXv1pSwf2nryFPrO4DJ001wC8kTVDK0dGMZXL0N_l8MzjBzGQIPDMVT3c_SYb4wjhVA_6Yqou-jirZSBHNQNX9Js3oXKQK81zLFQRtzXL2libixLVO6aQ3zCQ4Ve-19alDWMZPjCoWJadLjVrak-Lai7O1EsR-6oNyeyGIuSw6_S3b8GlZNPPV5yoJs/s320/SIm7.png" },
{ acorde: "SIm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIHCrvUuDau8RLH2h5hspdtGiSFAcgCKT57u2Vrt0zi1tTs_Yo9IoCY2TLQOxf-U4riCeX14TFVvijOpW6dIcnqRyZUb6YSN1BMIBn6iKDuQbg--9YJ2EG20n34q93Exjbv_4B3J7r1XFGjnnJE1Wji3ypFpaENeb0eHx7AzQXyZSLbfORzRrCqp3NOOQ/s320/SIm.png" },
{ acorde: "Sol7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7jl_K8Ca0I8mPW88daz1C73yQgb2RsGhmS7hSxVAzWSEJzsD9nVry-nmGOy-h8Pt1XjPLTW6TpxWq8AXfvr6Q73KITWOgMEbGfOwraakJQWbb13M3QA2U8D3zhhkQrYt1qoUA4Q0g_lUN94toeeD6964N6-BwXxlvH6xWreiDYBqZzXcfPFqHuqfAMSw/s320/Sol7.png" },
{ acorde: "Sol", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJZol8S_2sZPMmAKhfit2ZEvqqhZljzJyDJLRcLlb0gmz0RJ10zTVDkbsaCom8bb2nFz-mXa8p6tNPWREQDDGKb3fIsNdGeuHQ4vxq8nEi-1seqCvvr9jKWfkvaKbkoFe6_ohWWYW92uKaQtFK2sKZgKovjw2z6bed0JtHCHTEtGBl5ozU1h2n35c0Hl0/s320/Sol.png" },
{ acorde: "Solm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEv47xXR5CI9JELJyRXvjujiAoyr8QxggwIjsQjDppdbvw2mmue5hMG4yQlopCkGRbc1jcwOshbsINLICapdpA9xCcZrs1BxxzkQBT_DyUvlXQkdFKsTdMK07VTCoCLjeMEz7R4fUaP-2kbrzNAAhy_vqPsFDMDipJH3GK8OBYZUAkwpg1H5eNa9wPSeg/s320/Solm7.png" },
{ acorde: "Solm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhB4TGdkMNs4rdnlX92UTbj3KljqtMFIHUJU4p-obiyss0n8gILzsXFMAL-mcvZqRBJzf_df-HKWfpabZY48CmUVmYg8zLlpN4RaoDURdtYMojnt60ZcoFBcS7jmPL-kf4c7xrMyykLxKoB02nKFTMy08DtGiasjq-oV3X0041Eno-E0cD3OozWGtygzLw/s320/Solm.png" },
{ acorde: "SolSost7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghIQaPQ3vOPJ4WUHxLfwO3wOG3zeMRTlb_tTv3VJbuyBQ26yY2rXJEB1LjuaqC7rqYZMTBrugN8x_rr8VHZlooscfQ547pBIYxO3qaGjs2fKVYR3eF_i3xu1cr9yiYggd4fzRvfskRRFJF4tNB7f4kGF-dusM57E1w3715Nb8slweBCp3hTkr0uFdfrcc/s320/SolSost7.png" },
{ acorde: "SolSost", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEicSw6FwZEG6C7_Fonfjaf3qz6wJIR9Fc9aXUMgVWjbyL4HMMTOcbX0y97edgopj46OOKksZaksrUQ1xfKG5SmaiXgmB3h7qZr2Uv4qnbxECZaKsqZyReGU6lEvBCcNq1zbkK5UrV5awVKpYe05txDLd3ljH0SNUK_xWH9pu4ouBVAGdvO236Q4BNZ9hOs/s320/SolSost.png" },
{ acorde: "SolSostm7", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2NfwVqLEWS5GtxrhphavEMjYcu6yDrD3jO-4FFuiTvepa7yTo-HeZs0BevsJVO8lW8qsTm1yJDuOAwrr3gdWXv6tR9Cj9XOpUKz3IN1kLxmRdN3npPzs4v631G93TfzNUklClcZsEsNBLBI4-oL9VD_atG862Ee5f7wt4BJZpdTZzLSJem9z7x8fCr9g/s320/SolSostm7.png" },
{ acorde: "SolSostm", linkacorde: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgC8O3rSRZrlLNxWr2DDVjL7b0UU5tNwl5OtAEdkHy6QOMIDopdqugqioz908HTxY11RxjK0dYshffs1SvnS4U1F0MLsrnk1_WGYjrChZe0Fqi9V9S9I7iE8f_M0cNmnuBugWCYar0rGBNWS0lVMvn7hu_9ypaf5cx8-nJPvS4qI99wtblAseAS8MmBYk0/s320/SolSostm.png" }
];

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