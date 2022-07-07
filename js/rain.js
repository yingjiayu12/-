const rainBox = document.querySelector('.rainBox');
let boxHeight = rainBox.offsetHeight;
let boxWidth = rainBox.offsetWidth;
// console.log(boxHeight,boxWidth);
// 窗口大小改变时进行操作,重新获取大小
window.addEventListener('onresize', function () {
    boxHeight = rainBox.offsetHeight;
    boxWidth = rainBox.offsetWidth;
})
setInterval(function () {
    let rain = document.createElement('div');
    rain.classList.add('rain');
    //随机刷新雨点位置
    rain.style.top = 0;
    rain.style.left = Math.random() * boxWidth + 'px';
    rain.style.opacity = Math.random();
    rainBox.appendChild(rain);
    let race = 1;
    let timer = setInterval(function () {
        if (parseInt(rain.style.top) > boxHeight) {
            clearInterval(timer);
            rainBox.removeChild(rain);
        }
        race++;
        rain.style.top = parseInt(rain.style.top) + race + 'px';
    }, 20)
}, 30);