

function getArticles(searchTerm) {
	var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

	queryUrl += '?' + $.param({
  		'api-key': "2c0f5d2783db4199ba4947782365ea67",
  		'q': searchTerm,
		'begin_date': '20171010'
	});

	$.ajax({
		url: queryUrl, 
		method: 'GET'
	}).done(function(response) {
		console.log(response);
	});
}

$('#submit-button').on('click', (event) => {
	getArticles($('#search-box').val());
});

