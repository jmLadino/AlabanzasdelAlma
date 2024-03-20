const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltip">			<img id="btnLetra" src="https://jmladino.github.io/AlabanzasdelAlma/imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltip-content">Letra</span>		</span>				<span class="tooltip">			<img id="btnGuitarra" src="https://jmladino.github.io/AlabanzasdelAlma/imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltip-content">Guitarra</span>		</span>		<span class="tooltip">			<img id="btnUkelele" src="https://jmladino.github.io/AlabanzasdelAlma/imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltip-content">Ukelele</span>		</span>	</div>	<p class="InterlineadoLetra">// ¿Quién es el rey de la Selva?<br />(hu hu)<br /></p><p class="InterlineadoLetra">¿Quién es el rey del mar?<br />(pa para para)<br /></p><p class="InterlineadoLetra">¿Quién es el rey del universo?<br />¿Y también quien es mi rey? //<br /></p><p class="InterlineadoLetra">Te digo<br />J-E-S-U-S<br />Jesús es el rey de la selva<br />Jesús es el rey del mar<br />Jesús es el rey del universo<br />Y también él es mi rey<br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
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
</p><p class="InterlineadoGuitarra">
// ¿<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Re</span></span></span> es el rey de la Selva?<br />
</p><p class="InterlineadoGuitarra">
(hu hu)<br />
¿Quién es el rey del <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">La</span></span></span>?<br />
(pa para para)<br />
¿ <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quién<span class="note" data-notation="Latina">Re</span></span></span> es el rey del uni<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ver<span class="note" data-notation="Latina">Sol</span></span></span>so?<br />
¿Y tam<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bién<span class="note" data-notation="Latina">La</span></span></span> quien es mi <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rey<span class="note" data-notation="Latina">Re</span></span></span>? //<br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Te<span class="note" data-notation="Latina">La</span></span></span>&emsp;<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">Sol</span></span></span>&emsp;<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">go<span class="note" data-notation="Latina">La</span></span></span><br />
<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">J-E-S-U-S<span class="note" data-notation="Latina">Re</span></span></span><br />
Jesús es el rey de la selva<br />
Jesús es el rey del <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mar<span class="note" data-notation="Latina">La</span></span></span><br />
Je<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span></span> es el rey del uni<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ver<span class="note" data-notation="Latina">Sol</span></span></span>so<br />
Y tam<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bién<span class="note" data-notation="Latina">La</span></span></span> él es mi <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rey<span class="note" data-notation="Latina">Re</span></span></span><br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = ``;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;
const contenidoHTML_Cursor = `  <a href="https://alabanzasdelalma.blogspot.com/2023/06/indice.html">      <button class="blue-button">INDICE</button>  </a>`;const DIV_CURSOR = document.getElementById("DIVCursor");DIV_CURSOR.innerHTML = contenidoHTML_Cursor;
