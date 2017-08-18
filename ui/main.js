console.log('Loaded!');

//Changing the text of main-text div
var element = document.getElementById('main-text');
element.innerHTML = "Rahul";

//Move the Image
var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '100px';
}