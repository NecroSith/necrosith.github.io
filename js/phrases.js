
(function() {
	
	var phrases = ['How does it feel to be locked inside another dream that never had a chance of being realized? (c)', 'You cannot kill what you did not create', 'I took a life worth living and made it worth a mockery'];
	
	this.init = function() {
		getRandomPhrase();
	};
	
	this.getRandomPhrase = function() {
		
		var result = document.getElementById('phrase');
		var rand = phrases[Math.floor(Math.random() * phrases.length)];
		
		result.innerHTML = '';
		result.insertAdjacentHTML('afterbegin', '<p id="phrase">' + rand + '</p>');
	}
	
	this.init();
	
}) ();