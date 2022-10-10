window.onload = function () {
    var regtel = /^1[34578]\d{9}$/;
    var regqq = /^[1-9]\d{4,}$/;    //一个不为0的数 + 次数大于等于4的数字 
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    var regyzm = /^\d{6}$/;
    var regpwd = /^\w{6,16}$/;
    var tel = document.querySelector('#tel');
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var yzm = document.querySelector('#yzm');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(tel, regtel);
    regexp(qq, regqq);
    regexp(nc, regnc);
    regexp(yzm, regyzm);
    regexp(pwd, regpwd);
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i></i> 格式正确';
                this.nextElementSibling.firstChild.className = 'success_icon';

            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i></i> 格式不正确，请从新输入';
                this.nextElementSibling.firstChild.className = 'error_icon';
            }
        }
    }
    surepwd.onblur = function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i></i> 正确';
            this.nextElementSibling.firstChild.className = 'success_icon';

        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i></i> 两次密码不一致';
            this.nextElementSibling.firstChild.className = 'error_icon';
        }
    }


}