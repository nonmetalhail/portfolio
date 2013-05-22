$(document).ready(function()
{
	var last;
    $('.port_data').hide();
	$.each($('.port_thumb').children('div'),function()
	{
		$(this).live(
		{
			click: function()
			{
				$(last).removeClass("port_selected");
				$(this).addClass("port_selected");
				$('.port_data').hide("slow");
				var str = '#' + $(this).attr('id').split('_')[0];
				$(str).show("slow");
				last = this;
			},
			
			mouseover: function()
			{
				$(this).addClass("port_hover");
			},
			
			mouseout: function()
			{
				$(this).removeClass("port_hover");
			}
		});
	});
	
//	$.each($('.port_data_left').children('img'),function()
//	{
//		$(this).live("click", function()
//		{
//			hs.expand(this);
//		});
//	});
});

var galleryKiosk= {
	slideshowGroup: 'kiosk',
	wrapperClassName: 'dark',
	//outlineType: 'glossy-dark',
//	dimmingOpacity: 0.8,
//	align: 'center',
//	transitions: ['expand', 'crossfade'],
//	fadeInOut: true,
	wrapperClassName: 'borderless floating-caption',
//	marginLeft: 100,
//	marginBottom: 80,
//	numberPosition: 'caption'
};

var galleryXF= {
	slideshowGroup: 'xf',
	wrapperClassName: 'dark',
	wrapperClassName: 'borderless floating-caption',
};

var galleryExcel= {
	slideshowGroup: 'excel',
	wrapperClassName: 'dark',
	wrapperClassName: 'borderless floating-caption',
};

var galleryShade= {
	slideshowGroup: 'shade',
	wrapperClassName: 'dark',
	wrapperClassName: 'borderless floating-caption',
};

var galleryPAP= {
	slideshowGroup: 'pap',
	wrapperClassName: 'dark',
	wrapperClassName: 'borderless floating-caption',
};


var galleryEPlus= {
	slideshowGroup: 'eplus',
	wrapperClassName: 'dark',
	wrapperClassName: 'borderless floating-caption',
};

hs.graphicsDir = '../images/graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.fadeInOut = true;
hs.dimmingOpacity = 0.8;
//hs.outlineType = 'rounded-white';
hs.captionEval = 'this.thumb.alt';
hs.marginBottom = 150; // make room for the thumbstrip and the controls
hs.numberPosition = 'caption';

// Add the slideshow providing the controlbar and the thumbstrip
hs.addSlideshow({
	//slideshowGroup: 'group1',
	interval: 5000,
	repeat: false,
	useControls: true,
	overlayOptions: {
		className: 'text-controls',
		position: 'bottom center',
		relativeTo: 'viewport',
		offsetY: -60
	},
	thumbstrip: {
		position: 'bottom center',
		mode: 'horizontal',
		relativeTo: 'viewport'
	}
});