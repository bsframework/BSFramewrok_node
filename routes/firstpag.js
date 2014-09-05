
/*
 * GET home page.
 */

exports.firstpag = function(req, res){
var querystring = require("querystring");
  var info=""; 
  req.addListener("data",function(chunk){ 
        info += chunk; 
    }) 
  req.addListener("end",function(){ 
             info = querystring.parse(info); 
            if(info.name == "a"){ 
               res.render('firstpag', { title: info.pwd });
            }else{ 
                res.render('firstpag', { title: info.pwd }); 
            }
	}) 
  
};
exports.secpag = function(req, res){
  res.render('secpag', { title: 'secpag' });
};
