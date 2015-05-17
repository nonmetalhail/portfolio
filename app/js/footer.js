if (document.documentElement.clientWidth > 767) {
  var h;
  var left; 
  $(document).ready(function(){
      h = $("#name").height();
      left = $("#name").offset().left;
      $(window).scroll(checkScrollPos);
  });

  $(window).load(function(){
    checkScrollPos();
  });

  function checkScrollPos() {
    var namePos = window.pageYOffset + window.innerHeight;
    var footerPos = $("#foot").offset().top;
    var ypos;

    ypos = (namePos >= footerPos) ? 
      footerPos - $("#name hr").offset().top + $("#name").offset().top : 
      namePos - h;
    $("#name").offset({top:ypos,left:left});
  }
}