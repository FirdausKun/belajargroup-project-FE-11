document.addEventListener("DOMContentLoaded",function(e){
    let dataStorage = JSON.parse(localStorage.getItem("account"));

    if(dataStorage == null){
        window.location.href = "login.html";
    }
})

async  function logout(){ 
    // console.log("halo")
    localStorage.removeItem("account"); 
    window.location.href = "./login.html"; 
}

