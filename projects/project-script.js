//get image elements 

const pod = document.getElementById('pod-shot');
const club = document.getElementById('club-shot');
const arrow = document.getElementById('arrow-shot');

//change pod images
let podCount = 0;
const podImages = ['/images/pod-landing-page.png', '/images/pod-mobile.png', '/images/pod-tablet.png'];

function podSwitch() {

    if (podCount !== podImages.length-1){
       podCount++; 
    } else {
        podCount = 0;
    }
    
    pod.src = podImages[podCount];
}

// change club images

let clubCount = 0;
const clubImages = ['/images/club-page.png', '/images/club-mobile.png', '/images/club-tablet.png'];

function clubSwitch() {

    if (clubCount !== clubImages.length-1){
       clubCount++; 
    } else {
        clubCount = 0;
    }
    
    club.src = clubImages[clubCount];
}

// change arrow images

let arrowCount = 0;
const arrowImages = ['/images/arrow-energy.png', '/images/arrow-mobile.png', '/images/arrow-tablet.png'];

function arrowSwitch() {

    if (arrowCount !== arrowImages.length-1){
       arrowCount++; 
    } else {
        arrowCount = 0;
    }
    
    arrow.src = arrowImages[arrowCount];
}



document.getElementById('pod-click').addEventListener('click', podSwitch);
document.getElementById('club-btn').addEventListener('click', clubSwitch);
document.getElementById('arrow-btn').addEventListener('click', arrowSwitch);