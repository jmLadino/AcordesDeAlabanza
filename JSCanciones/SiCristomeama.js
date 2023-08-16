﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>                <p><br />Cristo me ama, bien lo sé<br /><br />Su palabra me hace ver<br /><br /><br /><br />que los niños son del aquel<br /><br />quien es nuestro amigo fiel<br /><br /><br /><br />Sí, Cristo me ama<br /><br />Sí, Cristo me ama<br /><br />Sí, Cristo me ama<br /><br />La Biblia dice así<br /><br /><br /><br />Cristo me ama pues murió<br /><br />Y el cielo me abrió<br /><br />Él mis culpas quitará<br /><br />Y la entrada me dará<br /><br /><br /><br />Sí, Cristo me ama<br /><br />Sí, Cristo me ama<br /><br />Sí, Cristo me ama<br /><br />La Biblia dice así<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Re</span></span>to me ama, bien lo sé<br /><br /><span class="syllable" style="text-decoration: underline;">Su<span class="note" data-notation="Latina">Sol</span></span> palabra <span class="syllable" style="text-decoration: underline;">me ha<span class="note" data-notation="Latina">Re</span></span>ce ver<br /><br />que los niños son del aquel<br /><br /><span class="syllable" style="text-decoration: underline;">quien<span class="note" data-notation="Latina">Sol</span></span> es <span class="syllable" style="text-decoration: underline;">nues<span class="note" data-notation="Latina">Re</span></span>tro <span class="syllable" style="text-decoration: underline;">ami<span class="note" data-notation="Latina">La</span></span>go <span class="syllable" style="text-decoration: underline;">fiel<span class="note" data-notation="Latina">Re</span></span><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Sí<span class="note" data-notation="Latina">Re</span></span>, Cristo <span class="syllable" style="text-decoration: underline;">me a<span class="note" data-notation="Latina">Sol</span></span>ma<br /><br /><span class="syllable" style="text-decoration: underline;">Sí<span class="note" data-notation="Latina">Re</span></span>, Cristo <span class="syllable" style="text-decoration: underline;">me a<span class="note" data-notation="Latina">La</span></span>ma<br /><br /><span class="syllable" style="text-decoration: underline;">Sí<span class="note" data-notation="Latina">Re</span></span>, Cristo <span class="syllable" style="text-decoration: underline;">me a<span class="note" data-notation="Latina">Sol</span></span>ma<br /><br />La <span class="syllable" style="text-decoration: underline;">Bi<span class="note" data-notation="Latina">Re</span></span>blia <span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">La</span></span>ce a<span class="syllable" style="text-decoration: underline;">sí<span class="note" data-notation="Latina">Re</span></span><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Re</span></span>to me ama pues murió<br /><br /><span class="syllable" style="text-decoration: underline;">Y<span class="note" data-notation="Latina">Sol</span></span> el cielo <span class="syllable" style="text-decoration: underline;">me<span class="note" data-notation="Latina">Re</span></span> abrió<br /><br />Él mis culpas quitará<br /><br /><span class="syllable" style="text-decoration: underline;">Y<span class="note" data-notation="Latina">Sol</span></span> la en<span class="syllable" style="text-decoration: underline;">tra<span class="note" data-notation="Latina">Re</span></span>da <span class="syllable" style="text-decoration: underline;">me<span class="note" data-notation="Latina">La</span></span> da<span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Re</span></span><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Sí<span class="note" data-notation="Latina">Re</span></span>, Cristo <span class="syllable" style="text-decoration: underline;">me a<span class="note" data-notation="Latina">Sol</span></span>ma<br /><br /><span class="syllable" style="text-decoration: underline;">Sí<span class="note" data-notation="Latina">Re</span></span>, Cristo <span class="syllable" style="text-decoration: underline;">me a<span class="note" data-notation="Latina">La</span></span>ma<br /><br /><span class="syllable" style="text-decoration: underline;">Sí<span class="note" data-notation="Latina">Re</span></span>, Cristo <span class="syllable" style="text-decoration: underline;">me a<span class="note" data-notation="Latina">Sol</span></span>ma<br /><br />La <span class="syllable" style="text-decoration: underline;">Bi<span class="note" data-notation="Latina">Re</span></span>blia <span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">La</span></span>ce a<span class="syllable" style="text-decoration: underline;">sí<span class="note" data-notation="Latina">Re</span></span><br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Sí, Cristo me ama" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <a href="https://jmladino.blogspot.com/2023/08/sanson.html"><button class="blue-button">17. Sansón</button></a>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <a href="https://jmladino.blogspot.com/2023/08/alabare.html"><button class="blue-button">19. Alabaré</button></a>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

