const email         = document.getElementById('email')
const password      = document.getElementById('password')
const emailError    = document.getElementById('emailError')
const passwordError = document.getElementById('passwordError')


let validateInput = {
    email: false,
    password: false
}

// inputOnBlur:
const inputOnBlur = (e) =>{
    const emailValue     = email.value.trim()
    const passwordValue  = password.value.trim()

    if(validateInput.email){
        if(!validateEmail(emailValue) && !validatePhone(emailValue)){
            emailError.style.display="block"
            email.style.borderBottom='2px solid #db7807'
        }
        else{
            emailError.style.display="none"
            email.style.borderBottom="none"
        }
    }

    if(validateInput.password){
        if(!(passwordValue.length >= 4 && passwordValue.length <= 60)){
            passwordError.style.display="block"
            password.style.borderBottom='2px solid #db7807'
        }
        else{
            passwordError.style.display="none"
            password.style.borderBottom="none"
        }
    }
}

// inputOnFocus:
const inputOnFocus = (e) =>{
    validateInput[e.name] = true;
}


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);   
}

const validatePhone = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);   
}