
function talkHi() {
    console.log('Hello')
}

const talk = setInterval(function () {
    const hi = talkHi()
    return hi
}, 1000)

setTimeout(function(){
    clearTimeout(talk)
}, 10000)