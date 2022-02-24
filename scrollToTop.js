function scroll() {

    var data = new Date()
    var mes = data.getMonth()

    var jan = document.getElementById("jan").offsetTop -98;
    var fev = document.getElementById("fev").offsetTop -98;
    var mar = document.getElementById("mar").offsetTop -98;
    var abr = document.getElementById("abr").offsetTop -98;
    var mai = document.getElementById("mai").offsetTop -98;
    var jun = document.getElementById("jun").offsetTop -98;
    var jul = document.getElementById("jul").offsetTop -98;
    var ago = document.getElementById("ago").offsetTop -98;
    var set = document.getElementById("set").offsetTop -98;
    var out = document.getElementById("out").offsetTop -98;
    var nov = document.getElementById("nov").offsetTop -98;
    var dez = document.getElementById("dez").offsetTop -98;


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