for(var i = 0; i < 10; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

if (bIE) document.getElementById('u2').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u2'); });
else {
    document.getElementById('u2').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u2'); }, true);
    document.getElementById('u2').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u2'); }, true);
}

widgetIdToSwipeLeftFunction['u2'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('color.html');

}

}

if (bIE) document.getElementById('u3').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u3'); });
else {
    document.getElementById('u3').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u3'); }, true);
    document.getElementById('u3').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u3'); }, true);
}

widgetIdToSwipeRightFunction['u3'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Description.html');

}

}
gv_vAlignTable['u1'] = 'center';document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('home_signedin.html');

}
});
gv_vAlignTable['u5'] = 'center';document.getElementById('u6_img').tabIndex = 0;

u6.style.cursor = 'pointer';
$axure.eventManager.click('u6', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('home_signedin.html');

}
});
gv_vAlignTable['u7'] = 'center';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('created.html');

}
});
gv_vAlignTable['u9'] = 'center';