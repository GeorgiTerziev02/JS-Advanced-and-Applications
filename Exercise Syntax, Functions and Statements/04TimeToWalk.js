function time(steps, length, speed) {

    let metersToSchool = steps * length;
    speed = speed * 1000 / 3600;

    let breakMinutes = Math.floor(metersToSchool / 500);

    let timeInSec = Math.ceil(metersToSchool / speed) + breakMinutes * 60;
    
    let hours = parseInt(timeInSec / 3600);
    let mins = parseInt(timeInSec / 60);
    let sec = parseInt(timeInSec % 60);

    let ouput = "";

    if (hours < 10) {
        ouput += `0${hours}:`;
    }
    else
    {
        ouput += `${hours}:`;
    }

    if (mins < 10) {
        ouput += `0${mins}:`;
    }
    else
    {
        ouput += `${mins}:`;
    }

    if (sec < 10) {
        ouput += `0${sec}`;
    }
    else
    {
        ouput += `${sec}`;
    }

    console.log(ouput);
}
