var gallery_kisok = {
  slideshowGroup: 'kiosk',
  wrapperClassName: 'dark',
  //outlineType: 'glossy-dark',
//  dimmingOpacity: 0.8,
//  align: 'center',
//  transitions: ['expand', 'crossfade'],
//  fadeInOut: true,
  wrapperClassName: 'borderless floating-caption',
//  marginLeft: 100,
//  marginBottom: 80,
//  numberPosition: 'caption'
};

var gallery_drinke = {
  slideshowGroup: 'drinke',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_mapestry = {
  slideshowGroup: 'mapestry',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_graffiti = {
  slideshowGroup: 'graffiti',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_xfit = {
  slideshowGroup: 'xf',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_psychrometric = {
  slideshowGroup: 'excel',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_slopegraph = {
  slideshowGroup: 'slopegraph',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_pap = {
  slideshowGroup: 'pap',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_eplus = {
  slideshowGroup: 'eplus',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_codesam = {
  slideshowGroup: 'codesam',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

hs.graphicsDir = 'static/images/graphics/';
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