
username=document.getElementById('username');
email=document.getElementById('email');
phoen=name=document.getElementById('phone');

// console.log(name,email,phone);
username.addEventListener('blur',()=>{
    
    let regex=/^[a-zA-Z]([0-9a-zA-Z]){2,10}$/; //{0,10} means length vannot be more than 10 for username
    
    let str=username.value;
    
    if(regex.test(str)){
        console.log('it matched');
        username.classList.remove('is-invalid');
    }
    else{
        console.log('no match');
        username.classList.add('is-invalid');
    }
    
})
email.addEventListener('blur',()=>{
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; //{0,10} means length vannot be more than 10 for username
    
    let str=email.value;
    
    if(regex.test(str)){
        console.log('it matched');
        email.classList.remove('is-invalid');
    }
    else{
        console.log('no match');
        email.classList.add('is-invalid');
    }
    
})
phone.addEventListener('blur',()=>{
    let regex=/^([0-9]){10,10}$/; //{0,10} means length vannot be more than 10 for username
    
    let str=phone.value;
    
    if(regex.test(str)){
        console.log('it matched');
        phone.classList.remove('is-invalid');
    }
    else{
        console.log('no match');
        phone.classList.add('is-invalid');
    }
    
})
submit=document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    let success=document.getElementById('success');
    success.classList.add('show');
})