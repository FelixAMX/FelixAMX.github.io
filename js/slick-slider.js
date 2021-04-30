window.onload = function(){
    if (window.innerWidth >= 1000){
        $('.sl-slider').slick('unslick');
        sliderIsLive = false;
    }

};

$(function(){
    $('.sl-slider').slick({
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        waitForAnimate: true,
        //fade: true,

        slidesToShow: 3,
        slidesToScroll: 1,

        autoplay: true, 
        autoplaySpeed: 10000,

        responsive:[
            {
                breakpoint: 1000,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2                   
                }
            },{
                breakpoint: 680,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1                   
                }
            }
        ]

      });
});

$(function(){
    $('.sl-slider-gallery').slick({
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        waitForAnimate: true,
        //fade: true,

      });
});


window.addEventListener("resize", function() {
    if (window.innerWidth >= 1000) {
        $('.sl-slider').slick('unslick');
        sliderIsLive = false;
    }
    
    if (window.innerWidth < 1000) {
        $('.sl-slider').slick({
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        waitForAnimate: true,
        //fade: true,

        slidesToShow: 3,
        slidesToScroll: 1,

        responsive:[
            {
                breakpoint: 1000,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2                   
                }
            },{
                breakpoint: 680,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1                   
                }
            }
        ]

      });
    }
  });
  