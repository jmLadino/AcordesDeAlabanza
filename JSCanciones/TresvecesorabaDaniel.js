﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br /><p class="increased-line-height">Tres veces oraba Daniel en el día</p><p class="increased-line-height">Tres veces oraba el profeta Elías</p><p class="increased-line-height">Daniel en el pozo, un ángel veía</p><p class="increased-line-height">El profeta oraba y la lluvia caía</p><p class="increased-line-height"></p><p class="increased-line-height"></p></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><p class="increased-line-height"></p><p class="increased-line-height"><span class="syllable" style="text-decoration: underline;">Tres<span class="note" data-notation="Latina">La</span></span> veces oraba Daniel en el <span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">Re</span></span></p><p class="increased-line-height">Tres veces o<span class="syllable" style="text-decoration: underline;">ra<span class="note" data-notation="Latina">Mi</span></span>ba el profeta E<span class="syllable" style="text-decoration: underline;">lí<span class="note" data-notation="Latina">La</span></span>as</p><p class="increased-line-height">Daniel en el pozo, un <span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">La7</span></span>gel ve<span class="syllable" style="text-decoration: underline;">ía<span class="note" data-notation="Latina">Re</span></span></p><p class="increased-line-height">El profeta o<span class="syllable" style="text-decoration: underline;">ra<span class="note" data-notation="Latina">La</span></span>ba y la <span class="syllable" style="text-decoration: underline;">llu<span class="note" data-notation="Latina">Mi</span></span>via ca<span class="syllable" style="text-decoration: underline;">ía<span class="note" data-notation="Latina">La</span></span></p></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Tres veces oraba Daniel" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/si-cristo-me-ama.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">18. Sí, Cristo me ama</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/alabare.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">20. Alabaré</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

