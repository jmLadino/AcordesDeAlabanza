﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right"><span class="tooltip"><button id="btnGuitarra" class="blue-button">Guitarra</button><span class="tooltip-content">Guitarra</span></span></div>                <p><br />Andaba yo en un barco<br /><br />Sin puerto al cual llegar<br /><br />De repente vino una tempestad<br /><br />E iba ha naufragar<br /><br /><br /><br />Los vientos arreciaban<br /><br />Cada vez más y más<br /><br />Mi alma se angustiaba<br /><br />En medio de la tempestad<br /><br /><br /><br />Hice todos los esfuerzos<br /><br />Que un humano puede hacer<br /><br />Pensé que con mis fuerzas<br /><br />La paz podría tener<br /><br /><br /><br />Y luché y luché y me afané<br /><br />Pero no pude vencer<br /><br />De repente oí una voz<br /><br />Que habló a mi corazón<br /><br /><br /><br />Y dijo: No temas,<br /><br />Porque yo soy Jesús, tu salvador<br /><br /><br /><br />// Jesús mi capitán<br /><br />Jesús es mi capitán<br /><br />Yo sé que no voy a naufragar<br /><br />Porque Jesús es mi capitán //<br /><br /><br /><br />El barco del cual les hablo<br /><br />Es este mundo de dolor<br /><br />Y muchos son los que en él están<br /><br />Sin rumbo y dirección<br /><br /><br /><br />Marchemos pues con Jesús<br /><br />Quién es nuestro salvador<br /><br />Murió por ti, murió por mí<br /><br />Y yo sé que muy pronto lo veré<br /><br /><br /><br />/// Jesús mi capitán<br /><br />Jesús es mi capitán<br /><br />Yo sé que no voy a naufragar<br /><br />Porque Jesús es mi capitán ///<br /><br /><br /><br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right"><span class="tooltip"><button id="btnLetra" class="blue-button">Solo Letra</button><span class="tooltip-content">Solo Letra</span></span></div>                <br />                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                <span class="tooltip"><button id="btnAcordes" class="blue-button">Acordes</button><span class="tooltip-content">Acordes</span></span>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p><br /><br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Mi</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Fa#m</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Mi</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span><br /><br /><br /><br /><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">La</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Mi</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Fa#m</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Mi</span></span><span class="syllable">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="note" data-notation="Latina">Re</span></span><br /><br /><br /><br />An<span class="syllable" style="text-decoration: underline;">da<span class="note" data-notation="Latina">La</span></span>ba yo en un <span class="syllable" style="text-decoration: underline;">bar<span class="note" data-notation="Latina">Re</span></span>co<br /><br />Sin puerto al cual lle<span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">La</span></span><br /><br />De repente vino una <span class="syllable" style="text-decoration: underline;">tem<span class="note" data-notation="Latina">Fa#m</span></span>pestad<br /><br />E <span class="syllable" style="text-decoration: underline;">iba<span class="note" data-notation="Latina">Sim</span></span> ha naufra<span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Mi</span></span><br /><br /><br /><br />Los <span class="syllable" style="text-decoration: underline;">vien<span class="note" data-notation="Latina">La</span></span>tos arre<span class="syllable" style="text-decoration: underline;">cia<span class="note" data-notation="Latina">Re</span></span>ban<br /><br />Cada <span class="syllable" style="text-decoration: underline;">vez<span class="note" data-notation="Latina">La</span></span> más y <span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Mi</span></span><br /><br />Mi <span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">La</span></span>ma se angus<span class="syllable" style="text-decoration: underline;">tia<span class="note" data-notation="Latina">Re</span></span>ba<br /><br />En medio <span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Sim</span></span> la <span class="syllable" style="text-decoration: underline;">tem<span class="note" data-notation="Latina">Mi</span></span>pes<span class="syllable" style="text-decoration: underline;">tad<span class="note" data-notation="Latina">La</span></span><br /><br /><br /><br />Hice <span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">La</span></span>dos los es<span class="syllable" style="text-decoration: underline;">fuer<span class="note" data-notation="Latina">Re</span></span>zos<br /><br />Que un humano puede ha<span class="syllable" style="text-decoration: underline;">cer<span class="note" data-notation="Latina">La</span></span><br /><br />Pensé que con mis <span class="syllable" style="text-decoration: underline;">fuer<span class="note" data-notation="Latina">Fa#m</span></span>zas<br /><br />La <span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Sim</span></span> podría te<span class="syllable" style="text-decoration: underline;">ner<span class="note" data-notation="Latina">La</span></span><br /><br /><br /><br />Y lu<span class="syllable" style="text-decoration: underline;">ché<span class="note" data-notation="Latina">La</span></span> y luché y me <span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Re</span></span>fané<br /><br />Pero <span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">La</span></span> pude ven<span class="syllable" style="text-decoration: underline;">cer<span class="note" data-notation="Latina">Mi</span></span><br /><br />De re<span class="syllable" style="text-decoration: underline;">pen<span class="note" data-notation="Latina">La</span></span>te oí una <span class="syllable" style="text-decoration: underline;">voz<span class="note" data-notation="Latina">Re</span></span><br /><br />Que ha<span class="syllable" style="text-decoration: underline;">bló<span class="note" data-notation="Latina">La</span></span> a mi cora<span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Mi</span></span><br /><br />Y <span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">Re</span></span>jo: No <span class="syllable" style="text-decoration: underline;">te<span class="note" data-notation="Latina">La</span></span>mas,<br /><br />Porque <span class="syllable" style="text-decoration: underline;">yo<span class="note" data-notation="Latina">Sim</span></span> soy Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mi7</span></span>, tu salva<span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">La</span></span><br /><br /><br /><br />Coro:<br /><br />// Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">La</span></span> mi capi<span class="syllable" style="text-decoration: underline;">tán<span class="note" data-notation="Latina">Re</span></span><br /><br />Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">La</span></span> es mi capi<span class="syllable" style="text-decoration: underline;">tán<span class="note" data-notation="Latina">Mi</span></span><br /><br /><br /><br />Yo sé que <span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">La</span></span> voy a naufra<span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Fa#m</span></span><br /><br />Porque Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span> es mi <span class="syllable" style="text-decoration: underline;">ca<span class="note" data-notation="Latina">Mi</span></span>pi<span class="syllable" style="text-decoration: underline;">tán<span class="note" data-notation="Latina">La</span></span>//<br /><br /><br /><br />El <span class="syllable" style="text-decoration: underline;">bar<span class="note" data-notation="Latina">La</span></span>co del cual les <span class="syllable" style="text-decoration: underline;">ha<span class="note" data-notation="Latina">Re</span></span>blo<br /><br />Es este mundo de do<span class="syllable" style="text-decoration: underline;">lor<span class="note" data-notation="Latina">La</span></span><br /><br />Y muchos son los que en <span class="syllable" style="text-decoration: underline;">él<span class="note" data-notation="Latina">Fa#m</span></span>están<br /><br />Sin <span class="syllable" style="text-decoration: underline;">rum<span class="note" data-notation="Latina">Sim</span></span>bo y direc<span class="syllable" style="text-decoration: underline;">ción<span class="note" data-notation="Latina">La</span></span><br /><br /><br /><br />Mar<span class="syllable" style="text-decoration: underline;">che<span class="note" data-notation="Latina">La</span></span>mos pues con Je<span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span><br /><br />Quién es <span class="syllable" style="text-decoration: underline;">nues<span class="note" data-notation="Latina">La</span></span>tro salva<span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Mi</span></span><br /><br />Mu<span class="syllable" style="text-decoration: underline;">rió<span class="note" data-notation="Latina">Re</span></span> por ti, mu<span class="syllable" style="text-decoration: underline;">rió<span class="note" data-notation="Latina">La</span></span>por mí<br /><br />Y yo <span class="syllable" style="text-decoration: underline;">sé<span class="note" data-notation="Latina">Sim</span></span> que muy <span class="syllable" style="text-decoration: underline;">pron<span class="note" data-notation="Latina">Mi7</span></span>to le ve<span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">La</span></span><br /><br /><br /><br />Coro x2<br /><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="550px" height="315" src="" title="Jesús mi capitán" frameborder="0" allowfullscreen></iframe>            </div>            <div class="center">                <a href="https://jmladino.blogspot.com/2023/08/fija-tus-ojos-en-cristo.html"><button class="blue-button">37. Fija tus ojos en Cristo</button></a>&emsp;                <a href="https://jmladino.blogspot.com/2023/08/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <a href="https://jmladino.blogspot.com/2023/08/la-alegria.html"><button class="blue-button">39. La alegría</button></a>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AcordesDeAlabanza/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

