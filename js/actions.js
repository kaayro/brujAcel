//actions
var jQT = new $.jQTouch({
	themeSelectionSelector: '#jqt'
});

var fn = {
	ready: function(){
		document.addEventListener("deviceready", fn.init, false);
	},
	init: function(){
		//Acelerómetro
		$('#acelerometro .individual li').eq(0).tap(ac.iniciar);
		$('#acelerometro .individual li').eq(1).tap(ac.detener);
		//Brújula
		$('#brujula .individual li').eq(0).tap(br.iniciar);
		$('#brujula .individual li').eq(1).tap(br.detener);
	}
};

$(fn.ready);