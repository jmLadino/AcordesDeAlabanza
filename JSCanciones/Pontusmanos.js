﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>                <p><br />Pon tus manos<br /><br />en las manos del Señor de Galilea,<br /><br />pon tus manos<br /><br />en las manos del Señor<br /><br />que calma la mar,<br /><br />Si el Señor reina hoy<br /><br />y por siempre en nuestro ser,<br /><br />pon tus manos<br /><br />en las manos del Señor<br /><br />que calma la mar.<br /><br /><br /><br />Pon tus pasos<br /><br />en los pasos del Señor de Galilea,<br /><br />pon tus pasos<br /><br />en los pasos del Señor<br /><br />que calma la mar,<br /><br />Si el Señor reina hoy<br /><br />y por siempre en nuestro ser,<br /><br />pon tus pasos<br /><br />en los pasos del Señor<br /><br />que calma la mar.<br /><br /><br /><br />Pon tus ojos<br /><br />en los ojos del Señor de Galilea,<br /><br />pon tus ojos<br /><br />en los ojos del Señor<br /><br />que calma la mar,<br /><br />Si el Señor reina hoy<br /><br />y por siempre en nuestro ser,<br /><br />pon tus ojos<br /><br />en los ojos del Señor<br /><br />que calma la mar.<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br />Pon tus <span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Re</span></span>nos en las manos del Señor de Gali<span class="syllable" style="text-decoration: underline;">le<span class="note" data-notation="Latina">La</span></span><span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Sol</span></span>,<br /><br />pon tus <span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Sol</span></span>nos en las manos del Señor que <span class="syllable" style="text-decoration: underline;">cal<span class="note" data-notation="Latina">La</span></span>ma la <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span>,<br /><br />Si el Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Re</span></span> reina <span class="syllable" style="text-decoration: underline;">hoy<span class="note" data-notation="Latina">Re7</span></span> y por <span class="syllable" style="text-decoration: underline;">siem<span class="note" data-notation="Latina">Sol</span></span>pre en nuestro <span class="syllable" style="text-decoration: underline;">ser<span class="note" data-notation="Latina">La</span></span>,<br /><br />pon tus <span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Re</span></span>nos en las manos del Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La</span></span> que <span class="syllable" style="text-decoration: underline;">cal<span class="note" data-notation="Latina">Sol</span></span>ma <span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">La</span></span> <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span>.<br /><br /><br /><br />Pon tus <span class="syllable" style="text-decoration: underline;">pa<span class="note" data-notation="Latina">Re</span></span>sos en los pasos del Señor de Gali<span class="syllable" style="text-decoration: underline;">le<span class="note" data-notation="Latina">La</span></span><span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Sol</span></span>,<br /><br />pon tus <span class="syllable" style="text-decoration: underline;">pa<span class="note" data-notation="Latina">Sol</span></span>sos en las pasos del Señor que <span class="syllable" style="text-decoration: underline;">cal<span class="note" data-notation="Latina">La</span></span>ma la <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span>,<br /><br />Si el Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Re</span></span> reina <span class="syllable" style="text-decoration: underline;">hoy<span class="note" data-notation="Latina">Re7</span></span> y por <span class="syllable" style="text-decoration: underline;">siem<span class="note" data-notation="Latina">Sol</span></span>pre en nuestro <span class="syllable" style="text-decoration: underline;">ser<span class="note" data-notation="Latina">La</span></span>,<br /><br />pon tus <span class="syllable" style="text-decoration: underline;">pa<span class="note" data-notation="Latina">Re</span></span>sos en las pasos del Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La</span></span> que <span class="syllable" style="text-decoration: underline;">cal<span class="note" data-notation="Latina">Sol</span></span>ma <span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">La</span></span> <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span>.<br /><br /><br /><br />Pon tus <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Re</span></span>jos en los ojos del Señor de Gali<span class="syllable" style="text-decoration: underline;">le<span class="note" data-notation="Latina">La</span></span><span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Sol</span></span>,<br /><br />pon tus <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Sol</span></span>jos en las ojos del Señor que <span class="syllable" style="text-decoration: underline;">cal<span class="note" data-notation="Latina">La</span></span>ma la <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span>,<br /><br />Si el Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Re</span></span> reina <span class="syllable" style="text-decoration: underline;">hoy<span class="note" data-notation="Latina">Re7</span></span> y por <span class="syllable" style="text-decoration: underline;">siem<span class="note" data-notation="Latina">Sol</span></span>pre en nuestro <span class="syllable" style="text-decoration: underline;">ser<span class="note" data-notation="Latina">La</span></span>,<br /><br />pon tus <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Re</span></span>jos en las ojos del Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La</span></span> que <span class="syllable" style="text-decoration: underline;">cal<span class="note" data-notation="Latina">Sol</span></span>ma <span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">La</span></span> <span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">Re</span></span>.<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Pon tus manos" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/no-me-importa-de-donde-tu-vengas.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">45. No me importa de donde tu vengas</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/puedo-confiar.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">47. Puedo Confiar</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

