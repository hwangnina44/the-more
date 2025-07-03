$(document).ready(function () {

    $(document).ready(function () {
        // 2.5초 후 인트로 화면 천천히 사라지기
        setTimeout(function () {
            $('.intro').fadeOut(1000); // 1초 동안 사라짐
        }, 2500);
    });
    var swiper = new Swiper(".mySwiper", {

    });
});