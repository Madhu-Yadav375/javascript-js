## Project 3 
### Solution Code
``` JavaScript
//document.querySelector('#clock')
//or
const clock = document.getElementById('clock');

setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000); //1000 -> mean for 1 sec
```