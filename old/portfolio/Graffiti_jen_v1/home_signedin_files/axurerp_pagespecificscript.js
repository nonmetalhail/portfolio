for(var i = 0; i < 18; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('map.html');

}

}

if (bIE) document.getElementById('u7').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u7'); });
else {
    document.getElementById('u7').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u7'); }, true);
    document.getElementById('u7').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u7'); }, true);
}

widgetIdToDragFunction['u7'] = function() {
var e = windowEvent;

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Create.html');

}

}
gv_vAlignTable['u17'] = 'center';document.getElementById('u16_img').tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});
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

	self.location.href=$axure.globalVariableProvider.getLinkUrl('home_new.html');

}
});
gv_vAlignTable['u3'] = 'center';document.getElementById('u5_img').tabIndex = 0;

u5.style.cursor = 'pointer';
$axure.eventManager.click('u5', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('user_profile.html');

}
});
gv_vAlignTable['u6'] = 'center';document.getElementById('u8_img').tabIndex = 0;

u8.style.cursor = 'pointer';
$axure.eventManager.click('u8', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('viewer.html');

}
});
gv_vAlignTable['u9'] = 'center';