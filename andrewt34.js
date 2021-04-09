var text = [
    "LOVE IS THE OPPOSITE OF INDIFFERENCE",
    "ANDREW T34POT",
    "HOW ARE YOU DOING TODAY?",
    "RUMINATION",
    "ONLY UP NEVER DOWN",
    "TEE",
    "DISTORED BASS",
    "VOX",
    "HOW ARE YOU DOING TODAY?",
    "RUMINATION",
    "ONLY UP NEVER DOWN",
    "TEE"

];
    
    function shuffle(array){
        document.getElementById("DDDD").innerHTML = text[Math.floor(Math.random() * text.length)];
        
    
    }
    function shuffle_loop(){
        setInterval('shuffle(text)', 100);

    }
    
   shuffle_loop();
   var i=0;
   function shift(){
       
       if(i==0){
    document.getElementById("move").style.letterSpacing = '10px';
    document.getElementById("first").style.transform = 'scale(50px, 500px)';
    document.getElementById("move").style.left = '-76px';
    document.getElementById("first").style.transform = 'scaleX(1.90)';
    document.getElementById("second").style.transform = 'scaleX(1.90)';
    i=1;
       }
       else{
           
        document.getElementById("move").style.letterSpacing = '0px';
        document.getElementById("first").style.width = '138px';
        document.getElementById("first").style.transform = 'scaleX(1)';
   document.getElementById("second").style.transform = 'scaleX(1)';
        document.getElementById("move").style.left = '-80px';
        i=0;

       }
  
   }
   
function be_gone(){

document.getElementById("intro").style.opacity = '0';

}
function slide(){

    document.getElementById("start").style.width = '0%';
    
    }
function intro(){
    setTimeout('slide()',2500);
setTimeout('be_gone()',2200); 
}
intro();