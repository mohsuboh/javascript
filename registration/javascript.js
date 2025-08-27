// const pass=document.getElementById("password")
// const passconfirm=document.getElementById("passconfirm")
// function validate()
// {
//     if(pass.value !== passconfirm.value)
//         {
//             alert("not match")
//             return;
//         }
//         passconfirm.window.alert("yesssssssss")
// }
// pass.addEventListener("change",validate)
// passconfirm.addEventListener("change",validate)
// Function to check Whether both passwords
//     function checkPassword() {
//      const   passwordinput = document.getElementById("password");
//       const   passconfirminput = document.getElementById("passconfirm");
//       const password=passwordinput.value;
//       const passconfirm=passconfirminput.value;
//       if (password === passconfirm) {
//     console.log("Passwords match!");
// } else {
//     console.log("Passwords do not match!");
// }
//     }

//     if (password == '')
//         alert("Please enter Password");

//     else if (passconfirm== '')
//         alert("Please enter confirm password");

//     else if (password.value !== passconfirm.value) {
//         alert("Password did not match: Please try again...")
//         return false;
//     }

//     else {
//         alert("Password Match: Welcome !")
//         return true;
//         console.log("hii")

//     }
// }  























// const firstname = document.getElementsByName("fname")




// const form = document.getElementById('registration-form');

// form.addEventListener('submit', (create) => {
//     create.preventDefault();
//     const password = document.getElementById('password').value.trim();
//     const passconfirm = document.getElementById('passconfirm').value.trim();
//     console.log(password)
//     console.log(passconfirm)
//     form.forEach(() =>
//     password.value='',
//     passconfirm.value=''
// )


//     if (password === passconfirm) {

        


//         alert("faild!")
//     }
//     else {

//         console.log(" match")
//         alert("sucsses!")
//     }
// })






























// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('registration-form');
//     const fnameInput = document.getElementById('fname');
//     const lnameInput = document.getElementById('lname');
//     const emailInput = document.getElementById('email');
//     const passInput = document.getElementById('password');
//     const passconfirmInput = document.getElementById('passconfirm');
//     const term = document.getElementById('term');
//     const warningMessage = document.getElementById('warningMessage');

//     form.addEventListener('submit', function (event) {
//         // Prevent the form from submitting by default
//         event.preventDefault();

//         // Check if the input value is empty or contains only whitespace
//         if (fnameInput.value.trim() === '') {
//             // If it's empty, add a red border and show the warning message
//             fnameInput.style.borderColor = 'red';
//             warningMessage.style.display = 'block';
//         } else if (lnameInput.value.trim() === '') {
//             lnameInput.style.borderColor = 'red';
//             warningMessage.style.display = 'block';
//         } else if (emailInput.value.trim() === '') {
//             emailInput.style.borderColor = 'red';
//             warningMessage.style.display = 'block';



//         } else if (passInput.value.trim() === '') {
//             passInput.style.borderColor = 'red';
//             warningMessage.style.display = 'block';

//         } else if (passconfirmInput.value.trim() === '') {
//             passconfirmInput.style.borderColor = 'red';
//             warningMessage.style.display = 'block';

//         } else if (term.value.trim() === '') {
//             term.style.borderColor = 'red';
//             warningMessage.style.display = 'block';

//         } else
//             // If it's not empty, remove the red border and hide the warning message
//             fnameInput.style.borderColor = ''; // Resets the border to its default
//             lnameInput.style.borderColor = ''; // Resets the border to its default
//             emailInput.style.borderColor = ''; // Resets the border to its default
//             passInput.style.borderColor = ''; // Resets the border to its default
//             passconfirmInput.style.borderColor = ''; // Resets the border to its default
//             term.style.borderColor = ''; // Resets the border to its default
//         warningMessage.style.display = 'none';
//         // You can add your form submission logic here (e.g., send data to a server)
//         // For this example, we'll just log a success message
//         console.log('Form submitted successfully!');
//     });
// });








// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('registration-form');
//     const inputs = [
//         document.getElementById('fname'),
//         document.getElementById('lname'),
//         document.getElementById('email'),
//         document.getElementById('password'),
//         document.getElementById('passconfirm')
//     ];
//     const term = document.getElementById('term');
//     const warningMessage = document.getElementById('warningMessage');

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();
//         let isValid = true;

//         // Clear previous warnings and red borders
//         warningMessage.style.display = 'none';
//         inputs.forEach(input => {
//             input.style.borderColor = '';
//         });
//         term.style.borderColor = '';

//         // Validate each input field
//         inputs.forEach(input => {
//             if (input.value.trim() === '') {
//                 input.style.borderColor = 'red';
//                 isValid = false;
//             }
//         });

//         // Handle the checkbox validation
//         if (!term.checked) {
//             term.style.borderColor = 'red';
//             isValid = false;
//         }

//         // If any field is invalid, display the warning message
//         if (!isValid) {
//             warningMessage.style.display = 'block';
//         } else {
//             // All fields are valid, proceed with form submission logic
//             console.log('Form submitted successfully!');
//             // You can add your code to submit the form here
//         }
//     });
// });















// regex !!!imporant!!!




 document.getElementById('registration-form').addEventListener('submit' , submit)



 function submit(event)
{

    event.preventDefault()
    const fields = document.querySelectorAll('input');
    // document.querySelectorAll('.invalid-msg').forEach(i=>i.remove())
    
    fields.forEach(i=>{
        i.parentElement.querySelector('.invalid-msg')?.remove()
        let msg = null
        if(!i.value){
            // i.parentElement.classList.add('invalid')
            msg =  i.dataset.msg || `The ${i.name} is required`
        }

        if(i.dataset.min && i.value.length < i.dataset.min){
            msg = `The ${i.name} atleast ${i.dataset.min}`
        }
        
        if(i.dataset.minval && i.value < i.dataset.minval){
            msg = `The ${i.name} atleast ${i.dataset.minval}`
        }

        if(i.dataset.match){
            const match = document.querySelector(i.dataset.match)
            if(i.value != match.value){
                msg = `The ${i.name} dose not match ${match.name}`
            }
        }

        if(msg)
        {
            const span = document.createElement('span')
            span.className  = 'invalid-msg'
            span.innerText = msg
            i.parentElement.append(span)
        }
    })


    alert('sbmit')
}





// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('registration-form')
//     const passwordInput = document.getElementById('password')
//     const passconfirmInput = document.getElementById('passconfirm')

//     const formFields = [
//         { input: document.getElementById('fname'), warning: document.getElementById('fnamewarning') },
//         { input: document.getElementById('lname'), warning: document.getElementById('lnamewarning') },
//         { input: document.getElementById('email'), warning: document.getElementById('emailwarning') },
//         { input: document.getElementById('password'), warning: document.getElementById('passwordwarning') },
//         { input: document.getElementById('passconfirm'), warning: document.getElementById('passconfirmwarning') },
//     ];
//     const term = document.getElementById('term')
//     const termWarning = document.getElementById('termwarning')
//     const notmatch = document.getElementById('warningMessage');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault()
//         let isValid = true

//         formFields.forEach(field => {
//             field.input.style.borderColor = ''
//             field.warning.style.display = 'none'

//             if (field.input.value.trim() === '') {
//                 field.input.style.borderColor = 'red'
//                 field.warning.style.display = 'block'
//                 isValid = false;
//             }
//         });
//         term.style.borderColor = ''
//         termWarning.style.display = 'none'
//         notmatch.style.display = 'none'
//         // passwordInput.style.borderColor = '';
//         // passconfirmInput.style.borderColor = '';

//         if (!(term.checked)) {
//             term.style.borderColor = 'red'
//             termWarning.style.display = 'block'
//             isValid = false
//         }


//         console.log(passwordInput.value)
//         console.log(passconfirmInput.value)
//         if ( passwordInput.value !== passconfirmInput.value) {
//             passwordInput.style.borderColor = 'red'
//             passconfirmInput.style.borderColor = 'red'
//             notmatch.style.display='block'
//             isValid = false
//         }
//         // if (isValid && passwordInput.value !== passconfirmInput.value) {
//         //     passwordInput.style.borderColor = 'red'
//         //     passconfirmInput.style.borderColor = 'red'
//         //     isValid = false
//         // }
        
        
//         if (isValid) {
//         alert('Form submitted successfully!')
//     }
//     });
// });