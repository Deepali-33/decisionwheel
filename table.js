var tasks = [];
var descs = [];

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

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
var rowCount = 1;

function addTasks() {
  var temp = 'style .fa fa-trash';
  tasks.push(document.getElementById("taskname").value);
  descs.push(document.getElementById("taskdesc").value);
  var table = document.getElementById("tasksTable");
  var row = table.insertRow(rowCount);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = tasks[rowCount - 1];
  cell2.innerHTML = descs[rowCount - 1];
  cell3.innerHTML = getDate();
  cell4.innerHTML = '<td class="fa fa-trash"></td>';
  rowCount++;
  modal.style.display = "none";
}


function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  var today = dd + '-' + mm + '-' + yyyy.toString().slice(2);
  return today;
}