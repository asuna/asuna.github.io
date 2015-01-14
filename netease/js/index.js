function audio_ready(){
	audiojs.events.ready(function() {
		var a1 = audiojs.createAll({
			css: false,
			createPlayer: {
			markup: false,
            playPauseClass: 'play-pauseqq',
            scrubberClass: 'scrubberqq',
            progressClass: 'progressqq',
            loaderClass: 'loadedqq',
            timeClass: 'timeqq',
            durationClass: 'durationqq',
            playedClass: 'playedqq',
            errorMessageClass: 'error-messageqq',
            playingClass: 'playingqq',
            loadingClass: 'loadingrqq',
            errorClass: 'errorqq'
			}
		});
	});
}

$(document).ready(function(){
	audio_ready();
});