// Registration Form Validation

const registerForm =
document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit",
    function(e){

        e.preventDefault();

        let name =
        document.getElementById("name").value.trim();

        let email =
        document.getElementById("email").value.trim();

        let phone =
        document.getElementById("phone").value.trim();

        if(name === "" ||
           email === "" ||
           phone === ""){

            alert("Please fill all fields.");
            return;
        }

        alert("Registration Successful!");
        registerForm.reset();
    });
}


// Contact Form

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit",
    function(e){

        e.preventDefault();

        alert("Message Sent Successfully!");
        contactForm.reset();
    });
}


// Card Click

const cards =
document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("click", () => {

        const title =
        card.querySelector("h3").innerText;

        console.log("Selected Event: " + title);
    });

});