﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />El hombre prudente su casa construyó<br /><br />El hombre prudente su casa construyó<br /><br />El hombre prudente su casa construyó<br /><br />en la roca construyó<br /><br /><br /><br />Vinieron las lluvias, se agita el mar<br /><br />Vinieron las lluvias, se agita el mar<br /><br />Vinieron las lluvias, se agita el mar<br /><br />y la casa no cayó<br /><br /><br /><br />El hombre insensato su casa construyó<br /><br />El hombre insensato su casa construyó<br /><br />El hombre insensato su casa construyó<br /><br />en la arena construyó<br /><br /><br /><br />Vinieron las lluvias, se agita el mar<br /><br />Vinieron las lluvias, se agita el mar<br /><br />Vinieron las lluvias, se agita el mar<br /><br />y la casa se cayó<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br />El <span class="syllable" style="text-decoration: underline;">hom<span class="note" data-notation="Latina">Re</span></span>bre prudente su <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">La</span></span>sa construyó<br /><br />El hombre prudente su <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Re</span></span>sa construyó<br /><br />El hombre prudente su <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">La</span></span>sa construyó<br /><br />en la <span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">Sol</span></span>ca <span class="syllable" style="text-decoration: underline;">cons<span class="note" data-notation="Latina">La</span></span>tru<span class="syllable" style="text-decoration: underline;">yó<span class="note" data-notation="Latina">Re</span></span><br /><br /><br /><br />Vi<span class="syllable" style="text-decoration: underline;">nie<span class="note" data-notation="Latina">Re</span></span>ron las lluvias, <span class="syllable" style="text-decoration: underline;">se<span class="note" data-notation="Latina">La</span></span> agita el mar<br /><br />Vinieron las lluvias, <span class="syllable" style="text-decoration: underline;">se<span class="note" data-notation="Latina">Re</span></span> agita el mar<br /><br />Vinieron las lluvias, <span class="syllable" style="text-decoration: underline;">se<span class="note" data-notation="Latina">La</span></span> agita el mar<br /><br />y la <span class="syllable" style="text-decoration: underline;">casa<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">La</span></span> ca<span class="syllable" style="text-decoration: underline;">yó<span class="note" data-notation="Latina">Re</span></span><br /><br /><br /><br />El <span class="syllable" style="text-decoration: underline;">hom<span class="note" data-notation="Latina">Re</span></span>bre insensato su <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">La</span></span>sa construyó<br /><br />El hombre insensato su <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Re</span></span>sa construyó<br /><br />El hombre insensato su <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">La</span></span>sa construyó<br /><br />en la a<span class="syllable" style="text-decoration: underline;">re<span class="note" data-notation="Latina">Sol</span></span>na <span class="syllable" style="text-decoration: underline;">cons<span class="note" data-notation="Latina">La</span></span>tru<span class="syllable" style="text-decoration: underline;">yó<span class="note" data-notation="Latina">Re</span></span><br /><br /><br /><br />Vi<span class="syllable" style="text-decoration: underline;">nie<span class="note" data-notation="Latina">Re</span></span>ron las lluvias, <span class="syllable" style="text-decoration: underline;">se<span class="note" data-notation="Latina">La</span></span> agita el mar<br /><br />Vinieron las lluvias, <span class="syllable" style="text-decoration: underline;">se<span class="note" data-notation="Latina">Re</span></span> agita el mar<br /><br />Vinieron las lluvias, <span class="syllable" style="text-decoration: underline;">se<span class="note" data-notation="Latina">La</span></span> agita el mar<br /><br />y la <span class="syllable" style="text-decoration: underline;">casa<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable" style="text-decoration: underline;">se<span class="note" data-notation="Latina">La</span></span> ca<span class="syllable" style="text-decoration: underline;">yó<span class="note" data-notation="Latina">Re</span></span><br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="El hombre prudente" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/el-arca-de-noe.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">8. El arca de Noé</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/en-el-arca-de-noe.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">10. En el arca de Noé</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

