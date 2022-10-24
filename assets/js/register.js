const myPost = document.getElementById('form');
const url_link = 'https://63528ae6a9f3f34c37409536.mockapi.io/logres';

console.log("test post");

myPost.addEventListener('submit',async function (e) {
    e.preventDefault();
    var email1 = document.getElementById("email-regis").value
    var username1 = document.getElementById("Uname-regis").value
    var password1 = document.getElementById("password1-regis").value
    // var password2 = document.getElementById("password2-regis").value

    fetch(url_link, {
        method: "POST",
        body: JSON.stringify({
            email: email1,
            nama: username1,
            password: password1,
            // password: password2,
        }),
        headers: {"Content-type": "application/json"},
    })
    .then((res) => {
        window.location.href = "login.html";
    })
    .catch((err) =>{
        alert("Terjadi error!");
    })
})
