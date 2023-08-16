﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>                <p><br />// Él es Señor Jehová, Dios poderoso //<br /><br />Señor y Adonai,<br /><br />la Roca eterna.<br /><br />Y es gran señor que te puede restaurar.<br /><br /><br /><br />Él es el gran Yo soy,<br /><br />el Dios de Abraham.<br /><br />Señor Jehová Shalom, el Dios de paz yo soy.<br /><br />El Dios de Israel, Señor eterno,<br /><br />Y es gran Señor que te puede restaurar.<br /><br /><br /><br />// Canta aleluya, canta aleluya //<br /><br /><br /><br />Él es Señor Jehová, Dios poderoso.<br /><br />Y es gran señor que te puede restaurar.<br /><br /><br /><br />Él es gran proveedor, Jehová Jireh.<br /><br />Es nuestro salvador, nuestro Mesías.<br /><br />Su hijo él envió y aquí testificó,<br /><br />Y es gran señor que te puede restaurar.<br /><br /><br /><br />// Canta aleluya, canta aleluya //<br /><br /><br /><br />Él es Señor Jehová, Dios poderoso.<br /><br />Y es gran señor que te puede restaurar<br /><br /><br /><br />// Canta aleluya, canta aleluya //<br /><br /><br /><br />Él es Señor Jehová, Dios poderoso.<br /><br />Y es gran señor que te puede restaurar<br /><br />Y es gran señor que te puede<br /><br />restaurar.<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Mim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Si7</span></span><br /><br /><br /><br />El es Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Mim</span></span>Jehová, Dios poderoso.<br /><br />El es Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span> Jehová, Dios pode<span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">Si7</span></span>so.<br /><br />Señor y <span class="syllable" style="text-decoration: underline;">A<span class="note" data-notation="Latina">Mim</span></span>donai, la Roca eterna.<br /><br />Y es gran Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span> que te <span class="syllable" style="text-decoration: underline;">pue<span class="note" data-notation="Latina">Si7</span></span>de restau<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Mim</span></span>.<br /><br /><br /><br />El es el <span class="syllable" style="text-decoration: underline;">gran<span class="note" data-notation="Latina">Mim</span></span>Yo soy, el Dios de Abraham.<br /><br />Señor Jeho<span class="syllable" style="text-decoration: underline;">vá<span class="note" data-notation="Latina">Sol</span></span> Shalom, el Dios de <span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Si7</span></span>yo soy.<br /><br />El Dios de <span class="syllable" style="text-decoration: underline;">Is<span class="note" data-notation="Latina">Mim</span></span>rael, Señor eterno,<br /><br />Y es gran Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span> que te <span class="syllable" style="text-decoration: underline;">pue<span class="note" data-notation="Latina">Si7</span></span>de restau<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Mim</span></span>.<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Can<span class="note" data-notation="Latina">Mim</span></span>ta ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Sol</span></span>ya, canta ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mim</span></span>ya.<br /><br />Canta ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Sol</span></span>ya, canta ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Si7</span></span>ya<br /><br />El es Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Mim</span></span>Jehová, Dios poderoso.<br /><br />Y es gran Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span> que te <span class="syllable" style="text-decoration: underline;">pue<span class="note" data-notation="Latina">Si7</span></span>de restau<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Mim</span></span>.<br /><br /><br /><br />El es gran <span class="syllable" style="text-decoration: underline;">pro<span class="note" data-notation="Latina">Mim</span></span>veedor, Jehová Jireh.<br /><br />Es nuestro <span class="syllable" style="text-decoration: underline;">sal<span class="note" data-notation="Latina">Sol</span></span>vador, nuestro Me<span class="syllable" style="text-decoration: underline;">sías<span class="note" data-notation="Latina">Si7</span></span>.<br /><br />Su hijo <span class="syllable" style="text-decoration: underline;">él<span class="note" data-notation="Latina">Mim</span></span>envió y aquí testificó,<br /><br />Y es gran Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span> que te <span class="syllable" style="text-decoration: underline;">pue<span class="note" data-notation="Latina">Si7</span></span>de restau<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Mim</span></span>.<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Can<span class="note" data-notation="Latina">Mim</span></span>ta ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Sol</span></span>ya, canta ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mim</span></span>ya.<br /><br />Canta ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Sol</span></span>ya, canta ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Si7</span></span>ya<br /><br />El es Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Mim</span></span>Jehová, Dios poderoso.<br /><br />Y es gran Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span> que te <span class="syllable" style="text-decoration: underline;">pue<span class="note" data-notation="Latina">Si7</span></span>de restau<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Mim</span></span>.<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Can<span class="note" data-notation="Latina">Mim</span></span>ta ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Sol</span></span>ya, canta ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Mim</span></span>ya.<br /><br />Canta ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Sol</span></span>ya, canta ale<span class="syllable" style="text-decoration: underline;">lu<span class="note" data-notation="Latina">Si7</span></span>ya<br /><br />El es Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Mim</span></span>Jehová, Dios poderoso.<br /><br />Y es gran Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span> que te <span class="syllable" style="text-decoration: underline;">pue<span class="note" data-notation="Latina">Si7</span></span>de restau<span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Mim</span></span>.<br /><br /><br /><br />Y es gran Se<span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span> que te <span class="syllable" style="text-decoration: underline;">pue<span class="note" data-notation="Latina">Si7</span></span>de<br /><br />restaur<span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Mim</span></span>    <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Lam</span></span>    <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Sol</span></span>    <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Si7</span></span>    <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Mim</span></span>    <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Si7</span></span>    <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Mim</span></span>r.<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Él es Señor Jehová" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <a href="https://jmladino.blogspot.com/2023/08/dios-esta-aqui.html"><button class="blue-button">33. Dios está aquí</button></a>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <a href="https://jmladino.blogspot.com/2023/08/el-hombre-que-anduvo-en-galilea.html"><button class="blue-button">35. El hombre que anduvo en Galilea</button></a>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

