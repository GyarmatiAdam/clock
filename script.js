function showTime(){

/** Get the new date by hours, minutes and seconds */
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let formatHours = convertFormat(hours);

    hours = checkTime(hours);

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

/** Insert the values into HTML */
    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;


}

/** If time less than 12 o`clock=> AM, otherwise PM */
function convertFormat(time){

    let format = 'AM'

    if(time >= 12){
        format = 'PM'
    }
    return format;
}

/** after 12 o`clock time turns back to zero */
function checkTime(time){
    if(time > 12){
        time = time - 12;
    }
    if (time === 0){
        time = 12;
    }
    return time;
}

/** add zero, when time less than 10 o`clock */
function addZero(time){
    if(time < 10){
        time = "0" + time;
        return time;
    }
    else{
        return time;
    }
}

/** refresh time in every 1 second */
showTime()
setInterval(showTime, 1000)