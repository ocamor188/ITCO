function callbackServicios() {
	$(".accordion-desc").fadeOut(0);
	$(".accordion").click(function() {
		$(".accordion-desc").not($(this).next()).slideUp('fast');
		$(this).next().slideToggle(400);
	});
}

function callbackCapacitacion() {
	$( "#tabs" ).tabs();
}

function callbackBeneficios() {

}

function callbackInicio() {
	
}