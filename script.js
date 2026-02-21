//your JS code here. If required.
let buttons = document.querySelectorAll(".btn");
let stop = document.querySelector(".stop");
let currentAudio = null;
buttons.forEach((button) => {
	button.addEventListener('click',function(){
		if(currentAudio){
			currentAudio.pause();
			currentAudio.currentTime = 0;	
			  currentAudio.remove();
		}

	  let soundName = button.innerText.trim();
    currentAudio = document.createElement("audio");
    currentAudio.src = `sounds/${soundName}.mp3`;
    currentAudio.autoplay = true;

    document.body.appendChild(currentAudio);
	});
});

stop.addEventListener('click',function(){
	if(currentAudio){
			currentAudio.pause();
			currentAudio.currentTime = 0;	
		     currentAudio.remove();
		}
	
});