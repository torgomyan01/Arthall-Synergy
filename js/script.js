const {
    active,
    none
} = {
    active: 'active',
    none: 'd-none'
}

AOS.init();

const howItWorkingSlider = $('.howItWorking-slider');
const prevBtn = $('#prev-howItWorking');
const nextBtn = $('#next-howItWorking');

// let howItWorkingSliderPercent = 0;

nextBtn.on('click', function (){

    const scroll = howItWorkingSlider.scrollLeft();
    howItWorkingSlider.scrollLeft(scroll + 500)
    // howItWorkingSliderPercent -= 15;
    // if(howItWorkingSliderPercent <= -90){
    //     howItWorkingSliderPercent = 0;
    // }
    // howItWorkingSlider.css('transform', `translateX(${howItWorkingSliderPercent}%)`);
})

prevBtn.on('click', function () {
    const scroll = howItWorkingSlider.scrollLeft();
    howItWorkingSlider.scrollLeft(scroll - 500)
})

$('#slider-one').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('#prevBtnSliderOne'),
    nextArrow: $('#nextBtnSliderOne')
}).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    const i = (currentSlide ? currentSlide : 0) + 1;
    $('.about-us-left-count.slide-one').text(i + '/' + (slick.$dots[0].children.length));
})

$('#slider-two').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: $('#prevBtnSliderTwo'),
    nextArrow: $('#nextBtnSliderTwo')
}).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if(!slick.$dots){
        return;
    }
    const i = (currentSlide ? currentSlide : 0) + 1;
    $('.news-left-count.slide-two').text(i + '/' + (slick.$dots[0].children.length));
})


$(window).on('resize', function (){
    const windowWidth = $(window).width();
    const containerWidth = $('.container').width();
    const result = (windowWidth - containerWidth) / 2;

    $('.howItWorking-slider').css('padding-left', `${result}px`);
}).resize()



