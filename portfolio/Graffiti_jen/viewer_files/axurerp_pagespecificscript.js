for(var i = 0; i < 5; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u2').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u2'); });
else {
    document.getElementById('u2').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u2'); }, true);
    document.getElementById('u2').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u2'); }, true);
}

widgetIdToSwipeRightFunction['u2'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer_deets.html');

}

}
gv_vAlignTable['u1'] = 'center';document.getElementById('u3_img').tabIndex = 0;

u3.style.cursor = 'pointer';
$axure.eventManager.click('u3', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('graffiti.html');

}
});
gv_vAlignTable['u4'] = 'center';