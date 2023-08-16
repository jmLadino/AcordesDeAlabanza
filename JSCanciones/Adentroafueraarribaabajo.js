﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />// Adentro, afuera, arriba, abajo<br /><br />Siempre soy feliz //<br /><br /><br /><br />Jesús vino hasta mí,<br /><br />Y entró en mi corazón<br /><br />Adentro, afuera, arriba, abajo<br /><br />Siempre soy feliz<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <br /><br /><p><br />A<span class="syllable" style="text-decoration: underline;">den<span class="note" data-notation="Latina">Re</span></span>tro, afuera, arriba, abajo<br /><br />Siempre soy fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">La</span></span><br /><br />Adentro, afuera, arriba, abajo<br /><br />Siempre soy fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Re</span></span><br /><br />Jesús vino hasta mí,<br /><br />Y en<span class="syllable" style="text-decoration: underline;">tró<span class="note" data-notation="Latina">Re7</span></span> en mi cora<span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Sol</span></span><br /><br />A<span class="syllable" style="text-decoration: underline;">den<span class="note" data-notation="Latina">Re</span></span>tro, afuera, arriba, abajo<br /><br /><span class="syllable" style="text-decoration: underline;">Siem<span class="note" data-notation="Latina">La</span></span>pre soy fe<span class="syllable" style="text-decoration: underline;">liz<span class="note" data-notation="Latina">Re</span></span><br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="598px" height="315" src="" title="Adentro, afuera, arriba, abajo" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                &emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/al-son-del-cocodrilo.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">2. Al son del cocodrilo</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

