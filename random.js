window.addEventListener('click', function(arrowz){
  var clickResponse = Math.floor(Math.random()*2);
  var arrowResponse = document.getElementById("containz");
  if (clickResponse === 1) {
      arrowResponse.innerHTML = '<img src="images/left.png" class= "leftArrow">';
  } else {
    arrowResponse.innerHTML = '<img src="images/right.png"class="rightArrow">';
  }
});

