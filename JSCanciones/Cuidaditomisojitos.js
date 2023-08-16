﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />// Cuidadito mis ojitos lo que miran //<br /><br />Hay un Dios de amor, que mirándonos está<br /><br />Cuidadito los ojitos lo que miran<br /><br /><br /><br />// Cuidadito las manitos lo que tocan //<br /><br />Hay un Dios de amor, que mirándonos está<br /><br />Cuidadito las manitos lo que tocan<br /><br /><br /><br />// Cuidadito lo oídos lo que oyen //<br /><br />Hay un Dios de amor, que mirándonos está<br /><br />Cuidadito lo oídos lo que oyen<br /><br /><br /><br />// Cuidadito la boquita lo que habla //<br /><br />Hay un Dios de amor, que mirándonos está<br /><br />Cuidadito la boquita lo que habla<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br />Cuida<span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">Re</span></span>to mis ojitos lo que <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">La</span></span>ran<br /><br />Cuidadito mis ojitos lo que <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Re</span></span>ran<br /><br />Hay un <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Sol</span></span> de amor, que mi<span class="syllable" style="text-decoration: underline;">rán<span class="note" data-notation="Latina">Re</span></span>donos está<br /><br />Cuida<span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">La</span></span>to los ojitos lo que <span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Re</span></span>ran<br /><br /><br /><br />Cuida<span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">Re</span></span>to las manitos lo que <span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">La</span></span>can<br /><br />Cuidadito las manitos lo que <span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Re</span></span>can<br /><br />Hay un <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Sol</span></span> de amor, que mi<span class="syllable" style="text-decoration: underline;">rán<span class="note" data-notation="Latina">Re</span></span>donos está<br /><br />Cuida<span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">La</span></span>to las manitos lo que <span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Re</span></span>can<br /><br /><br /><br />Cuida<span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">Re</span></span>to lo oídos lo que <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">La</span></span>yen<br /><br />Cuidadito lo oídos lo que <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Re</span></span>yen<br /><br />Hay un <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Sol</span></span> de amor, que mi<span class="syllable" style="text-decoration: underline;">rán<span class="note" data-notation="Latina">Re</span></span>donos está<br /><br />Cuida<span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">La</span></span>to lo oídos lo que <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Re</span></span>yen<br /><br /><br /><br />Cuida<span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">Re</span></span>to la boquita lo que <span class="syllable" style="text-decoration: underline;">ha<span class="note" data-notation="Latina">La</span></span>bla<br /><br />Cuidadito la boquita lo que <span class="syllable" style="text-decoration: underline;">ha<span class="note" data-notation="Latina">Re</span></span>bla<br /><br />Hay un <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Sol</span></span> de amor, que mi<span class="syllable" style="text-decoration: underline;">rán<span class="note" data-notation="Latina">Re</span></span>donos está<br /><br />Cuida<span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">La</span></span>to la boquita lo que <span class="syllable" style="text-decoration: underline;">ha<span class="note" data-notation="Latina">Re</span></span>bla<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="598px" height="315" src="" title="Cuidadito mis ojitos" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/cristo-nos-dice-que-subamos-mas.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">4. Cristo nos dice que subamos más</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/dios-hizo-el-lindo-jardin.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">6. Dios hizo el lindo jardín</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

