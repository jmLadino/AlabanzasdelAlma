﻿const contenidoHTML_Letra = `	<div class="image-container">
		<span class="tooltip">
			<img id="btnLetra2" src="https://jmladino.github.io/AlabanzasdelAlma/imgmicrofono.png" alt="Letra" class="imagebutton">
			<span class="tooltip-content">Letra</span>
		</span>
		
		<span class="tooltip">
			<img id="btnGuitarra2" src="https://jmladino.github.io/AlabanzasdelAlma/imgguitarra.png" alt="Guitarra" class="imagebutton">
			<span class="tooltip-content">Guitarra</span>
		</span>

		<span class="tooltip">
			<img id="btnUkelele2" src="https://jmladino.github.io/AlabanzasdelAlma/imgukelele.png" alt="Ukelele" class="imagebutton">		
			<span class="tooltip-content">Ukelele</span>
		</span>
	</div>	
                <br />
                <div id="DIV_Ribbon">
                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(1)">T+</button><span class="tooltip-content">Subir Medio Tono</span></span>
                  <span class="tooltip"><button class="blue-button" onclick="transposeNotes(-1)">T-</button><span class="tooltip-content">Bajar Medio Tono</span></span>
                  <span class="tooltip"><button class="blue-button" onclick="TonalidadInicial()">T0</button><span class="tooltip-content">Tonalidad Inicial</span></span>
                  <span class="tooltip"><button class="blue-button" onclick="convertirNotacion()">Do / C</button><span class="tooltip-content">Alternar Notación</span></span>
                  <button id="btnAcordes" class="blue-button">Acordes</button>
                </div>

                <div id="container">
                    <div class="modal-overlay" id="modalOverlay">
                        <div class="modal-content">
                            <div id="imageContainer" class="fixed-div"></div>
                            <button id="closeModalButton">Cerrar</button>
                        </div>
                    </div>

                    <p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Yo<span class="note" data-notation="Latina">Re</span></span></span> no quiero ser un yoyo, un <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">yo<span class="note" data-notation="Latina">La</span></span></span>yo, un <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">yo<span class="note" data-notation="Latina">Re</span></span></span>yo<br />
<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Yo<span class="note" data-notation="Latina">Re</span></span></span> no quiero ser un yoyo, un <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">yo<span class="note" data-notation="Latina">La</span></span></span>yo, un <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">yo<span class="note" data-notation="Latina">Re</span></span></span>yo <span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re7.png' alt="Re7" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re7</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
A <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ve<span class="note" data-notation="Latina">Sol</span></span></span>ces arriba, a <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ve<span class="note" data-notation="Latina">Re</span></span></span>ces abajo<br />
A <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ve<span class="note" data-notation="Latina">La</span></span></span>ces a un lado, y <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">vuel<span class="note" data-notation="Latina">Re</span></span></span>tas te da<span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re7.png' alt="Re7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rás<span class="note" data-notation="Latina">Re7</span></span></span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Yo<span class="note" data-notation="Latina">Sol</span></span></span> quiero ser como una <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">fle<span class="note" data-notation="Latina">Re</span></span></span>cha,<br />
Si<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">guien<span class="note" data-notation="Latina">La</span></span></span>do por la senda es<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tre<span class="note" data-notation="Latina">Re</span></span></span>cha<br />
Fi<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">jan<span class="note" data-notation="Latina">Sol</span></span></span>do mis ojos en <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Re</span></span></span>to<br />
Y <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nun<span class="note" data-notation="Latina">La</span></span></span>ca mirar hacia a<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">trás<span class="note" data-notation="Latina">Re</span></span></span><br />
Y <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nun<span class="note" data-notation="Latina">La</span></span></span>ca mirar hacia a<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">trás<span class="note" data-notation="Latina">Re</span></span></span><br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = ``;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;
