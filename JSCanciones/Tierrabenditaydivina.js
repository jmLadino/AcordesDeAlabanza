﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p><br />Tierra bendita y divina<br /><br />es la de Palestina<br /><br />donde nació Jesús<br /><br />Eres, de las naciones, cumbre<br /><br />bañada por la lumbre<br /><br />que derramó su luz.<br /><br /><br /><br />CORO<br /><br />&emsp;Eres la historia inolvidable,<br /><br />&emsp;Porque en tu seno se derramó<br /><br />&emsp;// La sangre, preciosa sangre,<br /><br />&emsp;Del unigénito Hijo de Dios. //<br /><br /><br /><br />Cuenta la historia del pasado<br /><br />que en tu seno sagrado<br /><br />vivió el Salvador,<br /><br />Y en esos viejos olivares,<br /><br />habló a los millares<br /><br />las palabras de amor.<br /><br /><br /><br />CORO<br /><br /><br /><br />Quedan en ti testigos mudos,<br /><br />que son los viejos muros<br /><br />de la Jerusalén;<br /><br />Viejas paredes destruidas,<br /><br />que si tuvieran vida,<br /><br />nos hablarían también.<br /><br /><br /><br />CORO<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <button id="btnAcordes" class="blue-button">Acordes</button>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><span class="syllable" style="text-decoration: underline;">Tie<span class="note" data-notation="Latina">Lam</span></span>rra bendita y divina<br /><br />es la de Palestina<br /><br />donde nació Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mi</span></span><br /><br />Eres, de las naciones, cumbre<br /><br />bañada por la lumbre<br /><br />que derramó su <span class="syllable" style="text-decoration: underline;">luz<span class="note" data-notation="Latina">Lam</span></span>.<br /><br /><br /><br /><b>CORO</b><br /><br />&emsp;Eres la his<span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Mi</span></span>ria inolvi<span class="syllable" style="text-decoration: underline;">da<span class="note" data-notation="Latina">Lam</span></span>ble,<br /><br />&emsp;Porque en tu <span class="syllable" style="text-decoration: underline;">se<span class="note" data-notation="Latina">Sol7</span></span>no se derra<span class="syllable" style="text-decoration: underline;">mó<span class="note" data-notation="Latina">Do</span></span><br /><br />&emsp;La <span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Rem</span></span>gre, preciosa <span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Lam</span></span>gre,<br /><br />&emsp;Del uni<span class="syllable" style="text-decoration: underline;">gé<span class="note" data-notation="Latina">Mi</span></span>nito Hijo de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">LamLa7</span></span><br /><br />&emsp;La <span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Rem</span></span>gre, preciosa <span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Lam</span></span>gre,<br /><br />&emsp;Del uni<span class="syllable" style="text-decoration: underline;">gé<span class="note" data-notation="Latina">Mi</span></span>nito Hijo de <span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Lam</span></span>.<br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Cuen<span class="note" data-notation="Latina">Lam</span></span>ta la historia del pasado<br /><br />que en tu seno sagrado<br /><br />vivió el Salva<span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Mi</span></span>,<br /><br />Y en esos viejos olivares,<br /><br />habló a los millares<br /><br />las palabras de <span class="syllable" style="text-decoration: underline;">amor<span class="note" data-notation="Latina">Lam</span></span>.<br /><br /><br /><br /><b>CORO</b><br /><br /><br /><br /><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Lam</span></span>dan en ti testigos mudos,<br /><br />que son los viejos muros<br /><br />de la Jerusa<span class="syllable" style="text-decoration: underline;">lén<span class="note" data-notation="Latina">Mi</span></span><br /><br />Viejas paredes destruidas,<br /><br />que si tuvieran vida,<br /><br />nos hablarían tam<span class="syllable" style="text-decoration: underline;">bien<span class="note" data-notation="Latina">Lam</span></span>.<br /><br /><br /><br /><b>CORO</b><br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Tierra bendita y divina" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/tengo-paz-como-un-rio.html"><button class="blue-button">Anterior</button></a><span class="tooltip-content">53. Tengo paz como un río</span></span>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltip"><a href="https://jmladino.blogspot.com/2023/08/tres-veces-oraba-daniel.html"><button class="blue-button">Siguiente</button></a><span class="tooltip-content">55. Tres veces oraba Daniel</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

