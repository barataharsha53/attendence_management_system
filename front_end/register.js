const reg = document.getElementById("reg-button")
// console.log(reg)
reg.addEventListener("click",function(){
    // alert("button clicked")
    event.preventDefault()
    var name = document.getElementById("name").value
     console.log(name)
      var email = document.getElementById("email").value
       console.log(email)
        var pass = document.getElementById("pass").value
         console.log(pass)
        var repass = document.getElementById("repass").value
         console.log(repass)
        if(email==="" || pass==="" || repass===""){
             alert("please fill all the feilds") 
        }
        if(pass!==repass){
            alert("password mismatch")
        }
        const user={
            name : name,
            email : email,
            pass : pass,
        }
        // console.log(user)
        let users = JSON.parse(localStorage.getItem("users")) || []
        users.push(user)
        console.log(user)
        localStorage.setItem("users",JSON.stringify(users))
        alert("registeration succesfull")
        window.location.href="login.html"
        
})