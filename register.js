// regis
document.getElementById('btn-regis').addEventListener('click',function(event){
    let emailRegis = document.getElementById('email-regis').value
    var passRegis1 = document.getElementById('password1-regis').value 
    let passRegis2 = document.getElementById('password2-regis').value 
    console.log(emailRegis);
    event.preventDefault()
})