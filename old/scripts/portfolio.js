var json = new myJSON();

$(document).ready(function()
{
  $.when(json.loadJSON()).pipe(loadProjects).done(setupListeners);

  var galleryKiosk= {
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

  var galleryXF= {
    slideshowGroup: 'xf',
    wrapperClassName: 'dark',
    wrapperClassName: 'borderless floating-caption',
  };

  var galleryExcel= {
    slideshowGroup: 'excel',
    wrapperClassName: 'dark',
    wrapperClassName: 'borderless floating-caption',
  };

  var galleryShade= {
    slideshowGroup: 'shade',
    wrapperClassName: 'dark',
    wrapperClassName: 'borderless floating-caption',
  };

  var galleryPAP= {
    slideshowGroup: 'pap',
    wrapperClassName: 'dark',
    wrapperClassName: 'borderless floating-caption',
  };

  var galleryEPlus= {
    slideshowGroup: 'eplus',
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
});

function myJSON(){
  this.data = 'test';
  // self = this.data;
  this.loadJSON = function(){
    var self = this;
    var d = $.Deferred();
    $.getJSON('portfolio.json',function(resp){
      self.data = resp;
    }).done(function(p){
      d.resolve(p);
    }).fail(d.reject);
    return d.promise();
  };
}

var loadProjects = function(){
  var _loadImages = function(imageList){
    var images = [];
    for(var i in imageList){
        images.push('<a class="highslide" href="'+imageList[i]['src']+'" onClick="return hs.expand(this,galleryKiosk)">'+
          '<img src = "'+imageList[i]['src']+'" alt= "'+imageList[i]['caption']+'"></a>'+
        '<div class = "port_caption">'+imageList[i]['caption']+'</div>')
    }
    return images.join(' ')
  }

  var _loadLink = function(siteList){
    var _processSite = function(siteList){
      var sites = [];
      for(var i in siteList){
        sites.push('<a href="'+siteList[i]['src']+'" target="_blank">'+siteList[i]['title']+'</a>');
      }
      return '<h4 class = "port_site">'+sites.join(', ')+'</h4>'
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
      return '<h4 class="port_team">Team: ' + team.join(', ') + '</h4>'
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
    $('#port_thumb').append(
      '<div id = "'+project+'_thumb">'+
        '<img src = "'+pproj['thumb']['src']+'" alt = "'+pproj['thumb']['alt']+'">'+
        '<h4>'+pproj['thumb']['title']+'</h4>'+
      '</div>'
    );

    $('#port_proj').append(
      '<section class = "port_data" id = "'+project+'">'+
        '<div class = "port_title">'+pproj['title']+' <span class = "port_date">'+pproj['date']+'</span>'+
        '<h4>Keywords: <span id="keywords">'+pproj['keywords']+'</span></h4>'+
        '</div>'+
        '<div class = "port_data_left">'+
        _loadImages(pproj['images'])+
        '</div>'+
        '<div class = "port_data_right">'+
        _loadLink(pproj['site'])+
        _loadTeam(pproj['team'])+
        _loadText(pproj['text'])+
        '</div>'+
      '</section>'
    );
  }
}

var setupListeners = function(){
  var last;
  $('.port_data').hide();
  $('.port_thumb').on('click','div',function(){
    $(last).removeClass("port_selected");
    $(this).addClass("port_selected");
    $('.port_data').hide("slow");
    var str = '#' + $(this).attr('id').split('_')[0];
    $(str).show("slow");
    last = this;
  });
  $('.port_thumb').on('mouseover','div',function(){
    $(this).addClass("port_hover");
  });
  $('.port_thumb').on('mouseout','div',function(){
    $(this).removeClass("port_hover");
  }); 
}