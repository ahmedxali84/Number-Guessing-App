var audio = new audio("./song.mp3");
function myFunction() {
   document.getElementById("button");
   var number = prompt("Enter Your Number :");
   if(number == 60){
      audio.play();
    alert("Your  Answer Is Correct!!!!")
   }
   else if(number>60){
    alert("Too High!!!")
   }
   else if(number<60){
    alert("Too Loww!!!")
   }
}
