function wordCount() {
	var words = $('textarea[name=user-text]').val();
	var fieldText = words.split(" ");
	return fieldText.length;
}

function uniqueWords() {
	var words = $('textarea[name=user-text]').val();
	var fieldText = words.split(" ");
	var wordCount = [];
	for (var i = 0; i<fieldText.length; i++){
		if ($.inArray(fieldText[i], wordCount) === -1) {
			wordCount.push(fieldText[i]);
		}
	}
	return wordCount.length;
}

function averageLength() {
	var words = $('textarea[name=user-text]').val();
	var fieldText = words.split(" ");
	var fieldTotal = fieldText.join("");
	return fieldTotal.length/fieldText.length;
}

function reportOnText() {
	var numDistinctWords = uniqueWords();
	var numTotalWords = wordCount();
	var averageWordLength = averageLength();
	var textReport = $('.js-text-report');
	textReport.find('.js-word-count').text(numTotalWords);
	textReport.find('.js-unique-word-count').text(numDistinctWords);
	textReport.find('.js-average-word-length').text(
		averageWordLength + " characters");
	textReport.removeClass('hidden');
}

function handleForm(){
	$('button').click(function(event){
		event.preventDefault();
		$('dl').removeClass('hidden');
		console.log(wordCount());
		console.log(uniqueWords());
		console.log(averageLength());
		console.log(reportOnText());
	});
}
$(function() {
	handleForm();
})


