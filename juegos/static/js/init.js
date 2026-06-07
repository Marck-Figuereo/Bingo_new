////////////////////////////////////////////////////////////
// INIT loadAddons
////////////////////////////////////////////////////////////
var stageWidth,stageHeight=0;
var isLoaded=false;
 
 /*!
 * 
 * DOCUMENT READY
 * 
 */
$(function() {
	var resumeAudioContext = function() {
		// handler for fixing suspended audio context in Chrome
		try {
			if (createjs.WebAudioPlugin.context.state === "suspended") {
				createjs.WebAudioPlugin.context.resume();
				// Should only need to fire once
				window.removeEventListener("click", resumeAudioContext);
			}
		} catch (e) {
			// SoundJS context or web audio plugin may not exist
			console.error("There was an error while trying to resume the SoundJS Web Audio context...");
			console.error(e);
		}
	};
	window.addEventListener("click", resumeAudioContext);
	 
	 // Check for running exported on file protocol
	if (window.location.protocol.substr(0, 4) === "file"){
		alert("To install the game just upload folder 'game' to your server. The game won't run locally with some browser like Chrome due to some security mode.");
	}
	 
	 
	checkBrowser();
});

/*!


/*!
 * 
 * BROWSER DETECT - This is the function that runs for browser and feature detection
 * 
 */
var browserSupport = false;
var isMobile = false;
var isTablet = false;
var isDesktop = true;

function checkBrowser(){
    var canvasEl = document.createElement('canvas');

    if(canvasEl.getContext){ 
        browserSupport = true;
    }

    if(browserSupport){
        if(!isLoaded){
            isLoaded = true;
            initPreload();
        }
    }else{
        $('#notSupportHolder').show();
    }
}