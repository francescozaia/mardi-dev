$(document).ready(function(){
	$(document).on('scroll', function(e) {
		console.log("s"+$(document).scrollTop());
		if($(document).scrollTop() > 0) {
			$(".navbar-fixed-top").addClass("navbar-shadowed");
		} else {
			$(".navbar-fixed-top").removeClass("navbar-shadowed");
		}
	});
})
