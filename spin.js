var text = [
    "OCEAN OF HANDS",
    "LAND OF THE DAMNED",
    "TURN IT TO 11",
    "FULL OF LOVE",
    "FLOWER",
    "THAT FEELING",
    "PRESENCE"

];

let wheel = document.getElementById('spi');

let spin = (target) =>
{
    
    target.style.transform += "rotate(15deg)";
    
}

wheel.style.transform = "scale(0.8)";

setInterval('spin(wheel)', 160);


let randomize = () =>
{
  let head = document.getElementById('shuffle');
 head.innerHTML = text[Math.floor(Math.random() * text.length)];

}


setInterval('randomize()', 60);
let ifchrome_colorchange = (theid) =>{
    let nav = navigator.userAgent;

    let tochange = document.getElementById(theid);

    if(nav.includes("Chrome")==true){
        tochange.style.filter = "hue-rotate(-7deg) brightness(110%)";
    }
}
ifchrome_colorchange("ru");
ifchrome_colorchange("citrine");