for(var i = 0; i < 20; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

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

if (bIE) document.getElementById('u19').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u19'); });
else {
    document.getElementById('u19').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u19'); }, true);
    document.getElementById('u19').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u19'); }, true);
}

widgetIdToSwipeRightFunction['u19'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('map.html');

}

}
gv_vAlignTable['u18'] = 'center';document.getElementById('u17_img').tabIndex = 0;

u17.style.cursor = 'pointer';
$axure.eventManager.click('u17', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});
gv_vAlignTable['u16'] = 'center';document.getElementById('u15_img').tabIndex = 0;

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
