﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />La B-I-B-L-I-A<br /><br />Es el libro de mi Dios<br /><br />En ella siempre confío yo<br /><br />La B-I-B-L-I-A<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br />La B-<span class="syllable" style="text-decoration: underline;">I<span class="note" data-notation="Latina">Do</span></span>-B-L-I-A<br /><br />Es el <span class="syllable" style="text-decoration: underline;">li<span class="note" data-notation="Latina">Fa</span></span>bro de mi Dios<br /><br />En <span class="syllable" style="text-decoration: underline;">ella<span class="note" data-notation="Latina">Sol</span></span> siempre confío yo<br /><br />La B-<span class="syllable" style="text-decoration: underline;">I<span class="note" data-notation="Latina">Do</span></span>-B-<span class="syllable" style="text-decoration: underline;">L<span class="note" data-notation="Latina">Fa</span></span>-I-<span class="syllable" style="text-decoration: underline;">A<span class="note" data-notation="Latina">Do</span></span><br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="La B-I-B-L-I-A" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/jonas.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">12. Jonás</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/pobre-eutico.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">14. Pobre Eutico</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

