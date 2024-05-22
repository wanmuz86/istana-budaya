$(function () {
    $(".box").on('mouseenter', function () {
        $(this).children().last().css({'display':'block'});
    })
    $(".box").on('mouseleave', function () {
        $(this).children().last().css({'display':'none'});
    })
})