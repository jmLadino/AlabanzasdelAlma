﻿const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltip">			<img id="btnLetra" src="https://jmladino.github.io/AlabanzasdelAlma/imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltip-content">Letra</span>		</span>				<span class="tooltip">			<img id="btnGuitarra" src="https://jmladino.github.io/AlabanzasdelAlma/imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltip-content">Guitarra</span>		</span>		<span class="tooltip">			<img id="btnUkelele" src="https://jmladino.github.io/AlabanzasdelAlma/imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltip-content">Ukelele</span>		</span>	</div>	<p class="InterlineadoLetra">/// Un palacio tengo allá<br />más lindo que el sol ///<br />En el más allá.<br /></p><p class="InterlineadoLetra">/// Bendito Cristo<br />contigo estaré ///<br />En el más allá.<br /></p><p class="InterlineadoLetra">/// Si tú quieres ir al cielo<br />ven al Señor ///<br />Ven sin demorar.<br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
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
<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Un<span class="note" data-notation="Latina">Sol</span></span></span> palacio tengo allá <br />
más lindo que el sol,<br />
<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Un<span class="note" data-notation="Latina">Do</span></span></span> palacio tengo allá <br />
más lindo que el <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sol<span class="note" data-notation="Latina">Sol</span></span></span>,<br />
Un palacio tengo allá <br />
más <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lin<span class="note" data-notation="Latina">Mim</span></span></span>do que el sol,<br />
<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">En<span class="note" data-notation="Latina">Re</span></span></span> el más a<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">llá<span class="note" data-notation="Latina">Sol</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Ben<span class="note" data-notation="Latina">Sol</span></span></span>dito Cristo contigo estaré,<br />
<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Ben<span class="note" data-notation="Latina">Do</span></span></span>dito Cristo contigo esta<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ré<span class="note" data-notation="Latina">Sol</span></span></span>,<br />
Bendito Cristo con<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Mim</span></span></span>go estaré,<br />
<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">En<span class="note" data-notation="Latina">Re</span></span></span> el más a<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">llá<span class="note" data-notation="Latina">Sol</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Si<span class="note" data-notation="Latina">Sol</span></span></span> tú quieres ir al cielo <br />
ven al Señor,<br />
<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Si<span class="note" data-notation="Latina">Do</span></span></span> tú quieres ir al cielo <br />
ven al Se<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span></span>,<br />
Si tú quieres ir al cielo <br />
<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ven<span class="note" data-notation="Latina">Mim</span></span></span> al Señor,<br />
<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Ven<span class="note" data-notation="Latina">Re</span></span></span> sin demo<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Sol</span></span></span>.<br />
<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Ven<span class="note" data-notation="Latina">Re</span></span></span> sin demo<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rar<span class="note" data-notation="Latina">Sol</span></span></span>.<br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = ``;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;
const contenidoHTML_Cursor = `<div id="DIV_Cursor" class="center">  <span class="tooltipPrevNext"><a href="https://alabanzasdelalma.blogspot.com/2023/06/tu-amor-por-mi.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">59. Tu amor por mi</span></span>&emsp;  <a href="https://alabanzasdelalma.blogspot.com/2023/06/indice.html">      <button class="blue-button">INDICE</button>  </a>  &emsp;  <span class="tooltipPrevNext"><a href="https://alabanzasdelalma.blogspot.com/2023/06/volvera.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">61. Volverá</span></span></div>`;const DIV_CURSOR = document.getElementById("DIVCursor");DIV_CURSOR.innerHTML = contenidoHTML_Cursor;
