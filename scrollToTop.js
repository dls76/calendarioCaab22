function scroll() {

    var data = new Date()
    var mes = data.getMonth()

    // Pega os elementos h3 como referência para o offsetTop
    var jan = document.getElementById("tJan").offsetTop -84;
    var fev = document.getElementById("tFev").offsetTop -84;
    var mar = document.getElementById("tMar").offsetTop -84;
    var abr = document.getElementById("tAbr").offsetTop -84;
    var mai = document.getElementById("tMai").offsetTop -84;
    var jun = document.getElementById("tJun").offsetTop -84;
    var jul = document.getElementById("tJul").offsetTop -84;
    var ago = document.getElementById("tAgo").offsetTop -84;
    var set = document.getElementById("tSet").offsetTop -84;
    var out = document.getElementById("tOut").offsetTop -84;
    var nov = document.getElementById("tNov").offsetTop -84;
    var dez = document.getElementById("tDez").offsetTop -84;


    if (mes === 0) {window.scrollTo(0, jan)} 
    else if (mes === 1) {window.scrollTo(0, fev)} 
    else if (mes === 2) {window.scrollTo(0, mar)} 
    else if (mes === 3) {window.scrollTo(0, abr)} 
    else if (mes === 4) {window.scrollTo(0, mai)} 
    else if (mes === 5) {window.scrollTo(0, jun)} 
    else if (mes === 6) {window.scrollTo(0, jul)} 
    else if (mes === 7) {window.scrollTo(0, ago)} 
    else if (mes === 8) {window.scrollTo(0, set)} 
    else if (mes === 9) {window.scrollTo(0, out)} 
    else if (mes === 10){window.scrollTo(0, nov)} 
    else if (mes === 11){window.scrollTo(0, dez)} 

}