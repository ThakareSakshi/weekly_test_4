
let inputs=document.querySelectorAll("input");
const login=document.querySelector("#login")

login.addEventListener("click",(e)=>{
    e.preventDefault();
    let username=document.querySelector("#userName");
    let userPassword=document.querySelector("#userPassword");

    if(!validateName(username.value)){
        alert(' Username should start with capital letter and must contain number and Special character');
        let msg=document.getElementById("errorname");
        msg.classList.add("errorName");
        setTimeout(()=>{
            msg.classList.remove("errorName"); 
        },1000);

        return;
    }
    else if(!validatePass(userPassword.value)){
        alert('Please enter a valid password.');
        let msg=document.getElementById("errorpass");
        msg.classList.add("errorPass");
        setTimeout(()=>{
            msg.classList.remove("errorPass"); 
        },100);
        return;
    }
    else{
        alert(`login sucessful!
        Email:${username.value}
        password:${userPassword.value}`)
        let msg=document.getElementById("success");
        msg.classList.add("errorSuccess");
        setTimeout(()=>{
            msg.classList.remove("errorSuccess"); 
        },1000);
        window.location.href="../search-table/index.html";


    }

})

function validateName(username) {
    // Use a regular expression to check if the email is valid
    if(username.length < 8){
        return 0;
    }
    if(!(username[0]>='A' && username[0]<='Z')){
        console.log(username[0])
       return 0;
    }
    // const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const specialChar=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(username);
    const hasNumber = /\d/.test(username);
    return (specialChar && hasNumber);
}

function validatePass(password) {
    // Customize these rules to match your password requirements
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const specialChar=/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
    const hasNumber = /\d/.test(password);

    return (
        password.length >= minLength &&
        hasUpperCase &&
        specialChar &&
        hasNumber &&
        password.length <=20
    );
}