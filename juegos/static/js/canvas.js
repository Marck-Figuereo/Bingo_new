////////////////////////////////////////////////////////////
// CANVAS itemPopup_lineD
////////////////////////////////////////////////////////////
var stage;
var canvasW=0;
var canvasH=0;



//////////////////////// DECLARACIONES DE VARIABLES ////////////////////////

let jackpotAnimationFrame = null;
let jackpotRunning = false;



$.balls = {};
$.draw = {};



var safeZoneGuide = false;

var canvasContainer, gameContainer, resultScreenContainer, optionsContainer, infoContainer;

var popupContainer;


var popupTextNums = []
 
var guideline, bg;
var drawDrumContainer, drawNumbersContainer, drawDrumBallsContainer, drawDrumBallContainer, drawContainer;
var itmDrum, itmDrumGlass, itmDrumHole, itemTime, itemJackpotInfo, itemJackpotResult, itemCardboard, itemTable;
var timeValueTxt, jkActualTxt, jkInfoTxt, cuatroInfoTxt, lineaInfoTxt, dobleInfoTxt, bingoInfoTxt ;
var cartonInfoTexts = [];
var cartonSubTitleTxt

var itemPopup = null;
var popupOverlay = null;

var popupTextID = null;
var popupTextAgencia = null;
var popupTextJK = null
var txtJk = null;


/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * itemNumPopup 
 * 
 */

function initGameCanvas(w,h){
	const gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = w;
	gameCanvas.height = h;
	
	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas", { antialias: false });

	createjs.Touch.disable(stage);
	stage.enableMouseOver(0);
	stage.mouseMoveOutside = false;

	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener("tick", tick);
}




    

    


const aumento_jack = (num_inicio, num_fn) => {

    detener_aumento_jack();

    num_inicio = Number(num_inicio) || 0;
    num_fn = Number(num_fn) || 0;

    let duration = 10100; // prueba 10 segundos primero
    let startTime = performance.now();

    jackpotRunning = true;

    const easeOutQuad = t => t * (2 - t);

    function updateCount(timestamp) {

        if (!jackpotRunning) return;

        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);

        const currentNumber = num_inicio + easedProgress * (num_fn - num_inicio);

        txtJk.text = currency(currentNumber.toFixed(2));

        stage.update(); // ESTO ES LO QUE TE FALTA

        if (progress < 1) {
            jackpotAnimationFrame = requestAnimationFrame(updateCount);
        } else {
            jackpotRunning = false;
            jackpotAnimationFrame = null;
        }
    }

    jackpotAnimationFrame = requestAnimationFrame(updateCount);
};

const detener_aumento_jack = () => {
    jackpotRunning = false;

    if (jackpotAnimationFrame !== null) {
        cancelAnimationFrame(jackpotAnimationFrame);
        jackpotAnimationFrame = null;
    }
};
// aumento_jack(21521.21, 30000.00);

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
  
const addPreviousDraw = (draws, previousDraw) => {
	
	var s = 98
	let bounds = previousDraw.getBounds();

	for (var i = 0; i < draws.length; i++) {

		let txt1 = new createjs.Text();
		txt1.font = "25px bebasregular";
		txt1.color = "#ffffffe0" 
		txt1.textAlign = "center";
		txt1.textBaseline = "center";
		txt1.text = "# " + draws[i].sorteo;
		
		let txt2 = new createjs.Text();
		txt2.font = "25px bebasregular";
		txt2.color = "#ffffffe0" 
		txt2.textAlign = "center";
		txt2.textBaseline = "center";
		txt2.text = draws[i].time;
		
		let txt3 = new createjs.Text();
		txt3.font = "20px bebasregular";
		txt3.color = "#ffffffe0" 
		txt3.textAlign = "center";
		txt3.textBaseline = "center";
		txt3.text = currency(draws[i].cuatro);
		
		let txt4 = new createjs.Text();
		txt4.font = "20px bebasregular";
		txt4.color = "#ffffffe0" 
		txt4.textAlign = "center";
		txt4.textBaseline = "center";
		txt4.text = currency(draws[i].linea);
		
		let txt5 = new createjs.Text();
		txt5.font = "20px bebasregular";
		txt5.color = "#ffffffe0" 
		txt5.textAlign = "center";
		txt5.textBaseline = "center";
		txt5.text = currency(draws[i].doble_linea);

		let txt6 = new createjs.Text();
		txt6.font = "20px bebasregular";
		txt6.color = "#ffffffe0" 
		txt6.textAlign = "center";
		txt6.textBaseline = "center";
		txt6.text = currency(draws[i].bingo);

	
		txt1.x = previousDraw.x - ((bounds.width  * previousDraw.scaleX) / 2) + 125;
		txt1.y = previousDraw.y - ((bounds.height * previousDraw.scaleY) / 2) + s
	
		txt2.x = previousDraw.x - ((bounds.width  * previousDraw.scaleX) / 2) + 300;
		txt2.y = previousDraw.y - ((bounds.height * previousDraw.scaleY) / 2) + s
	
		txt3.x = previousDraw.x - ((bounds.width  * previousDraw.scaleX) / 2) + 120;
		txt3.y = previousDraw.y - ((bounds.height * previousDraw.scaleY) / 2) + (s+35)
	
		txt4.x = previousDraw.x - ((bounds.width  * previousDraw.scaleX) / 2) + 360;
		txt4.y = previousDraw.y - ((bounds.height * previousDraw.scaleY) / 2) + (s+35)
	
		txt5.x = previousDraw.x - ((bounds.width  * previousDraw.scaleX) / 2) + 160;
		txt5.y = previousDraw.y - ((bounds.height * previousDraw.scaleY) / 2) + (s+65)
	
		txt6.x = previousDraw.x - ((bounds.width  * previousDraw.scaleX) / 2) + 360;
		txt6.y = previousDraw.y - ((bounds.height * previousDraw.scaleY) / 2) + (s+65)
		
		s += 117

		resultScreenContainer.addChild(txt1, txt2, txt3, txt4, txt5, txt6);
	}

	
}



const addNextDraw = (draws, nextDraw) => {
	
	var s = 132
	let bounds = nextDraw.getBounds();

	for (var i = 0; i < draws.length; i++) {

		let txt1 = new createjs.Text();
		txt1.font = "30px bebasregular";
		txt1.color = "#ffffffdc" 
		txt1.textAlign = "center";
		txt1.textBaseline = "center";
		txt1.text = `${draws[i][0]}       ${draws[i][1]}       ${draws[i][2]}`;
		
		txt1.x = nextDraw.x - ((bounds.width  * nextDraw.scaleX) / 2) + 265;
		txt1.y = nextDraw.y - ((bounds.height * nextDraw.scaleY) / 2) + s

		s += 112
 
		resultScreenContainer.addChild(txt1)
	}
 
	

	
}

const addNextDrawSpecial = (info, nextDraw) => {


	for(let ine in info){
		
		var itemDrawSpecial = new createjs.Bitmap(loader.getResult('itemDrawSpecial'));
		centerReg(itemDrawSpecial);
		itemDrawSpecial.x = canvasW * 0.82;
		itemDrawSpecial.y = ine == 0 ? canvasH * 0.31 : ine == 1 ? canvasH * 0.523 : canvasH * 0.735
		itemDrawSpecial.scaleX = .24;
		itemDrawSpecial.scaleY = .24;

	
		let bounds = itemDrawSpecial.getBounds();
		
		let txtTitle = new createjs.Text();
		txtTitle.font = "30px bebasregular";
		txtTitle.color = "#dca342" 
		txtTitle.textAlign = "left";
		txtTitle.textBaseline = "top";
		txtTitle.text = info[ine].titulo
				
		let txtDate = new createjs.Text();
		txtDate.font = "20px bebasregular";
		txtDate.color = "#ffffffdc" 
		txtDate.textAlign = "left";
		txtDate.textBaseline = "top";
		txtDate.text = info[ine].fecha
				
		let txtTime = new createjs.Text();
		txtTime.font = "20px bebasregular";
		txtTime.color = "#ffffffdc" 
		txtTime.textAlign = "left";
		txtTime.textBaseline = "top";
		txtTime.text = info[ine].hora
		
					
		let txtCuatro = new createjs.Text();
		txtCuatro.font = "20px bebasregular";
		txtCuatro.color = "#ffffffdc" 
		txtCuatro.textAlign = "left";
		txtCuatro.textBaseline = "top";
		txtCuatro.text = currency(info[ine].cuatro)
			

		let txtLinea = new createjs.Text();
		txtLinea.font = "20px bebasregular";
		txtLinea.color = "#ffffffdc" 
		txtLinea.textAlign = "left";
		txtLinea.textBaseline = "top";
		txtLinea.text = currency(info[ine].linea)
				
		let txtDobleL = new createjs.Text();
		txtDobleL.font = "20px bebasregular";
		txtDobleL.color = "#ffffffdc" 
		txtDobleL.textAlign = "left";
		txtDobleL.textBaseline = "top";
		txtDobleL.text = currency(info[ine].doble_linea)
		
		let txtBingo = new createjs.Text();
		txtBingo.font = "20px bebasregular";
		txtBingo.color = "#ffffffdc" 
		txtBingo.textAlign = "left";
		txtBingo.textBaseline = "top";
		txtBingo.text = currency(info[ine].bingo)
	 
				
		txtTitle.x = itemDrawSpecial.x - ((bounds.width  * itemDrawSpecial.scaleX) / 2) + 150;
		txtTitle.y = itemDrawSpecial.y - ((bounds.height * itemDrawSpecial.scaleY) / 2) + 20	
		
		txtDate.x = itemDrawSpecial.x - ((bounds.width  * itemDrawSpecial.scaleX) / 2) + 180;
		txtDate.y = itemDrawSpecial.y - ((bounds.height * itemDrawSpecial.scaleY) / 2) + 60	
		
		txtTime.x = itemDrawSpecial.x - ((bounds.width  * itemDrawSpecial.scaleX) / 2) + 315;
		txtTime.y = itemDrawSpecial.y - ((bounds.height * itemDrawSpecial.scaleY) / 2) + 60

		
		
		txtCuatro.x = itemDrawSpecial.x - ((bounds.width  * itemDrawSpecial.scaleX) / 2) + 105;
		txtCuatro.y = itemDrawSpecial.y - ((bounds.height * itemDrawSpecial.scaleY) / 2) + 117	
		
		txtLinea.x = itemDrawSpecial.x - ((bounds.width  * itemDrawSpecial.scaleX) / 2) + 320;
		txtLinea.y = itemDrawSpecial.y - ((bounds.height * itemDrawSpecial.scaleY) / 2) + 117	
		
		txtDobleL.x = itemDrawSpecial.x - ((bounds.width  * itemDrawSpecial.scaleX) / 2) + 135;
		txtDobleL.y = itemDrawSpecial.y - ((bounds.height * itemDrawSpecial.scaleY) / 2) + 147
		
		txtBingo.x = itemDrawSpecial.x - ((bounds.width  * itemDrawSpecial.scaleX) / 2) + 320;
		txtBingo.y = itemDrawSpecial.y - ((bounds.height * itemDrawSpecial.scaleY) / 2) + 147	
		
		
		resultScreenContainer.addChild(itemDrawSpecial)
		resultScreenContainer.addChild(txtTitle, txtDate, txtTime, txtCuatro, txtLinea, txtDobleL, txtBingo)

		if(ine == 2) break;
		
	} 
	
		
	
	if(info.length == 0){

		var itemDrawSpecial = new createjs.Bitmap(loader.getResult('notDrawSpecial'));
		centerReg(itemDrawSpecial);
		itemDrawSpecial.x = canvasW * 0.82;
		itemDrawSpecial.y = canvasH * 0.52;
		itemDrawSpecial.scaleX = .48;
		itemDrawSpecial.scaleY = .48;


		resultScreenContainer.addChild(itemDrawSpecial)
	}
	

	
}




const showTextResult = (info, previousDraw, nextDraw, itemDrawSpecial, itemJkInfoResult) =>{

	addPreviousDraw(info.previous_draw, previousDraw)
	addNextDraw(info.next_draw, nextDraw)
	
	addNextDrawSpecial(info.next_draw_special, nextDraw)

	let bounds2 = itemJkInfoResult.getBounds();

	let txtInfoJk = new createjs.Text();
	txtInfoJk.font = "30px bebasregular";
	txtInfoJk.color = "#ffffffdc" 
	txtInfoJk.textAlign = "center";
	txtInfoJk.textBaseline = "center";
	txtInfoJk.text = `${info.info_ult_jackpot.ticket}                        ${currency(info.info_ult_jackpot.monto)}                               ${info.info_ult_jackpot.lugar}                               ${info.info_ult_jackpot.fecha}`;
	
	txtInfoJk.x = itemJkInfoResult.x - ((bounds2.width  * itemJkInfoResult.scaleX) / 2) + 950;
	txtInfoJk.y = itemJkInfoResult.y - ((bounds2.height * itemJkInfoResult.scaleY) / 2) + 50
	
	resultScreenContainer.addChild(txtInfoJk);
	
	
}

const showDinamic = () => {

	

	txtJk = new createjs.Text();
	txtJk.font = "38px bebasregular";
	txtJk.color = "#ffffffdc" 
	txtJk.textAlign = "left";
	txtJk.textBaseline = "center";
	// txtJk.text = "$15,513.23"
	
	txtJk.x = canvasW/100 * 61;
	txtJk.y = canvasH/100 * 10;	

	let txtTimeActual = new createjs.Text();
	txtTimeActual.font = "38px bebasregular";
	txtTimeActual.color = "#ffffffdc" 
	txtTimeActual.textAlign = "left";
	txtTimeActual.textBaseline = "center";
	txtTimeActual.text = "12:53 PM"
	
	txtTimeActual.x = canvasW/100 * 75.5;
	txtTimeActual.y = canvasH/100 * 10;	

	let txtCount = new createjs.Text();
	txtCount.font = "38px bebasregular";
	txtCount.color = "#ffffffdc" 
	txtCount.textAlign = "left";
	txtCount.textBaseline = "center";
	txtCount.text = "00:19:12"
	
	txtCount.x = canvasW/100 * 88;
	txtCount.y = canvasH/100 * 10;	
	
	resultScreenContainer.addChild(txtJk, txtTimeActual, txtCount);

}

function Nums_carton(nums, ticket, local, Popup, JK) {


	popupContainer.visible = true;

	popupTextJK = null;
	
	popupTextNums = []
	// Limpiar popup anterior
	if (popupContainer) popupContainer.removeAllChildren();
	
	

	itemPopup = new createjs.Bitmap(loader.getResult(Popup));
	centerReg(itemPopup);
	itemPopup.visible = true;
	popupOverlay.visible = true;
	
	popupContainer.alpha = 0;


	TweenMax.killTweensOf(popupContainer);

	TweenMax.to(popupContainer, 1.5, {
		alpha: 1
	});


	popupTextID = new createjs.Text();
	popupTextID.font = JK ? "30px bebasregular" : "15px bebasregular"
	popupTextID.color = "#ffffffe0";
	popupTextID.textAlign = "center";
	popupTextID.textBaseline = "center";
	popupTextID.text = ticket;


	popupTextAgencia = new createjs.Text();
	popupTextAgencia.font = JK ? "20px bebasregular" : "15px bebasregular"
	popupTextAgencia.color = "#ffffffe0";
	popupTextAgencia.textAlign = "center";
	popupTextAgencia.textBaseline = "center";
	popupTextAgencia.text = local;

	
	if(JK){

		popupTextJK = new createjs.Text();
		popupTextJK.font = "50px bebasregular";
		popupTextJK.color = "#f2c356ea";
		popupTextJK.textAlign = "center";
		popupTextJK.textBaseline = "center";
		popupTextJK.text = currency(nums);

	}else{

		for (var i = 0; i < nums.length; i++) {

			var txt = new createjs.Text();
			txt.font = "50px bebasregular";
			txt.color = "#ffffffe0" 
			txt.textAlign = "center";
			txt.textBaseline = "top";
			txt.text = nums[i];
			

			popupTextNums.push(txt);
		}
	}
	popupContainer.addChild(
		
		popupOverlay,
		itemPopup,
		popupTextID,	
		popupTextAgencia,
		popupTextJK,
	
	); for (var i = 0; i < popupTextNums.length; i++) popupContainer.addChild(popupTextNums[i]);
	

		
}

function showResultScreen() {
	
    if (!gameContainer || !resultScreenContainer) return;

    gameContainer.visible = false;
    resultScreenContainer.visible = true;

    if (popupContainer) popupContainer.visible = false;
    
 
    stopSoundLoop('soundDrum');

    stopRender();
}

function showGameScreen() {

    if (!gameContainer || !resultScreenContainer) return;

    resultScreenContainer.visible = false;
    gameContainer.visible = true;

    startRender();
}


function buildResultScreen(resultsData) {console.log(resultsData);

    resultScreenContainer.removeAllChildren();

    var logo = new createjs.Bitmap(loader.getResult('logo'));
    centerReg(logo);
	logo.x = canvasW/100 * 13;
	logo.y = canvasH/100 * 7
	logo.scaleX = .15;
	logo.scaleY = .15;	


    var itemJk = new createjs.Bitmap(loader.getResult('itemJk'));
    centerReg(itemJk);
	itemJk.x = canvasW/100 * 64;
	itemJk.y = canvasH/100 * 7;
	itemJk.scaleX = .11;
	itemJk.scaleY = .11;	

    var TimeR = new createjs.Bitmap(loader.getResult('TimeR'));
    centerReg(TimeR);
	TimeR.x = canvasW/100 * 78;
	TimeR.y = canvasH/100 * 7;
	TimeR.scaleX = 0.11;
	TimeR.scaleY = .11;	

    var countTime = new createjs.Bitmap(loader.getResult('countTime'));
	centerReg(countTime);
	countTime.x = canvasW/100 * 91;
	countTime.y = canvasH/100 * 7;
	countTime.scaleX = 0.11;
	countTime.scaleY = .11;	

	

    var previousDraw = new createjs.Bitmap(loader.getResult('previousDraw'));
    centerReg(previousDraw);
	previousDraw.x = canvasW/100 * 18;
	previousDraw.y = canvasH/100 * 50
	previousDraw.scaleX = 0.45;
	previousDraw.scaleY = .483;	


    var nextDraw = new createjs.Bitmap(loader.getResult('nextDraw'));    
	centerReg(nextDraw);
	nextDraw.x = canvasW/100 * 50;
	nextDraw.y = canvasH/100 * 50
	nextDraw.scaleX = 0.45;
	nextDraw.scaleY = .45;	

	
    var specialDraw = new createjs.Bitmap(loader.getResult('specialDraw'));
    centerReg(specialDraw);
	specialDraw.x = canvasW/100 * 82;
	specialDraw.y = canvasH/100 * 49.7
	specialDraw.scaleX = .472;
	specialDraw.scaleY = .472;	

    var itemJkInfoResult = new createjs.Bitmap(loader.getResult('itemJkInfoResult'));
    centerReg(itemJkInfoResult);
	itemJkInfoResult.x = canvasW/100 * 50;
	itemJkInfoResult.y = canvasH/100 * 93
	itemJkInfoResult.scaleX = .73;
	itemJkInfoResult.scaleY = .6;	


	resultScreenContainer.addChild(  countTime, TimeR,itemJk,  previousDraw, nextDraw, specialDraw, itemJkInfoResult, logo);
	showTextResult(resultsData, previousDraw, nextDraw, specialDraw, itemJkInfoResult)

	showDinamic()
	aumento_jack(32500, 35600)

	// detener_aumento_jack() 

}



function buildGameCanvas(){
	canvasContainer = new createjs.Container();
	
	gameContainer = new createjs.Container();
	gameContainer.visible = false;

	optionsContainer = new createjs.Container();

	drawDrumContainer = new createjs.Container();
	drawNumbersContainer = new createjs.Container();
	drawDrumBallsContainer = new createjs.Container();
	drawDrumBallContainer = new createjs.Container();
	drawContainer = new createjs.Container();
	
	infoContainer = new createjs.Container();

	
	popupContainer = new createjs.Container();
	
	popupOverlay = new createjs.Shape();
	popupOverlay.graphics.beginFill("rgba(0,0,0,0.65)").drawRect(0, 0, canvasW, canvasH);

	transitionOverlay = new createjs.Shape();
	transitionOverlay.graphics.beginFill("#000").drawRect(0, 0, canvasW, canvasH);

	transitionOverlay.alpha = 0;
	transitionOverlay.visible = false;



	resultScreenContainer = new createjs.Container();
	resultScreenContainer.visible = false;



	

	bg = new createjs.Bitmap(loader.getResult('background'));
	bg.scaleX = canvasW / bg.image.width;
	bg.scaleY = canvasH / bg.image.height;

	//Conteo ball	
	itemTime = new createjs.Bitmap(loader.getResult('itemTime'));
	centerReg(itemTime);
	//Informacion del conteo de bolas
	itemTime.x = canvasW/100 * 5.5;
	itemTime.y = canvasH/100 * 81.7;
	itemTime.scaleX = 0.82
	itemTime.scaleY = 0.82;
	



	//Informacion del Jackpot actual
	itemJackpotInfo = new createjs.Bitmap(loader.getResult('itemJackpotInfo'));
	centerReg(itemJackpotInfo);
	itemJackpotInfo.x = canvasW/100 * 22.5;
	itemJackpotInfo.y = canvasH/100 * 82;
	itemJackpotInfo.scaleX = .18
	itemJackpotInfo.scaleY = .17;


	//Informacion del Jackpot anterior

	//Jackpot result
	itemJackpotResult = new createjs.Bitmap(loader.getResult('itemJackpotResult'));
	centerReg(itemJackpotResult);
	itemJackpotResult.x = canvasW/100 * 19;
	itemJackpotResult.y = canvasH/100 * 93;
	itemJackpotResult.scaleX = 0.25;
	itemJackpotResult.scaleY = 0.26;

	//Card board info
	itemCardboard = new createjs.Bitmap(loader.getResult('itemCardboard'));
	centerReg(itemCardboard);
	//Titulo de carton
	itemCardboard.x = canvasW/100 * 49.5;
	itemCardboard.y = canvasH/100 * 71;
	itemCardboard.scaleX = 0.33;
	itemCardboard.scaleY = 0.35;


	let bounds3 = itemCardboard.getBounds();
	var s = 90
	//Informacion de los mejores catones 
	for (var i = 1; i <= 12; i++) {
		
		var key = 'informacion_' + i;
		var txt = new createjs.Text();
		txt.font = "15px bebasregular";
		cartonInfTxt[key][3] ? txt.color = "#fcc65b" : txt.color = "#fff" 
		txt.textAlign = "left";
		txt.textBaseline = "top";

		txt.text = `${cartonInfTxt[key][0]} . . . . . . . . . ${cartonInfTxt[key][1]} . . . . . . . . . ${cartonInfTxt[key][2]}`;
		
		txt.x = itemCardboard.x - ((bounds3.width  * itemCardboard.scaleX) / 2) + 30;
		txt.y = itemCardboard.y - ((bounds3.height * itemCardboard.scaleY) / 2) + s
		s+=30

		cartonInfoTexts.push(txt);
	}

 
 

	// exitBonus(draw_api.BONOS, draw_api)

	//Tabla
	itemTable = new createjs.Bitmap(loader.getResult('itemTable'));
	centerReg(itemTable);
 	//Informacion de la tabla de pago
	itemTable.x = canvasW/100 * 80;
	itemTable.y = canvasH/100 * 87;
	itemTable.scaleX = 0.29;
	itemTable.scaleY = .26;	
 
	cuatroInfoTxt = new createjs.Text();
	cuatroInfoTxt.font = "30px bebasregular";
	cuatroInfoTxt.color = "#ffffffe0";
	cuatroInfoTxt.textAlign = "left";
	cuatroInfoTxt.textBaseline = "top";

	lineaInfoTxt = new createjs.Text();
	lineaInfoTxt.font = "30px bebasregular";
	lineaInfoTxt.color = "#ffffffe0";
	lineaInfoTxt.textAlign = "left";
	lineaInfoTxt.textBaseline = "top";

	dobleInfoTxt = new createjs.Text();
	dobleInfoTxt.font = "30px bebasregular";
	dobleInfoTxt.color = "#ffffffe0";
	dobleInfoTxt.textAlign = "left";
	dobleInfoTxt.textBaseline = "top";

	bingoInfoTxt = new createjs.Text();
	bingoInfoTxt.font = "30px bebasregular";
	bingoInfoTxt.color = "#ffffffe0";
	bingoInfoTxt.textAlign = "left";
	bingoInfoTxt.textBaseline = "top";


	let bounds2 = itemTable.getBounds();
	cuatroInfoTxt.x = itemTable.x - ((bounds2.width  * itemTable.scaleX) / 2) + 350;
	cuatroInfoTxt.y = itemTable.y - ((bounds2.height * itemTable.scaleY) / 2) + 21;
	
	lineaInfoTxt.x = itemTable.x - ((bounds2.width  * itemTable.scaleX) / 2) + 350;
	lineaInfoTxt.y = itemTable.y - ((bounds2.height * itemTable.scaleY) / 2) + 61;
	
	dobleInfoTxt.x = itemTable.x - ((bounds2.width  * itemTable.scaleX) / 2) + 350;
	dobleInfoTxt.y = itemTable.y - ((bounds2.height * itemTable.scaleY) / 2) + 100;
	
	bingoInfoTxt.x = itemTable.x - ((bounds2.width  * itemTable.scaleX) / 2) + 350;
	bingoInfoTxt.y = itemTable.y - ((bounds2.height * itemTable.scaleY) / 2) + 140;

	



	
	timeValueTxt = new createjs.Text();
	timeValueTxt.font = "70px bebasregular";
	timeValueTxt.color = "#04ff00ca";
	timeValueTxt.textAlign = "center";
	timeValueTxt.textBaseline = "center";

	timeValueTxt.x = itemTime.x;
	timeValueTxt.y = itemTime.y + 25;
	


	
	jkActualTxt = new createjs.Text();
	jkActualTxt.font = "55px bebasregular";
	jkActualTxt.color = "#ffffffe0";
	jkActualTxt.textAlign = "left";
	jkActualTxt.textBaseline = "center";
	
	jkActualTxt.x = itemJackpotInfo.x - 30;
	jkActualTxt.y = itemJackpotInfo.y + 20;

	
	 
	

	txtJkTk = new createjs.Text();
	txtJkTk.font = "22px bebasregular";
	txtJkTk.color = "#ffffffe0";
	txtJkTk.textAlign = "center";
	txtJkTk.textBaseline = "center"; 

	txtJkTk.x = itemJackpotResult.x - 200;
	txtJkTk.y = itemJackpotResult.y + 8;


	txtJkMt = new createjs.Text();
	txtJkMt.font = "22px bebasregular";
	txtJkMt.color = "#ffffffe0";
	txtJkMt.textAlign = "center";
	txtJkMt.textBaseline = "center"; 
		
	txtJkMt.x = itemJackpotResult.x - 75;
	txtJkMt.y = itemJackpotResult.y + 8;


	

	txtJkMnt = new createjs.Text();
	txtJkMnt.font = "22px bebasregular";
	txtJkMnt.color = "#ffffffe0";
	txtJkMnt.textAlign = "center";
	txtJkMnt.textBaseline = "center";

	txtJkMnt.x = itemJackpotResult.x + 65;
	txtJkMnt.y = itemJackpotResult.y + 8;

	

	txtJkDt = new createjs.Text();
	txtJkDt.font = "22px bebasregular";
	txtJkDt.color = "#ffffffe0";
	txtJkDt.textAlign = "center";
	txtJkDt.textBaseline = "center";

	txtJkDt.x = itemJackpotResult.x + 200;
	txtJkDt.y = itemJackpotResult.y + 8;


	

	// Drum and numbers
	itmDrumGlass = new createjs.Bitmap(loader.getResult('itmDrumGlass'));
	centerReg(itmDrumGlass);

	itmDrumGlassBonus = new createjs.Bitmap(loader.getResult('itmDrumGlassBonus1'));
	centerReg(itmDrumGlassBonus);
	itmDrumGlassBonus.visible = false;

	

	itmDrumHole = new createjs.Bitmap(loader.getResult('itmDrumHole'));
	centerReg(itmDrumHole);

	itemBgDrum = new createjs.Bitmap(loader.getResult('itemBgDrum'));
	centerReg(itemBgDrum);

	
 
	

	
	drawDrumContainer.addChild(
	
		drawDrumBallsContainer,
		itmDrumGlass,
		itmDrumGlassBonus,
		itmDrumHole 
		
	
	);


	infoContainer.addChild(
	
		itemTime,
		itemJackpotInfo,
		itemJackpotResult,
		itemCardboard,
		itemTable, 
	

		timeValueTxt, 
		jkActualTxt, 
		txtJkTk,
		txtJkMt,
		txtJkMnt,
		txtJkDt,  
		cuatroInfoTxt, 
		lineaInfoTxt, 
		dobleInfoTxt, 
		bingoInfoTxt, 

		cartonSubTitleTxt, 
		
	);

	for (var i = 0; i < cartonInfoTexts.length; i++) {
		infoContainer.addChild(cartonInfoTexts[i]);
	}

	drawContainer.addChild(
		itemBgDrum,
		drawDrumContainer,
		drawNumbersContainer,
		drawDrumBallContainer,
		infoContainer,
		popupContainer
	);

	var prizeIndex = 0;

	//Creando contenedor donde caen todas las bolas
	for(var n=0; n<TOTAL_SLOTS; n++){

		
		$.draw['drop' + n] = new createjs.Container();
		$.draw['drop' + n].scaleX = $.draw['drop' + n].scaleY = .59;
		
		// Máscara circular para que la bola quede recortada dentro del marco
		var ballMask = new createjs.Shape();
		ballMask.graphics.beginFill('red').drawCircle(0, 0, gameSettings.revealBallRadius/2);

		$.draw['drop' + n].ballMask = ballMask;
		$.draw['drop' + n].mask = ballMask;

		$.draw['bonus' + n] = new createjs.Container();
		$.draw['bonus' + n].scaleX = $.draw['bonus' + n].scaleY = .16;
		$.draw['bonus' + n].visible = false;

		// Círculo/marco morado donde cae la bola
		$.draw['placed' + n] = new createjs.Bitmap(loader.getResult('itemPlace'));
		centerReg($.draw['placed' + n]);

		$.draw['placed' + n].scaleX = $.draw['placed' + n].scaleY = .8;

		// Agregamos solo lo necesario
		drawNumbersContainer.addChild(
			$.draw['placed' + n],
			$.draw['drop' + n],
			$.draw['bonus' + n]
		);
	
	}

	// Sound options itmDrumGlassBonus1
	guideline = new createjs.Shape();	

	gameContainer.addChild( drawContainer);

	canvasContainer.addChild(bg, gameContainer, resultScreenContainer, guideline, transitionOverlay);
	stage.addChild(canvasContainer);
	
	changeViewport(viewport.isLandscape);

}




function changeViewport(isLandscape){
	if(isLandscape){
		//landscape
		stageW=landscapeSize.w;
		stageH=landscapeSize.h;
		contentW = landscapeSize.cW;
		contentH = landscapeSize.cH;
	}else{
		//portrait
		stageW=portraitSize.w;
		stageH=portraitSize.h;
		contentW = portraitSize.cW;
		contentH = portraitSize.cH;
	}
	
	canvasW=stageW;
	canvasH=stageH;
	
	changeCanvasViewport();
}

function changeCanvasViewport(){
	if(canvasContainer != undefined){
		stage.scaleX = stage.scaleY = dpr;

		if(safeZoneGuide){	
			guideline.graphics.clear()
				.setStrokeStyle(2)
				.beginStroke('red')
				.drawRect((stageW-contentW)/2, (stageH-contentH)/2, contentW, contentH);
		}

		bg.visible = true;
	 
	}
}



/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas(){
	if(canvasContainer != undefined){

		if(curPage == 'game') resizeGameLayout();
		
	}
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }


 
/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj){
	if(obj.image == undefined){
		return;
	}

	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));	
}