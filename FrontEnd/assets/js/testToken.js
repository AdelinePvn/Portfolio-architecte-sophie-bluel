const loginInfo = JSON.parse( window.localStorage.getItem('loginInfo') )

if (loginInfo?.token === undefined){
    window.location.href= 'login.html'
}