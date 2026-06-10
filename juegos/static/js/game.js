////////////////////////////////////////////////////////////
// GAME v1.4 // updateGame
////////////////////////////////////////////////////////////
function stopDrumAnimation() {

    // Para sonidos
    if (typeof stopSoundLoop === 'function') {
        stopSoundLoop('soundDrum');
    }

    // Para tweens de piezas conocidas
    if (typeof itmDrumGlassBonus !== 'undefined') {
        TweenMax.killTweensOf(itmDrumGlassBonus);
    }

    if (typeof itmDrumGlassBonus1 !== 'undefined') {
        TweenMax.killTweensOf(itmDrumGlassBonus1);
    }

    if (typeof itemDrumGlass !== 'undefined') {
        TweenMax.killTweensOf(itemDrumGlass);
    }

    if (typeof itemDrum !== 'undefined') {
        TweenMax.killTweensOf(itemDrum);
    }

    // Para container de bolas, si existe
    if (typeof ballsContainer !== 'undefined' && ballsContainer.children) {
        ballsContainer.children.forEach(function(ball) {
            TweenMax.killTweensOf(ball);
        });
    }

    // Forzar render una vez
    if (typeof requestRender === 'function') {
        requestRender();
    }
}

//////////////////////// INFORMACION PARA SORTEO ////////////////////////

const result_api = {

	next_draw : [
		
		[154, '01/06/2026', '03:00 PM'],
		[155, '01/06/2026', '03:30 PM'],
		[156, '01/06/2026', '04:00 PM'],
		[157, '01/06/2026', '04:30 PM'],
		[158, '01/06/2026', '05:00 PM']
		
	],
	next_draw_special : [
		{ 	
			titulo : 'BINGO VIERNES SOCIAL',
			fecha : '12/06/2026',
			hora : '06:00 PM',
			cuatro : 400000,
			linea : 100000,
			doble_linea : 200000,
			bingo : 800000
				
		}, 
		{ 
			
			titulo : 'BINGO DIA DE LOS MADRES',
			fecha : '31/05/2026',
			hora : '01:00 PM',
			cuatro : 600000,
			linea : 150000,
			doble_linea : 300000,
			bingo : 1200000
			
		}
, 
		{ 
			
			titulo : 'BINGO DIA DE LOS PADRES',
			fecha : '26/07/2026',
			hora : '01:00 PM',
			cuatro : 600000,
			linea : 150000,
			doble_linea : 300000,
			bingo : 1200000
			
		}

	],previous_draw : [
		
		{
			sorteo : 153,
			time : '02:30 PM',
			cuatro : 5000,
			linea : 10000,
			doble_linea : 20000,
			bingo : 40000,
		}, {
			sorteo : 152,
			time : '02:00 PM',
			cuatro : 50000,
			linea : 100000,
			doble_linea : 200000,
			bingo : 400000,
		}, {
			sorteo : 151,
			time : '01:30 PM',
			cuatro : 50000,
			linea : 100000,
			doble_linea : 200000,
			bingo : 400000,
		}, {
			sorteo : 150,
			time : '01:00 PM',
			cuatro : 10000,
			linea : 25000,
			doble_linea : 50000,
			bingo : 100000,
		}, {
			sorteo : 149,
			time : '12:30 PM',
			cuatro : 50000,
			linea : 100000,
			doble_linea : 200000,
			bingo : 400000,
		}, 
		
	
	],info_jackpot : {

		monto : 25364,
		fecha : '15/05/2026',
		lugar : 'CS 917 PANTOJA',
		ticket : '***H39E3A'
	}
	

}


var cartonInfTxt = {
 
	
	'informacion_1' : ['CS 03 SANTIAGO', '***6G9', [19, 44], true],
	'informacion_2' : ['CS 11 NEXT', '***354', [46, 39, 51], false],
	'informacion_3' : ['CS 23 SIMON BOLIVAR', '***9Y4', [81, 67], false],
	'informacion_4' : ['CS 974 LOS ALCARRIZOS', '***H38', [23], false],
	'informacion_5' : ['CS 11 NEXT', '***6WE', [4, 36, 33], false],
	'informacion_6' : ['CS 03 SANTIAGO', '***236', [21, 7], true],
	'informacion_7' : ['CS 11 NEXT', '***K84', [36, 63, 76], false],
	'informacion_8' : ['CS 23 SIMON BOLIVAR', '***LP4', [63, 8], false],
	'informacion_9' : ['CS 974 LOS ALCARRIZOS', '***10W', [21], false],
	'informacion_10' : ['CS 11 NEXT', '***632', [21, 18, 21], false],
	'informacion_11' : ['CS 11 NEXT', '***3QA', [40, 33, 3], false],
	'informacion_12' : ['CS 23 SIMON BOLIVAR', '***M7Y', [11, 25], false],
	'informacion_13' : ['CS 23 SIMON BOLIVAR', '***974', [61, 67], false]
	

}



const draw_api = {

	numbers: [
		2, 15, 61, 36, 88, 74, 45, 9, 25, 31,
		7, 52, 63, 18, 40, 5, 27, 69, 11, 90
		// 33, 48, 72, 14, 56, 80, 4, 23, 67, 39,
		// 10, 58, 21, 84, 1, 44, 76,

		// 3, 6, 8, 12, 13, 16, 17, 19, 20, 22,
		// 24, 26, 28,

		// 29
	],

	cartones: {
		88: {
			lugar: 'CS 03 LA VEGA',
			id_carton: '***236',
			tipo_ganador: 'CUATRO',

			numeros: [
				2, 61, 36, 88, 12,
				34, 57, 65, 71, 83,
				17, 25, 41, 59, 77
			]
		},

		52: {
			lugar: 'CS 11 NEXT',
			id_carton: '***354',
			tipo_ganador: 'LINEA',

			numeros: [
				15, 74, 45, 31, 52,
				22, 32, 43, 54, 66,
				75, 82, 89, 6, 28
			]
		},

		80: {
			lugar: 'CS 23 SIMON BOLIVAR',
			id_carton: '***974',
			tipo_ganador: 'DOBLE_LINEA',

			numeros: [
				9, 63, 40, 18, 27,
				69, 90, 48, 14, 80,
				17, 25, 41, 59, 77
			]
		},

		29: {
			lugar: 'CS 974 LOS ALCARRIZOS',
			id_carton: '***108',
			tipo_ganador: 'BINGO',

			numeros: [
				5, 11, 33, 72, 56,
				4, 67, 10, 21, 76,
				1, 44, 84, 58, 29
			]
		}
	},

	BONOS: {
		88: {
			assetId: 'itemSelectBonus1',
			drumGlassId: 'itmDrumGlassBonus1',
			popUp: 'itemPopup_cuatro'
		},
		52: {
			assetId: 'itemSelectBonus2',
			drumGlassId: 'itmDrumGlassBonus2',
			popUp: 'itemPopup_line'
		},
		80: {
			assetId: 'itemSelectBonus3',
			drumGlassId: 'itmDrumGlassBonus3',
			popUp: 'itemPopup_lineD'
		},
		29: {
			assetId: 'itemSelectBonus4',
			drumGlassId: 'itmDrumGlassBonus4',
			popUp: 'itemPopup_bingo'
		}
	},

	prices : {

		cuatroInfo : 20000,
		lineaInfo : 40000,
		dobleInfo : 80000,
		bingoInfo : 160000

	},info_jackpot : {

		monto : 25364,
		fecha : '15/05/2026',
		lugar : 'CS 917 PANTOJA',
		ticket : '***H39E3A'
	}


}; 

//////////////////////// DECLARACIONES DE VARIABLES ////////////////////////


const TOTAL_SLOTS = 60; 


const BONUS_SUSPENSE_SECONDS = 4; // tiempo antes de mostrar el popup
const BONUS_POPUP_SECONDS = 4;
 

const WAIT_AFTER_DRAW_TO_RESULTS_SECONDS = 15;
const FETCH_RESULTS_BEFORE_SECONDS = 10;

const RETURN_GAME_SECONDS = 10;
var resultScreenTimer = null;  
var returnGameTimer = null;

let currentDrawData;
let currentResultsData;

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */

//ball assets
const ballAssets = [
	{
		big:'../static/assets/item_ball_b_1.png',
		reveal:'../static/assets/item_ball_r_1.png',
		drum:'../static/assets/item_ball_1.png',
	},
	{
		big:'../static/assets/item_ball_b_2.png',
		reveal:'../static/assets/item_ball_r_2.png',
		drum:'../static/assets/item_ball_2.png',
	},
	{
		big:'../static/assets/item_ball_b_3.png',
		reveal:'../static/assets/item_ball_r_3.png',
		drum:'../static/assets/item_ball_3.png',
	},
	{
		big:'../static/assets/item_ball_b_4.png',
		reveal:'../static/assets/item_ball_r_4.png',
		drum:'../static/assets/item_ball_4.png',
	},
	{
		big:'../static/assets/item_ball_b_5.png',
		reveal:'../static/assets/item_ball_r_5.png',
		drum:'../static/assets/item_ball_5.png',
	},
	{
		big:'../static/assets/item_ball_b_6.png',
		reveal:'../static/assets/item_ball_r_6.png',
		drum:'../static/assets/item_ball_6.png',
	},
	{
		big:'../static/assets/item_ball_b_7.png',
		reveal:'../static/assets/item_ball_r_7.png',
		drum:'../static/assets/item_ball_7.png',
	},
	{
		big:'../static/assets/item_ball_b_8.png',
		reveal:'../static/assets/item_ball_r_8.png',
		drum:'../static/assets/item_ball_8.png',
	},
];

 

//game settings
const gameSettings = {
	colors:['#F4C542','#2F80ED','#EB5757','#27AE60','#9B51E0','#F2994A','#2D9CDB','#EB2F96', '#333333'],
	drumBallRadius:30, //ball radius
	revealBallRadius:88, //ball radius
	bigBallRadius:226, //ball radius

	revealSpeed:1,
	delaySpeed:.2,
	winSpeed:.5,
};

 
 

/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */
$.editor = {enable:false};

const gameData = {
    paused: true,
    numbers: [],
    revealNumbers: []
};
gameData.colors = [
	[1, 9,17,25,33,41, 49, 57, 65, 73, 81, 89],
	[2,10,18,26,34,42, 50, 58, 66, 74, 82, 90],
	[3,11,19,27,35,43, 51, 59, 67, 75, 83,],
	[4,12,20,28,36,44, 52, 60, 68, 76, 84,],
	[5,13,21,29,37,45, 53, 61, 69, 77, 85,],
	[6,14,22,30,38,46, 54, 62, 70, 78, 86,],
	[7,15,23,31,39,47, 55, 63, 71, 79, 87,],
	[8,16,24,32,40,48, 56, 64, 72, 80, 88,],
];


const rotateData = {
    speed: .03,
    normalSpeed: .03,
    revealSpeed: .06,
    angle: 0,
    depth: 10,
    scale: .90,
    radiusX: 0,
    radiusY: 70,
};

const DEPTH_SORT_INTERVAL = 2;
var drumBalls = [];
var drumDepthOrder = [];
var drumDepthFrame = 0;
  

async function fetchDrawData() {
    // Más adelante:
    // const res = await fetch('/api/sorteo-actual/');
    // return await res.json();
	console.log("Pidiendo datos de sorteo");
    return draw_api;
}

async function fetchResultsData() {
    // Más adelante:
    // const res = await fetch('/api/resultados/');
    // return await res.json();

	console.log("Pidiendo datos de resultados");
    return result_api;
}

 

function scheduleResultScreenAfterDraw() {

    if (resultScreenTimer) {
        resultScreenTimer.kill();
        resultScreenTimer = null;
    }

    if (returnGameTimer) {
        returnGameTimer.kill();
        returnGameTimer = null;
    }

    const waitBeforeFetch = Math.max(WAIT_AFTER_DRAW_TO_RESULTS_SECONDS - 10, 0); //Hace que si es negativo da 0

    resultScreenTimer = TweenMax.delayedCall(waitBeforeFetch, async function() {

        try {
            // Faltando 10s para mostrar resultados, pides la info
            currentResultsData = await fetchResultsData();
        } catch (error) {
            console.error('Error cargando resultados:', error);

            // Fallback temporal
            currentResultsData = resultados;
        }

        TweenMax.delayedCall(FETCH_RESULTS_BEFORE_SECONDS, function() {

            resultScreenTimer = null;

            buildResultScreen(currentResultsData);

            goPage('results');

            // Programa retorno al game
            scheduleReturnToGame();
        });
    });
}

function scheduleReturnToGame() {

    if (returnGameTimer) {
        returnGameTimer.kill();
        returnGameTimer = null;
    }

	
    returnGameTimer = TweenMax.delayedCall(RETURN_GAME_SECONDS, function() {

        returnGameTimer = null;

        // Vuelve a la pantalla del juego
        goPage('game');
    });
}

	
function sortOnObject(array, object, rev) {
    array.sort(function(a, b){
        var a1 = a[object];
        var b1 = b[object];

        if(a1 == b1) return 0;

        if(rev){
            return a1 < b1 ? 1 : -1;
        }

        return a1 > b1 ? 1 : -1;
    });

    return array;
}

function isEven(n){
    return n % 2 === 0;
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


const currency = function(number){
    return new Intl.NumberFormat('en-US', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(number);
};






function showDrumGlassBonus(drumGlassId){
	if(!itmDrumGlassBonus || !itmDrumGlass){
		return;
	}
	
	itmDrumGlass.visible = false;

	itmDrumGlassBonus.image = loader.getResult(drumGlassId);
	itmDrumGlassBonus.visible = true;

	itmDrumGlassBonus.alpha = 0;

	TweenMax.to(itmDrumGlassBonus, 1.5, {
		alpha: 1
	});
	
}


function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function settleBallsAtBottom() {
    var balls = [];

    // Reset del contenedor para que no herede rotación rara
    TweenMax.killTweensOf(drawDrumBallsContainer);
    drawDrumBallsContainer.rotation = 0;

    for (var r = 0; r < rotateData.row; r++) {
        for (var c = 0; c < rotateData.column; c++) {
            var ball = $.balls[r + '_' + c];
            if (ball) balls.push(ball);
        }
    }

    if (balls.length === 0) return;

    // Zona general donde caerán
    var centerX = 7;
    var bottomY = 100;

    var ballSize = 30;
    var spacingX = ballSize * 0.82;
    var spacingY = ballSize * 0.60;

    // 36 bolas exactas
    var rows = [
        { count: 4, yOffset: 0 },
        { count: 5, yOffset: -spacingY },
        { count: 8, yOffset: -spacingY * 2 },
        { count: 9, yOffset: -spacingY * 3 },
        { count: 7, yOffset: -spacingY * 4 },
        { count: 4, yOffset: -spacingY * 5 }
    ];

    // Crear todas las posiciones posibles
    var positions = [];

    rows.forEach(function(row) {
        var totalWidth = (row.count - 1) * spacingX;
        var startX = centerX - totalWidth / 2;

        for (var i = 0; i < row.count; i++) {
            positions.push({
                x: startX + (i * spacingX),
                y: bottomY + row.yOffset
            });
        }
    });

    // Mezclar posiciones para que no siempre quede igual
    shuffleArray(positions);

    // Aplicar a cada bola una posición distinta
    for (var i = 0; i < balls.length; i++) {
        var ball = balls[i];
        var pos = positions[i];

        // Aleatoriedad CONTROLADA
        var offsetX = randomIntFromInterval(-5, 5);
        var offsetY = randomIntFromInterval(-3, 3);
        var rot = randomIntFromInterval(-20, 20);
        var scale = 1 + (Math.random() * 0.06); // entre 0.66 y 0.72
        var duration = 0.75 + (Math.random() * 0.2);

        TweenMax.killTweensOf(ball);

        TweenMax.to(ball, duration, {
            x: pos.x + offsetX,
            y: pos.y + offsetY,
            scaleX: scale,
            scaleY: scale,
            rotation: rot,
            ease: Bounce.easeOut,
            delay: i * 0.012,
            overwrite: true
        });
    }
}



function resetDrumGlassBonus(){
	if(!itmDrumGlassBonus || !itmDrumGlass){
		return;
	}

	itmDrumGlassBonus.visible = false;
	itmDrumGlass.visible = true;
}





var renderActive = true;
var renderOnce = false;

function requestRender(){
    renderOnce = true;
}

function startRender(){
    renderActive = true;
    requestRender();
}

function stopRender(){
    renderActive = false;
    requestRender(); // pinta una última vez
}

function tick(event) {

    // Si está visible la pantalla de resultados
    if (resultScreenContainer && resultScreenContainer.visible) {

        // Solo redibuja si algo cambió
        if (renderOnce) {
            stage.update(event);
            renderOnce = false;
        }

        return;
    }

    // Si está visible el sorteo normal
    updateGame(event.delta);

    if (renderActive || renderOnce) {
        stage.update(event);
        renderOnce = false;
    }
}
/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	

	
	gameData.numbers = [];

	for(var n=0; n<TOTAL_SLOTS; n++){
		gameData.numbers.push(n+1);
	}

	buildDrumBalls();
}






/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */

var curPage = '';


function goPage(page){
    curPage = page;

    if (gameContainer) gameContainer.visible = false;
    if (resultScreenContainer) resultScreenContainer.visible = false;

    if (page == 'game') {
        gameContainer.visible = true;
        resultScreenContainer.visible = false;
        startGame();
        startRender();
    }

    if (page == 'results') {
        gameContainer.visible = false;
        resultScreenContainer.visible = true;

        detener_aumento_jack();
        stopSoundLoop('soundDrum');

        stopRender();
    }

    resizeCanvas();
    requestRender();
}



/*!
 * 
 * START GAME - This is the function that runs to start game
 * 
 */

 

async function startGame(){
    gameData.paused = true;  // inicia detenido  scheduleResultScreenAfterDraw
    gameData.drawing = false;
    gameData.result = true;

    resetDrawResult();
    goGamePage('draw');

    // try {
        currentDrawData = await fetchDrawData();
        proceedStartDraw(currentDrawData);
    // } catch (error) {
    //     console.error('Error cargando datos del sorteo:', error);

    //     // Fallback temporal para que no se rompa la pantalla
    //     currentDrawData = [];
    //     proceedStartDraw(currentDrawData);
    // }
}



function resetDrawResult(){
	gameData.draw = {
		odd:0,
		even:0,
		preballsSum:0,
		colors:[0,0,0,0,0,0,0,0],
		firstOverUnder:false,
		firstEvenOdd:false,
		preSumOverUnder:false,
		moreEvenOdd:false,
		firstColor:-1,
		lastColor:-1,
	}
}

function hidePopupCarton() {
	if (!popupContainer) return;
	if (!popupContainer.visible) return;

	TweenMax.killTweensOf(popupContainer);

	TweenMax.to(popupContainer, 1.2, {
		alpha: 0,
		ease: Power2.easeIn,
		onComplete: function() {
			popupContainer.visible = false;
			popupContainer.removeAllChildren();
			popupContainer.alpha = 1;

			popupTextNums = [];

			itemPopup = null;
			popupTextID = null;
			popupTextAgencia = null;
		}
	});
}

function exitBonus(tipo_bns, dts) {


	Nums_carton(dts.numeros, dts.id_carton, dts.lugar, tipo_bns, dts.tipo_ganador)
	
	itemPopup.x = canvasW / 2;
	itemPopup.y = canvasH / 2;

	itemPopup.scaleX = 0.5;
	itemPopup.scaleY = 0.5;
 

	let bounds3 = itemPopup.getBounds();
	popupTextID.x = itemPopup.x - ((bounds3.width  * itemPopup.scaleX) / 2) + 250;
	popupTextID.y = itemPopup.y - ((bounds3.height * itemPopup.scaleY) / 2) + 435;

	popupTextAgencia.x = itemPopup.x - ((bounds3.width  * itemPopup.scaleX) / 2) + 510;
	popupTextAgencia.y = itemPopup.y - ((bounds3.height * itemPopup.scaleY) / 2) + 435;


	var cnt = [195, 155]

	for (var i = 0; i < popupTextNums.length; i++) {

		popupTextNums[i].x = itemPopup.x - ((bounds3.width  * itemPopup.scaleX) / 2) + cnt[0]; //107
		popupTextNums[i].y = itemPopup.y - ((bounds3.height * itemPopup.scaleY) / 2) + cnt[1]; //70
		
		if(cnt[0] < 731) cnt[0]+=107 
		if(cnt[0] == 730) cnt[0] = 195, cnt[1] += 70;
		
	} 	


	popupOverlay.graphics.clear()
		.beginFill("rgba(0,0,0,0.65)")
		.drawRect(0, 0, canvasW, canvasH);

}



function resizeGameLayout(){
    drawDrumContainer.x = drawDrumBallContainer.x = itemBgDrum.x = canvasW/2;

    if(viewport.isLandscape){
        drawDrumContainer.y = drawDrumBallContainer.y = itemBgDrum.y = canvasH/100 * 22;
    }else{
        drawDrumContainer.y = drawDrumBallContainer.y = itemBgDrum.y = canvasH/100 * 28;
    }
    var DRUM_SCALE = 1.3;

    itemBgDrum.scaleX = itemBgDrum.scaleY = DRUM_SCALE;
    drawDrumContainer.scaleX = drawDrumContainer.scaleY = DRUM_SCALE;
    drawDrumBallContainer.scaleX = drawDrumBallContainer.scaleY = DRUM_SCALE;

	itmDrumGlass.scaleX = itmDrumGlass.scaleY = .55;
	
	itmDrumGlassBonus.scaleX = itmDrumGlassBonus.scaleY = .55;


    if(viewport.isLandscape){
        var GAP = 110;
        var index = 0;

        // IZQUIERDA
        index = placeFixedColumn(index, 6, canvasW/100 * 5,  canvasH/100 * 8,  GAP);
        index = placeFixedColumn(index, 6, canvasW/100 * 12, canvasH/100 * 8, GAP);
        index = placeFixedColumn(index, 6, canvasW/100 * 19, canvasH/100 * 8,  GAP);
        index = placeFixedColumn(index, 6, canvasW/100 * 26, canvasH/100 * 8, GAP);
        index = placeFixedColumn(index, 6,  canvasW/100 * 33, canvasH/100 * 8,  GAP);

        // DERECHA
		
        index = placeFixedColumn(index, 6,  canvasW/100 * 66, canvasH/100 * 8, GAP);
        index = placeFixedColumn(index, 6, canvasW/100 * 73, canvasH/100 * 8,  GAP);
        index = placeFixedColumn(index, 6, canvasW/100 * 80, canvasH/100 * 8,  GAP);
        index = placeFixedColumn(index, 6, canvasW/100 * 87, canvasH/100 * 8, GAP);
        index = placeFixedColumn(index, 6, canvasW/100 * 94, canvasH/100 * 8,  GAP);
 
    }



}


function positionRevealSlot(n, x, y){
    if(!$.draw['placed' + n]){
        return;
    }

    // Mueve el círculo/marco
    $.draw['placed' + n].x = x;
    $.draw['placed' + n].y = y;

	if($.draw['bonus' + n]){
		$.draw['bonus' + n].x = x-3;
		$.draw['bonus' + n].y = y-4;
	}

    // Mueve el contenedor donde cae la bola
    if($.draw['drop' + n]){
        $.draw['drop' + n].x = x;
        $.draw['drop' + n].y = y;

        // Mueve la máscara del drop
        if($.draw['drop' + n].ballMask){
            $.draw['drop' + n].ballMask.x = x;
            $.draw['drop' + n].ballMask.y = y;
        }
    }
}


function placeFixedColumn(startIndex, total, x, startY, gap){
	for(var i=0; i<total; i++){
		positionRevealSlot(startIndex + i, x, startY + (i * gap));
	}

	return startIndex + total;
}


 /*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
function stopGame(){
	gameData.paused = true;
	stopSoundLoop('soundDrum');
	TweenMax.killAll(false, true, false);
}

 

 /*!
 * 
 * GO GAME PAGE - This is the function that runs to go game page
 * 
 */
function goGamePage(con){

	if(drawContainer) drawContainer.visible = false;

	stopSoundLoop('soundDrum');

	if(con == 'draw') drawContainer.visible = true;

}





 /*!
 * 
 * CREATE BALL - This is the function that runs to create ball
 * 
 */
function createBall(size, number){
	var colorIndex = -1;
	for(var n=0; n<gameData.colors.length; n++){
		if(gameData.colors[n].indexOf(number) != -1){
			colorIndex = n;
		}
	}

	var newBall = new createjs.Container();
	newBall.colorIndex = colorIndex;
	var newBg = new createjs.Bitmap(loader.getResult(size+colorIndex));
	centerReg(newBg);

	if(size == 'ballReveal'){
		var newNumber = new createjs.Text();
		newNumber.font = "80px bebasregular";
		newNumber.color = '#000';
		newNumber.textAlign = "center";
		newNumber.textBaseline='alphabetic';
		newNumber.text = number;
		newNumber.y = 30;

		newBall.addChild(newBg, newNumber);
	}else if(size == 'ballDrum'){
		newBall.tween = {};

		var itemBallH = new createjs.Bitmap(loader.getResult('itemBallH'));
		centerReg(itemBallH);

		var whiteFace = new createjs.Container();

		var bgBall = new createjs.Bitmap(loader.getResult('itemBallWhite'));
		bgBall.regX = gameSettings.drumBallRadius / 2;
		bgBall.regY = gameSettings.drumBallRadius / 2;

		var newNumber = new createjs.Text();
		newNumber.font = "10px bebasregular";
		newNumber.color = "rgba(6, 22, 56, 0.55)";
		newNumber.textAlign = "center";
		newNumber.textBaseline = "middle";
		newNumber.text = number;
		newNumber.x = 0;
		newNumber.y = 0;
		newNumber.alpha = 0.45;

		whiteFace.addChild(bgBall, newNumber);

		var ballMask = new createjs.Shape();
		ballMask.graphics.beginFill('red').drawCircle(0, 0, gameSettings.drumBallRadius / 2);
		whiteFace.mask = ballMask;

		newBall.rotation = randomIntFromInterval(-45,45);

		// IMPORTANTE:
		// Ahora bgBall realmente será el contenedor completo del blanco + número
		newBall.bgBall = whiteFace;

		newBall.addChild(newBg, whiteFace, itemBallH);
	}else if(size == 'ballBig'){
		newBall.tween = {};
		var itemBallH = new createjs.Bitmap(loader.getResult('itemBallH'));
		centerReg(itemBallH);

		var bgBall = new createjs.Container();
		var bgBallWhite = new createjs.Bitmap(loader.getResult('itemBallWhiteB'));
		bgBallWhite.regX = gameSettings.bigBallRadius/2;
		bgBallWhite.regY = gameSettings.bigBallRadius/2;

		var ballMask = new createjs.Shape();
		ballMask.graphics.beginFill('red').drawCircle(0, 0, gameSettings.bigBallRadius/2);
		bgBall.mask = ballMask;
		
		var newNumber = new createjs.Text();
		newNumber.font = "100px bebasregular";
		newNumber.color = '#000';
		newNumber.textAlign = "center";
		newNumber.textBaseline='alphabetic';
		newNumber.y = 35;
		newNumber.text = number;

		bgBall.addChild(bgBallWhite, newNumber);

		newBall.rotation = randomIntFromInterval(-45,45);
		newBall.bgBall = bgBall;
		newBall.addChild(newBg, bgBall);
	}

	return newBall;
}

  
 

function proceedStartDraw(result){

	if (resultScreenTimer) {
		resultScreenTimer.kill();
		resultScreenTimer = null;
	
	}

    if (returnGameTimer) {
        returnGameTimer.kill();
        returnGameTimer = null;
    }


	//Informacion fija para el sorteo
	txtJkTk.text = result.info_jackpot.ticket
	txtJkMt.text = currency(result.info_jackpot.monto)
	txtJkMnt.text = result.info_jackpot.lugar 
	txtJkDt.text = result.info_jackpot.fecha

	cuatroInfoTxt.text = currency(result.prices.cuatroInfo);
	lineaInfoTxt.text = currency(result.prices.lineaInfo);
	dobleInfoTxt.text = currency(result.prices.dobleInfo);
	bingoInfoTxt.text = currency(result.prices.bingoInfo);
	aumento_jack(30000, 70000)

	


	resetDrumGlassBonus();
			
	gameData.revealNumbers = result.numbers || []; 
	gameData.revealIndex = 0;
	
	//Reinciando el conteo de bolas
	if(timeValueTxt) timeValueTxt.text = "00";


	for(var n = 0; n < TOTAL_SLOTS; n++){

		if($.draw['bonus' + n]){
			$.draw['bonus' + n].removeAllChildren();
			$.draw['bonus' + n].visible = false;
		}

		if($.draw['placedGradient' + n]){
			TweenMax.killTweensOf($.draw['placedGradient' + n]);
			$.draw['placedGradient' + n].visible = false;
		}

		if($.draw['drop' + n]) $.draw['drop' + n].removeAllChildren();
		
	}

	startRender();

	gameData.paused = false; // apagar animación cuando termina
    gameData.drawing = true;
     
	if(audioOn){
	
		playSoundLoop('soundDrum');
		setSoundLoopVolume('soundDrum', .5);
	
	}
	
	playSound('soundStart');
	revealBall();
	

}



function revealBall(){
	
if (ENABLE_DRUM_ANIMATION) {
    var newRotate = randomIntFromInterval(-180, 180);

    TweenMax.to(drawDrumBallsContainer, 3, {
        rotation: newRotate,
        ease: Expo.easeOut,
        overwrite: true
    });
}

	drawDrumBallContainer.removeAllChildren();
	TweenMax.to(itmDrumHole, gameSettings.revealSpeed, {delay:gameSettings.revealSpeed, rotation:360, overwrite:true, ease:Sine.easeOut, onStart:function(){
		playSound('soundHover');
	}, onComplete:function(){
		itmDrumHole.rotation = 0;
	}});

	var ballNumber = gameData.revealNumbers[gameData.revealIndex];
	TweenMax.to(drawDrumContainer, gameSettings.revealSpeed * 2, {overwrite:true, onComplete:function(){
		playSound('soundPipe');
		var newBall = createBall('ballBig', ballNumber);
		newBall.scaleX = newBall.scaleY = .2;
		newBall.y = 150;

		newBall.bgBall.x = randomIntFromInterval(gameSettings.bigBallRadius,-gameSettings.bigBallRadius);
		newBall.bgBall.y = randomIntFromInterval(gameSettings.bigBallRadius,-gameSettings.bigBallRadius);
		drawDrumBallContainer.addChild(newBall);

		var curvePos = [];
		curvePos.push({x:0, y:150});
		curvePos.push({x:-60, y:70});
		curvePos.push({x:0, y:0});
		TweenMax.to(newBall, gameSettings.revealSpeed, {bezier:{type:"thru", values:curvePos, curviness:2, autoRotate:false}, y:0, scaleX:1, scaleY:1, rotation:0, overwrite:true});
		TweenMax.to(newBall.bgBall, gameSettings.revealSpeed, {x:0, y:0, overwrite:true});

		var currentSlotIndex = gameData.revealIndex;

		var newRevealBall = createBall('ballReveal', ballNumber);
		newRevealBall.rotation = randomIntFromInterval(-45,45);
		newRevealBall.y = -100;
		
		$.draw['drop' + currentSlotIndex].addChild(newRevealBall);
		gameData.revealIndex++;
		//Aumentando el conteo de bolas
		if(timeValueTxt) 
			gameData.revealIndex < 10 ? timeValueTxt.text = '0'+gameData.revealIndex : timeValueTxt.text = gameData.revealIndex  


		TweenMax.to(drawDrumContainer, gameSettings.revealSpeed, {delay:gameSettings.delaySpeed/4, onComplete:function(){
			playSound('soundReveal');
			playSound('soundDrop');
		}});
		TweenMax.to(newRevealBall, gameSettings.revealSpeed, {delay:gameSettings.delaySpeed, y:0, rotation:0, ease:Bounce.easeOut, onComplete:function(){
			if(isEven(ballNumber)){
				gameData.draw.even++;
			}else{
				gameData.draw.odd++;
			}
			if(gameData.revealIndex < 6){
				gameData.draw.preballsSum += ballNumber;
			}

			gameData.draw.colors[newBall.colorIndex]++;
			// updateDrawStats();

			TweenMax.to(newRevealBall, gameSettings.revealSpeed, {
				onComplete:function(){

					var bonusData = currentDrawData.BONOS[ballNumber];
					var cartonData = currentDrawData.cartones[ballNumber];
					var bonusDelay = 0;

					
					if(bonusData){
						
						gameData.paused = true;
						
						bonusDelay = BONUS_SUSPENSE_SECONDS + BONUS_POPUP_SECONDS;

						if($.draw['bonus' + currentSlotIndex]){
							$.draw['bonus' + currentSlotIndex].removeAllChildren();

							var bonusImg = new createjs.Bitmap(loader.getResult(bonusData.assetId));
							centerReg(bonusImg);

							bonusImg.scaleX = bonusImg.scaleY = 1.7;

							bonusImg.alpha = 0;


							$.draw['bonus' + currentSlotIndex].addChild(bonusImg);
							$.draw['bonus' + currentSlotIndex].visible = true;

							TweenMax.to(bonusImg, 1.5, {
								alpha: 1,
								ease: Back.easeOut.config(1.2)
							});

						}

						cartonData.tipo_ganador == 'CUATRO' ? 		cuatroInfoTxt.color = "#36eb22e0" : 
						cartonData.tipo_ganador == 'LINEA' ? 		lineaInfoTxt.color  = "#0088ff" : 
						cartonData.tipo_ganador == 'DOBLE_LINEA' ? 	dobleInfoTxt.color  = "#ff3737" : "" 
						
						if(cartonData.tipo_ganador == 'BINGO'){ 		
							bingoInfoTxt.color  = "#f2c356ea" 
							detener_aumento_jack() 
						}

						showDrumGlassBonus(bonusData.drumGlassId);

						stopSoundLoop('soundDrum');

						// Aquí está el suspenso:
						// Primero sale itemSelectBonus, espera 4 segundos,
						// luego aparece el popup ganador.
						TweenMax.delayedCall(BONUS_SUSPENSE_SECONDS, ()=> exitBonus(bonusData.popUp, cartonData));
						
					}

					TweenMax.delayedCall(bonusDelay, function(){
						
						hidePopupCarton();

						resetDrumGlassBonus();

						if(bonusDelay > 0 && audioOn){
							playSoundLoop('soundDrum');
							setSoundLoopVolume('soundDrum', .5);
						}

						if(gameData.revealIndex < gameData.revealNumbers.length){
							gameData.paused = false;
							revealBall();
						}else{
							playSound('soundEnd');
							stopSoundLoop('soundDrum');

							drawDrumBallContainer.removeAllChildren();

							gameData.result = true;
							gameData.drawing = false;
							gameData.paused = true;

							// Acomoda las bolas pequeñas abajo
    						settleBallsAtBottom();
							
							// Espera 3 minutos y luego pasa a resultados
							scheduleResultScreenAfterDraw();

							TweenMax.delayedCall(2.2, function() {
								stopRender(); // no elimina el ticker, solo duerme el render
							});

						}
					});
				}
			});
		}});
	}});
}




/*!
 * 
 * UPDATE GAME - This is the function that runs to loop game update
 * 
 */
const ENABLE_DRUM_ANIMATION = false;

function updateGame(deltaMs){

    if (!ENABLE_DRUM_ANIMATION) {
        return;
    }

    if (!gameData.paused) {
        loopDrumBalls(deltaMs);
    }
}

/*!
 * 
 * DRUM BALLS - This is the function that runs to animate drum balls
 * 
 */
function buildDrumBalls(){
	rotateData.column = 6;
	rotateData.row = 6;
	rotateData.drumGap = 100 / rotateData.row;
	drumBalls = [];
	drumDepthOrder = [];
	drumDepthFrame = 0;
	$.balls = {};

	var numberIndex = 0;

	for(var r=0; r<rotateData.row; r++){
		for(var c=0; c<rotateData.column; c++){
			var ball = createBall('ballDrum', gameData.numbers[numberIndex]);
			$.balls[r+'_'+c] = ball;
			numberIndex++;

			ball.angle = ball.oriAngle = (r * ((Math.PI * 2) / rotateData.row));
			ball.offsetX = ball.newOffsetX = randomIntFromInterval(-80,80);
			ball.offsetY = ball.newOffsetY = randomIntFromInterval(-20,20);
			ball.rotateX = 0;
			ball.rotateY = 0;
			ball.rotateSpeedX = randomIntFromInterval(-2,2);
			ball.rotateSpeedY = randomIntFromInterval(-2,2);
			ball.timer = randomIntFromInterval(50,100);
			ball.timerRotate = randomIntFromInterval(30,50);
			ball.depthEntry = {ball:ball, scale:0};
			drumBalls.push(ball);
			drumDepthOrder.push(ball.depthEntry);
			drawDrumBallsContainer.addChild(ball);
		}
	}
}

function loopDrumBalls(deltaMs){
    var drumSpeed = gameData.drawing == false ? rotateData.normalSpeed : rotateData.revealSpeed;
	var frameFactor = Math.min((deltaMs || 16.67) / 16.67, 2);

    // No crear TweenMax aquí
    rotateData.speed += (drumSpeed - rotateData.speed) * 0.05 * frameFactor;

    rotateData.angle += rotateData.speed * frameFactor;
    rotateData.angle = rotateData.angle > (Math.PI * 2) ? 0 : rotateData.angle;

    for(var n=0; n<drumBalls.length; n++){
			var ball = drumBalls[n];
			var currentAngle = ball.oriAngle + rotateData.angle;
			var cosAngle = Math.cos(currentAngle);
			var posX = cosAngle * rotateData.radiusX;
			var posY = Math.sin(currentAngle) * rotateData.radiusY;
			var scale = ((cosAngle * rotateData.depth) / rotateData.radiusY) + rotateData.scale;

			ball.depthEntry.scale = scale;

            if(ball.timer > 0){
                ball.timer -= frameFactor;
            }else{
                ball.timer = randomIntFromInterval(50,100);
                ball.newOffsetX = randomIntFromInterval(-80,80);
                ball.newOffsetY = randomIntFromInterval(-20,20);
            }

            // Movimiento suave sin TweenMax
            ball.offsetX += (ball.newOffsetX - ball.offsetX) * 0.02 * frameFactor;
            ball.offsetY += (ball.newOffsetY - ball.offsetY) * 0.02 * frameFactor;

            if(ball.timerRotate > 0){
                ball.timerRotate -= frameFactor;
            }else{
                ball.timerRotate = randomIntFromInterval(30,50);
                ball.rotateSpeedX = randomIntFromInterval(-2,2);
                ball.rotateSpeedY = randomIntFromInterval(-2,2);
            }

            ball.bgBall.x += ball.rotateSpeedX * frameFactor;
            ball.bgBall.y += ball.rotateSpeedY * frameFactor;

            ball.bgBall.x = ball.bgBall.x < -gameSettings.drumBallRadius ? 0 : ball.bgBall.x;
            ball.bgBall.x = ball.bgBall.x > 0 ? -gameSettings.drumBallRadius : ball.bgBall.x;
            ball.bgBall.y = ball.bgBall.y < -gameSettings.drumBallRadius ? 0 : ball.bgBall.y;
            ball.bgBall.y = ball.bgBall.y > 0 ? -gameSettings.drumBallRadius : ball.bgBall.y;

            ball.x = posX + ball.offsetX;
            ball.y = posY + ball.offsetY;
            ball.scaleX = ball.scaleY = scale;
            ball.angle = currentAngle;
    }

	if(++drumDepthFrame >= DEPTH_SORT_INTERVAL){
		drumDepthFrame = 0;
		sortOnObject(drumDepthOrder, 'scale', false);

		for(var i=0; i<drumDepthOrder.length; i++){
			drawDrumBallsContainer.setChildIndex(drumDepthOrder[i].ball, i);
		}
	}
}

/*!
 * 
 * END GAME - This is the function that runs for game end
 * 
 */
function endGame(){
	playSound('soundEnd');
	showGameStatus('nocredit');
	TweenMax.to(gameContainer, 3, {overwrite:true, onComplete:function(){
		gameData.paused = true;
		goPage('result');
	}});
}


