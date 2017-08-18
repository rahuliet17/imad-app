//Counter Code
var button = document.getElementById('b-count');

button.onclick = function (){
    
    //Create a request object
    var httprequest = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    httprequest.onreadtstatechange = function () { 
        if(httprequest.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(httprequest.status === 200) {
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