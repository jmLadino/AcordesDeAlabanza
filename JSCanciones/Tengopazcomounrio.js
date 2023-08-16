﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />// Yo tengo paz como un río<br /><br />tengo paz como un río,<br /><br />tengo paz como un río en mi ser //<br /><br /><br /><br />// Yo tengo gozo como una fuente<br /><br />tengo gozo como una fuente<br /><br />tengo gozo como una fuente en mi ser //<br /><br /><br /><br />// Yo tengo amor por mi Cristo,<br /><br />tengo amor por mi Cristo,<br /><br />tengo amor por mi Cristo en mi ser //<br /><br /><br /><br />// Yo tengo paz como un río<br /><br />tengo gozo como una fuente<br /><br />tengo amor por mi Cristo en mi ser //<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br />// Yo tengo <span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Re</span></span>como un río<br /><br />tengo <span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Sol</span></span> como un <span class="syllable" style="text-decoration: underline;">río<span class="note" data-notation="Latina">Re</span></span>,<br /><br />tengo paz como un río en mi <span class="syllable" style="text-decoration: underline;">ser<span class="note" data-notation="Latina">La</span></span> //<br /><br /><br /><br />// Yo tengo <span class="syllable" style="text-decoration: underline;">go<span class="note" data-notation="Latina">Re</span></span>zo como una fuente<br /><br />tengo <span class="syllable" style="text-decoration: underline;">go<span class="note" data-notation="Latina">Sol</span></span>zo como una <span class="syllable" style="text-decoration: underline;">fuen<span class="note" data-notation="Latina">Re</span></span>te<br /><br />tengo gozo como una fuente en mi <span class="syllable" style="text-decoration: underline;">ser<span class="note" data-notation="Latina">La</span></span> //<br /><br /><br /><br />// Yo tengo a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Re</span></span>por mi Cristo,<br /><br />tengo a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span> por mi <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Re</span></span>to,<br /><br />tengo amor por mi Cristo en mi <span class="syllable" style="text-decoration: underline;">ser<span class="note" data-notation="Latina">La</span></span> //<br /><br /><br /><br />// Yo tengo <span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Re</span></span>como un río<br /><br />tengo <span class="syllable" style="text-decoration: underline;">go<span class="note" data-notation="Latina">Sol</span></span>zo como una <span class="syllable" style="text-decoration: underline;">fuen<span class="note" data-notation="Latina">Re</span></span>te<br /><br />tengo amor por mi Cristo en mi <span class="syllable" style="text-decoration: underline;">ser<span class="note" data-notation="Latina">La</span></span> //<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Tengo paz como un río" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/tengo-paz.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">53. Tengo paz</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/tierra-bendita-y-divina.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">55. Tierra bendita y divina</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

