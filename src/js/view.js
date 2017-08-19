function hexHover() {
	$(".hex").hover(function() {
  	$(this).addClass("hover");
  }, function() {
  	$(this).removeClass("hover");
  });
}

$(document).ready(function() {
	hexHover();
});