function myScope() {

    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const inputPeso = e.target.querySelector('.first-input');
        const inputAltura = e.target.querySelector('.second-input');

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if (!peso) {
            renderResult('Peso inválido!', false);
            return
        }

        if (!altura) {
            renderResult('altura inválida!', false);
            return
        }


        const imc = calcImc(peso, altura);
        const res = checkImc(imc);
        const msg = `${imc} ${res}`;

        renderResult(msg, true)

    })

    function calcImc(peso, altura) {
        const imc = peso / altura ** 2
        return imc.toFixed(2);
    }

    function creatP() {
        const p = document.createElement('p');
        return p
    }

    function renderResult(msg, isValid) {
        const resultado = document.querySelector('.box');
        resultado.innerHTML = ''
        const p = creatP();
        resultado.appendChild(p);


        if (isValid) {
            p.classList.add('color-green');
        }

        if (!isValid) {
            p.classList.add('color-red');
        }


        p.innerHTML = msg;
    }

    function checkImc(imc) {
        const itens = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

        if (imc < 18.5) return itens[0]
        if (imc < 24.5) return itens[1]
        if (imc < 29.9) return itens[2]
        if (imc < 34.9) return itens[3]
        if (imc < 39.9) return itens[4]
        if (imc > 40) return itens[5]
    }


















}


myScope();