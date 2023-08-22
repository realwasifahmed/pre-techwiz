// Get Data for Details.
for (var i = 0; i < Duration.length; i++) {
  document.getElementById("MainDetailsContainer").innerHTML += `
    <div class="details-header">
    <div class="name-container">
        <p>${Duration[i].name}</p>
    </div>
    <div class="reff">
        <p>${Duration[i].duration}</p>
    </div>
    <div class="Day">
    <button class="btn editbtns">Watch</button>
</div>
</div>
<hr class="border">
    `;
}

//Hide on Submit and Show On Click.
let popup1 = document.getElementById('popup1');
let close1 = document.getElementById('cancel1');
let editbtns1 = document.getElementsByClassName('editbtns');

editbtns1.addEventListener('click', () => {
  popup1.classList.add('active')
})

close1.addEventListener('click', () => {
  popup1.classList.remove('active')
})


