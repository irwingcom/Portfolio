console.log("loaded!")

$(function() {
    $(".heroimage").hide(0).delay(1000).slideDown(1000);
});

$(function() {
    $(".herowords").hide(0).delay(2000).fadeIn(1000);
});

$(function(){
    $(".left1").on("mouseover", function(){
        $(".l1").fadeToggle(200);
    });
    $(".left1").on("mouseleave", function(){
        $(".l1").fadeToggle(200);
    });
    $(".left2").on("mouseover", function(){
        $(".l2").fadeToggle(200);
    });
    $(".left2").on("mouseleave", function(){
        $(".l2").fadeToggle(200);
    });
    $(".left3").on("mouseover", function(){
        $(".l3").fadeToggle(200);
    });
    $(".left3").on("mouseleave", function(){
        $(".l3").fadeToggle(200);
    });
    $(".left4").on("mouseover", function(){
        $(".l4").fadeToggle(200);
    });
    $(".left4").on("mouseleave", function(){
        $(".l4").fadeToggle(200);
    });
    $(".left5").on("mouseover", function(){
        $(".l5").fadeToggle(200);
    });
    $(".left5").on("mouseleave", function(){
        $(".l5").fadeToggle(200);
    });
    $(".right1").on("mouseover", function(){
        $(".r1").fadeToggle(200);
    });
    $(".right1").on("mouseleave", function(){
        $(".r1").fadeToggle(200);
    });
    $(".right2").on("mouseover", function(){
        $(".r2").fadeToggle(200);
    });
    $(".right2").on("mouseleave", function(){
        $(".r2").fadeToggle(200);
    });
    $(".right3").on("mouseover", function(){
        $(".r3").fadeToggle(200);
    });
    $(".right3").on("mouseleave", function(){
        $(".r3").fadeToggle(200);
    });
    $(".right4").on("mouseover", function(){
        $(".r4").fadeToggle(200);
    });
    $(".right4").on("mouseleave", function(){
        $(".r4").fadeToggle(200);
    });
    $(".right5").on("mouseover", function(){
        $(".r5").fadeToggle(200);
    });
    $(".right5").on("mouseleave", function(){
        $(".r5").fadeToggle(200);
    });
});


$(function(){
    $(".ccover").on("mouseover", function(){
        $(".casecontent1").fadeToggle(200);
    });
    $(".ccover").on("mouseleave", function(){
        $(".casecontent1").fadeToggle(200);
    });
    $(".fcover").on("mouseover", function(){
        $(".casecontent2").fadeToggle(200);
    });
    $(".fcover").on("mouseleave", function(){
        $(".casecontent2").fadeToggle(200);
    });
    $(".ecover").on("mouseover", function(){
        $(".casecontent3").fadeToggle(200);
    });
    $(".ecover").on("mouseleave", function(){
        $(".casecontent3").fadeToggle(200);
    });
    $(".kcover").on("mouseover", function(){
        $(".casecontent4").fadeToggle(200);
    });
    $(".kcover").on("mouseleave", function(){
        $(".casecontent4").fadeToggle(200);
    });
});


$(function(){
    var words = [
        "&lt;COMuyog&gt;",
        "&lt;acCOMplished&gt;",
        "&lt;COMpetitive&gt;",
        "&lt;reCOMmended&gt;",
        "&lt;COM&gt;",
        "&lt;COMmunication&gt;",
        "&lt;COMplementary&gt;",
        "&lt;COMprehensive&gt;",
        "&lt;irwin_COMuyog&gt;"
        ], i = 0;
    setInterval(function(){
        $('.textlayer').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 2000);
      
})();