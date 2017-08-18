//Counter Code
function exec(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() 
    {
          if (request.readyState === XMLHttpRequest.DONE) 
          {
              //Take Some Action
              if (request.status === 200) 
                { 
                    var counter = request.responseText; 
                    var span = document.getElementById('count');
                    span.innerHTML = counter.toString();
                } 
          } 
    }; 
    request.open("GET", "http://rockerahul97.imad.hasura-app.io/counter", true);
    request.send(); 
    console.log('EXECUTED');
}

//Submit Code
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById("submit_btn");
submit.onclick = function() {
  //Make the request to the server and send the name
  
  //Capture a list of the names and render it as a list
  var names = ['name1','names2','names3','names4'];
  var list='';
  for(var i=0;i<names.length; i++) {
      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
};