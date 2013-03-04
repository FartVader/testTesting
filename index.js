//CONSTANTS
const WELCOME = "Welcome to the Clean HTML5 Template! Made by Drdynscript"

//INITALIZE FUNCTION FOR THE APP
function initApp(){
	//SHOW WELCOME MESSAGE
	asideText();
};


function asideText(){
	var content = "<h2>ma-di-wo-do-vr</h2>";
	content += "<p>08u00 - 12u30 & 13u30 - 18u30</p>";
	content += "<h2>zaterdag</h2>";
	content += "<p>08u00 - 12u30</p>";
	content += "<h2>zondag</h2>";
	content += "<p>gesloten</p>";
	$("aside").append(content);
};

//SELF EXECUTING FUNCTION
(function(){
	initApp();
}(window))