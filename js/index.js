(function(){
	$.ajax({
		type: "POST",
		url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
			headers: {
			"X-Mashape-Key": "oc3fqKbNzbmshoBYkkJ9ud4JTcw2p1zbesUjsnPfaezgVcS9Cb"
			},
		success: function(data){
			$("#quote").append(data.quote)
			$("#author").append(data.author)
		},
		dataType: "json"
	});
})();

var backgroundcolor = function(){
	var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	$('#background').css({'background-color': randomColorChange, 'transition': 'background-color 1.5s ease'});
};

document.getElementById('twitter').addEventListener('click', function (quote) {
	var tweet = $("#quote").text() + " - " + $("#author").text();
	var hashtag = "randomquotemachine";
	var link = "https://twitter.com/intent/tweet?text=" + tweet.toString() + "&hashtags=" + hashtag.toString();
	$("#twitter").attr('href', link)
	newQuote();
});

function newQuote (){
	$( "#quote, #author" ).empty();
	$.ajax({
		type: "POST",
		url: "https://andruxnet-random-famous-quotes.p.mashape.com/",
			headers: {
			"X-Mashape-Key": "oc3fqKbNzbmshoBYkkJ9ud4JTcw2p1zbesUjsnPfaezgVcS9Cb"
			},
		success: function(data){
			$("#quote").append(data.quote)
			$("#author").append(data.author)
		},
		dataType: "json"
	});
};