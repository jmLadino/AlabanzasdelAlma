﻿const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltip">			<img id="btnLetra" src="https://jmladino.github.io/AlabanzasdelAlma/imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltip-content">Letra</span>		</span>				<span class="tooltip">			<img id="btnGuitarra" src="https://jmladino.github.io/AlabanzasdelAlma/imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltip-content">Guitarra</span>		</span>		<span class="tooltip">			<img id="btnUkelele" src="https://jmladino.github.io/AlabanzasdelAlma/imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltip-content">Ukelele</span>		</span>	</div>	<p class="CSSAutor">Hechos 18:9-10</p><p class="InterlineadoLetra">1<br />No te dé temor hablar por Cristo,<br />haz que brille en ti su luz;<br />al que te salvó confiesa siempre,<br />todo debes a Jesús.<br /></p><p class="InterlineadoLetra"><b>CORO</b>:<br />&emsp;No te dé temor, no te dé temor,<br />&emsp;nunca, nunca, nunca.<br />&emsp;Es tu Salvador amante;<br />&emsp;nunca, pues, te dé temor.<br /></p><p class="InterlineadoLetra">2<br />No te dé temor vivir por Cristo<br />cuanto de tu parte esté;<br />obra con amor, con fe y constancia:<br />tus trabajos premiará.<br /></p><p class="InterlineadoLetra">3<br />No te dé temor sufrir por Cristo<br />los reproches, o el dolor;<br />sufre con amor tus pruebas todas,<br />cual sufrió tu Salvador.<br /></p><p class="InterlineadoLetra">4<br />No te dé temor morir por Cristo:<br />vida y verdad es él;<br />él te llevará con gran ternura<br />a su célico vergel.<br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
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
<p class="CSSAutor">Hechos 18:9-10</p>
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
INTRO:<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Fa</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Solm</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Fa</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Do</span></span>&emsp;</span>&emsp;<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable">&emsp;<span class="note" data-notation="Latina">Fa</span></span>&emsp;</span><br />
</p><p class="InterlineadoGuitarra">
1<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">No<span class="note" data-notation="Latina">Fa</span></span></span> te dé temor ha<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">blar<span class="note" data-notation="Latina">Do</span></span></span> por <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Fa</span></span></span>to,<br />
haz que <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bri<span class="note" data-notation="Latina">Do</span></span></span>lle en <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Fa</span></span></span> su luz<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">al<span class="note" data-notation="Latina">Fa</span></span></span> que te salvó confiesa siempre,<br />
<span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Solm</span></span></span>do <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Do</span></span></span>bes a Je<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Fa</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
<b>CORO</b>:<br />
&emsp;<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">No<span class="note" data-notation="Latina">Fa</span></span></span> te dé temor, <span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">no<span class="note" data-notation="Latina">Solm</span></span></span> te dé temor,<br />
&emsp;<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nun<span class="note" data-notation="Latina">Fa</span></span></span>ca, <span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nun<span class="note" data-notation="Latina">Solm</span></span></span>ca, <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nun<span class="note" data-notation="Latina">Do</span></span></span>ca.<br />
&emsp;<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Es<span class="note" data-notation="Latina">Fa</span></span></span> tu Salva<span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Solm</span></span></span> amante<br />
&emsp;<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">nun<span class="note" data-notation="Latina">Fa</span></span></span>ca, <span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">pues<span class="note" data-notation="Latina">Solm</span></span></span>, te <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dé<span class="note" data-notation="Latina">Do</span></span></span> te<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Fa</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
2<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">No<span class="note" data-notation="Latina">Fa</span></span></span> te dé temor vi<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">vir<span class="note" data-notation="Latina">Do</span></span></span> por <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Fa</span></span></span>to<br />
cuanto <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">de<span class="note" data-notation="Latina">Do</span></span></span> tu <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">par<span class="note" data-notation="Latina">Fa</span></span></span>te esté<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">obra<span class="note" data-notation="Latina">Fa</span></span></span> con amor, con fe y constancia:<br />
<span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tus<span class="note" data-notation="Latina">Solm</span></span></span> tra<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ba<span class="note" data-notation="Latina">Do</span></span></span>jos premia<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rá<span class="note" data-notation="Latina">Fa</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
3<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">No<span class="note" data-notation="Latina">Fa</span></span></span> te dé temor su<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">frir<span class="note" data-notation="Latina">Do</span></span></span> por <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Fa</span></span></span>to<br />
los re<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">pro<span class="note" data-notation="Latina">Do</span></span></span>ches, <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">o el<span class="note" data-notation="Latina">Fa</span></span></span> dolor<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">su<span class="note" data-notation="Latina">Fa</span></span></span>fre con amor tus pruebas todas,<br />
<span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cual<span class="note" data-notation="Latina">Solm</span></span></span> su<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">frió<span class="note" data-notation="Latina">Do</span></span></span> tu Salva<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dor<span class="note" data-notation="Latina">Fa</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
4<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">No<span class="note" data-notation="Latina">Fa</span></span></span> te dé temor mo<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">rir<span class="note" data-notation="Latina">Do</span></span></span> por <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Fa</span></span></span>to:<br />
vida <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">y<span class="note" data-notation="Latina">Do</span></span></span> ver<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Fa</span></span></span> es él<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">él<span class="note" data-notation="Latina">Fa</span></span></span> te llevará con gran ternura<br />
<span class="chord" data-tabsaurus="Solm"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Solm.png' alt="Solm" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Solm</span></span></span> su <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cé<span class="note" data-notation="Latina">Do</span></span></span>lico ver<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">gel<span class="note" data-notation="Latina">Fa</span></span></span>.<br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/emzjMA4PPFI?si=zxay63NR-nPp48zV" title="559. No te dé temor" frameborder="0" allowfullscreen></iframe>
`;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;

