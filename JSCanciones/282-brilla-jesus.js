﻿const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltipPrevNext">			<img id="btnLetra" src="imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltipPrevNext-content">Letra</span>		</span>				<span class="tooltipPrevNext">			<img id="btnGuitarra" src="imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltipPrevNext-content">Guitarra</span>		</span>		<span class="tooltipPrevNext">			<img id="btnUkelele" src="imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltipPrevNext-content">Ukelele</span>		</span>	</div>	<p class="InterlineadoLetra">1.<br />Cristo, tu gran amor me inspira;<br />Cristo, tu gran amor me anima;<br />pues tu luz ilumina la oscuridad,<br />tu verdad me conduce a la libertad.<br />Brilla en mí, brilla en mí.<br /></p><p class="InterlineadoLetra">Coro<br />&emsp;¡Brilla, Jesús!<br />&emsp;Danos hoy la luz que da tu gloria,<br />&emsp;pues tu calor trae paz y amor.<br />&emsp;Ven como el Sol<br />&emsp;de justicia y misericordia.<br />&emsp;¡Brilla, Jesús! Danos hoy tu luz.<br /></p><p class="InterlineadoLetra">2.<br />Cristo, vengo a tu presencia,<br />atraído por tu pureza.<br />Examina mi vida y pruébame;<br />limpia toda maldad con tu sangre.<br />Brilla en mí, brilla en mí.<br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
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
1.<br />
<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span></span>to, <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tu<span class="note" data-notation="Latina">Do</span></span></span> gran a<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span></span> me ins<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">pi<span class="note" data-notation="Latina">Re</span></span></span>ra<br />
<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span></span>to, <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tu<span class="note" data-notation="Latina">Do</span></span></span> gran a<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Sol</span></span></span> me a<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ni<span class="note" data-notation="Latina">Re</span></span></span>ma<br />
<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">pues<span class="note" data-notation="Latina">Do</span></span></span> tu <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">luz<span class="note" data-notation="Latina">Re</span></span></span> ilu<span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Sim</span></span></span>na la os<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">cu<span class="note" data-notation="Latina">Mim</span></span></span>ridad,<br />
<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tu<span class="note" data-notation="Latina">Do</span></span></span> ver<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Re</span></span></span> me con<span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">du<span class="note" data-notation="Latina">Sim</span></span></span>ce a la li<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ber<span class="note" data-notation="Latina">Mim</span></span></span>tad.<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Bri<span class="note" data-notation="Latina">Fa</span></span></span>lla en <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mí<span class="note" data-notation="Latina">Re</span></span></span>, <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bri<span class="note" data-notation="Latina">Fa</span></span></span>lla en <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mí<span class="note" data-notation="Latina">Re</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
Coro<br />
&emsp;¡<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Bri<span class="note" data-notation="Latina">Sol</span></span></span>&emsp;<span class="chord" data-tabsaurus="Sim7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim7.png' alt="Sim7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lla<span class="note" data-notation="Latina">Sim7</span></span></span>, Je<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mim</span></span></span>!<br />
&emsp;Danos <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">hoy<span class="note" data-notation="Latina">Do</span></span></span> la <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">luz<span class="note" data-notation="Latina">Lam</span></span></span> que <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">da<span class="note" data-notation="Latina">Re</span></span></span> tu <span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re7.png' alt="Re7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">glo<span class="note" data-notation="Latina">Re7</span></span></span>ria,<br />
&emsp;<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">pues<span class="note" data-notation="Latina">Sol</span></span></span> <span class="chord" data-tabsaurus="Sim7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim7.png' alt="Sim7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tu<span class="note" data-notation="Latina">Sim7</span></span></span> ca<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lor<span class="note" data-notation="Latina">Mim</span></span></span>&emsp;<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">trae<span class="note" data-notation="Latina">Do</span></span></span> <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">paz<span class="note" data-notation="Latina">Fa</span></span></span> y a<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mor<span class="note" data-notation="Latina">Re</span></span></span>.<br />
&emsp;<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Ven<span class="note" data-notation="Latina">Sol</span></span></span>&emsp;<span class="chord" data-tabsaurus="Sim7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim7.png' alt="Sim7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">co<span class="note" data-notation="Latina">Sim7</span></span></span>mo el <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sol<span class="note" data-notation="Latina">Mim</span></span></span><br />
&emsp;de jus<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ti<span class="note" data-notation="Latina">Do</span></span></span>cia <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">y<span class="note" data-notation="Latina">Lam</span></span></span>&emsp; mi<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">se<span class="note" data-notation="Latina">Re</span></span></span>ricordia.<br />
&emsp;¡<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Bri<span class="note" data-notation="Latina">Sol</span></span></span>&emsp;<span class="chord" data-tabsaurus="Sim7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim7.png' alt="Sim7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lla<span class="note" data-notation="Latina">Sim7</span></span></span>, Je<span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sús<span class="note" data-notation="Latina">Mim</span></span></span>! <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Da<span class="note" data-notation="Latina">Do</span></span></span>nos <span class="chord" data-tabsaurus="Lam"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Lam.png' alt="Lam" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">hoy<span class="note" data-notation="Latina">Lam</span></span></span>&emsp;<span class="chord" data-tabsaurus="Re7"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re7.png' alt="Re7" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tu<span class="note" data-notation="Latina">Re7</span></span></span>&emsp;<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">luz<span class="note" data-notation="Latina">Sol</span></span></span>.<br />
</p><p class="InterlineadoGuitarra">
2.<br />
<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Cris<span class="note" data-notation="Latina">Sol</span></span></span>to, <span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ven<span class="note" data-notation="Latina">Do</span></span></span>go a <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tu<span class="note" data-notation="Latina">Sol</span></span></span> pre<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">sen<span class="note" data-notation="Latina">Re</span></span></span>cia,<br />
<span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">a<span class="note" data-notation="Latina">Sol</span></span></span>tra<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">í<span class="note" data-notation="Latina">Do</span></span></span>do por <span class="chord" data-tabsaurus="Sol"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sol.png' alt="Sol" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">tu<span class="note" data-notation="Latina">Sol</span></span></span> pu<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">re<span class="note" data-notation="Latina">Re</span></span></span>za.<br />
<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Exa<span class="note" data-notation="Latina">Do</span></span></span><span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mi<span class="note" data-notation="Latina">Re</span></span></span>na mi <span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">vi<span class="note" data-notation="Latina">Sim</span></span></span>da y <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">prué<span class="note" data-notation="Latina">Mim</span></span></span>bame<br />
<span class="chord" data-tabsaurus="Do"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Do.png' alt="Do" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">lim<span class="note" data-notation="Latina">Do</span></span></span>pia <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">to<span class="note" data-notation="Latina">Re</span></span></span>da mal<span class="chord" data-tabsaurus="Sim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Sim.png' alt="Sim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">dad<span class="note" data-notation="Latina">Sim</span></span></span> con tu <span class="chord" data-tabsaurus="Mim"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Mim.png' alt="Mim" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">san<span class="note" data-notation="Latina">Mim</span></span></span>gre.<br />
<span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">Bri<span class="note" data-notation="Latina">Fa</span></span></span>lla en <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mí<span class="note" data-notation="Latina">Re</span></span></span>, <span class="chord" data-tabsaurus="Fa"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Fa.png' alt="Fa" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">bri<span class="note" data-notation="Latina">Fa</span></span></span>lla en <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">mí<span class="note" data-notation="Latina">Re</span></span></span>.<br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = ``;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;
const contenidoHTML_Cursor = `<div id="DIV_Cursor" class="center">  <span class="tooltipPrevNext"><a href="https://alabanzasdelalma.blogspot.com/2023/06/59-mirad-cual-amor.html"><button class="blue-button">Anterior</button></a><span class="tooltipPrevNext-content">70. 59. Mirad cual amor</span></span>&emsp;  <a href="https://alabanzasdelalma.blogspot.com/2023/06/indice.html">      <button class="blue-button">INDICE</button>  </a>  &emsp;  <span class="tooltipPrevNext"><a href="https://alabanzasdelalma.blogspot.com/2023/06/362-con-sin-igual-amor.html"><button class="blue-button">Siguiente</button></a><span class="tooltipPrevNext-content">72. 362. Con sin igual amor</span></span></div>`;const DIV_CURSOR = document.getElementById("DIVCursor");DIV_CURSOR.innerHTML = contenidoHTML_Cursor;
