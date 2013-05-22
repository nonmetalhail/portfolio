for(var i = 0; i < 7; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u4').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u4'); });
else {
    document.getElementById('u4').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u4'); }, true);
    document.getElementById('u4').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u4'); }, true);
}

widgetIdToSwipeRightFunction['u4'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('created.html');

}

}
gv_vAlignTable['u1'] = 'center';document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Brushes.html');

}
});
gv_vAlignTable['u3'] = 'center';document.getElementById('u5_img').tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('home_signedin.html');

}
});
gv_vAlignTable['u6'] = 'center';