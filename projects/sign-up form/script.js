var form = document.querySelector('form');

form.addEventListener('input', (event) => {
    event.validateForm;
    event.preventDefault();
})

function validateForm() {
    var password = document.getElementById('password');
    var confirmpassword = document.getElementById('confirmpassword');
    var errorMsg = document.querySelector("span");
   
    
    if (password.value == confirmpassword.value) {
        
        
        password.style.borderColor = 'lightblue';
        confirmpassword.style.borderColor = 'lightblue';
        errorMsg.textContent = ""
        errorMsg.classList.toggle('text-error')
        
        
    }
    else {
        password.style.borderColor = 'red';
        confirmpassword.style.borderColor = 'red';
        
       
        
    }
    
    
};
password.keyup = validateForm;
confirmpassword.onchange = validateForm;


