
function myScope() {
    function getTimerFromSecond(segundos) {
        const date = new Date(segundos * 1000)
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }

    const timer = document.querySelector('.timer');
    let seconds = 0;
    let contTimer;

    function startTimer() {
        contTimer = setInterval(function () {
            seconds++
            timer.innerHTML = getTimerFromSecond(seconds)
        }, 100)
    }

    document.addEventListener('click', function (e) {
        let item = e.target

        if (item.classList.contains('inicio')) {
            timer.classList.remove('paused')
            clearInterval(contTimer);
            startTimer();
        }

        if (item.classList.contains('pause')) {
            timer.classList.add('paused')
            clearInterval(contTimer);
        }

        if (item.classList.contains('reset')) {
            timer.classList.remove('paused')
            clearInterval(contTimer);
            seconds = 0;
            timer.innerHTML = '00:00:00';
        }
    })

}
myScope();







