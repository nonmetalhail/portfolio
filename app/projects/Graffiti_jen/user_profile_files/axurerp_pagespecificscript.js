for(var i = 0; i < 4; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u3').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u3'); });
else {
    document.getElementById('u3').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u3'); }, true);
    document.getElementById('u3').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u3'); }, true);
}

widgetIdToSwipeRightFunction['u3'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('home_signedin.html');

}

}
gv_vAlignTable['u2'] = 'center';