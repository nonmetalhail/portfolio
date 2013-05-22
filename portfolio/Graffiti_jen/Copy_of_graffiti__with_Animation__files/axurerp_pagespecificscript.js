for(var i = 0; i < 27; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u17').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u17'); });
else {
    document.getElementById('u17').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u17'); }, true);
    document.getElementById('u17').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u17'); }, true);
}

widgetIdToSwipeRightFunction['u17'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('map.html');

}

}

if (bIE) document.getElementById('u24').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u24'); });
else {
    document.getElementById('u24').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u24'); }, true);
    document.getElementById('u24').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u24'); }, true);
}

widgetIdToSwipeRightFunction['u24'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('map.html');

}

}

if (bIE) document.getElementById('u6').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u6'); });
else {
    document.getElementById('u6').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u6'); }, true);
    document.getElementById('u6').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u6'); }, true);
}

widgetIdToDragFunction['u6'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('sign_up.html');

}

}
gv_vAlignTable['u20'] = 'center';gv_vAlignTable['u16'] = 'center';document.getElementById('u15_img').tabIndex = 0;

u15.style.cursor = 'pointer';
$axure.eventManager.click('u15', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});
gv_vAlignTable['u10'] = 'center';document.getElementById('u11_img').tabIndex = 0;

u11.style.cursor = 'pointer';
$axure.eventManager.click('u11', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});
gv_vAlignTable['u12'] = 'center';document.getElementById('u13_img').tabIndex = 0;

u13.style.cursor = 'pointer';
$axure.eventManager.click('u13', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});
gv_vAlignTable['u14'] = 'center';gv_vAlignTable['u1'] = 'center';document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('sign_up.html');

}
});
gv_vAlignTable['u3'] = 'center';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('home_new.html');

}
});
gv_vAlignTable['u5'] = 'center';document.getElementById('u7_img').tabIndex = 0;

u7.style.cursor = 'pointer';
$axure.eventManager.click('u7', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});
gv_vAlignTable['u8'] = 'center';document.getElementById('u9_img').tabIndex = 0;

u9.style.cursor = 'pointer';
$axure.eventManager.click('u9', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});

$axure.eventManager.mouseover('u25', function(e) {
if (!IsTrueMouseOver('u25',e)) return;
if (true) {

	SetPanelState('u21', 'pd1u21','none','',500,'none','',500);

	SetPanelState('u18', 'pd1u18','none','',500,'fade','',200);

	SetPanelState('u18', 'pd0u18','fade','',500,'none','',500);

}
});

$axure.eventManager.mouseout('u25', function(e) {
if (!IsTrueMouseOut('u25',e)) return;
if (true) {

	SetPanelState('u21', 'pd0u21','none','',500,'none','',500);

}
});
gv_vAlignTable['u26'] = 'center';
$axure.eventManager.mouseout('u22', function(e) {
if (!IsTrueMouseOut('u22',e)) return;
if (true) {

	SetPanelState('u21', 'pd0u21','none','',500,'none','',500);

}
});
gv_vAlignTable['u23'] = 'center';