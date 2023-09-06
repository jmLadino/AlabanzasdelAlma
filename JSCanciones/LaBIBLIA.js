﻿const contenidoHTML = `    <div class="container">        <div class="content">            <div id="DIVLetra" class="div">                <div class="floating-right">                    <button id="btnGuitarra" class="blue-button">Guitarra</button>                </div>                <p class="InterlineadoLetra">La B-I-B-L-I-A<br />Es el libro de mi Dios<br />En ella siempre confío yo<br />La B-I-B-L-I-A<br /></p>            </div>            <div id="DIVGuitarra" class="div hidden">                <div class="floating-right">                    <button id="btnLetra" class="blue-button">Solo Letra</button>                </div>                <br />                <div id="DIV_Ribbon">                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>                  <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>                  <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>                  <button id="btnAcordes" class="blue-button">Acordes</button>                </div>                <div id="container">                    <div class="modal-overlay" id="modalOverlay">                        <div class="modal-content">                            <div id="imageContainer" class="fixed-div"></div>                            <button id="closeModalButton">Cerrar</button>                        </div>                    </div>                    <p class="InterlineadoGuitarra"></p><p class="InterlineadoGuitarra">La B-<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">I<span class="note" data-notation="Latina">Do</span></span></span>-B-L-I-A<br />Es el <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">li<span class="note" data-notation="Latina">Fa</span></span></span>bro de mi Dios<br />En <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ella<span class="note" data-notation="Latina">Sol</span></span></span> siempre confío yo<br />La B-<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">I<span class="note" data-notation="Latina">Do</span></span></span>-B-<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">L<span class="note" data-notation="Latina">Fa</span></span></span>-I-<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">A<span class="note" data-notation="Latina">Do</span></span></span><br /></p>                </div>            </div>            <div id="DIVYoutube" style="display:none">                <iframe width="100%" height="315" src="" title="La B-I-B-L-I-A" frameborder="0" allowfullscreen></iframe>            </div>            <div id="DIV_Cursor" class="center">                <span class="tooltipPrevNext"><a href="https://alabanzasdelalma.blogspot.com/2023/06/jonas.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">12. Jonás</span></span>&emsp;                <a href="https://alabanzasdelalma.blogspot.com/2023/06/indice.html">                    <button class="blue-button">INDICE</button>                </a>                &emsp;                <span class="tooltipPrevNext"><a href="https://alabanzasdelalma.blogspot.com/2023/06/pobre-eutico.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">14. Pobre Eutico</span></span>            </div>        </div>    </div>    <script src="https://jmladino.github.io/AlabanzasdelAlma/tabsaurus.js"></script>    <script src="https://jmladino.github.io/AlabanzasdelAlma/AAFunctions.js"></script>`;
const DivCorito = document.getElementById("DIVCorito");
DivCorito.innerHTML = contenidoHTML;

