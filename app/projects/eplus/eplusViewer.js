var sims = {'2004 20wwr':['2004 Base', 'WWR 20%'],
            '2004 base':['2004 Envelope', 'R-Wall: CZ 1-4: R8; CZ 5,6: R12; CZ 7: R14.5',
                'R-Roof: R16','WWR 33%','Double-paned windows:','CZ 1-3:', 'U= 0.56', 
                'SHGC = 0.28', 'Tv = 0.42', 'CZ 4+', 'U= 0.48', 'SHGC = 0.39', 
                'Tv = 0.52','No Daylighting', 'Infiltration: 0.2 cfm/ft^2',
                '2010 Lighting Loads','2010 Equipment Loads','2010 HVAC'],
            '2004 40wwr':['2004 Base', 'WWR 40%'],
            '2004 60wwr':['2004 Base', 'WWR 60%'],
            '2004 infil':['2004 Base', 'Improved Infiltration: 0.1cfm/ft^2'],
            '2004 zones':['2004 Base'], //********
            '2010 base':['2010 base', 'R-Wall: CZ 1,2: R8; CZ 3: R12; CZ 4+: R14.5',
                'R-Roof: CZ 1: R16; CZ 2+: R21', 'WWR 33%', 'Double-paned windows:',
                'CZ 1-3:', 'U= 0.56', 'SHGC = 0.28', 'Tv = 0.42', 'CZ 4+', 'U= 0.48', 
                'SHGC = 0.39', 'Tv = 0.52','Stepped Daylighting controls', 
                '~60% floor area daylit', 'Infiltration: 0.1 cfm/ft^2'],
            // '2010 sanitycheck':['2010 base', 'Same as 2010 base', 'different script build'],
            '2010 no DL':['2010 base', 'Daylighting controls removed'],
            '2010 20wwrDL':['2010 base', 'WWR 20%'],
            '2010 20wwrNoDL':['2010 base','WWR 20%', 'Daylighting controls removed'],
            '2010 40wwrDL':['2010 base','WWR 40%'],
            '2010 40wwrNoDL':['2010 base','WWR 40%', 'Daylighting controls removed'],
            '2010 60wwrDL':['2010 base','WWR 60%'],
            '2010 60wwrNoDL':['2010 base', 'WWR 60%','Daylighting controls removed'],
            '2010 adv win':['2010 base', 'Adv Double-paned windows:','CZ 1-3:', 
                'U= 0.36', 'SHGC = 0.25', 'Tv = 0.57', 'CZ 4+', 'U= 0.35', 'SHGC = 0.35', 
                'Tv = 0.62'],  //NOTE: this is brian windows in the spreasheet
            '2010 3panewindows':['2010 base','Triple-paned windows:','U= 0.14', 
                'SHGC = 0.47', 'Tv = 0.61'], //NOTE this is adv window in the spreadsheet
            '2010 quad':['2010 base', 'Quad-paned windows', 'U= 0.1', 'SHGC = 0.29', 'Tv = 0.45'],
            '2010 Electrochromic':['2010 base','Electrochromic glazing with Glare Controller', 
                'EC off:','U= 0.30', 'SHGC = 0.48', 'Tv = 0.65', 
                'EC on', 'U= 0.30', 'SHGC = 0.14', 'Tv = 0.10'],
            '2010 Electrochromic DL':['2010 base','Electrochromic glazing with DL Controller', 
                'EC off:', 'U= 0.30', 'SHGC = 0.48', 'Tv = 0.65', 
                'EC on', 'U= 0.30', 'SHGC = 0.14', 'Tv = 0.10'],
            '2010 DLcont':['2010 base', 'Continuous DL controls'],
            '2010 impDLstep':['2010 base', 'Different DL Sensor layout', 'Stepped DL controls'],
            '2010 impDLcont':['2010 base', 'Different DL Sensor layout', 'Continuous DL controls'],
            '2010 31AR':['2010 base', '3:1 Aspect Ratio'],
            '2010 31ARDLcont':['2010 base', '3:1 Aspect Ratio', 
                'increased window head height', 'Continuous DL controls'],
            '2010 31ARDLstep':['2010 base', '3:1 Aspect Ratio', 
                'increased window head height', 'Stepped DL controls'],
            '2010 50 OH':['2010 base','Fixed overhang over all windows',
                'Changing Projection Factor per CZ', 'Provides 50% shade at equinox'],
            '2010 OH 25':['2010 base','25% Projection Factor'],
            '2010 OH 50':['2010 base','50% Projection Factor'],
            '2010 OH 75':['2010 base','75% Projection Factor'],
            'P++ roof zones':['2010 base','R-roof: CZ 1: R26; CZ 2+: R31'],
            'P++ wall zones':['2010 base', 'R-Wall: CZ 1-3: R16; CZ 4+: R27'],
            'P++ full zones':['2010 base', 'R-Wall: CZ 1-3: R16; CZ 4+: R27', 
                'R-roof: CZ 1: R26; CZ 2+: R31'],
            'P++ adv win':['2010 base', 'Adv Double-paned windows:','CZ 1-3:', 
                'U= 0.36', 'SHGC = 0.25', 'Tv = 0.57', 'CZ 4+', 'U= 0.35', 'SHGC = 0.35', 
                'Tv = 0.62'],
            'P++ final':['P++ Full base', 'Continuous DL', '100% floor area daylit', 
                'CZ 1,2:','Standard Double-paned window', 'OH PF 50%', 
                'CZ 3-7: Adv Double-paned window', 'OH PF 25%'],
            'HP roof zones':['2010 base', 'R-roof: R59'],
            'HP wall zones':['2010 base', 'R-wall: R44'],
            'HP full zones':['2010 base', 'R-wall: R44', 'R-roof: R59'],
            'HP adv win':['2010 base','Adv Double-paned windows:','CZ 1-3:', 
                'U= 0.36', 'SHGC = 0.25', 'Tv = 0.57', 'CZ 4+', 'U= 0.35', 'SHGC = 0.35', 
                'Tv = 0.62'],
            'HP final':['HP Full base', 'Continuous DL', '100% floor area daylit', 
                'CZ 1,2:','Quad-paned window', 'OH PF 75%', '3:1 Aspect Ratio', 
                'Increased window head height', 
                'CZ 3-5: Quad-paned window','3:1 Aspect Ratio', 
                'Increased window head height',
                'CZ 6,7:','Triple-paned window','3:1 Aspect Ratio', 
                'Increased window head height']
            };

$(document).ready(function()
{
    for(key in sims)
    {
        $('#scenario1').append('<option value = "' + key +'">' + key + '</option>');
        $('#scenario2').append('<option value = "' + key +'">' + key + '</option>');
    }
    $('#scenario1 option[value="2004 base"]').attr("selected", "selected");
    $('#scenario2 option[value="2010 base"]').attr("selected", "selected");

    //silly to do this instead of embedd in function, but easy to cut and paste
    $('#runInfo1Head').text($('#scenario1').val());    
    temp = sims[$('#scenario1').val()];
    for(i in temp)
    {
        $('#runInfo1List').append('<li>' + temp[i] + '</li>');
    }
    $('#runInfo2Head').text($('#scenario2').val());    
    temp = sims[$('#scenario2').val()];
    for(i in temp)
    {
        $('#runInfo2List').append('<li>' + temp[i] + '</li>');
    }

    createGraph()

    $('#scenario1').on("change", function()
    {
        $('#runInfo1Head').text($('#scenario1').val());
        $('#runInfo1List').children().remove();
        
        temp = sims[$('#scenario1').val()];
        for(i in temp)
        {
            $('#runInfo1List').append('<li>' + temp[i] + '</li>');
        }

        createGraph();
    });

    $('#scenario2').on("change", function()
    {
        $('#runInfo2Head').text($('#scenario2').val());
        $('#runInfo2List').children().remove();
        
        temp = sims[$('#scenario2').val()];
        for(i in temp)
        {
            $('#runInfo2List').append('<li>' + temp[i] + '</li>');
        }

        createGraph();
    });

});

var w = 200;
var xSpace = 30;
var textSpace = 120;  //make room for x-axis text
var h = 225 + textSpace;
var xBase = 25;
//var yMult = 15;
var yMult = {};
var barWidth = 10;
var opacity = '0.8';
//c b a in from top to bottom
var cities = ["","","DULUTH MN",
              "","HELENA MT","BURLINGTON VT",
              "Vancouver","Boise ID","CHICACO IL",
              "Salem","ALBAQUERQUE NM","BALTIMORE MD", 
              "SF","EL PASO TX","Memphis TN",
              "","PHOENIX AZ","HOUSTON TX",
              "","","MIAMI FL"]

x = d3.scale.linear().range([0, w]),
y = d3.scale.linear().range([0, h - 40]); //maybe this is why I had issues with the ticks using y(d)...maybe next time try changing this
//yAxis = d3.svg.axis()
//    .scale(y)
//    .ticks(10)
//    .orient("left")
//    .tickSize(2, 1, 0);
    
var colors = {
            "Heating":"rgba(255, 0, 0," + opacity + ")",
            "Cooling":"rgba(0, 255, 255," + opacity + ")",
            "Interior Lighting":"rgba(255, 255, 0," + opacity + ")",
            "Exterior Lighting":"rgba(255, 150, 0, " + opacity + ")",
            "Interior Equipment":"rgba(0, 255, 0," + opacity + ")",                        
            "Fans":"rgba(175,175,175," + opacity + ")",
            "Water Systems":"rgba(0, 0, 255," + opacity + ")"
            }                        

var colors2 = {
            "Heating":"rgba(155, 0, 0, " + opacity + ")",
            "Cooling":"rgba(0, 155, 155, " + opacity + ")",
            "Interior Lighting":"rgba(155, 155, 0, " + opacity + ")",
            "Exterior Lighting":"rgba(155, 50, 0, " + opacity + ")",
            "Interior Equipment":"rgba(0, 155, 0, " + opacity + ")",                        
            "Fans":"rgba(100, 100, 100, " + opacity + ")",
            "Water Systems":"rgba(0, 0, 155, " + opacity + ")"
            }     

// $('#graphButton').live("click",function ()
function createGraph()
{
    $('svg').remove();
    $.each(cities, function(i, cityName)
    {
        var svg = d3.select("#main")
            .append("svg")
            .attr("width", w + xSpace)
            .attr("height", h)
            .append("g")
            .attr("transform", "translate(" + xSpace + "," + (h-textSpace) + ")scale(1,-1)");            
            //x(1) and scale(-1,-1) makes it reversed like in example
            //translate is a linear movement, and scale says which way to add elements
            //so x(1) = start at w instead of 0; scale(-1... says put elements to the left
            //this causes all sorts of problems later; could not use .axis() b/c it drew it wrong from this scale; had to add manually
        if(cityName != "")
        {
//            console.log(city);
            var dataset = {};
            var dataset2 = {};
            var eui1 = {};
            var eui2 = {};
                  
            // A container to hold the y-axis rules.
            var rules = svg.append("g");
            
            //container for bars
            var body = svg.append("g")
                .attr("transform", "translate(0,0)");
            var body2 = svg.append("g")
                .attr("transform", "translate(0,0)");

                
            d3.csv("csv/" + $('#scenario1').val(), function(data) 
            {
                
            //    console.log("csv open");
            //    console.log(data);
            
            //    cities = getKeys(data);
            //    console.log(cities);
                data.forEach(function(d) 
                {
                    //doh! realizing I probably could have used csv.parse; should have looked at API first
                    if(d['city'] != "Energy Per Total Building Area [kBTU/ft_]") //save for possible use later
                    {
                        for (key in d)
                        {       
                            if(dataset[key])
                            {
                                var tempArr = dataset[key];
                            }
                            else
                            {
                                var tempArr = []
                            }
                            if(isNaN(d[key]))
                            { 
                                var tempVal = d[key];
                            }
                            else
                            {
                                var tempVal = +d[key];    
                            }
                            tempArr.push(tempVal);
                            dataset[key] = tempArr;
                        }
                    }
                    else
                    {
                        for (key in d)
                        {
                            if(isNaN(d[key]))
                            { 
                                eui1[key] = d[key];
                            }
                            else
                            {
                                eui1[key] = +d[key];    
                            }
                        }            
                    }
                });
                
            //    tempRule = d3.max(data, function(d) { return d[cityName]; });    
                
                console.log(dataset);
                //have to embedd one cvs call in the other for async reasons…Maybe there is a more elegant solution, but no time
                d3.csv("csv/" + $('#scenario2').val(), function(data) 
                {
                    // Convert strings to numbers.
                    data.forEach(function(d) 
                    {
                        if(d['city'] != 'Energy Per Total Building Area [kBTU/ft_]')
                        {
                            for (key in d)
                            {
                                if(dataset2[key])
                                {
                                    var tempArr = dataset2[key];
                                }
                                else
                                {
                                    var tempArr = []
                                }
                                if(isNaN(d[key]))
                                { 
                                    var tempVal = d[key];
                                }
                                else
                                {
                                    var tempVal = +d[key];    
                                }
                                tempArr.push(tempVal);
                                dataset2[key] = tempArr;
                            }
                        }
                        else
                        {
                            for (key in d)
                            {
                                if(isNaN(d[key]))
                                { 
                                    eui2[key] = d[key];
                                }
                                else
                                {
                                    eui2[key] = +d[key];    
                                }
                            }            
                        }
                    });
            //        console.log(dataset2);
//                    console.log(eui2);            
            //        console.log(dataset2[cityName][4]);
                    //set the domains
                    x.domain([0, 7]);
                    //choose the bigger of dataset1 or dataset2
                    //In order to prevent the scales from changing for each graph, I've hard coded Duluth as the decider. It seems to always
                    //be the highest, so it works in this case. Not entirely sure how to fix a more general solution
                    //to revert back to a more general, the obj in the ifs should be cityName. 
                    //Maybe some sort of compare in the very beginning: step 1: cycle through dataset for each city/end use type
                    // step two: find largest for city then compare cities; input that city in here.
                    if(d3.max(dataset2['DULUTH MN'], function(d) { return d; }) > d3.max(dataset['DULUTH MN'], function(d) { return d; }))
                    {
                        y.domain([0, d3.max(dataset2['DULUTH MN'], function(d) { return d; })]);
                        //to make the scales of the graph change, need this line; 
                        //Otherwise, scales same and bars relative;
                        yMult[cityName] = 200/d3.max(dataset2['DULUTH MN'], function(d) { return d; });
                    }
                    else
                    {
                        y.domain([0, d3.max(dataset['DULUTH MN'], function(d) { return d; })]);
                        yMult[cityName] = 200/d3.max(dataset['DULUTH MN'], function(d) { return d; });
            
                    } 
//                   console.log(yMult);
            // rules.append("svg:g")
            //    .attr("class", "y axis")
            //    .attr("transform", "translate(" + 25 + ",0)scale(1,-1)")
            //    .call(yAxis);
            //        
            //        console.log(y.ticks(10));
                    //rule line color set in css
                    rules = rules.selectAll(".rule")
                        .data(y.ticks(10))
                        .enter().append("g")
                        .attr("class", "rule")
                        .attr("transform", function(d) 
                        { 
                            //doing this in the translate tag didnt work b/c it was misinterpreting math equations and strings
                            var temp = d * yMult[cityName];
                            return "translate(0," + temp + ")"; 
                         });
             
                    rules.append("line")
                        .attr("x2", w);
                  
                    rules.append("text")
                        .attr("x", -2)
                        .attr("dy", ".35em")
                        .attr("transform", "rotate(180)scale(-1,1)")
                        .attr("text-anchor", "end")
                        .text(function(d) { return d });
                        
                    rules.append("line")
                        .attr("y1", 0)
                        .attr("y2",h-textSpace-20)
                        .attr("x1",0)
                        .attr("x2",0)
                        .attr("transform", function(d) 
                        { 
                            //doing this in the translate tag didnt work b/c it was misinterpreting math equations and strings
                            var temp = d*yMult[cityName];
                            return "translate(0," + -temp + ")"; 
                         });
            
                    var rect = body.selectAll('g')
                        .data(dataset[cityName])
                        .enter().append('g')
                        .append("rect")
                        .attr("x", function(d, i) 
                            {
                            return (i * xBase) + xBase - 10;
                            })
                        .attr("y", function(d)
                        {
                            return 0;
                        })
                        .attr("width", barWidth)                
                        //static set the height; for dynamic, use transition instead
                        .transition()
                        .duration(300)
                        .ease('quad')
                        .attr("height", function(d) 
                        {
                            return d * yMult[cityName];
                        })
                        .attr("fill", function(d,i)
                        {
                            return colors[dataset["city"][i]] 
                        })
                        .attr("class", function(d,i)
                        {
                            return dataset["city"][i]
                        })
                        .attr("eui", eui1[cityName])
                        .attr("sim", $('#scenario1').val());                          
                                                       
                    var rect2 = body2.selectAll("rect")
                        .data(dataset2[cityName])
                        .enter().append('g')
                        .append("rect")
                        .attr("x", function(d, i) 
                            {
                            return (i * xBase) + xBase;
                            })
                        .attr("y", function(d)
                        {
                            return 0;
                        })
                        .attr("width", barWidth)                
                        .transition()
                        .duration(300)
                        .ease('quad')
                        .attr("height", function(d) 
                        {
                            return d * yMult[cityName];
                        })
                        .attr("fill", function(d,i)
                        {
                            return colors2[dataset["city"][i]] 
                        })
                        .attr("class", function(d,i)
                        {
                            return dataset2["city"][i]
                        })
                        .attr("eui", eui2[cityName])
                        .attr("sim", $('#scenario2').val());                            
                                
                     svg.append("g").selectAll("text")
                            .data(dataset['city'])
                            .enter().append("text")
                            .attr("text-anchor", "end")
                            .attr("transform", function(d,i) 
                                {
                                    //doing this in the translate tag didnt work b/c it was misinterpreting math equations and strings 
                                    var tempX = i*xBase + xBase - 5;
                                    var tempY = -10;//i%2*-10 -10; //this was to offset hoizontal text; still too large
                                    return "translate(" + tempX + "," + tempY + ")scale(1,-1)rotate(-90)"; })
                            .attr("dy", ".71em")
                            .text(String);       
            
               		// add Chart Title
            		svg.append("text")
            				 .text(cityName)
            				 .attr("x", w/2)
            				 .attr("dy","-1em")
            				 .style("text-anchor","middle")
            				 .attr('transform','scale(1,-1)translate(0,'+(h-550)+')');
            				 
			 		// add y-axis label
            		svg.append("text")
        				.text("kBTU/square foot")
        				//.attr("x", -h/2)
        				.attr("dy","-2em")
        				.style("text-anchor","middle")
        				.attr('transform','scale(1,-1)translate(0,'+(h-450)+')rotate(-90)');
        				
        		    
        		    d3.selectAll('rect')
        		        .on("mouseover",displayBox)
                        .on("mouseout", removeBox);
                });      
            });
        }
     });
}

function getKeys(obj){
   var keys = [];
   for(var key in obj){
      keys.push(key);
   }
   return keys;
}

function getVal(obj){
   var val = [];
   for(var key in obj){
      val.push(obj[key]);
   }
   return val;
}

function displayBox(d, i) 
{ 
    d3.select(this) 
      .transition() 
      .duration(1000) 
      .ease("elastic", 4, .3) 
      .attr("width", '12');
      
    var t = $(this).attr("class");
    var eui = $(this).attr("eui");
    var sim = $(this).attr("sim");    
    var perc = roundNumber(d/eui * 100, 2);
    
    console.log(sim);

//    console.log(d);
//    console.log(t);

//    xPos = d3.svg.mouse(this)[0] + 800;
//    yPos = (d3.svg.mouse(this)[1])*(-1) + 300;
    
//    console.log($(this).position());
//    console.log($(this).closest('svg').position());       

    d3.select(".infobox").style("display", "block");	
    d3.select(".infobox").style("top", [$(this).position().top - 25]);
    d3.select(".infobox").style("left",[$(this).position().left + 25]);
    d3.select(".infobox").style("display", "block");	
    d3.select("h3.sim").text(sim);
    d3.select("p.eui").text(eui + " kBTU/SF");
    d3.select("h4.sys").text(t);
    d3.select("p.sys").text(d + " kBTU/SF");    
    d3.select("p.per").text(perc + "%");    
} 

function removeBox(d, i) 
{ 
    d3.select(this) 
      .transition() 
      .duration(1000) 
      .ease("elastic", 4, .3) 
      .attr("width", '10');

    d3.select(".infobox").style("display", "none");	
} 

function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}