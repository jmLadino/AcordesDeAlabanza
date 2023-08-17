﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br /><p class="increased-line-height">¿Quién hizo las lindas estrellas?</p><p class="increased-line-height">Las lindas estrellas, las lindas estrellas</p><p class="increased-line-height">¿Quién hizo las lindas estrellas?</p><p class="increased-line-height">Cristo mi Jesús</p><p class="increased-line-height"></p><p class="increased-line-height">¿Quién hizo el mar azul?</p><p class="increased-line-height">El mar azul, el mar azul</p><p class="increased-line-height">¿Quién hizo el mar azul?</p><p class="increased-line-height">Cristo mi Jesús</p><p class="increased-line-height"></p><p class="increased-line-height">¿Quién hizo las aves que vuelan?</p><p class="increased-line-height">Las aves que vuelan, las aves que vuelan</p><p class="increased-line-height">¿Quién hizo las aves que vuelan?</p><p class="increased-line-height">Cristo mi Jesús</p><p class="increased-line-height"></p><p class="increased-line-height">¿Quién nos hizo a ti y a mí?</p><p class="increased-line-height">A ti y a mí, a ti y a mí</p><p class="increased-line-height">¿Quién nos hizo a ti y a mí?</p><p class="increased-line-height">Cristo mi Jesús</p><p class="increased-line-height"></p><p class="increased-line-height">¿Quién hizo las lindas estrellas?</p><p class="increased-line-height">El mar azul, las aves que vuelan</p><p class="increased-line-height">¿Quién nos hizo a ti y a mí?</p><p class="increased-line-height">Cristo mi Jesús</p><p class="increased-line-height"></p></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><p class="increased-line-height"></p><p class="increased-line-height">¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo las lindas estrellas?</p><p class="increased-line-height">Las <span class="syllable" style="text-decoration: underline;">lin<span class="note" data-notation="Latina">Sol</span></span>das estrellas, las <span class="syllable" style="text-decoration: underline;">lin<span class="note" data-notation="Latina">Fa</span></span>das es<span class="syllable" style="text-decoration: underline;">tre<span class="note" data-notation="Latina">Do</span></span>llas</p><p class="increased-line-height">¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo las lindas estrellas?</p><p class="increased-line-height"><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span></p><p class="increased-line-height"></p><p class="increased-line-height">¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo el mar azul?</p><p class="increased-line-height">El <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Sol</span></span> azul, el <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Fa</span></span> a<span class="syllable" style="text-decoration: underline;">zul<span class="note" data-notation="Latina">Do</span></span></p><p class="increased-line-height">¿ <span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo el mar azul?</p><p class="increased-line-height"><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span></p><p class="increased-line-height"></p><p class="increased-line-height">¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo las aves que vuelan?</p><p class="increased-line-height">Las <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Sol</span></span>ves que vuelan, las <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Fa</span></span>ves que <span class="syllable" style="text-decoration: underline;">vue<span class="note" data-notation="Latina">Do</span></span>lan</p><p class="increased-line-height">¿ <span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo las aves que vuelan?</p><p class="increased-line-height"><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span></p><p class="increased-line-height"></p><p class="increased-line-height">¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> nos hizo a ti y a mí?</p><p class="increased-line-height">A <span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Sol</span></span> y a mí, a <span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Fa</span></span> y a <span class="syllable" style="text-decoration: underline;">mí<span class="note" data-notation="Latina">Do</span></span></p><p class="increased-line-height">¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> nos hizo a ti y a mí?</p><p class="increased-line-height"><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span></p><p class="increased-line-height"></p><p class="increased-line-height">¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo las lindas estrellas?</p><p class="increased-line-height">El <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Sol</span></span> azul, las <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Fa</span></span>ves que <span class="syllable" style="text-decoration: underline;">vue<span class="note" data-notation="Latina">Do</span></span>lan</p><p class="increased-line-height">¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> nos hizo a ti y a mí?</p><p class="increased-line-height"><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span></p></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="¿Quién hizo las lindas estrellas?" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/quien-es-el-rey-de-la-selva.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">15. ¿Quién es el rey de la Selva?</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/sanson.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">17. Sansón</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

