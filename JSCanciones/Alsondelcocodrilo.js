﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <br /><p class="InterlineadoLetra">Al son del cocodriloDel orangutánLa pícara serpienteY el águila real</p><p class="InterlineadoLetra">El topo, el conejoTambién el elefantePorom pom pom,Son de la creaciónPorom pom pom,Son todos del Señor.</p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <br />INTRO<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Do</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span><p class="InterlineadoGuitarra">Al son del <span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Sol</span></span>codriloDel orangutánLa pícara serpienteY el <span class="syllable" style="text-decoration: underline;">águi<span class="note" data-notation="Latina">Sol7</span></span>la realEl <span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Do</span></span>po, el conejoTam<span class="syllable" style="text-decoration: underline;">bién<span class="note" data-notation="Latina">Do7</span></span> el elefantePo<span class="syllable" style="text-decoration: underline;">rom<span class="note" data-notation="Latina">Sol</span></span> pom <span class="syllable" style="text-decoration: underline;">pom<span class="note" data-notation="Latina">Re</span></span>, Son <span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Re</span></span> la crea<span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">Sol</span></span>Po<span class="syllable" style="text-decoration: underline;">rom<span class="note" data-notation="Latina">Sol</span></span> pom <span class="syllable" style="text-decoration: underline;">pom<span class="note" data-notation="Latina">Re</span></span>, Son <span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Re</span></span>dos del Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span>&emsp;<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Al son del cocodrilo" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                &emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/con-cristo-en-la-familia.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">3. Con Cristo en la familia</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

