
// Get Data for Details.
for (var i = 0; i < DataMedical.length; i++) {
    document.getElementById('MainDetailsContainer').innerHTML += `
    <div class="details-header">
        <div class="name-container">
            <p>${DataMedical[i].name}</p>
        </div>
        <div class="reff">
            <p>${DataMedical[i].Doctor}</p>
        </div>
        <div class="timing">
            <p>${DataMedical[i].Timing}</p>
        </div>
        <div class="Day">
            <p>${DataMedical[i].Day}</p>
        </div>
        <div class="status">
            <p>${DataMedical[i].Status}</p>
        </div>
    </div>
    <hr class="border">
    `;
}

//Hide on Submit and Show On Click.
let ShowPopup = document.getElementById('addMedicine');
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