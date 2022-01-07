async function signup(e){
    e.preventDefault()
    const email = document.querySelector("#signUpEmail")
    const password = document.querySelector("#signupPassword")
    //console.log(email.value,password.value);

    try{
        const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        M.toast({html:`welcome ${result.user.email}`, classes:"red"})
        console.log(result);
    }catch(err){
        console.log(err);
        M.toast({html:err.message, classes:"red"})
    }
}