/* File Name: template.js
Date: 01/15/14
Programmer: Scott Campbell */

$(document).ready(function(){
	$('.tab-section').hide();
	$('#tabs a').bind('click', function(e){
		$('#tabs a.current').removeClass('current');
		$('.tab-section:visible').hide();
		$(this.hash).show();
		$(this).addClass('current');
		e.preventDefault();
	}).filter(':first').click();
});
