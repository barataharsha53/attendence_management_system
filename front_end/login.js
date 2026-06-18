const but = document.getElementById("logb")
but.addEventListener("click", function () {
    event.preventDefault()
    var email = document.getElementById("loge").value
    console.log(email)
    var pass = document.getElementById("logp").value
    console.log(pass)
    if (email === "" || pass === "") {
        alert("please fill all the feilds")
    }
    const user={
        email : email,
        pass  : pass
    }
   const users =  JSON.parse(localStorage.getItem("users"))
   const match = users.find(function(user){
     return(user.email===email && user.pass===pass)
   })
    if(match){
        alert("login successfull")
        window.location.href="index.html"
    }
    else{
        alert("Invalid credentials or mismatch")
    }
})