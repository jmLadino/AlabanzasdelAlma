const contenidoHTML_Letra = `	<div class="image-container">		<span class="tooltip">			<img id="btnLetra" src="https://jmladino.github.io/AlabanzasdelAlma/imgmicrofono.png" alt="Letra" class="imagebutton">			<span class="tooltip-content">Letra</span>		</span>				<span class="tooltip">			<img id="btnGuitarra" src="https://jmladino.github.io/AlabanzasdelAlma/imgguitarra.png" alt="Guitarra" class="imagebutton">			<span class="tooltip-content">Guitarra</span>		</span>		<span class="tooltip">			<img id="btnUkelele" src="https://jmladino.github.io/AlabanzasdelAlma/imgukelele.png" alt="Ukelele" class="imagebutton">					<span class="tooltip-content">Ukelele</span>		</span>	</div>	<p class="InterlineadoLetra">A.<br />Nuestro padre Abraham, tiene muchos,<br />muchos hijos nuestro padre Abraham<br />Uno de ellos soy, igual que tú<br />y doy gracias al Señor<br /></p><p class="InterlineadoLetra">Brazo derecho<br /></p><p class="InterlineadoLetra">A.<br /></p><p class="InterlineadoLetra">Brazo derecho,<br />brazo izquierdo<br /></p><p class="InterlineadoLetra">A.<br /></p><p class="InterlineadoLetra">Brazo derecho,<br />brazo izquierdo,<br />pie derecho<br /></p><p class="InterlineadoLetra">A.<br /></p><p class="InterlineadoLetra">Brazo derecho,<br />brazo izquierdo,<br />pie derecho,<br />pie izquierdo<br /></p><p class="InterlineadoLetra">A.<br /></p><p class="InterlineadoLetra">Brazo derecho,<br />brazo izquierdo,<br />pie derecho,<br />pie izquierdo,<br />la cabeza<br /></p><p class="InterlineadoLetra">A.<br /></p><p class="InterlineadoLetra">Brazo derecho,<br />brazo izquierdo,<br />pie derecho,<br />pie izquierdo,<br />la cabeza,<br />una vuelta<br /></p><p class="InterlineadoLetra">A.<br /></p><p class="InterlineadoLetra">Brazo derecho,<br />brazo izquierdo,<br />pie derecho,<br />pie izquierdo,<br />la cabeza,<br />una vuelta<br /></p><p class="InterlineadoLetra">A SENTARSE!!!<br /></p>`;const DIV_LETRA = document.getElementById("DIVLetra");DIV_LETRA.innerHTML = contenidoHTML_Letra;const contenidoHTML_Acordes = `	<div class="image-container">
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
A.<br />
Nuestro <span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">pa<span class="note" data-notation="Latina">Re</span></span></span>dre Abraham, tiene muchos,<br />
muchos hijos nuestro <span class="chord" data-tabsaurus="La"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/La.png' alt="La" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">pa<span class="note" data-notation="Latina">La</span></span></span>dre Abraham<br />
Uno de ellos soy, igual que tú<br />
y doy gracias al Se<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">ñor<span class="note" data-notation="Latina">Re</span></span></span><br />
</p><p class="InterlineadoGuitarra">
</p><p class="InterlineadoGuitarra">
Bra<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zo<span class="note" data-notation="Latina">Re</span></span></span> derecho<br />
</p><p class="InterlineadoGuitarra">
A.<br />
</p><p class="InterlineadoGuitarra">
Bra<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zo<span class="note" data-notation="Latina">Re</span></span></span> derecho<br />
brazo izquierdo<br />
</p><p class="InterlineadoGuitarra">
A.<br />
</p><p class="InterlineadoGuitarra">
Bra<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zo<span class="note" data-notation="Latina">Re</span></span></span> derecho<br />
brazo izquierdo,<br />
pie derecho<br />
</p><p class="InterlineadoGuitarra">
A.<br />
</p><p class="InterlineadoGuitarra">
Bra<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zo<span class="note" data-notation="Latina">Re</span></span></span> derecho<br />
brazo izquierdo,<br />
pie derecho,<br />
pie izquierdo<br />
</p><p class="InterlineadoGuitarra">
A.<br />
</p><p class="InterlineadoGuitarra">
Bra<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zo<span class="note" data-notation="Latina">Re</span></span></span> derecho<br />
brazo izquierdo,<br />
pie derecho,<br />
pie izquierdo,<br />
la cabeza<br />
</p><p class="InterlineadoGuitarra">
A.<br />
</p><p class="InterlineadoGuitarra">
Bra<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zo<span class="note" data-notation="Latina">Re</span></span></span> derecho<br />
brazo izquierdo,<br />
pie derecho,<br />
pie izquierdo,<br />
la cabeza,<br />
una vuelta<br />
</p><p class="InterlineadoGuitarra">
A.<br />
</p><p class="InterlineadoGuitarra">
Bra<span class="chord" data-tabsaurus="Re"><span class="chord-tooltip"><img src='https://jmladino.github.io/AlabanzasdelAlma/FullChords/Re.png' alt="Re" style="height:140px;width: 100px;"></span><span class="syllable" style="text-decoration: underline;">zo<span class="note" data-notation="Latina">Re</span></span></span> derecho<br />
brazo izquierdo,<br />
pie derecho,<br />
pie izquierdo,<br />
la cabeza,<br />
una vuelta<br />
</p><p class="InterlineadoGuitarra">
A SENTARSE!!!<br />
</p>
                </div>
`;
const DIV_Acordes = document.getElementById("DIVAcordes");
DIV_Acordes.innerHTML = contenidoHTML_Acordes;
const contenidoHTML_Youtube = `<iframe width="100%" height="315" src="https://www.youtube.com/embed/uNDkggWWSMs?si=J7kyegUhTvyp_viT" title="Nuestro Padre Abraham" frameborder="0" allowfullscreen></iframe>
`;
const DIV_Youtube = document.getElementById("DIVYoutube");
DIV_Youtube.innerHTML = contenidoHTML_Youtube;

