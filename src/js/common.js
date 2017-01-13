define([
	"bootstrap",
], function() {
	$(".white-layer-wrapper").hover( function() {
		$(".white-layer").fadeIn(1000);
	});
	$(".white-layer-wrapper").mouseleave( function() {
		$(".white-layer").fadeOut(1000);
	});
});
