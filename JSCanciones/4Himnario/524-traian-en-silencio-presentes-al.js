﻿const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltip">			<img id="btnLetra" src="https://jmladino.github.io/AlabanzasdelAlma/imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltip-content">Letra</span>		</span>				<span class="tooltip">			<img id="btnGuitarra" src="https://jmladino.github.io/AlabanzasdelAlma/imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltip-content">Guitarra</span>		</span>		<span class="tooltip">			<img id="btnUkelele" src="https://jmladino.github.io/AlabanzasdelAlma/imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltip-content">Ukelele</span>		</span>	</div>	<p class="InterlineadoLetra">1<br />Traían en silencio presentes al Señor<br />su amor humilde y puro les daba gran valor;<br />palabras de consuelo y hechos de bondad,<br />Jesús los recibía por su sinceridad.<br /></p><p class="InterlineadoLetra"><b>CORO</b>:<br />¿Quisieras dar a Cristo el más precioso don?<br />Di: "Cristo, mi Maestro, te doy mi corazón."<br /></p><p class="InterlineadoLetra">2<br />Aparte de los otros un pobre viador<br />miraba cómo daban tributos al Señor.<br />Él nada poseía; sentía gran amor,<br />¡Y cuánto anhelaba dar algo de valor!.<br /></p><p class="InterlineadoLetra">3<br />"Señor", clamó el hombre, "acepta tú mi don,<br />acepta lo que tengo: mi triste corazón."<br />Le dijo el buen Maestro al pobre viador:<br />"De todos los presentes es este el mejor."<br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
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
</p><p class="InterlineadoGuitarra">
INTRO:<br />
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Si</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Mi7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi7.png' alt="Mi7" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi7</span></span>&emsp;</span><br />
<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">La</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Fa#m</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Si</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Mi</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
Tra<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ían<span class="note" data-notation="Latina">Mi</span></span></span> en silencio pre<span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sen<span class="note" data-notation="Latina">Fa#m</span></span></span>tes <span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">Si</span></span></span> Se<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Mi</span></span></span><br />
su a<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Mi</span></span></span> humilde y puro les <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">da<span class="note" data-notation="Latina">Fa#m</span></span></span>ba <span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gran<span class="note" data-notation="Latina">Si</span></span></span> va<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lor<span class="note" data-notation="Latina">Mi</span></span></span><br />
pa<span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">la<span class="note" data-notation="Latina">Si7</span></span></span>bras de con<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sue<span class="note" data-notation="Latina">Mi</span></span></span>lo y hechos de bon<span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Si7</span></span></span>,<br />
<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Je<span class="note" data-notation="Latina">Mi</span></span></span>sús los recibía por <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">su<span class="note" data-notation="Latina">Fa#m</span></span></span> sin<span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ce<span class="note" data-notation="Latina">Si</span></span></span>ri<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Mi</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
<b>CORO</b>:<br />
¿Qui<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sie<span class="note" data-notation="Latina">La</span></span></span>ras dar a <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Mi</span></span></span>to el <span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">más<span class="note" data-notation="Latina">Si</span></span></span> precioso d<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">o<span class="note" data-notation="Latina">Mi</span></span></span>&emsp;<span class="chord" data-tabsaurus="Mi7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi7.png' alt="Mi7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">on<span class="note" data-notation="Latina">Mi7</span></span></span>?<br />
Di: "<span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">La</span></span></span>to, mi Ma<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Mi</span></span></span>tro, te <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">doy<span class="note" data-notation="Latina">Fa#m</span></span></span> mi <span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Si</span></span></span>ra<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Mi</span></span></span>."<br />
</p><p class="InterlineadoGuitarra">
2<br />
A<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">par<span class="note" data-notation="Latina">Mi</span></span></span>te de los otros un <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">po<span class="note" data-notation="Latina">Fa#m</span></span></span>bre <span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">Si</span></span></span>a<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Mi</span></span></span><br />
mi<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ra<span class="note" data-notation="Latina">Mi</span></span></span>ba cómo daban tri<span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bu<span class="note" data-notation="Latina">Fa#m</span></span></span>tos <span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">Si</span></span></span> Se<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Mi</span></span></span>.<br />
Él <span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">na<span class="note" data-notation="Latina">Si7</span></span></span>da pose<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ía<span class="note" data-notation="Latina">Mi</span></span></span> sentía gran a<span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Si7</span></span></span>,<br />
¡Y <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cuán<span class="note" data-notation="Latina">Mi</span></span></span>to anhelaba dar <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">Fa#m</span></span></span>go <span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Si</span></span></span> va<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lor<span class="note" data-notation="Latina">Mi</span></span></span>!.<br />
</p><p class="InterlineadoGuitarra">
3<br />
"Se<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Mi</span></span></span>", clamó el hombre, "a<span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cep<span class="note" data-notation="Latina">Fa#m</span></span></span>ta <span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tú<span class="note" data-notation="Latina">Si</span></span></span> mi <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">don<span class="note" data-notation="Latina">Mi</span></span></span>,<br />
a<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cep<span class="note" data-notation="Latina">Mi</span></span></span>ta lo que tengo: mi <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tris<span class="note" data-notation="Latina">Fa#m</span></span></span>te <span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Si</span></span></span>ra<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zón<span class="note" data-notation="Latina">Mi</span></span></span>."<br />
Le <span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">di<span class="note" data-notation="Latina">Si7</span></span></span>jo el buen Ma<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Mi</span></span></span>tro al pobre via<span class="chord" data-tabsaurus="Si7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si7.png' alt="Si7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Si7</span></span></span>:<br />
"De <span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Mi</span></span></span>dos los presentes es <span class="chord" data-tabsaurus="Fa#m"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/FaSostm.png' alt="Fa#m" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">es<span class="note" data-notation="Latina">Fa#m</span></span></span>te <span class="chord" data-tabsaurus="Si"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Si.png' alt="Si" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">el<span class="note" data-notation="Latina">Si</span></span></span> me<span class="chord" data-tabsaurus="Mi"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mi.png' alt="Mi" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">jor<span class="note" data-notation="Latina">Mi</span></span></span>."<br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = ``;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;

