window.onload=function(){
    var i="1";
    setInterval(function(){
        $("#img"+i).animate({
            width:"0",
           // display:"none",
        },1000);
        i++;
        if(i>7)
            i=1;
        $("#img"+i).animate({
            width:"90%",
        },1000);
    },3000);
};
$("#send").click(function(){
    // alert("111") ;
    var newdiv=$("<div style=display:none;></div>")
    var text=$("#input").val()
    var len=text.length
    newdiv.html(text)
    init(newdiv,len)
    move(newdiv)
    newdiv.addClass("move")
    $("#wall").append(newdiv)
});
function init(newdiv,len){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    var t=-16*newdiv.width();
    newdiv.css({
        "position":"fixed",
        "top":Math.floor(Math.random()*1000)+"px",
        "color":"rgb("+r+","+g+","+b+")",
        width:len+"em",     
    })
}
function move(newdiv){
    var t=-16*newdiv.width();
    var news=setInterval(function(){
        t++;
        
        newdiv.css({
            "right":t+"px",
            "display":"block",
         })
        //  alert(newdiv.offset().left + "     " + $(window).width())
        if(parseInt(newdiv.offset().left + newdiv.width()) < 0)
        {
            
            newdiv.remove()
            clearInterval(newdiv)
        }
    },25)
}