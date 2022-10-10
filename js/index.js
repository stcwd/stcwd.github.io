// 先加载
window.addEventListener('load', function () {
    // 1.获得元素
    var l = document.querySelector('.last');
    var r = document.querySelector('.next');
    var foucs = document.querySelector('.foucs');
    var ol = foucs.querySelector('ol');
    var ul = foucs.querySelector('ul');
    var last = document.querySelector('.last');
    var next = document.querySelector('.next');
    // 获取ul里面li的数量  （图片的数量）
    var lis = ul.children;
    // 2.给ol添加相对应的li
    for (var i = 0; i < lis.length; i++) {
        var li = document.createElement('li');
        // 给每个li加自身属性，加以区分
        li.setAttribute('index', i);
        ol.appendChild(li);

        // li的排他思想
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            // 点击li后一起把index给num和circle 使小圆圈对应上
            num = index;
            circle = index;
            animate(ul, -index * foucs.clientWidth);
        })
    }
    ol.children[0].className = 'current';

    // 在生成相应小圆圈后再克隆，不会影响小圆圈的数量
    // 3.克隆第一张轮播图
    var first = ul.children[0].cloneNode(true);
    // 给ul添加第一张轮播图
    ul.appendChild(first);

    foucs.addEventListener('mouseover', function () {
        l.style.display = 'block';
        r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    foucs.addEventListener('mouseout', function () {
        l.style.display = 'none';
        r.style.display = 'none';
        timer = setInterval(function () {
            {
                next.click();
            }
        }, 1500);
    })
    var num = 0;
    var circle = 0;
    next.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        // 不用加else
        num++;
        animate(ul, -num * foucs.clientWidth);
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        fn();

    })
    last.addEventListener('click', function () {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = - num * foucs.clientWidth + 'px';
        }
        // 不用加else
        num--;
        animate(ul, -num * foucs.clientWidth);
        circle--;
        if (circle < 0) {
            circle = 3;
        }
        fn();
    })
    function fn() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function () {
        {
            next.click();
        }
    }, 1500);
})