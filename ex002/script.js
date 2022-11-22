function myScope() {

    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputPeso = e.target.querySelector('.first-input');
        const inputAltura = e.target.querySelector('.second-input');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        
        if (!peso) {
            setResultado('Valor sem peso', false);
            return;
        }

        if (!altura) {
            setResultado('Valor sem altura', false);
            return;
        }

        const imc = getImc(peso, altura);
        const nivelImc = getNivelImc(imc)
        const msg = `${imc} ${nivelImc}`

        setResultado(msg, true)

    });

    function getNivelImc(imc) {
        const itens = ['Abaixo do peso', 'peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

        if (imc <= 18.5) {
            return itens[0]
        }

        if (imc <= 24.9) {
            return itens[1]
        }

        if (imc <= 29.9) {
            return itens[2]
        }

        if (imc <= 34.9) {
            return itens[3]
        }

        if (imc <= 39.9) {
            return itens[4]
        }

        if (imc > 40) {
            return itens[5]
        }
    }


    function getImc(peso, altura) {
        const imc = peso / altura ** 2;
        return imc.toFixed(2);
    }

    function createP() {
        const p = document.createElement('p');
        return p;
    }

    function setResultado(msg, isValid) {
        const resultado = document.querySelector('.box');
        resultado.innerHTML = ''
        resultado.classList.remove('color-red')
        const p = createP();

        if (isValid) {
            p.classList.add('color-green')
        }

        if (!isValid) {
            p.classList.add('color-red')
        }


        p.innerHTML = msg;
        resultado.appendChild(p);
    }


}


myScope();