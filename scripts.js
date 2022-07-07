
// FORM VALIDATION
// links required elements
const email = document.getElementById('email');
const names = document.getElementById('name');
const message = document.getElementById('message');
const submit = document.getElementById('send');

// validation function
function checker() {
    if (email.value.length === 0 || email.value.indexOf('@') === -1){//checks length and if valid email
        document.getElementById('warning-email').style.display = 'block'; //makes alert appear if not valid
        email.style.marginBottom = '5px';
        email.style.boxShadow = '2px 2px 4px #ff0000, -2px -2px 4px #ff0000, 2px -2px 4px #ff0000,-2px 2px 4px #ff0000'

    }

    if (names.value.length < 3){ //checks field is not empty
        document.getElementById('warning-name').style.display = 'block'; //displays alert if empty
        names.style.marginBottom = '5px';
        names.style.boxShadow = '2px 2px 4px #ff0000, -2px -2px 4px #ff0000, 2px -2px 4px #ff0000,-2px 2px 4px #ff0000'

    }

    if (message.value.length < 20){ //checks field is not empty
        document.getElementById('warning-message').style.display = 'block'; //displays alert if empty
        message.style.marginBottom = '5px';
        message.style.boxShadow = '2px 2px 4px #ff0000, -2px -2px 4px #ff0000, 2px -2px 4px #ff0000,-2px 2px 4px #ff0000'

    }
}

//reset alerts on key press for individual fields
function resetEmail() {
    document.getElementById('warning-email').style.display = 'none';
    email.style.marginBottom = '';
    email.style.boxShadow = '';
}

function resetName() {
    document.getElementById('warning-name').style.display = 'none';
    names.style.marginBottom = '';
    names.style.boxShadow = '';
}

function resetMessage() {
    document.getElementById('warning-message').style.display = 'none';
    message.style.marginBottom = '';
    message.style.boxShadow = '';
}

submit.addEventListener('click', checker); //execute funtion when submit button clicked

//reset functions on individual fields
email.addEventListener('keydown', resetEmail);
names.addEventListener('keydown', resetName);
message.addEventListener('keydown', resetMessage);

// Project PAGE

// get required elements
const pod = document.getElementById('pod-shot');
const club = document.getElementById('club-shot');
const arrow = document.getElementById('arrow-shot');

// function to change pod image on click
