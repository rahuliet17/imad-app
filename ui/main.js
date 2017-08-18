//Counter Code
//var button = document.getElementById('b-count');
/*button.onclick = */function exec(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadtstatechange = function () { 
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('s-count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    
    //Make the request
    request.open('GET', 'http://rockerahul97.imad.hasura-app.io/counter', true);
    request.send(null);
};
/*function exec(){
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
}*/