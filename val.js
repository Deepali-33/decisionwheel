myobj =
{
  "problem": " this is the answer ",

  "choicearray": [],

  "choices":
  {

  },
  "moreinfo": "",

  "whocanhelp": [],

  "Decision": "this is the decision taken by user",

  "assessdecisison": " for decision assesment"
}

var questions = [" 1. What is Problem ?",
  "2. What are the Choices ?",
  "3. what can be the Consequences?",
  "4. What are the Values ?",
  "5. How are you Feeling ?",
  "6.  Anything More you want to share ?",
  "7. Who Can Help ?",
  "8. what is your Decision ?",
  "9. Assess Decision"];


  for (var j = 1; j <= myobj.choicearray.length; j++) {

    myobj.choices[j] =
    {
      "choice": "",
      "consequences": "",
      "values": "",
      "feeling": ""
    };

  }



var modal4 = document.getElementById("myModal4");

var span4 = document.getElementsByClassName("close4")[0];



function show4(btn) {
  document.getElementById(btn.id).disabled = false;
  var str1 = btn.id;
  var num = parseInt(str1.charAt(1)) + 1;
  var str2 = num.toString();
  var nid = 'b'.concat(str2);
  var qno = parseInt(str1.charAt(1)) - 1;
  var question = questions[qno];
  flag = parseInt(str1.charAt(1));

  var x = document.getElementById("q4").innerHTML = question;

  modal4.style.display = "block";
  document.getElementById(nid).disabled = false;
  // document.getElementById(btn.id).disabled = true;
}

//----------------------------------------------------------------------------------------

span4.onclick = function () {
  modal4.style.display = "none";
}
//----------------------------------------------------------------------------------------


var newinput2 = function () {
  var id = 11;
  var parent = document.getElementById("container-to-ad-2");
  // console.log(parent);
  var field = document.createElement("input")
  field.className = "myclassname3"
  field.style = "display:block;"
  field.id = "input" + id;
  parent.appendChild(field);
  id += 1;
}
//----------------------------------------------------------------------------------------


var delinput2 = function () {
  var parent = document.getElementById("container-to-ad-2");
  // parent.removeChild(parent.childNodes[parent.length-1]);  
  parent.removeChild(parent.lastChild);

}

//----------------------------------------------------------------------------------------


var n = 1;


var nxt = function () {
  var l = myobj.choicearray.length;

  if (n < (l)) {
    document.getElementById("s").disabled = true;
    document.getElementById("ne").disabled = false;

    var temparray = [];
    var valarray = document.getElementsByClassName("myclassname3");
    console.log(valarray.item);
    for (var i = 0; i < valarray.length; i++) {
      temparray.push(valarray[i].value)
    }
    myobj.choices[n].values = temparray;
    n = n + 1
    console.log(l)
    console.log(n)
  }
  else if (n == l) {
    document.getElementById("s").disabled = false;
    document.getElementById("ne").disabled = true;

    var temparray = [];
    var valarray = document.getElementsByClassName("myclassname3");
    console.log(valarray.item);
    for (var i = 0; i < valarray.length; i++) {
      temparray.push(valarray[i].value)
    }
    myobj.choices[n].values = temparray;
    n = n + 1
    console.log(l)
    console.log(n)
  }

  else if (n > l) {
    console.log(n)
    modal4.style.display = "none";
  }
}

//----------------------------------------------------------------------------------------
// ##########################################################################################
