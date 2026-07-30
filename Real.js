function toggleMenu(){
document.getElementById("navLinks").classList.toggle("active");
}

const btn = document.getElementById("dark-btn");
btn.onclick = function(){
    document.body.classList.toggle("dark");

    btn.innerHTML = 
    document.body.classList.contains("dark")
    ? "☀️"
    :"🌙";
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById("nameError").textContent = "";

    document.getElementById("emailError").textContent = "";

    document.getElementById("messageError").textContent = "";

    document.getElementById("subjectError").textContent = "";
    

    let valid = true;

    // Get values
    const name = document.getElementById("name").value.trim();
    
    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();
    const subject = document.getElementById("subject").value.trim();
    

    // Name validation
    const nameRegex = /^[A-Za-z ]{2,50}$/;
    if (!nameRegex.test(name)) {
        const nameError =
        document.getElementById("nameError"); 
        nameError.style.color = 'crimson';
        nameError.textContent = "Name must contain only letters and spaces (2-50 characters).";  
        valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        const emailError =
        document.getElementById("emailError");
        emailError.style.color = 'crimson';
        emailError.textContent = "Enter a valid email address.";
        valid = false;
    }

    const messageRegex = /^.{10,500}$/;
    if (!messageRegex.test(message)){
        const messageError =
        document.getElementById("messageError");
        messageError.style.color = 'crimson';
        messageError.textContent = "Message must be between 10 and 500 characters.";
        valid = false;
    }

    if (subject.trim() === ""){
        const subjectError =
        document.getElementById("subjectError");
        subjectError.style.color = 'crimson';
        subjectError.textContent = "Subject cannot be empty.";
        valid = false;
    }

    if (valid) {
        const alertMessage =
        document.getElementById("alertMessage");
        alertMessage.style.color = "green";
        alertMessage.textContent = "Your message has been sent successfully!";
    }
});