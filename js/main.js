document.addEventListener('DOMContentLoaded', function() {

var lightSwith = document.querySelector('.switch')
var status = document.querySelector('.status')
var room = document.body

lightSwith.addEventListener('click', function(){

  if(lightSwith.className === 'switch on')
    {lightSwith.className = 'switch off';
    room.style.background = 'black';
    status.innerHTML = 'Hey, who turned off the lights?';
  }
  else if(lightSwith.className === 'switch off')
  {lightSwith.className = 'switch on';
  room.style.background = 'white';
  status.innerHTML = "It's so bright in here";
}
 } );
})
