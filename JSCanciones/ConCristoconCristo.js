﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br /><p class="increased-line-height">Con Cristo con Cristo /:</p><p class="increased-line-height">Junto a las flores /:</p><p class="increased-line-height">He encontrado que mi vida es de colores</p><p class="increased-line-height">El sol y la luna /:</p><p class="increased-line-height">Caminan conmigo /:</p><p class="increased-line-height"></p><p class="increased-line-height">Desde cuando Jesucristo está conmigo</p><p class="increased-line-height">Voy corriendo por los valles</p><p class="increased-line-height">Voy saltando en los trigales</p><p class="increased-line-height">Siempre unidos de la mano</p><p class="increased-line-height">Voy cantando mi canción</p><p class="increased-line-height">Voy corriendo por los valles</p><p class="increased-line-height">Voy saltando en los trigales</p><p class="increased-line-height">Siempre unidos de la mano</p><p class="increased-line-height"></p><p class="increased-line-height">/// Cristo y yo ///</p><p class="increased-line-height"></p></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><p class="increased-line-height"></p><p class="increased-line-height">Con <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Re</span></span>to con Cristo/:</p><p class="increased-line-height"><span class="syllable" style="text-decoration: underline;">Jun<span class="note" data-notation="Latina">Sol</span></span>to a las flores/:</p><p class="increased-line-height">He encon<span class="syllable" style="text-decoration: underline;">tra<span class="note" data-notation="Latina">La</span></span>do que mi <span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">La7</span></span>da es de co<span class="syllable" style="text-decoration: underline;">lo<span class="note" data-notation="Latina">Re</span></span>res</p><p class="increased-line-height">El <span class="syllable" style="text-decoration: underline;">sol<span class="note" data-notation="Latina">Re</span></span>y la luna/:</p><p class="increased-line-height">Ca<span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Sol</span></span>nan conmigo/:</p><p class="increased-line-height">Desde <span class="syllable" style="text-decoration: underline;">cuan<span class="note" data-notation="Latina">La</span></span>do Jesu<span class="syllable" style="text-decoration: underline;">cris<span class="note" data-notation="Latina">La7</span></span>to está con<span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Re</span></span>go <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re7</span></span></p><p class="increased-line-height"></p><p class="increased-line-height">Voy co<span class="syllable" style="text-decoration: underline;">rrien<span class="note" data-notation="Latina">Sol</span></span>do por los <span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">La</span></span>lles</p><p class="increased-line-height">Voy sal<span class="syllable" style="text-decoration: underline;">tan<span class="note" data-notation="Latina">Re</span></span>do en los tri<span class="syllable" style="text-decoration: underline;">ga<span class="note" data-notation="Latina">Sim</span></span>les</p><p class="increased-line-height">Siempre u<span class="syllable" style="text-decoration: underline;">ni<span class="note" data-notation="Latina">Sol</span></span>dos de la <span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">La</span></span>no</p><p class="increased-line-height">Voy can<span class="syllable" style="text-decoration: underline;">tan<span class="note" data-notation="Latina">Re</span></span>do mi can<span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">Re7</span></span></p><p class="increased-line-height">Voy co<span class="syllable" style="text-decoration: underline;">rrien<span class="note" data-notation="Latina">Sol</span></span>do por los <span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">La</span></span>lles</p><p class="increased-line-height">Voy sal<span class="syllable" style="text-decoration: underline;">tan<span class="note" data-notation="Latina">Re</span></span>do en los tri<span class="syllable" style="text-decoration: underline;">ga<span class="note" data-notation="Latina">Re7</span></span>les</p><p class="increased-line-height">Siempre u<span class="syllable" style="text-decoration: underline;">ni<span class="note" data-notation="Latina">Sol</span></span>dos de la <span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">La</span></span>no</p><p class="increased-line-height">Cristo y <span class="syllable" style="text-decoration: underline;">yo<span class="note" data-notation="Latina">Re</span></span>&emsp;<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span></p><p class="increased-line-height">Cristo y <span class="syllable" style="text-decoration: underline;">yo<span class="note" data-notation="Latina">Re</span></span>&emsp;<span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span></p><p class="increased-line-height">Cristo y <span class="syllable" style="text-decoration: underline;">yo<span class="note" data-notation="Latina">Re</span></span></p></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="Con Cristo con Cristo" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/canto-de-alegria.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">29. Canto de alegría</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://jmladino.blogspot.com/2023/08/construye-tu-casa-sobre-la-roca.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">31. Construye tu casa sobre la roca</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

