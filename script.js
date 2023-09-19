function start() {
    const hourhand = document.getElementById('hour')
    const minhand = document.getElementById('minute')
    const secondhand = document.getElementById('second')

    const date = new Date();

    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    hourhand.style.transform = `rotate(${(hour * 30) + (minute * 0.5)}deg)`
    minhand.style.transform = `rotate(${(minute * 6) + (second * 0.1)}deg)`
    secondhand.style.transform = `rotate(${second * 6}deg)`
}

setInterval(start, 1000)