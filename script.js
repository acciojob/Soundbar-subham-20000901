//your JS code here. If required.
let buttons = document.querySelectorAll(".btn");
let stop = document.querySelector(".stop");
let currentAudio = null;
buttons.forEach((button) => {
	button.addEventListener('click',function(){
		if(currentAudio){
			currentAudio.pause();
			currentAudio.currentTime = 0;	
		}

		let currentSound = button.innerText;
		currentAudio = new Audio(`sounds/${currentSound}.mp3`);
		currentAudio.play();
	});
});

stop.addEventListener('click',function(){
	if(currentAudio){
			currentAudio.pause();
			currentAudio.currentTime = 0;	
		}
	
});