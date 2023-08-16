﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />// ¿Quién es el rey de la Selva?<br /><br />(hu hu)<br /><br /><br /><br />¿Quién es el rey del mar?<br /><br />(pa para para)<br /><br /><br /><br />¿Quién es el rey del universo?<br /><br />¿Y también quien es mi rey? //<br /><br /><br /><br />Te digo<br /><br />J-E-S-U-S<br /><br />Jesús es el rey de la selva<br /><br />Jesús es el rey del mar<br /><br />Jesús es el rey del universo<br /><br />Y también él es mi rey<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br />// ¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Re</span></span> es el rey de la Selva?<br /><br /><br /><br />(hu hu)<br /><br />¿Quién es el rey del <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">La</span></span>?<br /><br />(pa para para)<br /><br />¿ <span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Re</span></span> es el rey del uni<span class="syllable" style="text-decoration: underline;">ver<span class="note" data-notation="Latina">Sol</span></span>so?<br /><br />¿Y tam<span class="syllable" style="text-decoration: underline;">bién<span class="note" data-notation="Latina">La</span></span> quien es mi <span class="syllable" style="text-decoration: underline;">rey<span class="note" data-notation="Latina">Re</span></span>? //<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Te<span class="note" data-notation="Latina">La</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">Sol</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">go<span class="note" data-notation="Latina">La</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">J-E-S-U-S<span class="note" data-notation="Latina">Re</span></span><br /><br />Jesús es el rey de la selva<br /><br />Jesús es el rey del <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">La</span></span><br /><br />Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span> es el rey del uni<span class="syllable" style="text-decoration: underline;">ver<span class="note" data-notation="Latina">Sol</span></span>so<br /><br />Y tam<span class="syllable" style="text-decoration: underline;">bién<span class="note" data-notation="Latina">La</span></span> él es mi <span class="syllable" style="text-decoration: underline;">rey<span class="note" data-notation="Latina">Re</span></span><br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="¿Quién es el rey de la Selva?" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/pobre-eutico.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">14. Pobre Eutico</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/quien-hizo-las-lindas-estrellas.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">16. ¿Quién hizo las lindas estrellas?</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

