var btn = document.getElementsByClassName("btnmain");
var slide = document.getElementById("slide");

btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("activemain");
  }
  this.classList.add("activemain");
}
btn[1].onclick = function () {
  slide.style.transform = "translateX(-800px)";

  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("activemain");
  }
  this.classList.add("activemain");
}
btn[2].onclick = function () {
  slide.style.transform = "translateX(-1600px)";

  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("activemain");
  }
  this.classList.add("activemain");
}
btn[3].onclick = function () {
  slide.style.transform = "translateX(-2400px)";

  for (i = 0; i < 4; i++) {
    btn[i].classList.remove("activemain");
  }
  this.classList.add("activemain");
}


// FeedBack Form

let ShowPopup = document.getElementById('addAppointment');
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

SubmitDetails.addEventListener('onSubmit', () => {
  popup.classList.remove('active');
});

closeConfirm.addEventListener('click', () => {
  confirmPopup.classList.remove('active');
}); 