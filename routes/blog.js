exports.index = function(req, res){
  res.render('blog', { title: "博客首页" });
};

exports.navdetail = function(req, res){
  res.render('navdetail', { title: "博客首页" });
};
