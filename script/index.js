
$(document).ready(function () {
    //맨처음에 다 숨기기기
    $("section,header,.bg").not(".intro").hide();

    setTimeout(function () {
        $(".intro").fadeOut(1000, function () {
            // 1. 헤더 등장
            $("header").fadeIn(800, function () {
                // 2. .bg 등장
                $(".bg").fadeIn(800, function () {
                    // 3. .bg.active 효과(애니메이션)
                    $(".bg").addClass("active").delay(800).fadeOut(function () {
                        $("section:not(.intro)").fadeIn();
                    });
                });
            });
        });
    }, 1000);


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
        if (contentText2 - 200 <= scrollTop) {

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

        //5번쨰 섹션 시작점점
        var box = $(".content4 .inner .title-box")
        var boxStart = $(".content4").offset().top;
        var boxHeight = $(".content4").outerHeight();

        var titletHeight = $(".content4 .inner .title-box").outerHeight();
        var sectionHeight = $('.content4').outerHeight();

        var boxEnd = boxStart + boxHeight - titletHeight;
        //console.log(scrollTop,boxStart, boxEnd);
        //boxstart가 스크롤 탑보다 커지면 글자가 조금씩 올라오게!!
        //스크롤탑이 커지는 값이니까 그걸로 조절!!
        var gap4 = ((boxStart - scrollTop) * 0.1)+100;
        gap4 = Math.max(gap4, 0);
        console.log(gap4);


        if (scrollTop >= boxStart && scrollTop < boxEnd) {
            box.css({
                position: 'fixed',
                top: '100px',
                left: "50%",
                width: '100%',
                transform: 'translate(-50%, 0%)',
            });


           $(".content4 .inner .title-box h2 span").css({
                transform: "translateY(" + gap4 + "%)"
            });

/* 
            $(".content4 .content4-img-box img:nth-child(1)").css({
                transform: "translate(" + -gap4 + "%, 0)"
            });
            $(".content4 .content4-img-box img:nth-child(2)").css({
                transform: "translate(0, 200%)"
            });
            $(".content4 .content4-img-box img:nth-child(3)").css({
                transform: "translate(-200%, 0)"
            });
            $(".content4 .content4-img-box img:nth-child(4)").css({
                transform: "translate(0, 200%)"
            }); */

        }
        else if (scrollTop >= boxEnd) {
            box.css({
                position: 'absolute',
                top: (boxEnd - boxStart) + 'px',
                left: 0,
                width: '100%'
            });
        }
        else {
            box.css({
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%'
            });
        }

    });
});