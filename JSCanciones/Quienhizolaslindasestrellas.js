﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />¿Quién hizo las lindas estrellas?<br /><br />Las lindas estrellas, las lindas estrellas<br /><br />¿Quién hizo las lindas estrellas?<br /><br />Cristo mi Jesús<br /><br /><br /><br />¿Quién hizo el mar azul?<br /><br />El mar azul, el mar azul<br /><br />¿Quién hizo el mar azul?<br /><br />Cristo mi Jesús<br /><br /><br /><br />¿Quién hizo las aves que vuelan?<br /><br />Las aves que vuelan, las aves que vuelan<br /><br />¿Quién hizo las aves que vuelan?<br /><br />Cristo mi Jesús<br /><br /><br /><br />¿Quién nos hizo a ti y a mí?<br /><br />A ti y a mí, a ti y a mí<br /><br />¿Quién nos hizo a ti y a mí?<br /><br />Cristo mi Jesús<br /><br /><br /><br />¿Quién hizo las lindas estrellas?<br /><br />El mar azul, las aves que vuelan<br /><br />¿Quién nos hizo a ti y a mí?<br /><br />Cristo mi Jesús<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br />¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo las lindas estrellas?<br /><br />Las <span class="syllable" style="text-decoration: underline;">lin<span class="note" data-notation="Latina">Sol</span></span>das estrellas, las <span class="syllable" style="text-decoration: underline;">lin<span class="note" data-notation="Latina">Fa</span></span>das es<span class="syllable" style="text-decoration: underline;">tre<span class="note" data-notation="Latina">Do</span></span>llas<br /><br />¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo las lindas estrellas?<br /><br /><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span><br /><br /><br /><br />¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo el mar azul?<br /><br />El <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Sol</span></span> azul, el <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Fa</span></span> a<span class="syllable" style="text-decoration: underline;">zul<span class="note" data-notation="Latina">Do</span></span><br /><br />¿ <span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo el mar azul?<br /><br /><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span><br /><br /><br /><br />¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo las aves que vuelan?<br /><br />Las <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Sol</span></span>ves que vuelan, las <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Fa</span></span>ves que <span class="syllable" style="text-decoration: underline;">vue<span class="note" data-notation="Latina">Do</span></span>lan<br /><br />¿ <span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo las aves que vuelan?<br /><br /><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span><br /><br /><br /><br />¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> nos hizo a ti y a mí?<br /><br />A <span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Sol</span></span> y a mí, a <span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Fa</span></span> y a <span class="syllable" style="text-decoration: underline;">mí<span class="note" data-notation="Latina">Do</span></span><br /><br />¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> nos hizo a ti y a mí?<br /><br /><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span><br /><br /><br /><br />¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> hizo las lindas estrellas?<br /><br />El <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Sol</span></span> azul, las <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Fa</span></span>ves que <span class="syllable" style="text-decoration: underline;">vue<span class="note" data-notation="Latina">Do</span></span>lan<br /><br />¿<span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Do</span></span> nos hizo a ti y a mí?<br /><br /><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Fa</span></span> Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Do</span></span><br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="¿Quién hizo las lindas estrellas?" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/quien-es-el-rey-de-la-selva.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">15. ¿Quién es el rey de la Selva?</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/sanson.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">17. Sansón</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

