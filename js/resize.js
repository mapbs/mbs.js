(function () {
    console.log("初始化");

    resizeWindow();
})();

function resizeWindow() {
    function setDivHeight() {
        var div = document.getElementById('map');
        div.style.height = window.innerHeight + 'px';
    }

    window.onload = setDivHeight;

    window.addEventListener('resize', setDivHeight);
}