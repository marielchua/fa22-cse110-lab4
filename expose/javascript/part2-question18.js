function timeSeconds(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
setInterval(timeSeconds, 1000);