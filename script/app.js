
let input = document.querySelector('#inputEmail');
let btnSubmit = document.querySelector('#btn-submit')


// btnSubmit.addEventListener('click', ()=>{
//     let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if(input.value.match(mailformat)){
//         console.log('email valid')
//     }
//     else{
//         console.log('you enter invalid email')
//     }
// });


input.addEventListener('input', ()=>{

    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailError = document.querySelector('#errorEmail')

    if(input.value.match(mailformat) || input.value === ''){
        emailError.classList.add('hidden')
    }
    else{
        emailError.classList.remove('hidden')
    }
});
