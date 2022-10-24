// login
// document.getElementById('btn-login').addEventListener('click',function(event){
//     let emailLogin = document.getElementById('email-login').value
//     let passLogin = document.getElementById('password-login').value 
//     event.preventDefault()
// })

async function checkAkun(email,password){
    let data = await fetch('https://63528ae6a9f3f34c37409536.mockapi.io/logres');

    let dataAkun = await data.json();
    let hasil = false;

    dataAkun.forEach(element => {
        if(element.email == email && element.password == password){
            hasil = true;
        }
    });

    if(hasil){
        window.location.href = "register.html";
        // console.log("berhasil login");
    }else{
        alert("Email atau password anda salah!");
        // console.log("email atau password anda salah!");
    }
    // console.log(dataAkun)
}

document.querySelector("button").addEventListener("click", async function(e){
    e.preventDefault();
    checkAkun(document.getElementById("email-login").value,document.getElementById("password-login").value)
})
// checkAkun()  

async  function logout(){ 
        localStorage.removeItem("users"); 
        window.location.href = "./index.html"; 
    }