// 存储数据模块
sessionStorage.setItem('uname', 'yingjiayu');
sessionStorage.setItem('password', 'yingjiayu');
var button = document.querySelector('button');
var username = document.querySelector('.username');
var password = document.querySelector('.password');
login_form.onsubmit = function () {
    if (username.value == sessionStorage.getItem('uname') &&
        password.value == sessionStorage.getItem('password')) {
        // console.log(1);
        return true;
    }
    else {
        alert('请检查账号或密码!');
        return false;
    }
}