const loginInfo = JSON.parse( window.localStorage.getItem('loginInfo') )
console.log(loginInfo)
console.log(loginInfo?.token)

if (loginInfo?.token === undefined){
    window.location.href= 'login.html'
}