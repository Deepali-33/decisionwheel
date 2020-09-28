console.log(click)

var questions = [" 1. What is Problem ?",
  "2. What are the Choices ?",
  "3. what can be the Consequences?",
  "4. What are the Values ?",
  "5. How are you Feeling ?",
  "6.  Anything More you want to share ?",
  "7. Who Can Help ?",
  "8. what is your Decision ?",
  "9. Assess Decision"];

function fun1() {
  document.getElementById("p1").innerHTML = questions[1];
  // document.getElementById("b2").disabled = false;
  // Get the modal
  var modal = document.getElementById("myModal");
  

  // Get the button that opens the modal
  var btn = document.getElementById("b1");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // document.getElementById("b1").disabled = true;
}

function ans1() {
  

}

