﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>                <p><br />Amor, amor, amor, amor<br /><br />Es el evangelio en una palabra<br /><br />Ama a tu prójimo como a ti mismo<br /><br />¡Dios es amor! ¡Dios es amor!<br /><br /><br /><br />Jesús, Jesús, Jesús, Jesús<br /><br />Cambia mi vida tan solo en un momento<br /><br />Haz que mi vida sea un ejemplo<br /><br />Hazlo Jesús, hazlo Jesús.<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br />A<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Mim</span></span>, a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Re</span></span>, a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Mim</span></span>, amor<br /><br /><span class="syllable" style="text-decoration: underline;">Es<span class="note" data-notation="Latina">Mim</span></span> el evan<span class="syllable" style="text-decoration: underline;">ge<span class="note" data-notation="Latina">Re</span></span>lio en <span class="syllable" style="text-decoration: underline;">u<span class="note" data-notation="Latina">Mim</span></span>na pala<span class="syllable" style="text-decoration: underline;">bra<span class="note" data-notation="Latina">Si7</span></span><br /><br /><span class="syllable" style="text-decoration: underline;">A<span class="note" data-notation="Latina">Mim</span></span>ma a tu <span class="syllable" style="text-decoration: underline;">pró<span class="note" data-notation="Latina">Re</span></span>jimo <span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Mim</span></span>mo a ti <span class="syllable" style="text-decoration: underline;">mis<span class="note" data-notation="Latina">Si7</span></span>mo<br /><br />¡<span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mim</span></span> <span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Re</span></span> a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Mim</span></span>! ¡<span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Mim</span></span> <span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Re</span></span> a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Mim</span></span>!<br /><br /><br /><br />Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mim</span></span>, Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span>, Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mim</span></span>, Jesús<br /><br /><span class="syllable" style="text-decoration: underline;">Cam<span class="note" data-notation="Latina">Mim</span></span>bia mi <span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">Re</span></span>da tan <span class="syllable" style="text-decoration: underline;">so<span class="note" data-notation="Latina">Mim</span></span>lo en un mo<span class="syllable" style="text-decoration: underline;">men<span class="note" data-notation="Latina">Si7</span></span>to<br /><br /><span class="syllable" style="text-decoration: underline;">Haz<span class="note" data-notation="Latina">Mim</span></span> que mi <span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">Re</span></span>da <span class="syllable" style="text-decoration: underline;">sea<span class="note" data-notation="Latina">Mim</span></span> un e<span class="syllable" style="text-decoration: underline;">jem<span class="note" data-notation="Latina">Si7</span></span>plo<br /><br /><span class="syllable" style="text-decoration: underline;">Haz<span class="note" data-notation="Latina">Mim</span></span>lo <span class="syllable" style="text-decoration: underline;">Je<span class="note" data-notation="Latina">Re</span></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mim</span></span>, <span class="syllable" style="text-decoration: underline;">haz<span class="note" data-notation="Latina">Mim</span></span>lo <span class="syllable" style="text-decoration: underline;">Je<span class="note" data-notation="Latina">Re</span></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mim</span></span>.<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Amor, amor" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <a href="https://jmladino.blogspot.com/2023/08/amemonos-de-corazon.html"><button class="blue-button">23. Amémonos de corazón</button></a>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <a href="https://jmladino.blogspot.com/2023/08/aquel-que-la-buena-obra-empezo.html"><button class="blue-button">25. Aquel que la buena obra empezó</button></a>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

