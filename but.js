// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var answers = [];

var questions = [" 1. What is Problem ?",
 "2. What are the Choices ?",
  "3. what can be the Consequences?",
   "4. What are the Values ?",
    "5. How are you Feeling ?",
     "6.  Anything More you want to share ?",
      "7. Who Can Help ?",
       "8. what is your Decision ?",
        "9. Assess Decision"];


//----------------------------------------------------------------------------------------
console.log(onclick);
var modal2 = document.getElementById("myModal2");

var span2 = document.getElementsByClassName("close2")[0];
choicearray=[];

function show2(btn) 
{
  document.getElementById(btn.id).disabled = false;
  var str1 = btn.id;
  var num = parseInt(str1.charAt(1)) + 1;
  var str2 = num.toString();
  var nid = 'b'.concat(str2);
  var qno = parseInt(str1.charAt(1)) - 1;
  var question = questions[qno];

  var x = document.getElementById("q2").innerHTML = question;

  modal2.style.display = "block";
  document.getElementById(nid).disabled = false;
  // document.getElementById(btn.id).disabled = true;
}

span2.onclick = function () {
    modal2.style.display = "none";
  }


  var newinput = function() 
  {
    var id = 1;
    var parent = document.getElementById("container-to-ad");
    // console.log(parent);
    var field = document.createElement("input")
    field.className = "myclassname"
    field.style = "display:block;"
    field.id = "input" + id;
    parent.appendChild(field);
    id += 1;
  }


  var delinput = function()
  {
    var parent = document.getElementById("container-to-ad");
    // parent.removeChild(parent.childNodes[parent.length-1]);  
    parent.removeChild(parent.lastChild);

  }


  function storingchoices() {
    var choices = document.getElementsByClassName("myclassname");
    console.log(choices.item);
    for (var i = 0; i < choices.length; i++)
    {
        choicearray.push(choices[i].value)
    }
        console.log(choicearray);
    modal2.style.display = "none";
  }
  
  //----------------------------------------------------------------------------------------
  function storingAnswers() {
    var ans = document.getElementById("txtarea").value;
    answers.push(ans);
    console.log(ans);
    console.log(answers);
    modal.style.display = "none";
  }
  
  
  //----------------------------------------------------------------------------------------
  var modal3 = document.getElementById("myModal3");
  
  var span3 = document.getElementsByClassName("close3")[0];
  choicearray=[];
  
  function show3(btn) 
  {
    document.getElementById(btn.id).disabled = false;
    var str1 = btn.id;
    var num = parseInt(str1.charAt(1)) + 1;
    var str2 = num.toString();
    var nid = 'b'.concat(str2);
    var qno = parseInt(str1.charAt(1)) - 1;
    var question = questions[qno];
  
    var x = document.getElementById("q3").innerHTML = question;
  
    // modal3.style.display = "block";
    var parent = document.getElementById("container-to-ad");
    for (i = 0; i < choicearray.length; i++) {
      var par = document.createElement("p")
      par.id="p"+i;
      parent.appendChild(par);
      document.getElementById(par.id).innerHTML = choicearray[i];
    }
    // document.getElementById("choices").innerHTML = choicearray[0];
    modal3.style.display = "block";
    document.getElementById(nid).disabled = false;
    // document.getElementById(btn.id).disabled = true;
  }
  
  span3.onclick = function () {
      modal3.style.display = "none";
    }
  
  
    var newinput = function() {
      var id = 1;
      var parent = document.getElementById("container-to-ad");
      // console.log(parent);
      var field = document.createElement("input")
      field.className = "myclassname"
      field.style = "display:block;"
      field.id = "input" + id;
      parent.appendChild(field);
      id += 1;
    }
  
  
    var delinput = function()
    {
      var parent = document.getElementById("container-to-ad");
      // parent.removeChild(parent.childNodes[parent.length-1]);  
      parent.removeChild(parent.lastChild);
  
    }