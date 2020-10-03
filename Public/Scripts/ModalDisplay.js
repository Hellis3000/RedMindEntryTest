


var modal = document.getElementById("Modal");

var span = document.getElementsByClassName("close")[0];

var info = document.getElementById("Info").innerHTML;

// Show Modal trough Jquery. Pick up image ID and and change modal information accordingly.
$(document).ready(function() {
  $('img.mod').click(function() {
      modal.style.display = "block";
      if(($(this).attr('id')) == 4){
        console.log("it works")
      }
      if(($(this).attr('id')) == 3){
        
        console.log("This is Rey")
      }
      if(($(this).attr('id')) == 2){
        
        console.log("This is Poe")
        document.getElementById("Info").innerHTML="This is Poe"
      }
      if(($(this).attr('id')) == 1){
        console.log("This is FInn")
        document.getElementById("Info").innerHTML="This is Finn"
      }


  });
});

document.getElementsByClassName("mod").onclick = function() {
  
  console.log("works")
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}