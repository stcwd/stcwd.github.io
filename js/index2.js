$(function () {
    var boxTop = $('.dw').offset().top;
    var flag = true;
    //一开始就判断位置，避免刷新不显示的bug
    fn();
    function fn() {
        if ($(document).scrollTop() >= boxTop) {
            $('.che').fadeIn();
        } else {
            $('.che').fadeOut();
        }
    }
    $(window).scroll(function () {
        fn();
        //节流阀打开的时候才有用
        if (flag) {
            //利用each  其中DOM对象 需转化    里面的offsettop都不一样
            $('.floor .jiadian').each(function (index, ele) {
                if ($(document).scrollTop() > $(ele).offset().top) {
                    $('.che ul li').eq(index).addClass('current').siblings().removeClass('current');
                }
            })
        }
    })
    $('.che ul li').click(function () {
        flag = false;
        var index = $(this).index();

        //运动完打开节流阀
        $('body,html').stop().animate({
            scrollTop: $('.floor .jiadian').eq(index).offset().top
        }, function () {
            flag = true;
        })
        //哪个li点击就给其添加背景
        $(this).addClass('current').siblings().removeClass('current');
    })
})
