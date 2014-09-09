
var mongoose = require('mongoose') ;	// 导入组件
var models = require('../Models/UserModel') ;	// 导入自定义组件
var myuser= models.User;	// 使用User模型，对应的users表
mongoose.connect('mongodb://localhost/blogDB');	// 连接数据库
exports.usermanageData = function(req, res){

   var demo= new myuser({
        UserGUID: '111',
        UserName: '张三',
UserNumber:'0001',
UserBirthDay:'1990.1.1',
UserPhone:'13100000000'

    });
    demo.save(function (err,doc) {
        console.log(doc);
    });
	
    myuser.find(function(err,data){
res.json(data);
    });
  
};

exports.usermanageData2 = function(req, res){
    
};
