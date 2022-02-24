function scroll() {

    var data = new Date()
    var mes = data.getMonth()

    var jan = document.getElementById("jan").offsetTop -86;
    var fev = document.getElementById("fev").offsetTop -86;
    var mar = document.getElementById("mar").offsetTop -86;
    var abr = document.getElementById("abr").offsetTop -86;
    var mai = document.getElementById("mai").offsetTop -86;
    var jun = document.getElementById("jun").offsetTop -86;
    var jul = document.getElementById("jul").offsetTop -86;
    var ago = document.getElementById("ago").offsetTop -86;
    var set = document.getElementById("set").offsetTop -86;
    var out = document.getElementById("out").offsetTop -86;
    var nov = document.getElementById("nov").offsetTop -86;
    var dez = document.getElementById("dez").offsetTop -86;


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