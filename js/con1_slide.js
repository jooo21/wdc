$(document).ready(function(){
    var con1 = $("#con1");
    var $prev = con1.find(".prev");
    var $next = con1.find(".next")
    var $panel = con1.find(".panel");
    var $panel_li = con1.find(".panel");
    var isDone = true;

    $prev.on("click", function(e){
        e.preventDefault();
        if(isDone){
            prev();
            isDone =false;
        }
    });

    $next.on("click", function(e){
        e.preventDefault();
        if(isDone){
            next();
            isDone =false;
        }
    });

    function prev(){
        $panel.find("li").first().appendTo(".panel");
        $panel_li.removeClass("on");
        $panel.find("li").eq(1).addClass("on");

        setTimeout(function(){
            isDone=true;
        },1000)
    }

    function next(){
        $panel.find("li").last().prependTo(".panel");
        $panel_li.removeClass("on");
        $panel.find("li").eq(1).addClass("on");
        setTimeout(function(){
            isDone=true;
        },1000)

    }
});