const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltip">			<img id="btnLetra" src="../../../_BaseFilesCancionero/imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltip-content">Letra</span>		</span>				<span class="tooltip">			<img id="btnGuitarra" src="../../../_BaseFilesCancionero/imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltip-content">Guitarra</span>		</span>		<span class="tooltip">			<img id="btnUkelele" src="../../../_BaseFilesCancionero/imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltip-content">Ukelele</span>		</span>	</div>	<p class="InterlineadoLetra">Un simple muchachito<br />que se llamaba David<br />un simple pastorcito<br />cuidaba su redil<br /></p><p class="InterlineadoLetra">De un arroyito cinco piedritas tomó<br />Un simple muchachito<br />Armado de valor<br /></p><p class="InterlineadoLetra">Y una pequeña piedra<br />En su onda colocó<br />Una pequeña piedra<br />Y la onda giró y giró<br /></p><p class="InterlineadoLetra">// Giró y giró, Giró y giró, Giró y giró y giró<br />Aquella piedrita echó a volar<br />Y el gigante se desplomó //<br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
		<span class="tooltip">
			<img id="btnLetra2" src="../../../_BaseFilesCancionero/imgmicrofono.png" alt="Letra" class="imagebutton">
			<span class="tooltip-content">Letra</span>
		</span>
		
		<span class="tooltip">
			<img id="btnGuitarra2" src="../../../_BaseFilesCancionero/imgguitarra.png" alt="Guitarra" class="imagebutton">
			<span class="tooltip-content">Guitarra</span>
		</span>

		<span class="tooltip">
			<img id="btnUkelele2" src="../../../_BaseFilesCancionero/imgukelele.png" alt="Ukelele" class="imagebutton">		
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
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Un<span class="note" data-notation="Latina">Mi</span></span></span> simple muchachito<br />
que se llamaba Da<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">vid<span class="note" data-notation="Latina">Si</span></span></span><br />
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">un<span class="note" data-notation="Latina">Mi</span></span></span> simple pastorcito<br />
cui<span class="chord" data-tabsaurus="Fa#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSost.png' alt="Fa#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">da<span class="note" data-notation="Latina">Fa#</span></span></span>ba su re<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dil<span class="note" data-notation="Latina">Si</span></span></span><br />
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">De<span class="note" data-notation="Latina">Mi</span></span></span> un arroyito cinco piedritas to<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mó<span class="note" data-notation="Latina">La</span></span></span><br />
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Un<span class="note" data-notation="Latina">Mi</span></span></span> simple muchachito<br />
Ar<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Si</span></span></span>do de va<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lor<span class="note" data-notation="Latina">Mi</span></span></span><br />
</p><p class="InterlineadoGuitarra">
Y <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">una<span class="note" data-notation="Latina">La</span></span></span> pequeña piedra<br />
En su <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">on<span class="note" data-notation="Latina">Mi</span></span></span>da colocó<br />
<span class="chord" data-tabsaurus="Fa#7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSost7.png' alt="Fa#7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Una<span class="note" data-notation="Latina">Fa#7</span></span></span> pequeña piedra<br />
Y la onda giró y gi<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ró<span class="note" data-notation="Latina">Si</span></span></span><br />
</p><p class="InterlineadoGuitarra">
Gi<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ró<span class="note" data-notation="Latina">Mi</span></span></span> y giró, Giró y giró, Giró y giró y gi<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ró<span class="note" data-notation="Latina">La</span></span></span><br />
A<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">que<span class="note" data-notation="Latina">Mi</span></span></span>lla piedrita echó a volar<br />
Y el gi<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gan<span class="note" data-notation="Latina">Si</span></span></span>te se desplo<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mó<span class="note" data-notation="Latina">Mi</span></span></span><br />
</p><p class="InterlineadoGuitarra">
Gi<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ró<span class="note" data-notation="Latina">Mi</span></span></span> y giró, Giró y giró, Giró y giró y gi<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ró<span class="note" data-notation="Latina">La</span></span></span><br />
A<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">que<span class="note" data-notation="Latina">Mi</span></span></span>lla piedrita echó a volar<br />
Y el gi<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gan<span class="note" data-notation="Latina">Si</span></span></span>te se desplo<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mó<span class="note" data-notation="Latina">Mi</span></span></span>.<br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = ``;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;

