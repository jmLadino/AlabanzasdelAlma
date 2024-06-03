﻿const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltip">			<img id="btnLetra" src="https://jmladino.github.io/AlabanzasdelAlma/imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltip-content">Letra</span>		</span>				<span class="tooltip">			<img id="btnGuitarra" src="https://jmladino.github.io/AlabanzasdelAlma/imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltip-content">Guitarra</span>		</span>		<span class="tooltip">			<img id="btnUkelele" src="https://jmladino.github.io/AlabanzasdelAlma/imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltip-content">Ukelele</span>		</span>	</div>	<p class="InterlineadoLetra">Alabad a Jehová<br />porque es bueno cantar salmos a nuestro Dios<br />Alabad a Jehová<br />porque suave y hermosa es la alabanza<br />Alabad a Jehová<br />porque el es Dios fuerte y poderoso<br />Alabad a Jehová<br />es el que exalta a los humildes<br /></p><p class="InterlineadoLetra">es el que sana mi corazón quebrantado<br />el que venda las heridas de mi alma<br />me levanta cuando estoy caído<br />me guiará hasta que pueda llegar al día final<br /></p><p class="InterlineadoLetra">Alabad a Jehová<br />porque es bueno cantar salmos a nuestro Dios<br />Alabad a Jehová<br />porque suave y hermosa es la alabanza<br />Alabad a Jehová<br />porque el es Dios fuerte y poderoso<br />Alabad a Jehová<br />es el que exalta a los humildes<br /></p><p class="InterlineadoLetra">es el que sana mi corazón quebrantado<br />el que venda las heridas de mi alma<br />me levanta cuando estoy caído<br />me guiará hasta que pueda llegar al día final<br /></p><p class="InterlineadoLetra"><span class="comentario">(Sube tonalidad)</span><br /></p><p class="InterlineadoLetra">es el que sana mi corazón quebrantado<br />el que venda las heridas de mi alma<br />me levanta cuando estoy caído<br />me guiará hasta que pueda llegar al día final<br /></p><p class="InterlineadoLetra">me guiará hasta que pueda llegar al día final<br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
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
<span class="comentario">(Afinación en Re#)</span><br />
<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Ala<span class="note" data-notation="Latina">La</span></span></span>bad a Jehová<br />
porque es bueno cantar salmos a <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nues<span class="note" data-notation="Latina">Sim</span></span></span>tro Dios<br />
Alabad a Jehová<br />
porque suave y her<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mo<span class="note" data-notation="Latina">Re</span></span></span>sa es la ala<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ban<span class="note" data-notation="Latina">La</span></span></span>za<br />
<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Ala<span class="note" data-notation="Latina">La</span></span></span>bad a Jehová<br />
porque el es Dios fuerte y pode<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">Re</span></span></span>so<br />
Alabad a Jeho<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">vá<span class="note" data-notation="Latina">La</span></span></span><br />
es el que e<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">xal<span class="note" data-notation="Latina">Mi</span></span></span>ta a los hu<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mil<span class="note" data-notation="Latina">La</span></span></span>des<br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Es<span class="note" data-notation="Latina">Mi</span></span></span> el que <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sa<span class="note" data-notation="Latina">La</span></span></span>na mi corazón quebran<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ta<span class="note" data-notation="Latina">Re</span></span></span>do<br />
el que <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ven<span class="note" data-notation="Latina">Mi</span></span></span>da las heridas de mi <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">La</span></span></span>ma<br />
me le<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">van<span class="note" data-notation="Latina">Re</span></span></span>ta cuando estoy ca<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">í<span class="note" data-notation="Latina">La</span></span></span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">i<span class="note" data-notation="Latina">Mi</span></span></span>&emsp;<span class="chord" data-tabsaurus="Fa#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSost.png' alt="Fa#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">do<span class="note" data-notation="Latina">Fa#</span></span></span><br />
me guia<span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Sim</span></span></span> hasta que pueda lle<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Mi</span></span></span> al <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">Re</span></span></span> fi<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nal<span class="note" data-notation="Latina">La</span></span></span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Ala<span class="note" data-notation="Latina">La</span></span></span>bad a Jehová<br />
porque es bueno cantar salmos a <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nues<span class="note" data-notation="Latina">Sim</span></span></span>tro Dios<br />
Alabad a Jehová<br />
porque suave y her<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mo<span class="note" data-notation="Latina">Re</span></span></span>sa es la ala<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ban<span class="note" data-notation="Latina">La</span></span></span>za<br />
<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Ala<span class="note" data-notation="Latina">La</span></span></span>bad a Jehová<br />
porque el es Dios fuerte y pode<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ro<span class="note" data-notation="Latina">Re</span></span></span>so<br />
Alabad a Jeho<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">vá<span class="note" data-notation="Latina">La</span></span></span><br />
es el que e<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">xal<span class="note" data-notation="Latina">Mi</span></span></span>ta a los hu<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mil<span class="note" data-notation="Latina">La</span></span></span>des<br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Es<span class="note" data-notation="Latina">Mi</span></span></span> el que <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sa<span class="note" data-notation="Latina">La</span></span></span>na mi corazón quebran<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ta<span class="note" data-notation="Latina">Re</span></span></span>do<br />
el que <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ven<span class="note" data-notation="Latina">Mi</span></span></span>da las heridas de mi <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">La</span></span></span>ma<br />
me le<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">van<span class="note" data-notation="Latina">Re</span></span></span>ta cuando estoy ca<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">í<span class="note" data-notation="Latina">La</span></span></span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">i<span class="note" data-notation="Latina">Mi</span></span></span>&emsp;<span class="chord" data-tabsaurus="Fa#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSost.png' alt="Fa#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">do<span class="note" data-notation="Latina">Fa#</span></span></span><br />
me guia<span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Sim</span></span></span> hasta que pueda lle<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Mi</span></span></span> al <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">Re</span></span></span> fi<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nal<span class="note" data-notation="Latina">La</span></span></span><br />
</p><p class="InterlineadoGuitarra">
<span class="comentario">(Sube tonalidad)</span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Fa</span></span></span> el que <span class="chord" data-tabsaurus="La#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/LaSost.png' alt="La#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sa<span class="note" data-notation="Latina">La#</span></span></span>na mi corazón quebran<span class="chord" data-tabsaurus="Re#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/ReSost.png' alt="Re#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ta<span class="note" data-notation="Latina">Re#</span></span></span>do<br />
el que <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ven<span class="note" data-notation="Latina">Fa</span></span></span>da las heridas de mi <span class="chord" data-tabsaurus="La#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/LaSost.png' alt="La#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">La#</span></span></span>ma<br />
me le<span class="chord" data-tabsaurus="Re#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/ReSost.png' alt="Re#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">van<span class="note" data-notation="Latina">Re#</span></span></span>ta cuando estoy ca<span class="chord" data-tabsaurus="La#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/LaSost.png' alt="La#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">í<span class="note" data-notation="Latina">La#</span></span></span>&emsp;<span class="chord" data-tabsaurus="Rem"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Rem.png' alt="Rem" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">i<span class="note" data-notation="Latina">Rem</span></span></span>&emsp;<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">do<span class="note" data-notation="Latina">Sol</span></span></span><br />
me guia<span class="chord" data-tabsaurus="Dom"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Dom.png' alt="Dom" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Dom</span></span></span> hasta que pueda lle<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Fa</span></span></span> al <span class="chord" data-tabsaurus="La#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/LaSost.png' alt="La#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">día<span class="note" data-notation="Latina">La#</span></span></span> fi<span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nal<span class="note" data-notation="Latina">Solm</span></span></span><br />
</p><p class="InterlineadoGuitarra">
me guia<span class="chord" data-tabsaurus="Dom"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Dom.png' alt="Dom" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Dom</span></span></span> hasta que pueda lle<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Fa</span></span></span> al día fi<span class="chord" data-tabsaurus="Re#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/ReSost.png' alt="Re#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Re#</span></span></span>&emsp;<span class="chord" data-tabsaurus="La#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/LaSost.png' alt="La#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">La#</span></span></span><br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/omz7u551_7k?si=vpYaAlYJ2HiYnXmj" title="Salmo 147; Alabad a Jehová" frameborder="0" allowfullscreen></iframe>
`;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;

