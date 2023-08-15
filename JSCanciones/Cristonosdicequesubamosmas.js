﻿const contenidoHTML = `    <div class="container">        <div class="content">					<div id="DIVLetra" class="div">				<div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>				<p><br />Cristo nos dice que subamos más, que subamos más.<br /><br />Mirando al mundo bajaremos más, bajaremos más.<br /><br />Porque subiendo y bajando nunca llegaremos.<br /><br />Subamos, subamos, mirando a Cristo.<br /><br />Cada día más, cada día más.<br /><br /></p>			</div>						<div id="DIVGuitarra" class="div hidden">								<div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>								<span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>				<span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>				<span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>				<span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>				<div id="container">					<div class="modal-overlay" id="modalOverlay">						<div class="modal-content">							<div id="imageContainer" class="fixed-div"></div>							<button id="closeModalButton">Cerrar</button>						</div>					</div>					<p><br /><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">La</span></span>to nos dice que subamos más, que subamos más.<br /><br />Mi<span class="syllable" style="text-decoration: underline;">ran<span class="note" data-notation="Latina">La</span></span>do al mundo bajaremos más, bajaremos más.<br /><br />Porque su<span class="syllable" style="text-decoration: underline;">bien<span class="note" data-notation="Latina">Re</span></span>do y ba<span class="syllable" style="text-decoration: underline;">jan<span class="note" data-notation="Latina">La</span></span>do <span class="syllable" style="text-decoration: underline;">nun<span class="note" data-notation="Latina">Mi</span></span>ca llega<span class="syllable" style="text-decoration: underline;">re<span class="note" data-notation="Latina">La</span></span>mos.<br /><br />Su<span class="syllable" style="text-decoration: underline;">ba<span class="note" data-notation="Latina">La</span></span>mos, su<span class="syllable" style="text-decoration: underline;">ba<span class="note" data-notation="Latina">La</span></span>mos, mirando a <span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">La</span></span>to.<br /><br /><span class="syllable" style="text-decoration: underline;">Ca<span class="note" data-notation="Latina">Re</span></span>da <span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">Mi</span></span> <span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">La</span></span>, <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Re</span></span>da <span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">Mi</span></span> <span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">La</span></span>.<br /><br /></p>				</div>			</div>			<div id="DIVYoutube" style="display:none">				<iframe width="550px" height="315" src="" title="Cristo nos dice que subamos más" frameborder="0" allowfullscreen></iframe>			</div>			            <div class="center">                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

