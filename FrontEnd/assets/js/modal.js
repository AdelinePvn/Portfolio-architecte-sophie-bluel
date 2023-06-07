document.querySelectorAll("[data-toggle='modal']").forEach(element => {
    element.addEventListener('click', (e) => {

        const target = e.currentTarget.getAttribute('data-target');

        document.querySelector(target).classList.add('show');

        document.querySelector(target + ' .modal-close').addEventListener('click', () => {
            document.querySelector(target).classList.remove('show');

            document.querySelector(target + ' .modal-close').removeEventListener('click', () => {})
        })
    });
});