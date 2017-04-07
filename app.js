// take user input and count  the words and return the value of the count
function wordCount(str) {
	return str.split('');
}

// take array output from .split and check unique words then return the number of unique words

// take array and average the length of the words and return the average

// stop button from submitting and refreshing the page, instead having it fire an event to take the input and provide single string
$(function(){
	$('button').submit(function(event){
		event.preventDefault();
		$('dl').removeClass('hidden');
	});
});


