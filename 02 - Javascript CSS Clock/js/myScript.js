var secondHand = document.getElementsByClassName("second-hand")[0];
var minuteHand = document.getElementsByClassName("minute-hand")[0];
var hourHand = document.getElementsByClassName("hour-hand")[0];

function setDate() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) +90;
   
    secondHand.style.transform = "rotate(" + secondDegrees + "deg)";
    minuteHand.style.transform = "rotate(" + minutesDegrees + "deg)";
    hourHand.style.transform = "rotate(" + hoursDegrees + "deg)";
    
    /*console.log("Hour: " + hours);
    console.log("Minutes: " + minutes);
    console.log("Seconds: " + seconds);*/
   
    const allHands = document.querySelectorAll('.hand');
    
    if(secondsDegrees === 90) {
       allHands.forEach(hand => hand.style.transition = 'none')
    } else {
       allHands.forEach(hand => hand.style.transition = '')
    }
    
}


setInterval(setDate, 1000);
