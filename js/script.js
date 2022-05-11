'use strict'

$(function(){
    $("#img").click(function(e){
        var offset = $(this).offset()
        var x = (e.pageX - offset.left)
        var y = (e.pageY - offset.top)
        if((x >= 0 && x <= 315) && (y >= 0 && y <= 548)){
            window.location.href = "https://www.whatsapp.com/?lang=es"
        }
        else if((x >= 323 && x <= 646) && (y >= 0 && y <= 548)){
            window.location.href = "https://es-la.facebook.com"
        }
        else if((x >= 655 && x <= 975) && (y >= 0 && y <= 548)){
            window.location.href = "https://www.instagram.com"
        }
    })
})