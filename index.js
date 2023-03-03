function displayTime(){
    var time = new Date;
    var hours = time.getHours();
    var minutes  = time.getMinutes();
    var seconds = time.getSeconds();
    var session = 'AM';

    if(hours >= 12){
        session = 'PM';
        hours -= 12;
    }

    hours = hours < 10 ? "0"+hours : hours;
    minutes = minutes < 10 ? "0"+minutes : minutes;
    seconds = seconds < 10 ? "0"+seconds : seconds;

    document.getElementById('hour').innerText = hours;
    document.getElementById('minute').innerText = minutes;
    document.getElementById('second').innerText = seconds;
    document.getElementById('session').innerText = session;

}

displayTime();
setInterval(displayTime,1000);
