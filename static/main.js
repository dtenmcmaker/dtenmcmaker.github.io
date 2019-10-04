var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

function getStatus(path, success, fail) {
    var fail = fail || function () {
            console.log('出错。');
        };
    $.ajax({
        url: path + "/status.json",
        type: "get",
        dataType: "json",
        success: function (data) {
            success(data);
        },
        error: function (err) {
            fail(err);
        }
    });
}

function flexify(set) {
    $(document).ready(function () {
        set();
        $(window).scroll(function () {
            set();
        }).resize(function () {
            set();
        });
    });
}

layui.use('element', function () {
    var element = layui.element;
});

$(document).ready(function () {
    flexify(function () {
        $('.board-container').css('height', ($(window).width() < 1080 ? 0.85 * $(window).height() : Math.min(0.85 * $(window).height(), 9 / 16 * $(window).width())) + 'px');
    });
});