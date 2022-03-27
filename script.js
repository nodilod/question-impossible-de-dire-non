$(document).ready(function(){
    let buttonNo = document.getElementById("no");

    buttonNo.addEventListener("mouseover", function () {
        console.log("no");
        //randam number betwin 0 and 100
        let randomNumberX = Math.floor(Math.random() * 100);
        let randomNumberY = Math.floor(Math.random() * 80);
        console.log(randomNumberX ,"  ", randomNumberY);

        //chane the position of the box
        let box = document.getElementById("questionBox");
        box.style.marginTop = randomNumberY + "%";
        box.style.marginLeft = randomNumberX + "%";
    });
});