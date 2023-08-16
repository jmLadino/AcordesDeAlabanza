﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />/// Mi pensamiento eres tú, Señor ///<br /><br />Mi pensamiento eres tú.<br /><br /><br /><br />Coro<br /><br />// Porque tú me has dado la vida<br /><br />Porque tú me has dado el existir<br /><br />Porque tú me has dado cariño<br /><br />Me has dado amor //<br /><br /><br /><br />/// Mi fortaleza eres tú, Señor ///<br /><br />Mi fortaleza eres tú<br /><br /><br /><br />Coro:<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Mi<span class="note" data-notation="Latina">Sol</span></span> pensamiento eres <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Do</span></span>, Señor<br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span>Mi pensamiento eres <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Sim</span></span>, Señor <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Mim</span></span><br /><br />Mi pensamiento eres <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Do</span></span>, Señor <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span><br /><br />Mi pensamiento eres <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Sol</span></span>. <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol7</span></span><br /><br /><br /><br />Coro<br /><br />// Porque <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Do</span></span> me has dado la <span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">Re</span></span>da<br /><br />Porque <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Sim</span></span> me has dado el exis<span class="syllable" style="text-decoration: underline;">tir<span class="note" data-notation="Latina">Mim</span></span><br /><br />Porque <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Do</span></span> me has dado ca<span class="syllable" style="text-decoration: underline;">ri<span class="note" data-notation="Latina">Re</span></span>ño<br /><br />Me has dado a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol7</span></span>//<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Mi<span class="note" data-notation="Latina">Sol</span></span> fortaleza eres <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Do</span></span>, Señor<br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span>Mi fortaleza eres <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Sim</span></span>, Señor <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Mim</span></span><br /><br />Mi fortaleza eres <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Do</span></span>, Señor <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span><br /><br />Mi fortaleza eres <span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol7</span></span><br /><br /><br /><br />Coro:<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Mi Pensamiento" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/maranatha.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">42. Maranatha</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/mirad-cual-amor.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">44. Mirad cual amor</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

