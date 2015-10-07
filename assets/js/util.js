$(function() {
	$("li").click(function(event) {
		// remove classes from all
		$("li").removeClass("active");
		// add class to the one we clicked
		$(this).addClass("active");
		event.preventDefault();
		// navigation bar
		if($(this).attr('id') == "home") {
			$("#mainContainer").load("mision.html");
		}
		if($(this).attr('id') == "services") {
			$("#mainContainer").load("servicios.html", function() {
				callbackServicios();
			});
		}
		if($(this).attr('id') == "classes") {
			$("#mainContainer").load("capacitacion.html", function() {
				callbackCapacitacion();
			});
		}
		if($(this).attr('id') == "benefits") {
			$("#mainContainer").load("beneficios.html");
		}
		if($(this).attr('id') == "contact") {
			$("#mainContainer").load("mision.html");
		}
		// footer
		if($(this).attr('id') == "footerHome") {
			$("#mainContainer").load("mision.html");
			$('#home').addClass("active");
		}
		if($(this).attr('id') == "footerServices") {
			$("#mainContainer").load("servicios.html", function() {
				callbackServicios();
			});
			$('#services').addClass("active");
		}
		if($(this).attr('id') == "footerClasses") {
			$("#mainContainer").load("capacitacion.html", function() {
				callbackCapacitacion();
			});
			$('#classes').addClass("active");
		}
		if($(this).attr('id') == "footerBenefits") {
			$("#mainContainer").load("beneficios.html");
			$('#benefits').addClass("active");
		}
		if($(this).attr('id') == "footerContact") {
			$("#mainContainer").load("mision.html");
			$('#contact').addClass("active");
		}
	});
});

function callbackServicios() {
	$(".accordion-desc").fadeOut(0);
	$(".accordion").click(function(event) {
		event.preventDefault();
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