exports.index = function(req, res){
  res.render('bsframework', { title: "博客首页" });
};

exports.navdetail = function(req, res){
  res.render('navdetail', { title: "博客首页" });
};

exports.framework = function(req, res){
  res.render('framework', { title: "博客首页" });
};
