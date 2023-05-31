const defaultValues = {
    email: 'sophie.bluel@test.tld',
    password : 'S0phie'
}


document.getElementById('login_form').addEventListener('submit', async function(e){
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
    console.log(email)
    console.log(password)

    if(email === defaultValues.email && password === defaultValues.password){
        const loginInfo = await postLogin(email , password);
        window.localStorage.setItem('loginInfo', JSON.stringify(loginInfo))

        window.location.href = 'index.html'
    }
})