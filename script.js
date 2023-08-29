const mobileNavButton = document.querySelector(".mobile-navbar-button");
const navHeader = document.querySelector(".header");

const toggleNavbar = () => {
    navHeader.classList.toggle("active");
}

mobileNavButton.addEventListener("click", () => toggleNavbar());

// Get all header links
const headerLinks = document.querySelectorAll(".header a");

// Add click event listener to each header link
headerLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Close the navbar when a link is clicked
        if (navHeader.classList.contains("active")) {
            toggleNavbar();
        }
    });
});



// FORM VALIDATION

// Get data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");


// Validate data
function validation(){
   
    clearMessage();
    let errorFlag = false;

    if(nameInput.value.length <1){
        errorNodes[0].innerText = "Name can't be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email";
        email.classList.add("error-border");
        errorFlag = true
    }

    if(message.value.length<1){
         errorNodes[2].innerText = "Please enter message";
         message.classList.add("error-border"); 
         errorFlag = true
    }

    if(!errorFlag){
        success.innerText = "Success!";
    }

}

//Clear error / success message
function clearMessage(){

    for(let i=0 ; i<errorNodes.length; i++){
        errorNodes[i].innerText= "";
    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border"); 
}


//Check if email is valid
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}