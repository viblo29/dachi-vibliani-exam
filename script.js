const email = document.getElementById(`email`)
const btn = document.getElementById(`btn`);
const form = document.getElementById(`form`);
const emailError = document.getElementById(`emailError`);

form.addEventListener(`submit`, (e) => {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
e.preventDefault();
    if (email.value === '' || email.value == null) {
        e.preventDefault();
        emailError.textContent = "Valid email required";
        email.style.border = "1px solid var(--Vermellion, #FF6155)";
        email.style.background= "rgba(255, 97, 85, 0.15)";        
    } else if (!emailPattern.test(email.value.trim())) {
        e.preventDefault();
        emailError.textContent = "Valid email required";
        email.style.border = "1px solid var(--Vermellion, #FF6155)";
        email.style.background = "rgba(255, 97, 85, 0.15)";  
        email.style.color = "#FF6155";
    } else {
        window.location.href = "./success.html"
        emailError.textContent = "";
        email.style.borderColor = "";
        email.style.background = "";
    }

})
