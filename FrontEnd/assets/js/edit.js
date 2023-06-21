async function init(){
    const datas = await getGalerie();

    const galerieSection = document.querySelector(".edit-photo")

    await datas.forEach( (data) => {

        console.log(data)
        let galerieDiv = document.createElement("div");
        galerieDiv.classList.add("galerieArt");
        galerieDiv.dataset.category = data.category.id;

        galerieDiv.innerHTML = `<figure data-id=${data.id}>
                <div class="image-modal">
                    <div class="poubelle">
                        <i class="fa-solid fa-trash-can"></i>
                    </div>
                    <img src=${data.imageUrl} alt=${data.title}>
                </div>
                <figcaption> éditer </figcaption>
            </figure>`;

        galerieSection.appendChild(galerieDiv);

        onClickTrash(data.id);
    });
}
init();

function onClickTrash(id){
    document.querySelector(`figure[data-id="${id}"] .poubelle`).addEventListener('click', () => {
        const datas =  deletePhoto(id)
    })
}

document.querySelector(`.button-add`).addEventListener('click', () => {
    alert('dois-je refaire une modale?');
})

