$(document).ready(function(){$('.flowing-scroll').on('click',function(){var el=$(this);var dest=el.attr('href');if(dest!==undefined&&dest!==''){$('html').animate({scrollTop:$(dest).offset().top-70},500);} return false;});$('.slider').slick({slidesToShow:3,slidesToScroll:1,easing:'ease',responsive:[{breakpoint:1200,settings:{slidesToShow:2,}},{breakpoint:768,settings:{slidesToShow:1,}}]});});