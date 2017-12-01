var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

function getArticles(searchTerm) {
	queryUrl += '?' + $.param({
	  'api-key': "2c0f5d2783db4199ba4947782365ea67",
	  'q': searchTerm
	});

	$.ajax({
		url: queryUrl, 
		method: 'GET'
	}).done(function(response) {
		console.log(response);
	});
}


getArticles('trump');
