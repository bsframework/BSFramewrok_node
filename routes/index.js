
/*
 * GET home page.
 */

exports.index = function(req, res){
  var str='';
  for(var i=0;i<5;i++){
	str+= '<div>express</div>';
  };
  res.render('index', { title: str });
};