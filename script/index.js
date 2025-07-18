
$(document).ready(function () {
    //맨처음에 다 숨기기기
/*     $("section,header,.bg").not(".intro").hide();

    setTimeout(function () {
        $(".intro").fadeOut(1000, function() {
            // 1. 헤더 등장
            $("header").fadeIn(800, function() {
                // 2. .bg 등장
                $(".bg").fadeIn(800, function() {
                    // 3. .bg.active 효과(애니메이션)
                    $(".bg").addClass("active").delay(800).fadeOut(800);
                    // 4. 애니메이션이 끝난 뒤 .bg 사라짐
                    $("section:not(.intro)").fadeIn(800);
                });
            });
        });
    },1000); */






    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        speed: 1000,
    });




    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop(); //실행할 위치2200
        var windowHeight = $(window).height();

        var contentText = $(".content .txt-box").offset().top; //텍스트 위치!!2400
        var gap = ((scrollTop - contentText) * -0.3) - 80

        if (contentText + 400 >= scrollTop) {
            //gap 작아 질수록 값은 0 이 됨
            gap = Math.max(gap, 0);
            //opacity 추가해야하는데!
            //gap 을 사용하면 값이 너무 커지는데..
            $(".content .txt-box h2 span").first().css({
                transform: "translateY(" + gap + "%)"
            });
            $(".content .txt-box h2 span").last().css({
                transform: "translateY(" + gap * 1.5 + "%)"
            });
            $(".content .txt-box p span").css({
                transform: "translateY(" + gap * 1.55 + "%)"
            });
            $(".content .txt-box .btn a").css({
                transform: "translateY(" + gap * 1.8 + "%)"
            });
            $(".content .imgs:nth-child(2n-1)").css({
                transform: "translate(" + -gap * 1.5 + "%," + gap + "%)",
                filter: "blur(" + gap + "px)",
                opacity: (gap + 1) * 0.6
            });
            $(".content .imgs:nth-child(2n)").css({
                transform: "translate(" + gap + "%," + gap + "%)",
                filter: "blur(" + gap + "px)",
                opacity: (gap + 1) * 0.6
            });

        }

        //3번쨰 섹션
        var contentText2 = $(".content2 .txt-box").offset().top; //텍스트 위치!!2400
        //2650 //2000
        if (contentText2-200<= scrollTop) {
           
            $(".content2 .txt-box h2 span").css({
                transform: "translateY(0)",
                opacity: 1,
                transition: "all 0.5s ease-in-out"
            });
            $(".content2 .txt-box h2 span").last().css({
                transform: "translateY(0)",
                opacity: 1,
                delay: "0.5s",
                transition: "all 1s ease-in-out"
            });
            $(".content2 .txt-box p span").css({
                transform: "translateY(0)",
                opacity: 1,
                transition: "all 2s ease-in-out"
            });
        }
        /////>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        //화면에서 보이는 상단 기준으로로
        var content2 = $(".content2 .txt-box")[0].getBoundingClientRect().top;
        var imgBox = $(".content2 .img-box").offset().top;

        //4800 4400
        var gap2 = (1 - ((imgBox - scrollTop) * 0.002)) * 2;

        if (content2 < 100) {
            $(".content2 .txt-box").css({
                position: "sticky",
                left: 0,
                top: "85px",
            })
        }

        if (imgBox - 40 >= scrollTop) {
            $(".content2 .img-box").css({
                opacity: gap2,
            })
        }

        var rotate = gap2;
        var rotateBox = $(".content2 .img-box")[0].getBoundingClientRect().top;

        if (rotate > 0.8) {
            $(".content2 .img-box .box:nth-child(2)").css({
                transform: "rotate(" + -rotate * 3 + "deg)",
            })
            $(".content2 .img-box .box:nth-child(4)").css({
                transform: "rotate(" + rotate * 3 + "deg)",
            })
        }

        //5번쨰 섹션
        var con4 = $(".content4 .inner .title-box").offset().top;
        var con4Height = $(".content4 .inner .title-box").outerHeight();
        var sectionHeight = $('.content4').outerHeight();
       
    });
});