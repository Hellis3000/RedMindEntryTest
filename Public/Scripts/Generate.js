
for(i=1;i <= 82; i++){
var id = 0
var first = "first"
var last = "last"



fetch('https://swapi.dev/api/people/'+i+'/')
.then(response => response.json())
  .then(function(data) {
    let x = data.name;
    let split = x.split(' ')
    let first = split[0]
    let last = split[1]

    
    id = id+1

    

   $("#galleryList").append('<li><p class="item" id='+id+' Firstname='+first+' Lastname='+last+'>'+x+'</p></li>')
   
  })
  
  
  


  
}
