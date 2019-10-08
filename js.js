let animate = function(){
    $("#mainImage").attr("src", "dad0.png");
    let startNum = 0;
    newInt = setInterval(function(){
        startNum += 1;
        $("#mainImage").attr("src", "dad" + startNum + ".png")
        if(startNum == 9) {
            clearInterval(newInt);
            setTimeout(function(){
                $("#mainImage").attr("src", "dad.png");
            }, 500)
        }
    }, 200)

    
    
};

$("#theButton").click(function(){
    if($("#mainImage").attr("src") == "dad.png") animate();   
})