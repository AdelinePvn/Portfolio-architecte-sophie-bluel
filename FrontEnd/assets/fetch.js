async function getGalerie(){
    try{
        const reponse = await fetch("http://localhost:5678/api/works");
        const data = await reponse.json();

        return data;
    } catch(error) {
        console.error(error);
    }
}