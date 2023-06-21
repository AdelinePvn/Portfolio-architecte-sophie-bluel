async function getGalerie(){
    try{
        const reponse = await fetch("http://localhost:5678/api/works");
        const data = await reponse.json();

        return data;
    } catch(error) {
        console.error(error);
    }
}

async function getCategories(){
    try{
        const reponse = await fetch("http://localhost:5678/api/categories");
        const data = await reponse.json();

        return data;
    } catch(error) {
        console.error(error);
    }
}

async function postLogin(login, password){
    try{
        const reponse = await fetch("http://localhost:5678/api/users/login",{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                "email": login,
                "password": password,
              })
        });
        const data = await reponse.json();

        window.localStorage.setItem('loginInfo', JSON.stringify(data))

        window.location.href = 'index.html'

        return data;
    }catch(error){
        console.error(error);
    }
}

async function deletePhoto(id){
    try{
        const reponse = await fetch(`http://localhost:5678/api/works/${id}`,{
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${JSON.parse( window.localStorage.getItem('loginInfo'))?.token}`
            },
            method: "DELETE",
        });
        const data = await reponse.json();

        return data;
    } catch(error) {
        console.error(error);
    }
}