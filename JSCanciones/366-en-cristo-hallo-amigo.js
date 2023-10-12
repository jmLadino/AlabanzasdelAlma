const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltip">			<img id="btnLetra" src="https://jmladino.github.io/AlabanzasdelAlma/imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltip-content">Letra</span>		</span>				<span class="tooltip">			<img id="btnGuitarra" src="https://jmladino.github.io/AlabanzasdelAlma/imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltip-content">Guitarra</span>		</span>		<span class="tooltip">			<img id="btnUkelele" src="https://jmladino.github.io/AlabanzasdelAlma/imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltip-content">Ukelele</span>		</span>	</div>	<p class="InterlineadoLetra">1<br />En Cristo hallo amigo y amante Salvador<br />contaré, pues, cuanto ha hecho él por mí.<br />Hallándome perdido e indigno pecador,<br />rescatome y hoy me guarda para sí.<br />Me salva del pecado, me guarda de Satán,<br />promete estar conmigo siempre aquí<br />consuela mi tristeza, me quita todo afán<br />grandes cosas Cristo ha hecho ya por mí.<br /></p><p class="InterlineadoLetra">2<br />Jesús jamás me falta, jamás me dejará<br />es mi fuerte y poderoso protector.<br />Del mundo hoy me aparto, de toda vanidad,<br />para consagrar la vida a mi Señor.<br />Si el mundo me persigue, si sufro tentación,<br />confiando en él podré vencer aquí<br />segura es la victoria, y elevo mi canción:<br />grandes cosas Cristo ha hecho ya por mí.<br /></p><p class="InterlineadoLetra">3.<br />Bien sé que Cristo en gloria muy pronto volverá,<br />y entretanto me prepara un bello hogar.<br />En la casa de mi Padre, mansión de luz y paz,<br />el creyente fiel con él ha de morar.<br />Y entrado en su gloria, pesar no sentiré,<br />pues contemplaré su rostro siempre allí<br />con los santos redimidos gozoso cantaré:<br />grandes cosas Cristo ha hecho ya por mí.<br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
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
1<br />
En <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Do</span></span></span>to hallo amigo y a<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">man<span class="note" data-notation="Latina">Fa</span></span></span>te Salva<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Do</span></span></span><br />
contaré, pues, cuanto ha <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">he<span class="note" data-notation="Latina">Lam</span></span></span>cho él por <span class="chord" data-tabsaurus="Rem].&emsp;Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Rem].&emsp;Sol.png' alt="Rem].&emsp;Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mí~<span class="note" data-notation="Latina">Rem].&emsp;Sol</span></span></span><br />
Ha<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">llán<span class="note" data-notation="Latina">Do</span></span></span>dome perdido e in<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dig<span class="note" data-notation="Latina">Fa</span></span></span>no peca<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Do</span></span></span>,<br />
resca<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Do</span></span></span>me y hoy me <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">guar<span class="note" data-notation="Latina">Sol</span></span></span>da para <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sí<span class="note" data-notation="Latina">Do</span></span></span>.&emsp;<span class="chord" data-tabsaurus="Do7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do7.png' alt="Do7" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Do7</span></span>&emsp;</span><br />
Me <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sal<span class="note" data-notation="Latina">Fa</span></span></span>va del pecado, me <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">guar<span class="note" data-notation="Latina">Do</span></span></span>da de Satán,<br />
pro<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">me<span class="note" data-notation="Latina">Lam</span></span></span>te estar con<span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Rem.png' alt="Rem" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Rem</span></span></span>go siempre a<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">quí<span class="note" data-notation="Latina">Sol</span></span></span><br />
con<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sue<span class="note" data-notation="Latina">Do</span></span></span>la mi tristeza, me <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">qui<span class="note" data-notation="Latina">Fa</span></span></span>ta todo a<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">fán<span class="note" data-notation="Latina">Do</span></span></span><br />
grandes <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Do</span></span></span>sas Cristo ha <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">he<span class="note" data-notation="Latina">Sol</span></span></span>cho ya por <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mí<span class="note" data-notation="Latina">Do</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
2<br />
Jesús jamás me falta, jamás me dejará<br />
es mi fuerte y poderoso protector.<br />
Del mundo hoy me aparto, de toda vanidad,<br />
para consagrar la vida a mi Señor.<br />
Si el mundo me persigue, si sufro tentación,<br />
confiando en él podré vencer aquí<br />
segura es la victoria, y elevo mi canción:<br />
grandes cosas Cristo ha hecho ya por mí.<br />
</p><p class="InterlineadoGuitarra">
<span class="comentario">(Sube tonalidad)</span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
3. <br />
Bien sé que Cristo en gloria muy pronto volverá,<br />
y entretanto me prepara un bello hogar.<br />
En la casa de mi Padre, mansión de luz y paz,<br />
el creyente fiel con él ha de morar.<br />
Y entrado en su gloria, pesar no sentiré,<br />
pues contemplaré su rostro siempre allí<br />
con los santos redimidos gozoso cantaré:<br />
grandes cosas Cristo ha hecho ya por mí.<br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = ``;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;
const contenidoHTML_Cursor = `  <span class="tooltipPrevNext"><a href="https://alabanzasdelalma.blogspot.com/2023/06/362-con-sin-igual-amor.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">84. 362. Con sin igual amor</span></span>&emsp;  <a href="https://alabanzasdelalma.blogspot.com/2023/06/indice.html">      <button class="blue-button">INDICE</button>  </a>  &emsp;  `;const DIV_CURSOR = document.getElementById("DIVCursor");DIV_CURSOR.innerHTML = contenidoHTML_Cursor;
