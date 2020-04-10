// 轮播 swiper
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 按钮
$(function(){
    $("#btnMeau").click(function(){
        if( $("#meau1").css("display") == "none"){
            $("#meau1").css("display","block")
        }else{
            $("#meau1").css("display","none")
        }
    })
})
$("#meau1").click(function(){
    //$("#box2").fadeIn();
    $("#meau1").fadeIn(3000);
})