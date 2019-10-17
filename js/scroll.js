$(function () {
            $('#top').bind("click", function () {
                $('html, body').animate({ scrollTop: $(document).height() }, 1200);
                return false;
            });
            $('#contact').bind("click", function () {
                $('html, body').animate({ scrollTop: 0 }, 1200);
                return false;
            });
        });

//SCROLL TO THE TOP

//$(document).ready(function(){
    //$(".scroll-top").click(function() {
        //$("html, body").animate({
            //scrollTop: 0
        //}, "slow");
        //return false;
    //});
//});
