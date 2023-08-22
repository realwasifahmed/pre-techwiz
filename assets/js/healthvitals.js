
//Hide on Submit and Show On Click.
let ShowPopup = document.getElementById('AddHealthVitals');
let popup = document.querySelector('.popup-container');
let ClosePopup = document.querySelector('#cancel');
let SubmitDetails = document.querySelector('#submit');
let confirmPopup = document.querySelector('.submit-container');
let closeConfirm = document.querySelector('#close');
let appointmentForm = document.querySelector('#appointmentForm')

ShowPopup.addEventListener('click', () => {
    popup.classList.add('active');
});

ClosePopup.addEventListener('click', () => {
    popup.classList.remove('active');
});

SubmitDetails.addEventListener('click', () => {
    confirmPopup.classList.add('active');
    popup.classList.remove('active');
});

closeConfirm.addEventListener('click', () => {
    confirmPopup.classList.remove('active');
}); 