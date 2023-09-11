﻿const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltipPrevNext">			<img id="btnLetra" src="imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltipPrevNext-content">Letra</span>		</span>				<span class="tooltipPrevNext">			<img id="btnGuitarra" src="imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltipPrevNext-content">Guitarra</span>		</span>		<span class="tooltipPrevNext">			<img id="btnUkelele" src="imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltipPrevNext-content">Ukelele</span>		</span>	</div>	<p class="InterlineadoLetra">Vengo a ti Jesús, quiero renovar mi ser,<br />Con el gran amor, que encontré en ti,<br />Yo se que todo el mal, manchas que en mi están,<br />Se terminarán,<br />por tu gracia y amor.<br /></p><p class="InterlineadoLetra"><b>CORO</b>:<br />&emsp;Ven Jesús, llévame en tus brazos,<br />&emsp;Quiero estar, siempre junto a ti,<br />&emsp;Y así volar, tan alto como un ave,<br />&emsp;Pues quiero recibir tu espíritu en mí,<br />&emsp;Por tu gracia y amor.<br /></p><p class="InterlineadoLetra">Con mis ojos hoy, quiero contemplar tu faz,<br />Conocer tu amor y crecer en ti,<br />Renueva mi pensar, enséñame de tu verdad,<br />Cada día más,<br />por tu gracia y amor.<br /></p><p class="InterlineadoLetra"><b>CORO</b>: x2<br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
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
<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Ven<span class="note" data-notation="Latina">Sol</span></span></span>go a <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Re</span></span></span> Je<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mim</span></span></span>, quiero reno<span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">var<span class="note" data-notation="Latina">Sim</span></span></span> mi <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ser<span class="note" data-notation="Latina">Mim</span></span></span>,<br />
Con el gran a<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Do</span></span></span>, que encon<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tré<span class="note" data-notation="Latina">Re</span></span></span> en <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Mim</span></span></span>,&emsp;<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re</span></span>&emsp;</span><br />
<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Yo<span class="note" data-notation="Latina">Sol</span></span></span> se que <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Re</span></span></span>do el <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mal<span class="note" data-notation="Latina">Mim</span></span></span>, manchas que en <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Sim</span></span></span> es<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tán<span class="note" data-notation="Latina">Mim</span></span></span>,<br />
Se termina<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rán<span class="note" data-notation="Latina">Do</span></span></span>,&emsp;<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re</span></span>&emsp;</span><br />
por tu gracia y a<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span></span>.&emsp;<span class="chord" data-tabsaurus="Sol7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol7.png' alt="Sol7" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Sol7</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
<b>CORO</b>:<br />
&emsp;<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Ven<span class="note" data-notation="Latina">Do</span></span></span> Je<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Re</span></span></span>, llévame en tus <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bra<span class="note" data-notation="Latina">Do</span></span></span>&emsp;<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zos<span class="note" data-notation="Latina">Sol</span></span></span>,<br />
&emsp;<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Quie<span class="note" data-notation="Latina">Do</span></span></span>ro es<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tar<span class="note" data-notation="Latina">Re</span></span></span>, siempre junto a <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Sol</span></span></span>,&emsp;<span class="chord" data-tabsaurus="Sol7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol7.png' alt="Sol7" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Sol7</span></span>&emsp;</span><br />
&emsp;Y a<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sí<span class="note" data-notation="Latina">Do</span></span></span> vo<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lar<span class="note" data-notation="Latina">Re</span></span></span>, tan alto como un <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Do</span></span></span>&emsp;<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ve<span class="note" data-notation="Latina">Sol</span></span></span>,<br />
&emsp;Pues quiero reci<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bir<span class="note" data-notation="Latina">Mim</span></span></span> tu espíritu en <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mí<span class="note" data-notation="Latina">Do</span></span></span>,<br />
&emsp;Por tu <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gra<span class="note" data-notation="Latina">Re</span></span></span>cia y a<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Con<span class="note" data-notation="Latina">Sol</span></span></span> mis <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Re</span></span></span>jos <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">hoy<span class="note" data-notation="Latina">Mim</span></span></span>, quiero contem<span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">plar<span class="note" data-notation="Latina">Sim</span></span></span> tu <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">faz<span class="note" data-notation="Latina">Mim</span></span></span>,<br />
Conocer tu a<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Do</span></span></span> y cre<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cer<span class="note" data-notation="Latina">Re</span></span></span> en <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Mim</span></span></span>,&emsp;<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re</span></span>&emsp;</span><br />
<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Re<span class="note" data-notation="Latina">Sol</span></span></span>nueva <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Re</span></span></span> pen<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sar<span class="note" data-notation="Latina">Mim</span></span></span>, enséñame de <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tu<span class="note" data-notation="Latina">Sim</span></span></span> ver<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Mim</span></span></span>,<br />
Cada día <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Do</span></span></span>,&emsp;<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Re</span></span>&emsp;</span><br />
por tu gracia y a<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span></span>.&emsp;<span class="chord" data-tabsaurus="Sol7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol7.png' alt="Sol7" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Sol7</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
<b>CORO</b>: x2<br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = ``;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;
const contenidoHTML_Cursor = `<div id="DIV_Cursor" class="center">  <span class="tooltipPrevNext"><a href="https://alabanzasdelalma.blogspot.com/2023/06/pon-tus-manos.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">49. Pon tus manos</span></span>&emsp;  <a href="https://alabanzasdelalma.blogspot.com/2023/06/indice.html">      <button class="blue-button">INDICE</button>  </a>  &emsp;  <span class="tooltipPrevNext"><a href="https://alabanzasdelalma.blogspot.com/2023/06/puedo-confiar.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">51. Puedo Confiar</span></span></div>`;const DIV_CURSOR = document.getElementById("DIVCursor");DIV_CURSOR.innerHTML = contenidoHTML_Cursor;
