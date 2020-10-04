

var modal = document.getElementById("myModal");

var listItem = document.getElementsByClassName("item")

var span = document.getElementsByClassName("close")[0];

var info = document.getElementById("Info").innerHTML;



// Show Modal trough Jquery. Pick up image ID and and change modal information accordingly.
  $(document).ready(function(){
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#galleryList li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

  $(document).on("click", "p.item", function(){
      modal.style.display = "block";
      
        let id = $(this).attr("id")

         fetch('https://swapi.dev/api/people/'+id+'/')
        .then((resp) => resp.json())
        .then(function(data) {
          let name = data.name;
          let skin = data.skin_color;
          let hair = data.hair_color;
         

        
         
        document.getElementById("Info").innerHTML="This is "+name+". They have "+hair+ " hair and "+skin+" skin"
          })
        
        .catch(function(error) {
          console.log(error);
        });
 


  });
});





span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


