function myScope() {

    const buttons = document.querySelectorAll('button')

    for (let i = 0; i < buttons.length; i++) {
        const el = buttons[i]
        el.addEventListener('click', function () {
            for (let j = 0; j < buttons.length; j++) {

                /* Opção com If*/
                if (buttons[j] === el) {
                    buttons[j].style.backgroundColor = 'red'
                } else {
                    buttons[j].style.backgroundColor = 'gray'
                }

                // opcao com operador ternario
                // // const color = buttons[j] === el ? 'red' : 'gray'
                // // buttons[j].style.backgroundColor = color
            }
        })
    }
}
myScope()






