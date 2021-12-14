
const Title = document.getElementById("title");
const date = document.getElementById("date");
const Price = document.getElementById("price");
const Namne = document.getElementById("name");
const Languages = document.getElementById("lang");
const Radio = document.getElementsByClassName("radio");


// eroooooooooooryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy//


const errorTitle = document.getElementById("mesg3");
const errorNamne = document.getElementById("mesg4");
const errorRadio = document.getElementById("mesg5");
const errorDate = document.getElementById("mesg6");
const  errorLanguages= document.getElementById("mesg7");
const errorPrice = document.getElementById("mesg8");

/* LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLANG */
form.addEventListener("submit", (e) => {
    let messages = [];
    if (lang.value === "" || lang.value === null) {
      messages.push(" The language of book field is not filled out  *");
    }
  
    if (lang.value.length >= 30) {
      messages.push("Title must be Less than 30 characters");
  
      errorLanguages.style.color = "red";
    }
  
    if (messages.length > 0) {
      e.preventDefault();
      errorLanguages.innerText = messages.join(", ");
    } else {
        errorLanguages.innerHTML = "✔";
        errorLanguages.style.color = "green";
    }
  });

//   ----- NAMEEEEEEEEEEEEEEEEEEEEEEE -----

form.addEventListener("submit", (e) => {
  let messages = [];
  if (Namne.value === "" || Namne.value === null) {
    messages.push(" The Title field is not filled out  *");
  }
 
    if (Namne.value.length >= 30  ||Namne. value==="Number") {
    messages.push("Title must be Less than 30 characters and not contain just  numbers");

    errorNamne.style.color = "red";
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorNamne.innerText = messages.join(", ");
    errorNamne.style.color = "red";
  }
else {
  errorNamne.innerHTML = "✔";
  errorNamne.style.color = "green";
  }
});
//  TITLLLLLLLLLLLLLLLLLLLLLLLLLLLLLE//
form.addEventListener("submit", (e) => {
  let messages = [];
  if (Title.value === "" || Title.value === null) {
    messages.push("Name of author field is not filled out  *");
  }
 
  if (Title.value.length >= 30) {
    messages.push("Name must be Less than 30 characters");

    errorTitle.style.color = "red";
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorTitle.innerText = messages.join(", ");
  } else {
    errorTitle.innerHTML = "✔";
    errorTitle.style.color = "green";
  }
});


// stoy titleeeeeeeeeeeeeeeeeeeeee//
form.addEventListener("submit", (e) => {
    let messages = [];
    if (titlestory.value === "" || titlestory.value === null ) {
      messages.push("The Title of summary field is not filled out  *");
    }
  
    if (titlestory.value.length >= 30) {
      messages.push("Name must be Less than 30 characters");
  
      errortitlestory.style.color = "red";
    }
   
   
    
  
    if (messages.length > 0) {
      e.preventDefault();
      errortitlestory.innerText = messages.join(", ");
    } else {
        errortitlestory.innerHTML = "✔";
        errortitlestory.style.color = "green";
    }
  });
//   Descriptioooooooooooooooooooooooooooooooooooooooooooooooooon//
form.addEventListener("submit", (e) => {
    let messages = [];
    if (textarea.value === "" || textarea.value === null) {
      messages.push("The description field is not filled out *");
    }
  
    if (messages.length > 0) {
      e.preventDefault(); 
      errorDescri.innerText = messages.join(", ");
    } else {
        errorDescri.innerHTML = "✔";
        errorDescri.style.color = "green";
    }
  });
//   Daaaaaaaaaaaaaaaaaaaaaaaaaateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee//
form.addEventListener("submit", (e) => {
    let messages = [];
    if (date.value === "" || date.value === null) {
      messages.push("The date field is not filled out *");
    }
  
    if (messages.length > 0) {
      e.preventDefault();
      errorDate.innerText = messages.join(", ");
    } else {
        errorDate.innerHTML = "✔";
        errorDate.style.color = "green";
    }
  });
// Priiiiiiiiiiiiiiiiiiiiiiiiiiiiiiice//
form.addEventListener("submit", (e) => {
    let messages = [];
    if (price.value === "" || price.value === null) {
      messages.push(" The Title field is not filled out  *");
    }
  
    if (price.value<= 0) {
      messages.push("Your Price is imposible");
      errorPrice.style.color = "red";
    }
  
    if (messages.length > 0) {
      e.preventDefault();
      errorPrice.innerText = messages.join(", ");
    } else {
        errorPrice.innerHTML = "✔";
        errorPrice.style.color = "green";
    }
  });
//   Radiiiiiiiiiiiiiiiiiiiiiiiiio//
form.addEventListener("submit", (e) => {
let messages = [];
if (!(Radio[0].checked||Radio[1].checked||Radio[2].checked)){

    errorRadio.innerHTML = "The Type field is not filled out  *";
    
}
else{

errorRadio.innerHTML = "✔";
errorRadio.style.color = "green";
}

});

















// vvkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkM//*


var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){

        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    }


function readFormData() {
  var formData = {};
  formData["title"] = document.getElementById("title").value;
  formData["name"] = document.getElementById("name").value;
  formData["radio"] = document.getElementsByClassName("radio").value;
  formData["date"] = document.getElementById("date").value;
  formData["price"] = document.getElementById("price").value;
  formData["lang"] = document.getElementById("lang").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.title;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.name;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.radio;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.date;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.price;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.lang;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<input by type="button" onClick="onEdit(this)" value="Edit" >
                     <input by type="button" onClick="onDelete(this)" value="Delete">`;
}


function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("title").value = selectedRow.cells[0].innerHTML;
  document.getElementById("name").value = selectedRow.cells[1].innerHTML;
  document.getElementById("radio").value = selectedRow.cells[4].innerHTML;
  document.getElementById("date").value = selectedRow.cells[2].innerHTML;
  document.getElementById("price").value = selectedRow.cells[5].innerHTML;
  document.getElementById("lang") .value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.title;
  selectedRow.cells[1].innerHTML = formData.name;
  selectedRow.cells[3].innerHTML = formData.radio;
  selectedRow.cells[2].innerHTML = formData.date;
  selectedRow.cells[5].innerHTML = formData.price;
  selectedRow.cells[4].innerHTML  = formData.lang;
}

function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
      row = td.parentElement.parentElement;
      document.getElementById("employeeList").deleteRow(row.rowIndex);
      resetForm();
  }
}

function validate() {
  isValid = true;
  if (document.getElementById("title").value == "") {
      isValid = false;
      document.getElementById("titleValidationError").classList.remove("hide");
  } else {
      isValid = true;
      if (!document.getElementById("titleValidationError").classList.contains("hide"))
          document.getElementById("titleValidationError").classList.add("hide");
  }
  return isValid;
}

