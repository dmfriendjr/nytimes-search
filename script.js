

function getArticles(searchTerm, numberResults, startDate, endDate) {
	var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

	queryUrl += '?' + $.param({
  		'api-key': "2c0f5d2783db4199ba4947782365ea67",
  		'q': searchTerm,
	});

	if (startDate.length !== 0) {
		queryUrl += `&begin_date=${startDate}0101`;
	}

	if (endDate.length !== 0) {
		queryUrl += `&end_date=${endDate}0101`;	
	}

	console.log(queryUrl);

	$.ajax({
		url: queryUrl, 
		method: 'GET'
	}).done(function(response) {
		$('#search-results').append(response);
	});

}

$('#submit-button').on('click', (event) => {
	console.log('test1');
	getArticles($('#search-box').val(), $('#rnumber-items').val(), $('#start-year').val(), $('#end-year').val());
});

