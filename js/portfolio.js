var json = new myJSON();

$(document).ready(function(){
  $.when(json.loadJSON()).pipe(loadProjects).done(setupListeners);
});

var gallery_kisok = {
  slideshowGroup: 'kiosk',
  wrapperClassName: 'dark',
  //outlineType: 'glossy-dark',
//  dimmingOpacity: 0.8,
//  align: 'center',
//  transitions: ['expand', 'crossfade'],
//  fadeInOut: true,
  wrapperClassName: 'borderless floating-caption',
//  marginLeft: 100,
//  marginBottom: 80,
//  numberPosition: 'caption'
};

var gallery_drinke = {
  slideshowGroup: 'drinke',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_graffiti = {
  slideshowGroup: 'graffiti',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_xfit = {
  slideshowGroup: 'xf',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_psychrometric = {
  slideshowGroup: 'excel',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_slopegraph = {
  slideshowGroup: 'slopegraph',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_pap = {
  slideshowGroup: 'pap',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_eplus = {
  slideshowGroup: 'eplus',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

var gallery_codesam = {
  slideshowGroup: 'codesam',
  wrapperClassName: 'dark',
  wrapperClassName: 'borderless floating-caption',
};

hs.graphicsDir = '../images/graphics/';
hs.align = 'center';
hs.transitions = ['expand', 'crossfade'];
hs.fadeInOut = true;
hs.dimmingOpacity = 0.8;
//hs.outlineType = 'rounded-white';
hs.captionEval = 'this.thumb.alt';
hs.marginBottom = 150; // make room for the thumbstrip and the controls
hs.numberPosition = 'caption';

// Add the slideshow providing the controlbar and the thumbstrip
hs.addSlideshow({
  //slideshowGroup: 'group1',
  interval: 5000,
  repeat: false,
  useControls: true,
  overlayOptions: {
    className: 'text-controls',
    position: 'bottom center',
    relativeTo: 'viewport',
    offsetY: -60
  },
  thumbstrip: {
    position: 'bottom center',
    mode: 'horizontal',
    relativeTo: 'viewport'
  }
});

function myJSON(){
  this.data = 'test';
  // self = this.data;
  this.loadJSON = function(){
    var self = this;
    var d = $.Deferred();
    $.getJSON('portfolio/portfolio.json',function(resp){
      self.data = resp;
    }).done(function(p){
      d.resolve(p);
    }).fail(d.reject);
    return d.promise();
  };
}

var loadProjects = function(){
  var _loadImages = function(iList,pn){
    var _processImages = function(imageList,pname){
      var images = [];
      if(imageList.length%2 == 0){
        for(var i=0;i<imageList.length;i+=2){
          images.push('<div class="row-fluid">'+
            '<div class="span6">'+
              '<a class="highslide" href="'+imageList[i]['src']+'" onClick="return hs.expand(this,gallery_'+pname+')">'+
              '<img src = "'+imageList[i]['src']+'" alt= "'+imageList[i]['caption']+'"></a>'+
              '<div class = "port_caption">'+imageList[i]['caption']+'</div>'+
            '</div>'+
            '<div class="span6">'+
              '<a class="highslide" href="'+imageList[i+1]['src']+'" onClick="return hs.expand(this,gallery_'+pname+')">'+
              '<img src = "'+imageList[i+1]['src']+'" alt= "'+imageList[i+1]['caption']+'"></a>'+
              '<div class = "port_caption">'+imageList[i+1]['caption']+'</div>'+
            '</div></div>');
        }
      }
      else{
        for(var i=0;i<imageList.length-1;i+=2){
          images.push('<div class="row-fluid">'+
            '<div class="span6">'+
              '<a class="highslide" href="'+imageList[i]['src']+'" onClick="return hs.expand(this,gallery_'+pname+')">'+
              '<img src = "'+imageList[i]['src']+'" alt= "'+imageList[i]['caption']+'"></a>'+
              '<div class = "port_caption">'+imageList[i]['caption']+'</div>'+
            '</div>'+
            '<div class="span6">'+
              '<a class="highslide" href="'+imageList[i+1]['src']+'" onClick="return hs.expand(this,gallery_'+pname+')">'+
              '<img src = "'+imageList[i+1]['src']+'" alt= "'+imageList[i+1]['caption']+'"></a>'+
              '<div class = "port_caption">'+imageList[i+1]['caption']+'</div>'+
            '</div></div>');
        }
        var last = imageList.length-1;
        images.push('<div class="row-fluid">'+
          '<div class="span6">'+
            '<a class="highslide" href="'+imageList[last]['src']+'" onClick="return hs.expand(this,gallery_'+pname+')">'+
            '<img src = "'+imageList[last]['src']+'" alt= "'+imageList[last]['caption']+'"></a>'+
            '<div class = "port_caption">'+imageList[last]['caption']+'</div>'+
          '</div></div>');
      }
      return images.join(' ')
    }
    return (iList)?_processImages(iList,pn):'';
  }

  var _loadVideos = function(videoList){
    var _processVideos = function(videoList){
      var vids = [];
      if(videoList.length%2 == 0){
        for(var i=0;i<videoList.length;i+=2){
          vids.push('<div class="row-fluid">'+
            '<div class="span6">'+
              '<video controls>'+
                '<source src="'+videoList[i]['src']+'" type="video/mp4">'+
                'There would be a video here if your browser supported it...'+
              '</video>'+
              '<div class = "port_caption">'+videoList[i]['caption']+'</div>'+
            '</div>'+
            '<div class="span6">'+
              '<video controls>'+
                '<source src="'+videoList[i+1]['src']+'" type="video/mp4">'+
                'There would be a video here if your browser supported it...'+
              '</video>'+
              '<div class = "port_caption">'+videoList[i+1]['caption']+'</div>'+
            '</div></div>');
        }
      }
      else{
        for(var i=0;i<videoList.length-1;i+=2){
          vids.push('<div class="row-fluid">'+
            '<div class="span6">'+
              '<video controls>'+
                '<source src="'+videoList[i]['src']+'" type="video/mp4">'+
                'There would be a video here if your browser supported it...'+
              '</video>'+
              '<div class = "port_caption">'+videoList[i]['caption']+'</div>'+
            '</div>'+
            '<div class="span6">'+
              '<video controls>'+
                '<source src="'+videoList[i+1]['src']+'" type="video/mp4">'+
                'There would be a video here if your browser supported it...'+
              '</video>'+
              '<div class = "port_caption">'+videoList[i+1]['caption']+'</div>'+
            '</div></div>');
        }
        var last = videoList.length-1;
        vids.push('<div class="row-fluid">'+
          '<div class="span6">'+
            '<video controls>'+
                '<source src="'+videoList[last]['src']+'" type="video/mp4">'+
                'There would be a video here if your browser supported it...'+
              '</video>'+
            '<div class = "port_caption">'+videoList[last]['caption']+'</div>'+
          '</div></div>');
      }
      return vids.join(' ')
    }
    return (videoList)?_processVideos(videoList):'';
  }

  var _loadLink = function(siteList){
    var _processSite = function(siteList){
      var sites = [];
      for(var i in siteList){
        sites.push('<a href="'+siteList[i]['src']+'" target="_blank">'+siteList[i]['title']+'</a>');
      }
      return '<h6><span class = "titles">Links: </span>'+sites.join(', ')+'</h6>'
    }
    return (siteList)?_processSite(siteList):'';
  }

  var _loadTeam = function(teamList){
    var _processTeam = function(teamList){
      var team = [];
      for(var i in teamList){
        (teamList[i]['site'])?team.push('<a href="'+teamList[i]['site']+'" target="_blank">'+
          teamList[i]['name']+'</a>'):
          team.push(teamList[i]['name'])
      }
      return '<h6><span class = "titles">Team: </span>' + team.join(', ') + '</h6>'
    }
    return (teamList)?_processTeam(teamList):'';
  }

  var _loadText = function(textList){
    var text = [];
    for(var i in textList){
      for(var item in textList[i]){
        (item=='a')?text.push('<a href="'+textList[i][item]['src']+'" target="_blank">'+textList[i][item]['text']+'</a>'):
          text.push('<'+item+'>'+((typeof textList[i][item] == 'object')?_loadText(textList[i][item]):
            textList[i][item])
            +'</'+item+'>')
      }
    }
    return text.join('')
  }
  
  for (var project in json.data){
    var pproj = json.data[project];
    $('#'+pproj['thumb']['type']).append(
      '<li class="nav-header nav_item">'+
        '<a href="#" value="'+project+'" id = "'+project+'_thumb" class = "port_link">'+ pproj['thumb']['title'] +'</a>'+
      '</li>'
    );

    $('#port_proj').append(
      '<div class="row-fluid port_data" id = "'+project+'">'+
        // '<div class="span3"></div>'+
        '<div class="span12">'+
          '<h4>'+pproj['title']+'<br/><small>'+pproj['date']+'</small></h4>'+
          '<hr>'+
          '<h6><span class = "titles">Keywords: </span>'+pproj['keywords']+'</h6>'+
          _loadTeam(pproj['team'])+
          _loadLink(pproj['site'])+
          '<hr>'+
          '<div class="row-fluid"><div class="span12"><div class="text_column">'+
          _loadText(pproj['text'])+
          '</div></div></div>'+
          _loadImages(pproj['images'],project)+
          _loadVideos(pproj['video'])+
      '</div></div>'
    );
  }
}

var setupListeners = function(){
  $('.port_data').hide();
  $('#drinke').show();
  $('#drinke_thumb').addClass('port_selected');
  //from footer...
  checkScrollPos();

  $('.port_link').on("click",function(){
    $('.port_data').hide("slow");
    $('.port_selected').removeClass('port_selected');
    $(this).addClass('port_selected');
    var pro = $(this).attr('value');
    $('#'+pro).show("slow");
    checkScrollPos();
  });
}