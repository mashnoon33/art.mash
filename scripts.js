var faders = [];
$(".fader").each(function() {
	faders.push($(this).attr("id"));
});

console.log(faders);



$(function() {
	var $select = $("#select");
	var $window = $(window);
	var isFixed = false;
	var init = $select.length ? $select.offset().top : 0;

	var $jumbo = $(".jumbo");
	var jumboHeight = $jumbo.height();

	$window.scroll(function() {
		var wtop = $window.scrollTop();
		var wh = $window.innerHeight();

		for (const i in faders) {
			var currentScrollTop = wtop + wh - $("#" + faders[i]).position().top;

			var currentJumboAlpha = Math.max(
				1 - (currentScrollTop * 100) / jumboHeight / 100,
				0
			);

			$("#" + faders[i] + "> #black").css("opacity", currentJumboAlpha);
		} // console.log("wtop   " + wtop * 2);
		// console.log("wh   " + wh);
		// console.log("Jtop    " + $(".fader").position().top);
	});

	$(".nav").click(function(e) {
		e.preventDefault();
		var divId = $(this).attr("href");
		$("body").animate(
			{
				scrollTop: $(divId).offset().top - $select.height(),
			},
			500
		);
	});
});
