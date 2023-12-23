$(document).ready(function(){
    $("p").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "aliceblue");
        }
    });
    $("#opt1a, #opt2d, #opt3c, #opt4a, #opt5d").click(function(){
        $(this).css("background-color", "green");
        $(this).mouseleave(function(){
            $(this).css("background-color", "green");
        });
    });
    $("#opt1b, #opt1c, #opt1d, #opt2a, #opt2b, #opt2c, #opt3a, #opt3b, #opt3d, #opt4b, #opt4c, #opt4d, #opt5a, #opt5b, #opt5c").click(function(){
        $(this).css("background-color", "red");
        $(this).mouseleave(function(){
            $(this).css("background-color", "red");
        });
    });
});