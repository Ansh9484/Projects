function submitdata() {    
    const name = document.getElementById("name").value;
    const number = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;
    
    if(name === "" || number === "" || password === "")
        {
            alert("fill up details");
        }
    else{
    }
    console.log(name);
    console.log(number);
    console.log(password);
}
