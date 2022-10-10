// 有回调函数的动画
function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 需要每次计算步长，需要写在定时器内
        //（目标位置-现在位置）/xx；  现在位置每次都增大，所以步长会逐渐减小
        // 会出现小数除不尽情况，需要向上取整 ;当为负数时，要向下取整
        var step = (target - obj.offsetLeft) / 10;
        // 完美写法
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft != target) {
            obj.style.left = obj.offsetLeft + step + 'px';
        } else {
            clearInterval(obj.timer);
            // 如果有传入回调函数则定时器结束时调用
            if (callback) {
                callback();
            }
        }
    }, 20)
}