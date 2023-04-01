let gg = document.querySelector("#gg")
let hh = document.querySelector("#hh")
let mm = document.querySelector("#mm")
let ss = document.querySelector("#ss")

// usare la funzione getTime() dell'oggetto Date per ottenere
// il numero dei millisecondi dalla data del 1/1/1970

setInterval(() => {
    let dt_1 = new Date("2023-06-10").getTime()
    let dt_2 = new Date().getTime()

    let diff_sec = parseInt((dt_1-dt_2)/1000)

    gg.innerHTML = parseInt(diff_sec / (60*60*24))
    diff_sec -= parseInt((gg.innerHTML) * (60*60*24))

    hh.innerHTML = parseInt(diff_sec / (60*60))
    diff_sec -= parseInt((hh.innerHTML) * (60*60))

    mm.innerHTML = parseInt(diff_sec/ (60))
    diff_sec -= parseInt((mm.innerHTML) * (60))

    ss.innerHTML = parseInt(diff_sec)
}, 1000);