﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />/// Caminando voy para Canaán ///<br /><br />gloria a Dios<br /><br />caminando voy para Canaán.<br /><br /><br /><br />/// Si tu no vas no me impidas a mí ///<br /><br />gloria a Dios<br /><br />caminando voy para Canaán.<br /><br /><br /><br />/// Al venir Jesús yo me voy con Él ///<br /><br />gloria a Dios<br /><br />caminando voy para Canaán.<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br />Cami<span class="syllable" style="text-decoration: underline;">nan<span class="note" data-notation="Latina">Mi</span></span>do voy para Cana<span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">Si7</span></span><br /><br />caminando voy para Cana<span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">Mi</span></span><br /><br />caminando <span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Mi7</span></span> para Cana<span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">La</span></span><br /><br />gloria a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span><br /><br />caminando <span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Si7</span></span> para Cana<span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">Mi</span></span>.<br /><br /><br /><br />Si ud no <span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">Mi</span></span> no me impida <span class="syllable" style="text-decoration: underline;">ir<span class="note" data-notation="Latina">Si7</span></span><br /><br />Si ud no va no me impida <span class="syllable" style="text-decoration: underline;">ir<span class="note" data-notation="Latina">Mi</span></span><br /><br />Si ud no <span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">Mi7</span></span> no me impida <span class="syllable" style="text-decoration: underline;">ir<span class="note" data-notation="Latina">La</span></span><br /><br />gloria a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span><br /><br />caminando <span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Si7</span></span> para Cana<span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">Mi</span></span>.<br /><br /><br /><br />Al venir Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mi</span></span> yo me voy con <span class="syllable" style="text-decoration: underline;">Él<span class="note" data-notation="Latina">Si7</span></span><br /><br />Al venir Jesús yo me voy con <span class="syllable" style="text-decoration: underline;">Él<span class="note" data-notation="Latina">Mi</span></span><br /><br />Al venir Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mi7</span></span> yo me voy con <span class="syllable" style="text-decoration: underline;">Él<span class="note" data-notation="Latina">La</span></span><br /><br />gloria a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span><br /><br />caminando <span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Si7</span></span> para Cana<span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">Mi</span></span>.<br /><br /><br /><br />gloria a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mi</span></span><br /><br />caminando <span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Si7</span></span> para Cana<span class="syllable" style="text-decoration: underline;">án<span class="note" data-notation="Latina">Mi</span></span>.<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Caminando voy para Canaán" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/baja-dios-de-las-nubes.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">26. Baja a Dios de las nubes</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/canto-de-alegria.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">28. Canto de alegría</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

