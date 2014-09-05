function HideNorth() {
   $('#mainlayoutdiv').layout('collapse', 'north');
   $('#tab-tools').hide();
};



function InitNav(condition) {
    $('#devmain').children().remove();
    $('#devmain').append('<iframe scrolling="no" frameborder="0"  src="Home/NavDetail?id=' + condition + '" style="width:100%;height:100%;"></iframe>');
};

//function addTab(title, href, icon) {
//    var tt = $('#MainTab');
//    if (tt.tabs('exists', title)) {//如果tab已经存在,则选中并刷新该tab          
//        tt.tabs('select', title);
//        //refreshTab({tabTitle:title,url:href});  
//    } else {
//        if (href) {
//            var content = '<iframe scrolling="no" frameborder="0"  src="' + href + '" style="width:100%;height:100%;"></iframe>';
//        } else {
//            var content = '未实现';
//        }
//        tt.tabs('add', {
//            title: title,
//            closable: true,
//            content: content,
//            iconCls: icon || 'icon-default'
//        });
//    }
//}



function addTab(title, href, icon) {
    var tt = $('#MainTab');
    if (tt.tabs('exists', title)) {//如果tab已经存在,则选中并刷新该tab          
        tt.tabs('select', title);
        //refreshTab({tabTitle:title,url:href});  
    } else {

        tt.tabs('add', {
            title: title,
            closable: true,
            href: href,
            iconCls: icon || 'icon-default'
        });

    }
}