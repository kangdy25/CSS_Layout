const loginform = document.querySelector(".Login-form");
const loginInput = document.querySelector(".Login-form input");

function EmailSubmit(event) {
    event.preventDefault();
    const useremail = loginInput.value;
    localStorage.setItem("email", useremail);
}

const saveUserEmail = localStorage.getItem("email");
loginform.addEventListener("submit", EmailSubmit);

