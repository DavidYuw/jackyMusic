window.onload = function() {

	var myUl = document.getElementsByTagName("ul")[0];
	var myAudio = document.getElementsByTagName("audio")[0];
	
	myUl.onclick = function() {
		myAudio.paused =true;
		myAudio.src = "images/jacky.mp3";
		myAudio.play();		
	}
}
