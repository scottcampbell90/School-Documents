/* JavaScript for Chapter 2 Example 2 */

$(document).ready(function(){
	$('a[href$="ppt"]').addClass('presentation');
	$('a[href$="mp4"]').addClass('video');
	$('a[href$="pdf"]').addClass('pdf');
	$('a[href$="gif"]').addClass('image');
});