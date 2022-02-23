filterObjects("all")

function filterObjects(c){
    var x, i;
    x = document.getElementsByClassName("linha");
    if (c == "all") c = "";
    for (i=0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show")
    }
    // scroll()
}

function addClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i=0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

function show(e){
    let wrap = e.children
    let evento = wrap[0].children
    let detalhes = evento[1].children
    let titulo = evento[1].style 
    
    if (detalhes[0].style.display == "none") {
        detalhes[0].style.display = "block";
    } else {
    detalhes[0].style.display = "none"
    }

    if (titulo.whiteSpace == "nowrap" && titulo.overflow == "hidden" /*&& titulo.textOverflow == "ellipsis"*/ )  {
        titulo.whiteSpace = "normal"
        titulo.overflow = "visible"
        // titulo.textOverflow = "inherit"

    } else {
        titulo.whiteSpace = "nowrap"
        titulo.overflow = "hidden"
        // titulo.textOverflow = "ellipis"
    }
}