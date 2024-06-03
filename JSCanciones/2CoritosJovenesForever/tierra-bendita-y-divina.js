const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltip">			<img id="btnLetra" src="../../../_BaseFilesCancionero/imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltip-content">Letra</span>		</span>				<span class="tooltip">			<img id="btnGuitarra" src="../../../_BaseFilesCancionero/imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltip-content">Guitarra</span>		</span>		<span class="tooltip">			<img id="btnUkelele" src="../../../_BaseFilesCancionero/imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltip-content">Ukelele</span>		</span>	</div>	<p class="InterlineadoLetra">Tierra bendita y divina<br />es la de Palestina<br />donde nació Jesús<br />Eres, de las naciones, cumbre<br />bañada por la lumbre<br />que derramó su luz.<br /></p><p class="InterlineadoLetra"><b>CORO</b><br />&emsp;Eres la historia inolvidable,<br />&emsp;Porque en tu seno se derramó<br />&emsp;// La sangre, preciosa sangre,<br />&emsp;Del unigénito Hijo de Dios. //<br /></p><p class="InterlineadoLetra">Cuenta la historia del pasado<br />que en tu seno sagrado<br />vivió el Salvador,<br />Y en esos viejos olivares,<br />habló a los millares<br />las palabras de amor.<br /></p><p class="InterlineadoLetra"><b>CORO</b><br /></p><p class="InterlineadoLetra">Quedan en ti testigos mudos,<br />que son los viejos muros<br />de la Jerusalén;<br />Viejas paredes destruidas,<br />que si tuvieran vida,<br />nos hablarían también.<br /></p><p class="InterlineadoLetra"><b>CORO</b><br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
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
<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Tie<span class="note" data-notation="Latina">Lam</span></span></span>rra bendita y divina<br />
es la de Palestina<br />
donde nació Je<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mi</span></span></span><br />
Eres, de las naciones, cumbre<br />
bañada por la lumbre<br />
que derramó su <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">luz<span class="note" data-notation="Latina">Lam</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
<b>CORO</b><br />
&emsp;Eres la his<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Mi</span></span></span>ria inolvi<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">da<span class="note" data-notation="Latina">Lam</span></span></span>ble,<br />
&emsp;Porque en tu <span class="chord" data-tabsaurus="Sol7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol7.png' alt="Sol7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">se<span class="note" data-notation="Latina">Sol7</span></span></span>no se derra<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mó<span class="note" data-notation="Latina">Do</span></span></span><br />
&emsp;La <span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Rem.png' alt="Rem" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Rem</span></span></span>gre, preciosa <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Lam</span></span></span>gre,<br />
&emsp;Del uni<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gé<span class="note" data-notation="Latina">Mi</span></span></span>nito Hijo de <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Lam</span></span></span>&emsp;<span class="chord" data-tabsaurus="La7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La7.png' alt="La7" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La7</span></span>&emsp;</span>.<br />
&emsp;La <span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Rem.png' alt="Rem" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Rem</span></span></span>gre, preciosa <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Lam</span></span></span>gre,<br />
&emsp;Del uni<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gé<span class="note" data-notation="Latina">Mi</span></span></span>nito Hijo de <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Dios<span class="note" data-notation="Latina">Lam</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cuen<span class="note" data-notation="Latina">Lam</span></span></span>ta la historia del pasado<br />
que en tu seno sagrado<br />
vivió el Salva<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Mi</span></span></span>,<br />
Y en esos viejos olivares,<br />
habló a los millares<br />
las palabras de <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">amor<span class="note" data-notation="Latina">Lam</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
<b>CORO</b><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Que<span class="note" data-notation="Latina">Lam</span></span></span>dan en ti testigos mudos,<br />
que son los viejos muros<br />
de la Jerusa<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lén<span class="note" data-notation="Latina">Mi</span></span></span><br />
Viejas paredes destruidas,<br />
que si tuvieran vida,<br />
nos hablarían tam<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bien<span class="note" data-notation="Latina">Lam</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
<b>CORO</b><br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = ``;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;

