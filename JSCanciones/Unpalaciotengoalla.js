﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />Un palacio tengo allá más lindo que el sol,<br /><br />Un palacio tengo allá más lindo que el sol,<br /><br />Un palacio tengo allá más lindo que el sol,<br /><br />En el más allá.<br /><br /><br /><br />Bendito Cristo contigo estaré,<br /><br />Bendito Cristo contigo estaré,<br /><br />Bendito Cristo contigo estaré,<br /><br />En el más allá.<br /><br /><br /><br />Si tú quieres ir al cielo ven al Señor,<br /><br />Si tú quieres ir al cielo ven al Señor,<br /><br />Si tú quieres ir al cielo ven al Señor,<br /><br />Ven sin demorar.<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><span class="syllable" style="text-decoration: underline;">Un<span class="note" data-notation="Latina">Sol</span></span>palacio tengo allá más lindo que el sol,<br /><br /><span class="syllable" style="text-decoration: underline;">Un<span class="note" data-notation="Latina">Do</span></span> palacio tengo allá más lindo que el <span class="syllable" style="text-decoration: underline;">sol<span class="note" data-notation="Latina">Sol</span></span>,<br /><br />Un palacio tengo allá más <span class="syllable" style="text-decoration: underline;">lin<span class="note" data-notation="Latina">Mim</span></span>do que el sol,<br /><br /><span class="syllable" style="text-decoration: underline;">En<span class="note" data-notation="Latina">Re</span></span> el más a<span class="syllable" style="text-decoration: underline;">llá<span class="note" data-notation="Latina">Sol</span></span>.<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Ben<span class="note" data-notation="Latina">Sol</span></span>dito Cristo contigo estaré,<br /><br /><span class="syllable" style="text-decoration: underline;">Ben<span class="note" data-notation="Latina">Do</span></span>dito Cristo contigo esta<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">Sol</span></span>,<br /><br />Bendito Cristo con<span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Mim</span></span>go estaré,<br /><br /><span class="syllable" style="text-decoration: underline;">En<span class="note" data-notation="Latina">Re</span></span> el más a<span class="syllable" style="text-decoration: underline;">llá<span class="note" data-notation="Latina">Sol</span></span>.<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Si<span class="note" data-notation="Latina">Sol</span></span>tú quieres ir al cielo ven al Señor,<br /><br /><span class="syllable" style="text-decoration: underline;">Si<span class="note" data-notation="Latina">Do</span></span> tú quieres ir al cielo ven al Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span>,<br /><br />Si tú quieres ir al cielo <span class="syllable" style="text-decoration: underline;">ven<span class="note" data-notation="Latina">Mim</span></span>al Señor,<br /><br /><span class="syllable" style="text-decoration: underline;">Ven<span class="note" data-notation="Latina">Re</span></span> sin demo<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Sol</span></span>.<br /><br /><span class="syllable" style="text-decoration: underline;">Ven<span class="note" data-notation="Latina">Re</span></span> sin demo<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Sol</span></span>.<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="598px" height="315" src="" title="Un palacio tengo allá" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/tierra-bendita-y-divina.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">55. Tierra bendita y divina</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/volvera.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">57. Volverá</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

