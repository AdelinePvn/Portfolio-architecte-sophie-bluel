async function init() {
    const datas = await getGalerie();
    
    const galerieSection = document.querySelector(".gallery");
    
    await datas.forEach(data => {
        let galerieDiv = document.createElement('div');
        galerieDiv.classList.add("galerieArt");

        galerieDiv.innerHTML = `<figure>
            <img src=${data.imageUrl} alt=${data.title}>
            <figcaption>${data.title}</figcaption>
        </figure>`

        galerieSection.appendChild(galerieDiv)
    })
}
init();