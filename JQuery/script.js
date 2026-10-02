$(document).ready(function () {

    //the shine functions uses the chaining technique to utilize multiple animate event methods in one code block
    function shineLoop() {
        $(".shine").animate({ backgroundPositionX: '1600px' }, 3000).animate({ backgroundPositionX: '-800px' }, 3000);
    }

    //repeat the shineLoop function 
    setInterval(shineLoop, 0);

    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    $("#classicCars").on({

        mouseenter: function() {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        },

        mouseleave: function () {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    $('div.question').on('click', function() {
        $(this).next().slideToggle('slow');
    });

    $('div.answer').on({
        'mouseover': function() { console.log("You hovered the paragraph!"); },
        'click': function() { $(this).fadeOut(2000);}
    });

})