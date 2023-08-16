﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />Alto escúchame, no sigas caminando más<br /><br />hoy quiero contarte lo que Dios hizo por mí.<br /><br />Tienes que saber que un día me entregué al Señor<br /><br />soy un hombre nuevo y ahora vivo para Él.<br /><br /><br /><br />CORO:<br /><br />&emsp;Que alegría es ser un testigo de Dios,<br /><br />&emsp;es sentirlo por fe en el corazón,<br /><br />&emsp;y aunque todos me digan eso no es verdad,<br /><br />&emsp;yo lo siento en mi vida, aún más, aún más.<br /><br /><br /><br />Dios te quiere a ti, eres importante para Él,<br /><br />debes aceptarlo ahora mismo por la fe,<br /><br />Aunque tengas dudas Dios después te las aclarará<br /><br />deja el conformismo de este mundo y síguele.<br /><br /><br /><br />CORO:<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Al<span class="note" data-notation="Latina">Re</span></span>to escúcha<span class="syllable" style="text-decoration: underline;">me<span class="note" data-notation="Latina">Sol</span></span>, no <span class="syllable" style="text-decoration: underline;">si<span class="note" data-notation="Latina">La</span></span>gas cami<span class="syllable" style="text-decoration: underline;">nan<span class="note" data-notation="Latina">Re</span></span>do más<br /><br />hoy quiero con<span class="syllable" style="text-decoration: underline;">tar<span class="note" data-notation="Latina">Sol</span></span>te lo que <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">La</span></span> hizo por <span class="syllable" style="text-decoration: underline;">mí<span class="note" data-notation="Latina">Re</span></span>.<br /><br />Tienes que sa<span class="syllable" style="text-decoration: underline;">ber<span class="note" data-notation="Latina">Sol</span></span> que un <span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">La</span></span> me entre<span class="syllable" style="text-decoration: underline;">gué<span class="note" data-notation="Latina">Re</span></span> al Señor<br /><br />soy un hombre <span class="syllable" style="text-decoration: underline;">nue<span class="note" data-notation="Latina">Sol</span></span>vo y ahora <span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">La</span></span>vo para <span class="syllable" style="text-decoration: underline;">Él<span class="note" data-notation="Latina">Re</span></span>.<br /><br /><br /><br /><b>CORO</b>:<br /><br />&emsp;Que ale<span class="syllable" style="text-decoration: underline;">gría<span class="note" data-notation="Latina">Sol</span></span> es <span class="syllable" style="text-decoration: underline;">ser<span class="note" data-notation="Latina">La</span></span> un tes<span class="syllable" style="text-decoration: underline;">tigo<span class="note" data-notation="Latina">Re</span></span> <span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">La</span></span> <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Sim</span></span>,<br /><br />&emsp;es sen<span class="syllable" style="text-decoration: underline;">tir<span class="note" data-notation="Latina">Sol</span></span>lo por <span class="syllable" style="text-decoration: underline;">fe<span class="note" data-notation="Latina">La</span></span> en el <span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Re</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">ra<span class="note" data-notation="Latina">La</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Sim</span></span>,<br /><br />&emsp;y aunque <span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Sol</span></span>dos me <span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">La</span></span>gan eso <span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">Re</span></span> es <span class="syllable" style="text-decoration: underline;">ver<span class="note" data-notation="Latina">La</span></span>&emsp;<span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Sim</span></span>,<br /><br />&emsp;yo lo <span class="syllable" style="text-decoration: underline;">sien<span class="note" data-notation="Latina">Sol</span></span>to en mi <span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">La</span></span>da, aún <span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Re</span></span>, <span class="syllable" style="text-decoration: underline;">aún<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Re</span></span>.<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span> te quiere a <span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Sol</span></span>, eres <span class="syllable" style="text-decoration: underline;">im<span class="note" data-notation="Latina">La</span></span>portante <span class="syllable" style="text-decoration: underline;">pa<span class="note" data-notation="Latina">Re</span></span>ra Él,<br /><br />debes acep<span class="syllable" style="text-decoration: underline;">tar<span class="note" data-notation="Latina">Sol</span></span>lo ahora <span class="syllable" style="text-decoration: underline;">mis<span class="note" data-notation="Latina">La</span></span>mo por la <span class="syllable" style="text-decoration: underline;">fe<span class="note" data-notation="Latina">Re</span></span>,<br /><br />Aunque tengas <span class="syllable" style="text-decoration: underline;">du<span class="note" data-notation="Latina">Sol</span></span>das Dios des<span class="syllable" style="text-decoration: underline;">pués<span class="note" data-notation="Latina">La</span></span> te las a<span class="syllable" style="text-decoration: underline;">cla<span class="note" data-notation="Latina">Re</span></span>rará<br /><br />deja el confor<span class="syllable" style="text-decoration: underline;">mis<span class="note" data-notation="Latina">Sol</span></span>mo de este <span class="syllable" style="text-decoration: underline;">mun<span class="note" data-notation="Latina">La</span></span>do y sígue<span class="syllable" style="text-decoration: underline;">le<span class="note" data-notation="Latina">Re</span></span>.<br /><br /><br /><br /><b>CORO</b>:<br /><br /><br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Alto escúchame" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/al-lado-de-jesus.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">21. Al lado de Jesús</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/amemonos-de-corazon.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">23. Amémonos de corazón</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

