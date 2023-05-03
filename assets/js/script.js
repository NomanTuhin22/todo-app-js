
const Ecounter= document.getElementById('count');
const Esec  = document.getElementById('sec');
const Emin = document.getElementById('min');
const Ehr  = document.getElementById('hr');

let hr = 0;
let min = 0;
let sec = 0;
let count = 0;



let timer = false;

function start() {    
    timer = true;
    stopWatch();
}

function stop() {    
    timer = false;
}

function reset() {    
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;

    Ecounter.innerHTML = count +'0';
    Esec.innerHTML = sec +'0';
    Emin.innerHTML = min+'0';
    Ehr.innerHTML = hr +'0';
}
 
function stopWatch() {    
    if(timer == true){
       count += 1; 
       
        if(count == 100){
           sec += 1;
           count = 0;
        }

        else if(sec == 60){
           min += 1;
           sec = 0;
        }

        else if(min == 60){
           hr += 1;
           min = 0;
           sec = 0;
        }

        let hS = hr;
        let minit = min;
        let sE = sec;
        let C = count;

        if(hr < 10) {
            hS = '0' + hr;
        }
         if(min < 10) {
            minit = '0' + min;
        }
         if(sec < 10) {
            sE = '0' + sec;
        }
        if(count < 10) {
            C = '0' + count;
        }

       Ecounter.innerHTML = C;
       Esec.innerHTML = sE;
       Emin.innerHTML = minit;
       Ehr.innerHTML = hS;

        setTimeout('stopWatch()', 1)
    }
}

