$(document).ready(function(){
	externalLinks();
});

function externalLinks(){
	$('a.new-window').bind('click', function(e){
		var location = $(this).attr('href');
		window.open(location);
		e.preventDefault();
	});
}