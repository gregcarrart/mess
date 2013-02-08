$(document).ready(function(){
    $(function() {
        $('.next').bind('click',function(event){
            var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500,'easeInOutExpo');
                event.preventDefault();
                });
    });

    $("#name").keyup(function (e) {
        if (e.keyCode == 13) {
            $('html, body').stop().animate({
                scrollTop: $('#section2').offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
            $('#msg').html($('#name').val());
            $('#msg2').html($('#name').val());
        }
    });    
    
    $("#get").click(function () {
        $('#msg').html($('#name').val());
        $('#msg2').html($('#name').val());
    });
    
    TweenLite.from("#input", 3, {alpha:0});
    TweenLite.from("#get", 5, {alpha:0});
    
    var tween = new TweenLite.to(".arrow_box", 4, {css:{top:"50px"}, delay:3, ease:Power2.easeInOut, onComplete:reverseTween, onReverseComplete:restartTween});

    function reverseTween() {
        tween.reverse();
    }
    function restartTween() {
        tween.restart();
    }
});