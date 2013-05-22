for(var i = 0; i < 18; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u16').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u16'); });
else {
    document.getElementById('u16').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u16'); }, true);
    document.getElementById('u16').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u16'); }, true);
}

widgetIdToSwipeRightFunction['u16'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('map.html');

}

}

if (bIE) document.getElementById('u17').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u17'); });
else {
    document.getElementById('u17').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u17'); }, true);
    document.getElementById('u17').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u17'); }, true);
}

widgetIdToDragFunction['u17'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('sign_up.html');

}

}
gv_vAlignTable['u15'] = 'center';document.getElementById('u10_img').tabIndex = 0;

u10.style.cursor = 'pointer';
$axure.eventManager.click('u10', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});
gv_vAlignTable['u11'] = 'center';document.getElementById('u12_img').tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});
gv_vAlignTable['u13'] = 'center';document.getElementById('u14_img').tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});
gv_vAlignTable['u1'] = 'center';document.getElementById('u2_img').tabIndex = 0;

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('graffiti.html');

}
});
gv_vAlignTable['u5'] = 'center';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});
gv_vAlignTable['u7'] = 'center';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});
gv_vAlignTable['u9'] = 'center';