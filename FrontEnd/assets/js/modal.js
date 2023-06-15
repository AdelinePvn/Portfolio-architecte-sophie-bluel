document.querySelector('#edit-modal').addEventListener('click', () => {
    document.querySelector('.modal').classList.add('show');

    document.querySelector('.modal .modal-close').addEventListener('click', () => {
        document.querySelector('.modal').classList.remove('show');
    })

})