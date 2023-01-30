$(document).on('ready', function () {


    $("#mobile").on("click", function () {
      $("body").toggleClass("mobile");
    });
  
  
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $('header').addClass("small");
      } else {
        $('header').removeClass("small");
      }
    });

    $('#banner-slide').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false ,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 0,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });



      $('#product-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false ,
        cssEase: 'linear',
        prevArrow:"<img class='a-left control-c prev slick-prev' src='/image/left.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='/image/right.png'>",
        responsive: [
          {
            breakpoint: 0,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });




      $('#gallery-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll:3,
        autoplay: false ,
        cssEase: 'linear',
        prevArrow:"<img class='a-left control-c prev slick-prev' src='/image/gallery-left-arrow.png'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='/image/gallery-right-arrow.png'>",
        responsive: [
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            },
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            },
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });



      // careers slider
      $('#career-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false ,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            },
            breakpoint: 0,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});