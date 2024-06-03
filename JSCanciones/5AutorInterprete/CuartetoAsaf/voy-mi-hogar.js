﻿const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltip">			<img id="btnLetra" src="../../../../_BaseFilesCancionero/imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltip-content">Letra</span>		</span>				<span class="tooltip">			<img id="btnGuitarra" src="../../../../_BaseFilesCancionero/imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltip-content">Guitarra</span>		</span>		<span class="tooltip">			<img id="btnUkelele" src="../../../../_BaseFilesCancionero/imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltip-content">Ukelele</span>		</span>	</div>	<p class="CSSAutor">Autor/Intérprete: Cuarteto Asaf</p><p class="InterlineadoLetra">El hogar es donde<br />se encuentra amor<br />Aunque nunca yo he tenido<br />otro igual.<br /></p><p class="InterlineadoLetra">Recibí de él<br />una llave que me pueda abrir<br />las puertas del hogar<br />que anhelo hoy.<br /></p><p class="InterlineadoLetra">Voy a mi eterno hogar,<br />voy a vivir la paz<br />podré conocer a mi Señor<br />Con amor me esperará,<br />dulces rostros me recibirán<br />al final de la jornada iré a mi hogar<br /></p><p class="InterlineadoLetra">Todos sueñan hoy,<br />con aquel hogar<br />mi corazón lo desea también<br /></p><p class="InterlineadoLetra">El hogar es más,<br />que un bello lugar<br />Es sentir amor<br />que viene de mi Señor<br /></p><p class="InterlineadoLetra">Voy a mi eterno hogar,<br />voy a vivir la paz<br />Podré conocer a mi Señor<br />Con amor me esperará,<br />dulces rostros me recibirán<br />al final de la jornada iré a mi hogar<br /></p><p class="InterlineadoLetra">Voy <i>(a mi eterno hogar)</i>,<br />voy <i>(a vivir la paz)</i><br />podré conocer a mi Señor<br /></p><p class="InterlineadoLetra">Con amor <i>(me esperará, dulces rostros me recibirán)</i><br />al final de la jornada iré a mi hogar<br />al final de la jornada iré a mi hogar<br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
		<span class="tooltip">
			<img id="btnLetra2" src="../../../../_BaseFilesCancionero/imgmicrofono.png" alt="Letra" class="imagebutton">
			<span class="tooltip-content">Letra</span>
		</span>
		
		<span class="tooltip">
			<img id="btnGuitarra2" src="../../../../_BaseFilesCancionero/imgguitarra.png" alt="Guitarra" class="imagebutton">
			<span class="tooltip-content">Guitarra</span>
		</span>

		<span class="tooltip">
			<img id="btnUkelele2" src="../../../../_BaseFilesCancionero/imgukelele.png" alt="Ukelele" class="imagebutton">		
			<span class="tooltip-content">Ukelele</span>
		</span>
	</div>	
<p class="CSSAutor">Autor/Intérprete: Cuarteto Asaf</p>
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
INTRO<br />
<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Si</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Do#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/DoSostm.png' alt="Do#m" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Do#m</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Fa#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSost.png' alt="Fa#" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Fa#</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">El<span class="note" data-notation="Latina">Si</span></span></span> hogar es donde<br />
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span>se encuentra amor<br />
<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Aun<span class="note" data-notation="Latina">Si</span></span></span>que nunca yo he tenido<br />
o<span class="chord" data-tabsaurus="Fa#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSost.png' alt="Fa#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tro<span class="note" data-notation="Latina">Fa#</span></span></span> igual.<br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Re<span class="note" data-notation="Latina">Si</span></span></span>cibí de él<br />
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">una lla<span class="note" data-notation="Latina">Mi</span></span></span>ve que me pueda abrir<br />
las <span class="chord" data-tabsaurus="Do#7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/DoSost7.png' alt="Do#7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">puer<span class="note" data-notation="Latina">Do#7</span></span></span>tas del hogar<br />
que anhelo <span class="chord" data-tabsaurus="Fa#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSost.png' alt="Fa#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">hoy<span class="note" data-notation="Latina">Fa#</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Voy<span class="note" data-notation="Latina">Si</span></span></span> a mi eterno hogar,<br />
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Mi</span></span></span> a vivir la paz<br />
po<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dré<span class="note" data-notation="Latina">Si</span></span></span>&emsp;<span class="chord" data-tabsaurus="Fa#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSost.png' alt="Fa#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Fa#</span></span></span>&emsp;<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">Si</span></span></span>cer a mi Se<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Fa</span></span></span><br />
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Con<span class="note" data-notation="Latina">Mi</span></span></span> amor me esperará,<br />
<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dul<span class="note" data-notation="Latina">Si</span></span></span>ces <span class="chord" data-tabsaurus="Fa#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSost.png' alt="Fa#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ros<span class="note" data-notation="Latina">Fa#</span></span></span>tros me re<span class="chord" data-tabsaurus="Sol#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/SolSostm.png' alt="Sol#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ci<span class="note" data-notation="Latina">Sol#m</span></span></span>&emsp;bi<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rán<span class="note" data-notation="Latina">Mi</span></span></span><br />
al fi<span class="chord" data-tabsaurus="Do#m7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/DoSostm7.png' alt="Do#m7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nal<span class="note" data-notation="Latina">Do#m7</span></span></span> de la jor<span class="chord" data-tabsaurus="Fa#"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSost.png' alt="Fa#" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Fa#</span></span></span>da iré a mi ho<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Si</span></span></span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="La7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La7.png' alt="La7" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La7</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Sol</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Do</span></span>&emsp;</span>Todos sueñan hoy,<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Fa</span></span>&emsp;</span>con aquel hogar<br />
mi <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Do</span></span></span>razón lo desea tam<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bién<span class="note" data-notation="Latina">Sol</span></span></span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">El<span class="note" data-notation="Latina">Do</span></span></span> hogar es más,<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Fa</span></span>&emsp;</span>que un bello lugar<br />
Es sen<span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re7.png' alt="Re7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tir<span class="note" data-notation="Latina">Re7</span></span></span> amor<br />
que viene de <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Sol</span></span></span> Señor<br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Voy<span class="note" data-notation="Latina">Do</span></span></span> a mi eterno hogar,<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Fa</span></span></span> a vivir la paz<br />
Po<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dré<span class="note" data-notation="Latina">Do</span></span></span> <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Sol</span></span></span>no<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cer<span class="note" data-notation="Latina">Do</span></span></span> a mi Se<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span></span><br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Con<span class="note" data-notation="Latina">Fa</span></span></span> amor me esperará,<br />
<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dul<span class="note" data-notation="Latina">Do</span></span></span>ces <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ros<span class="note" data-notation="Latina">Sol</span></span></span>tros me re<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ci<span class="note" data-notation="Latina">Lam</span></span></span>birán<br />
al fi<span class="chord" data-tabsaurus="Rem7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Rem7.png' alt="Rem7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nal<span class="note" data-notation="Latina">Rem7</span></span></span> de la jor<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Sol</span></span></span>da iré a mi ho<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Do</span></span></span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Lam</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Do</span></span>&emsp;</span>Voy <i>(a mi eterno hogar)</i>,<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">voy<span class="note" data-notation="Latina">Fa</span></span></span> <i>(a vivir la paz)</i><br />
po<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dré<span class="note" data-notation="Latina">Do</span></span></span>&emsp;<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Sol</span></span></span>&emsp;<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">Do</span></span></span>cer a mi Se<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Sol</span></span></span><br />
</p><p class="InterlineadoGuitarra">
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Con<span class="note" data-notation="Latina">Fa</span></span></span> amor <i>(me esperará, <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dul<span class="note" data-notation="Latina">Do</span></span></span>ces <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ros<span class="note" data-notation="Latina">Sol</span></span></span>tros me re<span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ci<span class="note" data-notation="Latina">Lam</span></span></span>birán)</i><br />
al fi<span class="chord" data-tabsaurus="Rem7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Rem7.png' alt="Rem7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nal<span class="note" data-notation="Latina">Rem7</span></span></span> de la jor<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Sol</span></span></span>da iré a mi ho<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Do</span></span></span><br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">Fa</span></span></span> fi<span class="chord" data-tabsaurus="Rem7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Rem7.png' alt="Rem7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nal<span class="note" data-notation="Latina">Rem7</span></span></span> de la jor<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Sol</span></span></span>da iré a mi ho<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Do</span></span></span>&emsp;<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Fa</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Do</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
al fi<span class="chord" data-tabsaurus="Rem7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Rem7.png' alt="Rem7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nal<span class="note" data-notation="Latina">Rem7</span></span></span> de la jor<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Sol</span></span></span>da iré a mi ho<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Do</span></span></span><br />
al fi<span class="chord" data-tabsaurus="Rem7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Rem7.png' alt="Rem7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nal<span class="note" data-notation="Latina">Rem7</span></span></span> de la jor<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Sol</span></span></span>da iré a mi ho<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gar<span class="note" data-notation="Latina">Fa</span></span></span>&emsp;<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Do</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/_m1oSoQI_10?si=B8T45q_Fw0cLhIEK" title="Voy a mi hogar" frameborder="0" allowfullscreen></iframe>
`;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;

