const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();
const video = document.querySelector('video');
video.muted = true;
video.play()

// const howItWorkingHeight = 2500;
const howItWorkingSlider = $('.howItWorking-slider');
const prevBtn = $('#prev-howItWorking');
const nextBtn = $('#next-howItWorking');

let imageLeft = 0;

nextBtn.on('click', function (){
    // imageLeft < checkWindowImage() ? imageLeft += checkWindow() : imageLeft = 0;
    // $('#howItWorking img').css('transform', ` translateX(-${imageLeft}px)`);
    howItWorkingSlider.scrollLeft(howItWorkingSlider.scrollLeft() + 300)
})


prevBtn.on('click', function () {
    howItWorkingSlider.scrollLeft(howItWorkingSlider.scrollLeft() - 300)
})


function checkWindow(){
    const windowWidth = $(window).width();
    if(windowWidth > 768){
        return 500
    } else {
        return 200
    }
}

function checkWindowImage(){
    const windowWidth = $(window).width();
    if(windowWidth > 768){
        return 2500
    } else {
        return 2000
    }
}

//........ Slider


$('#slider-one').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // customPaging: function (slider, i) {
    //     console.log((i + 1) + '/' + slider.slideCount, '2222')
    //
    //     return  (i + 1) + '/' + slider.slideCount;
    //
    // },
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

    ]
}).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    if(!slick.$dots){
        return;
    }

    const i = (currentSlide ? currentSlide : 0) + 1;

    $('.count.slider-one span').text(i + '/' + (slick.$dots[0].children.length));
})


$('#slider-two').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // customPaging: function (slider, i) {
    //     console.log((i + 1) + '/' + slider.slideCount, '2222')
    //
    //     return  (i + 1) + '/' + slider.slideCount;
    //
    // },
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }

    ]
}).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    if(!slick.$dots){
        return;
    }
    const i = (currentSlide ? currentSlide : 0) + 1;
    $('.count.slider-two span').text(i + '/' + (slick.$dots[0].children.length));
})


$(window).on('resize', function (){
    const windowWidth = $(window).width();
    const containerWidth = $('.container').width();
    const result = containerWidth + ((windowWidth - containerWidth) / 2);

    $('.howItWorking-slider').css('width', `${result}px`)
}).resize()



