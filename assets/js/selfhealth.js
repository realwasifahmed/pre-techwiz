function getModal(id){
  var modal = document.getElementById(id);
  modal.style.display = "block";
}
function closeModal(id){
  var modal = document.getElementById(id);
  const iframeId = "iframe-" + id.split('-')[1];
  const iframe = document.getElementById(iframeId);
  iframe.src = "about:blank";
  modal.style.display = "none";
}


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
      <button onclick="getModal('myModal-${i}')" class="btn editbtns">Watch</button>
      <div id="myModal-${i}" class="modal">
        <div class="modal-content" onclick="closeModal('myModal-${i}')">
          <span class="close">&times;</span>
          <iframe id="iframe-${i}" width="100%" height="100%" src=${Duration[i].url}></iframe>
        </div>
      </div>  
    </div>
</div>
<hr class="border">
    `;
}

//Hide on Submit and Show On Click.
