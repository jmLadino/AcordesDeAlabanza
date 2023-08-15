﻿const contenidoHTML = `    <div class="container">        <div class="content">					<div id="DIVLetra" class="div">				<div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>				<p><br />No hay esperanza alguna<br /><br />Si el mundo vive lejos de Dios<br /><br />No hay esperanza de amor ni de paz<br /><br />Cuando el odio nos invade feroz<br /><br /><br /><br />No hay esperanza de vida<br /><br />En quienes ya no aman a Dios<br /><br />No hay esperanza de un mundo mejor<br /><br />Pues sin Cristo solo existe dolor<br /><br /><br /><br />CORO:<br /><br /><br /><br />&emsp;// La esperanza es Jesús<br /><br />&emsp;Él es nuestro camino<br /><br />&emsp;La esperanza es Jesús<br /><br />&emsp;Nuestra luz entre espinos<br /><br />&emsp;La esperanza es Jesús<br /><br />&emsp;Y certeza de salvación<br /><br />&emsp;Para un mundo que no ve solución //<br /><br /><br /><br />La esperanza es Jesús<br /><br /><br /><br />Sólo hay esperanza y certeza<br /><br />En quien ya salió vencedor<br /><br />Ya hay esperanza en Cristo, el Señor<br /><br />Para un mundo que no tiene amor<br /><br /><br /><br />CORO: x2<br /><br /><br /><br />La esperanza es Jesús<br /><br />La esperanza es Jesús<br /><br /><br /><br /></p>			</div>						<div id="DIVGuitarra" class="div hidden">								<div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>				<br />				<span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>				<span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>				<span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>				<div id="container">					<div class="modal-overlay" id="modalOverlay">						<div class="modal-content">							<div id="imageContainer" class="fixed-div"></div>							<button id="closeModalButton">Cerrar</button>						</div>					</div>					<p><br />(En el tono original: cejillo en el traste 2)<br /><br />No <span class="syllable" style="text-decoration: underline;">hay<span class="note" data-notation="Latina">Re</span></span> esperanza al<span class="syllable" style="text-decoration: underline;">gu<span class="note" data-notation="Latina">Sol</span></span>na<br /><br />Si el <span class="syllable" style="text-decoration: underline;">mun<span class="note" data-notation="Latina">Mim</span></span>do vive lejos de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">La</span></span><br /><br />No <span class="syllable" style="text-decoration: underline;">hay<span class="note" data-notation="Latina">Re</span></span> esperanza de a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span>ni de paz<br /><br />Cuando el <span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Mim</span></span>dio nos invade fe<span class="syllable" style="text-decoration: underline;">roz<span class="note" data-notation="Latina">La</span></span><br /><br />No <span class="syllable" style="text-decoration: underline;">hay<span class="note" data-notation="Latina">Re</span></span> esperanza de <span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">Sol</span></span>da<br /><br />En <span class="syllable" style="text-decoration: underline;">quie<span class="note" data-notation="Latina">Mim</span></span>nes ya no aman a <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">La</span></span><br /><br />No <span class="syllable" style="text-decoration: underline;">hay<span class="note" data-notation="Latina">Re</span></span> esperanza de un <span class="syllable" style="text-decoration: underline;">mun<span class="note" data-notation="Latina">Sol</span></span>do mejor<br /><br />Pues sin <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Mim</span></span>to solo existe do<span class="syllable" style="text-decoration: underline;">lor<span class="note" data-notation="Latina">La</span></span><br /><br /><b>CORO</b>:<br /><br />&emsp;// La esperanza es Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span><br /><br />&emsp;Él es nuestro ca<span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Sol</span></span>no<br /><br />&emsp;La esperanza es Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mim</span></span><br /><br />&emsp;Nuestra <span class="syllable" style="text-decoration: underline;">luz<span class="note" data-notation="Latina">La</span></span> entre es<span class="syllable" style="text-decoration: underline;">pi<span class="note" data-notation="Latina">Re</span></span>nos<br /><br />&emsp;La esperanza es Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span><br /><br />&emsp;Y certeza de <span class="syllable" style="text-decoration: underline;">sal<span class="note" data-notation="Latina">Sol</span></span><span class="syllable" style="text-decoration: underline;">va<span class="note" data-notation="Latina">Sol</span></span><span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">Re</span></span><br /><br />&emsp;Para un <span class="syllable" style="text-decoration: underline;">mun<span class="note" data-notation="Latina">Mim</span></span>do que no ve solu<span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">La</span></span>//<br /><br />La esperanza es Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Mim</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La7</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><br /><br />Sólo <span class="syllable" style="text-decoration: underline;">hay<span class="note" data-notation="Latina">Re</span></span> esperanza y cer<span class="syllable" style="text-decoration: underline;">te<span class="note" data-notation="Latina">Sol</span></span>za<br /><br />En <span class="syllable" style="text-decoration: underline;">quien<span class="note" data-notation="Latina">Mim</span></span> ya salió vence<span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">La</span></span><br /><br />Ya <span class="syllable" style="text-decoration: underline;">hay<span class="note" data-notation="Latina">Re</span></span> esperanza en <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span>to, el Señor<br /><br />Para un <span class="syllable" style="text-decoration: underline;">mun<span class="note" data-notation="Latina">Mim</span></span>do que no tiene a<span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">La</span></span><br /><br /><b>CORO</b>: x2<br /><br />La esperanza es Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Sim</span></span> <span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Sol</span></span><br /><br />La esperanza es Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span><br /><br /></p>				</div>			</div>			<div id="DIVYoutube" style="display:none">				<iframe width="550px" height="315" src="" title="La esperanza es Jesús" frameborder="0" allowfullscreen></iframe>			</div>			            <div class="center">                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

