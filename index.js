const pass = document.getElementById("password");
const confPass = document.getElementById("confpassword");
const pPass = document.querySelectorAll(".invalid");

password.addEventListener("keyup", () => {
    const passwordVal = document.getElementById("password").value;
    const confPasswordVal = document.getElementById("confpassword").value;
    if(passwordVal !== confPasswordVal) {
        pass.classList.add("error");
        confPass.classList.add("error");
        pPass.forEach(p => {
            p.classList.add("invalid");
        });
    } else {
        pass.classList.remove("error");
        confPass.classList.remove("error");
        pPass.forEach(p => {
            p.classList.remove("invalid");
        });
    }
});

confPass.addEventListener("keyup", () => {
    const passwordVal = document.getElementById("password").value;
    const confPasswordVal = document.getElementById("confpassword").value;
    if(passwordVal !== confPasswordVal) {
        pass.classList.add("error");
        confPass.classList.add("error");
        pPass.forEach(p => {
            p.classList.add("invalid");
        });
    } else {
        pass.classList.remove("error");
        confPass.classList.remove("error");
        pPass.forEach(p => {
            p.classList.remove("invalid");
        });
    }
});
