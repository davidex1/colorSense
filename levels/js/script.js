$(function(){
    
    let fullScreen = () => {setTimeout(function(){window.scrollTo(0, 1);}, 0);};
    
    // time countdown
    let timeLeft = 15;
    let counter = setInterval(() => {
        $("#timer").html(`Time: ${timeLeft}`);
        if (timeLeft == 0) {
            clearInterval(counter);
            $(".toMenu, .button").addClass("show");
            $(".squaresContainer").css("display", "none");
        }
        timeLeft--;
    },1000)
    
    // restart level button
    const restart = $("#restart").click(() => {location.reload();})

    
    // array with all squares
    let randColor = $(".square").map((i, x) => {
        
        const colorId = $("#color").text(); // check the color of level
        let sample = $("#sample");
        
        //chceck the color of level and pick correct palette
        let colorsPalette;
        if (colorId == "red") { 
            colorsPalette = ["#ff0000", "#e50000", "#cc0000", "#b20000", "#990000", "#ff4c4c", "#ff6666", "#ff7f7f"];
        } else if (colorId == "yellow") {
            colorsPalette = ["#ffff00", "#e5e500", "#cccc00", "#b2b200", "#ffff7f", "#ffff99", "#ffffb2", "#ffffcc"];
        } else if (colorId == "green") {
            colorsPalette = ["#00ff00", "#00e500", "#00cc00", "#00b200", "#009900", "#7fff7f", "#99ff99", "#b2ffb2"];
        } else if (colorId == "blue") { 
            colorsPalette = ["#0000ff", "#0000e5", "#0000cc", "#0000b2", "#000099", "#4c4cff", "#6666ff", "#7f7fff"];
        } else if (colorId == "purple") {
            colorsPalette = ["#a020f0", "#901cd8", "#8019c0", "#7016a8", "#601390", "#c679f6", "#cf8ff7", "#d9a5f9"];
        }
        
        // fill the squares
        $(x).css("background-color", colorsPalette[Math.floor(Math.random()*colorsPalette.length)]);
        sample.css("background-color", colorsPalette[Math.floor(Math.random()*colorsPalette.length)]);
        
        // event for clickking squares
        $(x).click(() => {
            if ($(x).css("background-color") == sample.css("background-color")) {
                $(x).css("border", "2px solid #96ff00");
            } else {
                $(x).addClass("blink");
            }
        });   
    });
    
    let squaresArr = document.getElementsByClassName("square");
    let getSampleColor = document.getElementById("sample").style.backgroundColor; //jQuery couldn't pick the color

    // provide squares with the same color like in sample. In case when randColor() haven't done it.
    for (let i = 0; i < 4; i++){
        squaresArr[Math.floor(Math.random()*squaresArr.length)].style.backgroundColor = getSampleColor;
        
    }
    
    let sampleColorArr = [];
    let greenBorders = [];
    
    let squaresArrConv = Array.from(squaresArr);
    
    let getSampleColorSquares = squaresArrConv.map((i, x) => {
        if (squaresArrConv[x].style.backgroundColor == getSampleColor) {
            sampleColorArr.push(x);
        }
    })
    
    
    let getGreenBorders = () => { squaresArrConv.map((i, x) => {
        if (squaresArrConv[x].style.border == "2px solid rgb(150, 255, 0)") {
            greenBorders.push(x);
        }
    })}
    
    setTimeout(() => {getGreenBorders(); checkResult();}, 15000);
    
    let checkResult = () => {
        if (sampleColorArr.length == greenBorders.length) {
            alert("Congratulations! You win!");
        } else alert("Time's Up :(")
    }
    
    
    
    
    
    
    
  
    

    
    
    
    
    
});



