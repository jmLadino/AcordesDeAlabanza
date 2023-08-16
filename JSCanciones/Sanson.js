﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />Sansón era un muchacho así, así, así<br /><br />Tenía mucha fuerza así, así, así<br /><br /><br /><br />Vinieron los filisteos a atacar a Israel<br /><br />Y pum y pum y pum pum pum<br /><br />Sansón los derribó<br /><br /><br /><br />Vinieron los filisteos a atacar a Israel<br /><br />Y pum y pum y pum pum pum<br /><br />Sansón los derribó<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br />San<span class="syllable" style="text-decoration: underline;">són<span class="note" data-notation="Latina">Re</span></span> era un muchacho así, así, <span class="syllable" style="text-decoration: underline;">así<span class="note" data-notation="Latina">La</span></span><br /><br />Te<span class="syllable" style="text-decoration: underline;">nía<span class="note" data-notation="Latina">La</span></span> mucha fuerza así, así, <span class="syllable" style="text-decoration: underline;">así<span class="note" data-notation="Latina">Re</span></span><br /><br /><br /><br />Vinieron los filisteos a a<span class="syllable" style="text-decoration: underline;">ta<span class="note" data-notation="Latina">Re7</span></span>car a Isra<span class="syllable" style="text-decoration: underline;">el<span class="note" data-notation="Latina">Sol</span></span><br /><br />Y <span class="syllable" style="text-decoration: underline;">pum<span class="note" data-notation="Latina">Sol</span></span> y pum y <span class="syllable" style="text-decoration: underline;">pum<span class="note" data-notation="Latina">Re</span></span> <span class="syllable" style="text-decoration: underline;">pum<span class="note" data-notation="Latina">Re</span></span> <span class="syllable" style="text-decoration: underline;">pum<span class="note" data-notation="Latina">Re</span></span><br /><br />San<span class="syllable" style="text-decoration: underline;">són<span class="note" data-notation="Latina">La</span></span> los derri<span class="syllable" style="text-decoration: underline;">bó<span class="note" data-notation="Latina">Re</span></span><br /><br /><br /><br />Vinieron los filisteos a a<span class="syllable" style="text-decoration: underline;">ta<span class="note" data-notation="Latina">Re7</span></span>car a Isra<span class="syllable" style="text-decoration: underline;">el<span class="note" data-notation="Latina">Sol</span></span><br /><br />Y <span class="syllable" style="text-decoration: underline;">pum<span class="note" data-notation="Latina">Sol</span></span> y pum y <span class="syllable" style="text-decoration: underline;">pum<span class="note" data-notation="Latina">Re</span></span> <span class="syllable" style="text-decoration: underline;">pum<span class="note" data-notation="Latina">Re</span></span> <span class="syllable" style="text-decoration: underline;">pum<span class="note" data-notation="Latina">Re</span></span><br /><br />San<span class="syllable" style="text-decoration: underline;">són<span class="note" data-notation="Latina">La</span></span> los derri<span class="syllable" style="text-decoration: underline;">bó<span class="note" data-notation="Latina">Re</span></span><br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Sansón" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/quien-hizo-las-lindas-estrellas.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">16. ¿Quién hizo las lindas estrellas?</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/si-cristo-me-ama.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">18. Sí, Cristo me ama</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

