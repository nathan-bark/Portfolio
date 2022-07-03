const email = document.getElementById('email');
const names = document.getElementById('name');
const message = document.getElementById('message');
const submit = document.getElementById('send');

function checker() {
    if (email.value.length === 0 || email.value.indexOf('@') === -1){
        document.getElementById('warning-email').style.display = 'block';
        email.style.marginBottom = '5px';
        email.style.boxShadow = '2px 2px 4px #ff0000, -2px -2px 4px #ff0000, 2px -2px 4px #ff0000,-2px 2px 4px #ff0000'

    }

    if (names.value.length < 3){
        document.getElementById('warning-name').style.display = 'block';
        names.style.marginBottom = '5px';
        names.style.boxShadow = '2px 2px 4px #ff0000, -2px -2px 4px #ff0000, 2px -2px 4px #ff0000,-2px 2px 4px #ff0000'

    }

    if (message.value.length < 20){
        document.getElementById('warning-message').style.display = 'block';
        message.style.marginBottom = '5px';
        message.style.boxShadow = '2px 2px 4px #ff0000, -2px -2px 4px #ff0000, 2px -2px 4px #ff0000,-2px 2px 4px #ff0000'

    }
}

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

submit.addEventListener('click', checker);
email.addEventListener('keydown', resetEmail);
names.addEventListener('keydown', resetName);
message.addEventListener('keydown', resetMessage);