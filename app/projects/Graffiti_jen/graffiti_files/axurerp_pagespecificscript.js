for(var i = 0; i < 10; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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

if (bIE) document.getElementById('u9').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u9'); });
else {
    document.getElementById('u9').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u9'); }, true);
    document.getElementById('u9').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u9'); }, true);
}

widgetIdToSwipeRightFunction['u9'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('map.html');

}

}
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
gv_vAlignTable['u8'] = 'center';