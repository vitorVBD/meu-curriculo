
const acordeonGatilhos = document.querySelectorAll('.acordeon .gatilho');

acordeonGatilhos.forEach((gatilho) => {
    gatilho.addEventListener('click', (e) => {
        const acordeon = gatilho.parentElement
        const isOpen = acordeon.classList.contains('open')

        if(isOpen) {
            acordeon.classList.remove('open')
        } else {
            acordeon.classList.add('open')
        }
    })
})