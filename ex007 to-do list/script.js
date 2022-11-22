
function myScope() {

    const text = document.querySelector('#itext')
    const btn = document.querySelector('#btn')
    const list = document.querySelector('#res')


    text.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            const textUser = text.value
            if (!textUser) return

            const li = createLi()
            li.innerHTML = textUser
            list.appendChild(li)
            clearInput()
            createButtonClear(li)
        }
    })

    function clearInput() {
        text.value = ''
        text.focus()
    }

    function createLi() {
        let li = document.createElement('li')
        return li
    }


    btn.addEventListener('click', function (e) {
        const textUser = text.value
        if (!textUser) return

        const li = createLi()
        li.innerHTML = textUser
        list.appendChild(li)
        clearInput()
        createButtonClear(li)

    })

    function createButtonClear(li) {
        li.innerHTML += ' '
        const btnClear = document.createElement('button')
        btnClear.innerText = 'Apagar'
        btnClear.setAttribute('class' , 'apagar')
        li.appendChild(btnClear)
    }

    document.addEventListener('click' , function(e){
        const el = e.target
        
        if (el.classList.contains('apagar')) {
            el.parentElement.remove()
        }
    })

    






















}
myScope()