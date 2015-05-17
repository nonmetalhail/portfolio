for(var i = 0; i < 6; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u4').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u4'); });
else {
    document.getElementById('u4').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u4'); }, true);
    document.getElementById('u4').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u4'); }, true);
}

widgetIdToSwipeLeftFunction['u4'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('home_signedin.html');

}

}

if (bIE) document.getElementById('u5').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u5'); });
else {
    document.getElementById('u5').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u5'); }, true);
    document.getElementById('u5').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u5'); }, true);
}

widgetIdToDragFunction['u5'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Create.html');

}

}
gv_vAlignTable['u1'] = 'center';document.getElementById('u2_img').tabIndex = 0;

u2.style.cursor = 'pointer';
$axure.eventManager.click('u2', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('user_profile.html');

}
});
gv_vAlignTable['u3'] = 'center';