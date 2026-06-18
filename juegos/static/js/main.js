////////////////////////////////////////////////////////////
// MAIN proceedStartDraw
////////////////////////////////////////////////////////////
var stageW=1600;
var stageH=900;
var contentW = 1600;
var contentH = 900;


const viewport = {isLandscape:true};
const landscapeSize = {w:stageW, h:stageH, cW:contentW, cH:contentH};

var resizeTimer = null;
/*!
 * 
 * START BUILD GAME - This is the function that runs build game
 * 
 */


 async function loadInitialResultsScreen() {

    // Muestra loading mientras pides la data inicial
    // toggleLoader(true);

    try {
        currentResultsData = await fetchResultsData();
    } catch (error) {
        console.error('Error cargando resultados iniciales:', error);

        // Fallback temporal mientras pruebas
        currentResultsData = [];
    }

    // Construye resultados con data real
    buildResultScreen(currentResultsData);

    // Muestra pantalla de resultados
    goPage('results');

    // Oculta loading
    // toggleLoader(false);

    // Fuerza pintar una vez
    requestRender();

    // Si quieres que luego vuelva al game automáticamente
    scheduleReturnToGame();
	
}

async function initMain(){

    $('#canvasHolder').show();

    initGameCanvas(stageW, stageH);
    buildGameCanvas();
    buildGameButton();

    changeViewport(true);
    resizeGameFunc();
    resizeCanvas();

    $(window).off('resize.viewer').on('resize.viewer', function(){
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function(){
            changeViewport(true);
            resizeGameFunc();
            resizeCanvas();
        }, 200);
    });

    await loadInitialResultsScreen();
}



var windowW=windowH=0;
var scalePercent=0;
// const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
const dpr = 1;
const offset = {x:0,y:0,left:0,top:0};

/*!
 * 
 * GAME RESIZE - This is the function that runs to resize and centralize the game
 * 
 */
function resizeGameFunc(){
	setTimeout(function() {
		
		
		windowW = window.innerWidth;
		windowH = window.innerHeight;
		scalePercent = Math.min(windowW/contentW,windowH/contentH);
		scalePercent = scalePercent > 1 ? 1 : scalePercent;
		
		if(windowW > stageW && windowH > stageH){
			if(windowW > stageW){
				scalePercent = windowW/stageW;
				if((stageH*scalePercent)>windowH){
					scalePercent = windowH/stageH;
				}	
			}
		}
		
		const cssWidth = stageW * scalePercent;
		const cssHeight = stageH * scalePercent;
		
		offset.left = 0;
		offset.top = 0;
		
		if(cssWidth > windowW) offset.left = -((cssWidth) - windowW);
		else 				   offset.left = windowW - (cssWidth);
		
		
		if(cssHeight > windowH) offset.top = -((cssHeight) - windowH);
		else 					offset.top = windowH - (cssHeight);	
		
		
		offset.x = 0;
		offset.y = 0;
		
		if(offset.left < 0) offset.x = Math.abs((offset.left/scalePercent)/2);
		if(offset.top < 0)  offset.y = Math.abs((offset.top/scalePercent)/2);
		

		const gameCanvas = document.getElementById("gameCanvas");
		const context = gameCanvas.getContext("2d");

		gameCanvas.style.width = cssWidth + "px";
		gameCanvas.style.height = cssHeight + "px";

		gameCanvas.style.left = (offset.left/2) + "px";
		gameCanvas.style.top = (offset.top/2) + "px";
		
		const realWidth = Math.round(stageW * dpr);
		const realHeight = Math.round(stageH * dpr);

		if (gameCanvas.width !== realWidth || gameCanvas.height !== realHeight) {
			gameCanvas.width = realWidth;
			gameCanvas.height = realHeight;
		}
		
		$(window).scrollTop(0);
		
		resizeCanvas();

		if(typeof requestRender === 'function') requestRender();
			

	}, 100);	
}

// Nums_carton([2, 61, 36, 88, 12, 34, 57, 65, 71, 83, 17, 25, 41, 59, 77], '***236', 'CS 03 LA VEGA', 'itemPopup_cuatro')
	