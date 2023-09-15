$(document).ready(function () {
    switchDiv();

    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");

    $('[href="#"]').attr("href", "javascript:;");

    $(".menu-Bar").click(function () {
        $(this).toggleClass("open");
        $(".menuWrap").toggleClass("open");
        $("body").toggleClass("ovr-hiddn");
    });

    $(".loginUp").click(function () {
        $(".LoginPopup").fadeIn();
        $(".overlay").fadeIn();
    });

    $(".signUp").click(function () {
        $(".signUpPop").fadeIn();
        $(".overlay").fadeIn();
    });

    $(".closePop,.overlay").click(function () {
        $(".popupMain").fadeOut();
        $(".overlay").fadeOut();
    });

    $(".menu .menu-item-has-children").addClass("dropdown-nav ");
    $(".menu .menu-item-has-children ul.sub-menu").addClass("dropdown");

    /* Tabbing Function */
    $("[data-targetit]").on("click", function (e) {
        $(this).addClass("active");
        $(this)
            .siblings()
            .removeClass("active");
        var target = $(this).data("targetit");
        $("." + target)
            .siblings('[class^="box-"]')
            .hide();
        $("." + target).fadeIn();
        $(".tabViewList").slick("setPosition", 0);
    });

    // Accordian
    $('.accordion-list > li > .answer').hide();

    $('.accordion-list > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });

    $("li.dropdown-nav").hover(function () {
        $(this)
            .children("ul")
            .stop(true, false, true)
            .slideToggle(300);
    });

    $(".searchBtn").click(function () {
        $(".searchWrap").addClass("active");
        $(".overlay").fadeIn("active");
        $(".searchWrap input").focus();
        $(".searchWrap input").focusout(function (e) {
            $(this)
                .parents()
                .removeClass("active");
            $(".overlay").fadeOut("active");
            $("body").removeClass("ovr-hiddn");
        });
    });

    $(".index-slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1
        // prevArrow: $('.prev'),
        // nextArrow: $('.next')
    });

    //     Slider For
    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: false,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     focusOnSelect: true
    // });

    /* Top Scroll */
    // $('body').on('click', '.scrolldown-fl', function() {
    //     goToScroll('awardSec');
    // });
});

// $(window).on("scroll touchmove", function() {
//     $("header").toggleClass("stickyOpen", $(document).scrollTop() > 200);
// });

$(window).on("load", function () {
    var currentUrl = window.location.href.substr(
        window.location.href.lastIndexOf("/") + 1
    );
    $("ul.menu li a").each(function () {
        var hrefVal = $(this).attr("href");
        if (hrefVal == currentUrl) {
            $(this).removeClass("active");
            $(this)
                .closest("li")
                .addClass("active");
            $("ul.menu li.first").removeClass("active");
        }
    });
});

/* RESPONSIVE JS */
if ($(window).width() < 824) { }

function switchDiv() {
    var $window = $(window).outerWidth();
    if ($window <= 768) {
        $(".topAppendTxt").each(function () {
            var getdtd = $(this)
                .find(".cloneDiv")
                .clone(true);
            $(this)
                .find(".cloneDiv")
                .remove();
            $(this).append(getdtd);
        });
    }
}

function goToScroll(e) {
    $("html, body").animate({
        scrollTop: $("." + e).offset().top
    },
        1000
    );
}

$(document).ready(function () {
    $('.popdynamic').click(function () {
        $('.centercont.static').addClass('d-none');
        $('.centercont.dynamic').removeClass('d-none');
        $('.overlay').fadeIn();
        $('#popdynamic').fadeIn();
        $('.LoginPopup').addClass('price-margin');

        var packtitle = $(this).closest('.pckg').find(" .title").html();
        var packprice = $(this).closest('.pckg').find(".price .amount").html();



        var thisrel = $(this).attr('rel');
        $('input[name="pkg_key"]').val(thisrel);
        $('#popupform input#popuppackage').val(thisrel);
        $(".centercont.dynamic h3 span").html(packtitle);
        $(".centercont h4").html("In Just <span>" + packprice + "</span>");
    });

    $('.comparision-btn').click(function () {
        $('.centercont.static').addClass('d-none');
        $('.centercont.dynamic').removeClass('d-none');
        $('.overlay').fadeIn();
        $('#popdynamic').fadeIn();


        var packtitle = $(this).attr('data-pkg');
        var packprice = $(this).attr('data-price');



        var thisrel = $(this).attr('rel');
        $('input[name="pkg_key"]').val(thisrel);
        $('#popupform input#popuppackage').val(thisrel);
        $(".centercont.dynamic h3 span").html(packtitle);
        $(".centercont h4").html("In Just <span>" + packprice + "</span>");
    });

    $('.popbtn2').click(function () {
        $('.centercont.static').addClass('d-none');
        $('.centercont.dynamic').removeClass('d-none');
        $('.overlay').fadeIn();
        $('#popdynamic').fadeIn();
        $('.LoginPopup').addClass('price-margin');
        var packtitle = $(this).closest('.pckg2').find(".label").html();
        var packprice = $(this).closest('.pckg2').find(".price").html();
        var thisrel = $(this).attr('rel');
        $('input[name="pkg_key"]').val(thisrel);
        $('#popupform input#popuppackage').val(thisrel);
        $(".centercont.dynamic h3 span").html(packtitle);
        $(".centercont h4").html("In Just <span>" + packprice + "</span>");
    });

    $('.closeico,.overlay').click(function () {

        $('.popupmain').fadeOut();
        $('.overlay').fadeOut();


    });

    $('.popstatic').click(function () {
        $('.centercont.static').removeClass('d-none');
        $('.centercont.dynamic').addClass('d-none');
        $('#popstatic').fadeIn();
        $('.overlay').fadeIn();


        var orgtexts = '$99';
        //  $(".centercont h3 span").text('Start your Trademark Registration Now');
        $(".centercont h4").html("in Just <span>" + orgtexts + "</span>");
    });

    $(window).scroll(function () {
        var header = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 1) {
            header.addClass('sticky');
        }
        if (scroll <= 0) {
            header.removeClass('sticky');
        }

    });

});



$('.countrylist').change(function () {
    var thisval = $(this).children('option:selected').val();
    var thiscode = $(this).children('option:selected').attr('data-abbr');
    $(this).closest('.newcountrycode ').find('.countrycode').attr("value", "+" + thisval);

    if (thiscode == 'CA') {
        $(this).siblings('span').removeClass();
        $(this).siblings('span').addClass('fgca');
    } else {
        $(this).siblings('span').removeClass();
        $(this).siblings('span').addClass('fg' + thisval);
    }
});

$(window).on("scroll", function (e) {
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
    }

    if($('.goto').length > 0){
        if ($(window).scrollTop() >= $(".goto").offset().top - $(window).height()) {
           
            if (!$(".goto").hasClass("animated")) {
                $(".count").each(function () {
                    $(this)
                        .prop("Counter", 0)
                        .animate(
                            {
                                Counter: $(this).text(),
                            },
                            {
                                duration: 4000,
                                easing: "swing",
                                step: function (now) {
                                    $(this).text(numberWithCommas(Math.ceil(now)));
                                },
                            }
                        );
                });
                // $("#triggered").addClass("show");
                $(".goto").addClass("animated");
            }
        }
    }
});

$(".portfolio-slider").slick({
    dots: false,
    arrows: true,
    
    infinite: true,
    centerMode: true,
    autoplay: true,
    centerPadding: '60px',
    speed: 300,
    slidesToShow: 6,
    prevArrow: '<a href="javascript:;" class="arrow-btn left"><i class="fa fa-arrow-left"></i></a>',
    nextArrow: '<a href="javascript:;" class="arrow-btn right"><i class="fa fa-arrow-right"></i></a>',
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerPadding: '60px',
            }
        }



    ]
});


$(".testi-slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows:true,
    autoplay:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-bg',
    mobileFirst:false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
      ]
});

$('.slider-bg').slick({
      dots: false,
      infinite: true,
      speed: 300,
      arrows: true,
      slidesToShow: 3,
      asNavFor: '.testi-slider',
   
  });

  $(".testi-slider-2").slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    rows: 1,
    speed: 300,
    slidesToShow: 3,
    prevArrow: '<a href="javascript:;" class="arrow-btn left"><i class="far fa-chevron-left"></i></a>',
    nextArrow: '<a href="javascript:;" class="arrow-btn right"><i class="far fa-chevron-right"></i></a>',
    responsive: [
      
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 768,
            settings: {
                cssEase: 'ease',
                slidesToShow: 1,
                slidesToScroll: 1,
              
            }
          }
      ]
});


$('.design-card-list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    
    cssEase: 'linear',
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 885,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
                cssEase: 'ease',
                slidesToShow: 1,
                slidesToScroll: 1,
              
            }
          }
      ]
});
$('.design-card-list-2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    rtl:true,
    autoplaySpeed: 0,
    speed: 8000,
    
    cssEase: 'linear',
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 885,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
                cssEase: 'ease',
                slidesToShow: 1,
                slidesToScroll: 1,
              
              
            }
          }
      ]
});

if ($(window).width() > 1200) {
    $('.has-child.hover').hover(function() {
        $('.has-child').not($(this)).find('.dropdown').stop(true,false,true).slideUp(500);
        $('.has-child').not($(this)).find('.chev').removeClass('rotate');
        $(this).children('.dropdown').stop(true,false,true).slideToggle(500);
        $(this).find('.chev').toggleClass('rotate');
    });
}
else{
    $('.has-child.hover').click(function() {
        $('.has-child').not($(this)).find('.dropdown').stop(true,false,true).slideUp(500);
        $('.has-child').not($(this)).find('.chev').removeClass('rotate');
        $(this).children('.dropdown').stop(true,false,true).slideToggle(500);
        $(this).find('.chev').toggleClass('rotate');
    });
}

$('.has-child.click').click(function() {
    $('.has-child').not($(this)).find('.dropdown').stop(true,false,true).slideUp(500);
    $('.has-child').not($(this)).find('.chev').removeClass('rotate');

    $(this).find('.dropdown').stop(true,false,true).slideToggle(500);
    $(this).find('.chev').toggleClass('rotate');

});

$(document).on('click', '.srch-btn', function() {
    $('.search-data tbody').html('');
    $('.search-data').css('display', 'none');
    var searchText = $('.srch').val();
    if (searchText == '') {

    } else {
        var requestOptions = {
            method: 'GET'
        };

        fetch("https://innova-labs.net:9094/trademarks/search?name=" + searchText + "&page=1&count=10",
                requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(result.elements.length)
                if (result.elements.length > 0) {
                    result.elements.forEach(function(item, index) {
                        $(".search-data tbody").append(
                            '<tr><td>' + item.markIdentification + '</td><td>' + item
                            .owners[0].partyName + '</td><td>' + item.serialNumber +
                            '</td><td>' + item.filingDate + '</td></tr>'
                        );
                    })
                    $('.search-data').css('display', 'block');
                } else {
                    $(".search-data tbody").append(
                        '<tr><td colspan="4">No Trademark Found For ' + searchText + '</td></tr>'
                    );
                    $('.search-data').css('display', 'block');
                }
            })
            .catch(error => console.log('error', error));
    }

});