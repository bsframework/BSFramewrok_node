exports.usermanage = function(req, res){
  res.render('usermanage', { title: "用户管理" });
};

exports.navdetail = function(req, res){
  res.render('navdetail', { title: "博客首页" });
};
