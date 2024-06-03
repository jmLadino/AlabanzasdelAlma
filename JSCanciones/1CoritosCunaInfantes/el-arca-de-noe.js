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
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm7.png' alt="Fa#m7" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Fa#m7</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Si</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Hom<span class="note" data-notation="Latina">Mi</span></span></span>bre muy fa<span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm7.png' alt="Fa#m7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mo<span class="note" data-notation="Latina">Fa#m7</span></span></span>so<br />
en la his<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Si</span></span></span>ria fue No<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">é<span class="note" data-notation="Latina">Mi</span></span></span><br />
hizo un arca in<span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm7.png' alt="Fa#m7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">men<span class="note" data-notation="Latina">Fa#m7</span></span></span>sa<br />
que me<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">Si</span></span></span> 80 pi<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Mi</span></span></span><br />
la pintó con <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">La</span></span></span>quitrán<br />
<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">y<span class="note" data-notation="Latina">Si</span></span></span> le puso <span class="chord" data-tabsaurus="Sol#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/SolSostm.png' alt="Sol#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gran<span class="note" data-notation="Latina">Sol#m</span></span></span> fa<span class="chord" data-tabsaurus="Do#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/DoSostm.png' alt="Do#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rol<span class="note" data-notation="Latina">Do#m</span></span></span><br />
y a los ani<span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm7.png' alt="Fa#m7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ma<span class="note" data-notation="Latina">Fa#m7</span></span></span>les los me<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tió<span class="note" data-notation="Latina">Si</span></span></span><br />
de dos en <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dos<span class="note" data-notation="Latina">Mi</span></span></span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Do<span class="note" data-notation="Latina">Mi</span></span></span>ña cebra en<span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm7.png' alt="Fa#m7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tró<span class="note" data-notation="Latina">Fa#m7</span></span></span> con<br />
con su li<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sa<span class="note" data-notation="Latina">Si</span></span></span>do cami<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">són<span class="note" data-notation="Latina">Mi</span></span></span><br />
la siguió el ca<span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm7.png' alt="Fa#m7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">me<span class="note" data-notation="Latina">Fa#m7</span></span></span>llo<br />
la ser<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">pien<span class="note" data-notation="Latina">Si</span></span></span>te casca<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bel<span class="note" data-notation="Latina">Mi</span></span></span>,<br />
el monito o<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ra<span class="note" data-notation="Latina">La</span></span></span>ngután<br />
<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">el<span class="note" data-notation="Latina">Si</span></span></span> ratón y el <span class="chord" data-tabsaurus="Sol#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/SolSostm7.png' alt="Sol#m7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">puer<span class="note" data-notation="Latina">Sol#m7</span></span></span>co es<span class="chord" data-tabsaurus="Do#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/DoSostm.png' alt="Do#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">pín<span class="note" data-notation="Latina">Do#m</span></span></span><br />
la paloma, el <span class="chord" data-tabsaurus="Fa#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm7.png' alt="Fa#m7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bu<span class="note" data-notation="Latina">Fa#m7</span></span></span>rro, el co<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ne<span class="note" data-notation="Latina">Si</span></span></span>jo y el zor<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zal<span class="note" data-notation="Latina">Mi</span></span></span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cer<span class="note" data-notation="Latina">Fa</span></span></span>ca de cua<span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ren<span class="note" data-notation="Latina">Solm</span></span></span>ta días <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">du<span class="note" data-notation="Latina">Do</span></span></span>ró el chapa<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rrón<span class="note" data-notation="Latina">Fa</span></span></span><br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Has<span class="note" data-notation="Latina">Fa</span></span></span>ta que el in<span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">men<span class="note" data-notation="Latina">Solm</span></span></span>so bote <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">quie<span class="note" data-notation="Latina">Do</span></span></span>to se que<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dó<span class="note" data-notation="Latina">Fa</span></span></span><br />
Ya salió el se<span class="chord" data-tabsaurus="La#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/LaSost.png' alt="La#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La#</span></span></span> Noé, <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">que<span class="note" data-notation="Latina">Do</span></span></span> en el viaje no te<span class="chord" data-tabsaurus="Lam7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam7.png' alt="Lam7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mió<span class="note" data-notation="Latina">Lam7</span></span></span>,<br />
<span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Rem.png' alt="Rem" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Ba<span class="note" data-notation="Latina">Rem</span></span></span>jo el arco <span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">iris<span class="note" data-notation="Latina">Solm</span></span></span> muchas <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gra<span class="note" data-notation="Latina">Do</span></span></span>cias le dio a Di<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">os<span class="note" data-notation="Latina">Fa</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
Ya salió el se<span class="chord" data-tabsaurus="La#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/LaSost.png' alt="La#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">La#</span></span></span> Noé, <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">que<span class="note" data-notation="Latina">Lam</span></span></span> en el viaje no te<span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Rem.png' alt="Rem" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mió<span class="note" data-notation="Latina">Rem</span></span></span>,<br />
Bajo el arco <span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">iris<span class="note" data-notation="Latina">Solm</span></span></span> muchas <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">graaaaacias<span class="note" data-notation="Latina">Do</span></span></span> le dio a <span class="chord" data-tabsaurus="Do#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/DoSost.png' alt="Do#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Dio<span class="note" data-notation="Latina">Do#</span></span></span>&emsp;<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Re</span></span></span>&emsp;<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">os<span class="note" data-notation="Latina">Fa</span></span></span>.<br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = ``;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;
