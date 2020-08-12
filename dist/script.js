let messageArray = [
                    "Last seen getting into garbage in North Philippi.",
                    "Was chasing cats near the school.",
                    "slipped out the back while I wasn't looking.",
                    "Is really a good boy."];


let imageArray = ["data/shepherd.jpg",
                  "data/pitbull.jpg",
                  "data/terrier.jpg",
                 "data/mutt.jpg"];
let counter = 0;

$( document ).ready(function() {
    $( "#myimage2" ).click(function() {  
   //   dragElement(document.getElementById('myimage2'));  
   let trap = document.getElementById('messageBox').innerHTML; 


var randNumMin = -280;
var randNumMax = 280;
var xPos = (Math.floor(Math.random() * (randNumMax - randNumMin + 1)) + randNumMin);
var yPos = (Math.floor(Math.random() * (randNumMax - randNumMin + 1)) + randNumMin);
console.log(trap);
     // trap = "HEY NOW MOTHERFUCKERS";
    // let image = "<img id="+"myImg"+"src=imageArray alt="+"The Pulpit Rock"+"width="+"304"+"height="+"228"+"></img>"
      document.getElementById('myImg').src = imageArray[counter];
      document.getElementById('message').innerHTML = messageArray[counter]
      

	// $(this).animate({ 'backgroundPosition-y': '+='xPos  },
                 //  "medium" );
            $(this).animate({'backgroundPosition-x': '+='+xPos},"slow");
            $(this).animate({'backgroundPosition-y': '+='+yPos},"slow");
            //let message = document.getElementById("messageBox").innerHTML;
            
          counter = counter + 1;
          if (counter > messageArray.length-1){
            counter = 0;
          }
            

  });
 
});