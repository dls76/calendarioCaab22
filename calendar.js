const date = new Date();

let dSemana, dia, mes, ano

dSemana = date.getDay()
dia = date.getDate()
mes = date.getMonth()
ano = date.getFullYear()

console.log(dSemana)
console.log(dia) 
console.log(mes) 
console.log(ano)

const renderCalendar = () => {

    date.setDate(1);

    const monthDays = document.querySelector('.days')

    const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate() 
    /*w3: 
    1. getDate() - Get the day as a number (1-31)
    2. new Date(year, month, ...) creates a new date object with a specified date and time. Seven (7) numbers specify year, month, day, hour, minute, second, and millisecond (in that order)
    */

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()

    const firstDayIndex = date.getDay()

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()

    // console.log(lastDayIndex)

    const nextDays = 7 - lastDayIndex - 1

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",]

    let diaSemana = ["Domingo, ", "Segunda-feira, ", "Terça-feira, ", "Quarta-feira, ", "Quinta-feira, ", "Sexta-feira, ", "Sábado",]

    // document.querySelector('.date h1').innerHTML = months[date.getMonth()]

    document.querySelector(".date h3").textContent = months[date.getMonth()] + ' ' + date.getFullYear()

    // document.querySelector('.date p').innerHTML = diaSemana[dSemana] + dia + " de " + months[mes] + " de " + ano /*new Date().toDateString()*/

    let days = ""

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    }

    for (let i = 1; i <= lastDay; i++) {

        // código original =>   if (i === new Date().getDate() && date.getMonth() === new Date().getMonth())
        
        /*código sugerido para não marcar o mesmo dia todo ano*/
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            days += `<div class="today">${i}</div>`
        } else {
            days += `<div>${i}</div>`
        }  
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`
    }
    monthDays.innerHTML = days;
}

document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1)
    renderCalendar()
})

document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1)
    renderCalendar()
})

document.querySelector(".btn-hoje").addEventListener("click", () => {
    date.setFullYear(ano)
    date.setMonth(mes)
    renderCalendar()
})

renderCalendar()