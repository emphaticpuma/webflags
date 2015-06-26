// function to remove (almost) any element
// uses ELEM.parentNode.removeChild(ELEM)
// Works with class, tag, id, and already defined varibles

var removeElementNow = function(elemID){
	if (document.getElementById(''+ elemID +'') === true) {
		cwi = document.getElementById('elemID');	
		// if its an ID
		cwi.parentNode.removeChild(cwe);
	}
	else if (typeof elemID !== undefined) {
		elemID.parentNode.removeChild(elemID);
		// if its already a variable
	}
	else if (document.querySelectorAll('.' + elemID + '') === true) {
		cwc = document.querySelectorAll('.' + elemID + '');
		// if its a class
		cwi.parentNode.removeChild(cwc);
	}
	else {
		// if its an unknown format
		console.log('unknown format');
	}
};

//  warning, excessive use of caps beacuse RAGE!!!
//
//  THIS IS LITERALLY CAUSED BY WINDOWS NOT BEING ABLE
//  TO HANDLE A DIRECTORY WITH 1000s OF FILES
//  
//  WIKIPEDIA CANT STORE ALL THIER IMAGES IN AN SINGLE DIRECTORY,
//  THEY HAVE TO DIVIDE THE IMAGES BY AN MD5 HASH AND TAKE THE
//   1ST THEN 1ST AND 2ND OF THE HASH
// 
//   WHY CANT THE WORLD JUST USE LINUX AND MAKE MY STUPID FLAG PROJECT EASIER!!!!
// 
// This will just get minified out, but if anyone sees this, hi! enjoy my rant!

function imgMd5 (countryName) {

	switch (countryName) {
		case "United Arab Emirates":
			name = "the United Arab Emirates";
			break;

	}

	svg = new Image();
	wikipediaPageUrl = 'http://wikipedia.org/wiki/Flag_of_'+ countryName +'#/media/File:Flag_of_'+ countryName +'.svg';
	wikipediaBaseFileUrl = 'Flag_of_'+ countryName +'.svg';
	fileUrlMd5 = md5(wikipediaBaseFileUrl);
	console.log(fileUrlMd5);
	wikiMdSlash1 = fileUrlMd5.charAt(0);
	wikiMdSlash2 = fileUrlMd5.substring(0,2);
	console.log(wikiMdSlash1);
	console.log(wikiMdSlash2);
	// svg.src = 'http://wikipedia.org/wiki/Flag_of_'+name+'#/media/File:Flag_of_'+name+'.svg';
	finalFileName = 'http://upload.wikimedia.org/wikipedia/commons/'+ wikiMdSlash1 +'/'+ wikiMdSlash2 +'/Flag_of_'+ countryName +'.svg';

	svg.src = 'http://upload.wikimedia.org/wikipedia/commons/'+ wikiMdSlash1 +'/'+ wikiMdSlash2 +'/Flag_of_'+ countryName +'.svg';

	svg.className += 'svgFlag';

	document.getElementById('nameDisp' + i).appendChild(svg);
}

function actOnJSON(input) {
	var JSON = input;
	for (i=0;i<JSON.length;i++) {
		name = JSON[i].name.common;

		nameDisp = document.createElement('div');
		nameDisp.id = 'nameDisp' + i;
		nameDisp.className += 'nameDisp';
		nameDisp.innerHTML = name;

		document.getElementById('main').appendChild(nameDisp);

		imgMd5(name);

	}
	return JSON;
}

var addDotsNum = 0;

function rmDots () {
	a = document.getElementById('spinnerText');
	a.textContent = 'Loading';
}

function addDots () {

setTimeout(function() {

	load = document.getElementById('spinnerText');
	loadText = load.textContent;

	load.textContent += ' .';

	addDotsNum++;
	if (addDotsNum < 4) {
		addDots();
	}
	else {
		rmDots();
		addDots();
		addDotsNum = 0;
	}

}, 700);

}

var spinHideO = 64;

function SpinLoop () {

setTimeout(function() {
	spinText = document.getElementById('spinnerText');
	spin = document.getElementById('spinner');
	spin.style.opacity = (spinHideO/64);
	
	spinHideO--;
	if (spinHideO > spin.scrollHeight) {
		SpinLoop();
	}
	else {
		// spin.parentNode.removeChild(spin);
		removeElementNow(spin);
		// spinText.parentNode.removeChild(spinText);
		removeElementNow(spinText);
		// console.log('removed spinner');
	}
}, 10);

}

// AJAX code - gets countries.min.json async style
var result;
var finished = false;
var AJAXcountries = function () {
	var xmlhttp;
	// add a new request, IE7+
	xmlhttp = new XMLHttpRequest();

	// when its ready state changes do this stuff
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200){
				// sucess code goes here
				
				result = JSON.parse(xmlhttp.responseText);
				actOnJSON(result);
				SpinLoop();
			}
			else if(xmlhttp.status == 400) {
				// fail code goes here
				alert('There was an error 400');
			}
			else {
				// unrecognised fail code goes here
				alert('something else other than 200 was returned');
			}
		}
		else if (xmlhttp.readyState == 1){
			addDots();console.log('removed spinner');
		}
	};

	// actually do the thing
	xmlhttp.open("GET", "data/countries.min.json", true);
	xmlhttp.send();
};

AJAXcountries();

var AJAXimages = function (imageURL) {
var xmlhttp2;
	// add a new request, IE7+
	xmlhttp2 = new XMLHttpRequest();

	// when its ready state changes do this stuff
	xmlhttp2.onreadystatechange = function() {
		if (xmlhttp2.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp2.status == 200){
				// sucess code goes here
			}
			else if(xmlhttp2.status == 400) {
				// fail code goes here
				alert('There was an error 400');
			}
			else {
				// unrecognised fail code goes here
				alert('something else other than 200 was returned');
			}
		}
		else if (xmlhttp2.readyState == 1){
			
		}
	};

	// actually do the thing
	xmlhttp.open("GET", "data/countries.min.json", true);
	xmlhttp.send();	
};