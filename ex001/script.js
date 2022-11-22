const res = document.querySelector('.hour')

const date = new Date()

function getDayName(day) {

    switch (day) {

        case 0:
            day = 'dominho'
            return day
        case 1:
            day = 'segunda'
            return day
        case 2:
            day = 'terça'
            return day
        case 3:
            day = 'quarta'
            return day
        case 4:
            day = 'quinta'
            return day
        case 5:
            day = 'sexta'
            return day
        case 6:
            day = 'sabado'
            return day
        default:
            day = ''
            return day
    }
}

function getMonthName(month) {

    switch (month) {
        case 1:
            month = 'janeiro'
            return month
        case 2:
            month = 'fevereiro'
            return month
        case 3:
            month = 'março'
            return month
        case 4:
            month = 'abril'
            return month
        case 5:
            month = 'maio'
            return month
        case 6:
            month = 'junho'
            return month
        case 7:
            month = 'julho'
            return month
        case 8:
            month = 'agosto'
            return month
        case 9:
            month = 'setembro'
            return month
        case 10:
            month = 'outubro'
            return month
        case 11:
            month = 'novembro'
            return month
        case 12:
            month = 'dezembro'
            return month
    }

}

function zeroEsquerda(num) {
    return num < 10 ? `0${num}` : `${num}`
}

function formDate(date) {
    const dayName = getDayName(date.getDay())
    const monthName = getMonthName(date.getMonth() + 1)
    const month = date.getMonth()
    const year = date.getFullYear()

    const hour = zeroEsquerda(date.getHours())
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `Hoje é: ${dayName} ${month} ${monthName} de ${year}  às ${hour}:${minutes}:${seconds}`
}

res.innerHTML = formDate(date)
