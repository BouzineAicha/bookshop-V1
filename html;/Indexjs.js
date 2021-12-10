const Titlestory = document.getElementById("titlestory");
const Descri = document.getElementById("textarea");
const Title = document.getElementById("title");
const Date = document.getElementById("date");
const Price = document.getElementById("price");
const Namne = document.getElementById("name");
const Languages = document.getElementById("lang");
const Radio = document.getElementsByClassName("radio");


// eroooooooooooryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy//

const errortitlestory = document.getElementById("mesg1");
const errorDescri = document.getElementById("mesg2");
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

//   ----- Title -----

form.addEventListener("submit", (e) => {
  let messages = [];
  if (Namne.value === "" || Namne.value === null) {
    messages.push(" The Title field is not filled out  *");
  }

  if (Namne.value.length >= 30) {
    messages.push("Title must be Less than 30 characters");

    errorTitle.style.color = "red";
  }
  if (titlestory.value.length =Number) {
    messages.push("you can't choose just number*");

    errortitlestory.style.color = "red";
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorTitle.innerText = messages.join(", ");
  } else {
    errorTitle.innerHTML = "✔";
    errorTitle.style.color = "green";
  }
});
//  Nameeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee//
form.addEventListener("submit", (e) => {
  let messages = [];
  if (Title.value === "" || Title.value === null) {
    messages.push("Name of author field is not filled out  *");
  }
  if (titlestory.value.length =Number) {
    messages.push("you can't choose just number*");

    errortitlestory.style.color = "red";
  }
  if (Title.value.length >= 30) {
    messages.push("Name must be Less than 30 characters");

    errorNamne.style.color = "red";
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorNamne.innerText = messages.join(", ");
  } else {
    errorNamne.innerHTML = "✔";
    errorNamne.style.color = "green";
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
    if (titlestory.value.length =Number) {
      messages.push("you can't choose just number*");
  
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
    if (titlestory.value.length =Number) {
        messages.push("you can't choose just number*");
    
        errortitlestory.style.color = "red";
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
 errorPrice.style.color = "green";
}

});