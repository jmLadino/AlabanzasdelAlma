﻿const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltipPrevNext">			<img id="btnLetra" src="imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltipPrevNext-content">Letra</span>		</span>				<span class="tooltipPrevNext">			<img id="btnGuitarra" src="imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltipPrevNext-content">Guitarra</span>		</span>		<span class="tooltipPrevNext">			<img id="btnUkelele" src="imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltipPrevNext-content">Ukelele</span>		</span>	</div>	<p class="InterlineadoLetra">// Que no se apague el fuego<br />que hay en mi corazón<br />que no se apague el fuego<br />que siga ardiendo más y más//<br /></p><p class="InterlineadoLetra">// Dame gozo Señor,<br />dame paz y amor,<br />porque voy a morar más allá del sol //<br /></p><p class="InterlineadoLetra">Cuando el alma está triste y vacía<br />cuando el alma está triste y vacía,<br />es difícil orar durante el día y cantar<br />cuando el alma está triste y vacía.<br /></p><p class="InterlineadoLetra">Cuando el alma está llena de amor de Dios<br />Cuando el alma está llena de amor de Dios<br />es más fácil orar durante el día y cantar<br />cuando el alma está llena de amor de Dios.<br /></p><p class="InterlineadoLetra">// Que no se apague el fuego<br />que hay en mi corazón<br />que no se apague el fuego<br />que siga ardiendo más y más //<br /></p><p class="InterlineadoLetra">// Dame gozo Señor,<br />dame paz y amor,<br />porque voy a morar más allá del sol //<br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
		<span class="tooltipPrevNext">
			<img id="btnLetra2" src="imgmicrofono.png" alt="Letra" class="imagebutton">
			<span class="tooltipPrevNext-content">Letra</span>
		</span>
		
		<span class="tooltipPrevNext">
			<img id="btnGuitarra2" src="imgguitarra.png" alt="Guitarra" class="imagebutton">
			<span class="tooltipPrevNext-content">Guitarra</span>
		</span>

		<span class="tooltipPrevNext">
			<img id="btnUkelele2" src="imgukelele.png" alt="Ukelele" class="imagebutton">		
			<span class="tooltipPrevNext-content">Ukelele</span>
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
// <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span></span> no se apague el fuego<br />
que hay en mi cora<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">La</span></span></span><br />
que no se apague el fuego<br />
que siga ardiendo más y <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Re</span></span></span>//&emsp;<span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re7.png' alt="Re7" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re7</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
// Dame <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">go<span class="note" data-notation="Latina">Sol</span></span></span>zo Señor,<br />
dame <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Re</span></span></span> y amor,<br />
porque <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">La</span></span></span> a morar <br />
más allá del <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sol<span class="note" data-notation="Latina">Re</span></span></span>//<br />
</p><p class="InterlineadoGuitarra">
Cuando el <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">Re</span></span></span>ma <br />
está triste y va<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cía<span class="note" data-notation="Latina">La</span></span></span><br />
cuando el alma <br />
está triste y va<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cía<span class="note" data-notation="Latina">Re</span></span></span>,<br />
es difícil orar durante <br />
el <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">Sol</span></span></span> y cantar<br />
cuando el <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">La</span></span></span>ma <br />
está triste y va<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cía<span class="note" data-notation="Latina">Re</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
Cuando el <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">Re</span></span></span>ma <br />
está llena de amor de <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">La</span></span></span><br />
Cuando el alma <br />
está llena de amor de <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span></span><br />
es más fácil orar durante <br />
el <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">Sol</span></span></span> y cantar<br />
cuando el <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">La</span></span></span>ma <br />
está llena de amor de <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Re</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
// <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Re</span></span></span> no se apague el fuego<br />
que hay en mi cora<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">La</span></span></span><br />
que no se apague el fuego<br />
que siga ardiendo más y <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Re</span></span></span>//&emsp;<span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re7.png' alt="Re7" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re7</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
// Dame <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">go<span class="note" data-notation="Latina">Sol</span></span></span>zo Señor,<br />
dame <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Re</span></span></span> y amor,<br />
porque <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">La</span></span></span> a morar <br />
más allá del <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sol<span class="note" data-notation="Latina">Re</span></span></span>//<br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = ``;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;
const contenidoHTML_Cursor = `<div id="DIV_Cursor" class="center">  <span class="tooltipPrevNext"><a href="https://alabanzasdelalma.blogspot.com/2023/06/quedate-senor.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">52. Quédate Señor</span></span>&emsp;  <a href="https://alabanzasdelalma.blogspot.com/2023/06/indice.html">      <button class="blue-button">INDICE</button>  </a>  &emsp;  <span class="tooltipPrevNext"><a href="https://alabanzasdelalma.blogspot.com/2023/06/quiero-cantar-una-linda-cancion.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">54. Quiero cantar una linda canción</span></span></div>`;const DIV_CURSOR = document.getElementById("DIVCursor");DIV_CURSOR.innerHTML = contenidoHTML_Cursor;
