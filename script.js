
function wrapfix(){
    var nn = document.getElementById("nav");
    var cc = document.getElementById("contentblk");
    if(nn.getBoundingClientRect().top < cc.getBoundingClientRect().top)
    {
        document.getElementById("navsub").style.float = "left"
        document.getElementById("contentblksub").style.maxWidth = "100%"
    }
    else
    {
        document.getElementById("navsub").style.float = "right"
        document.getElementById("contentblksub").style.maxWidth = "66%"
    }
}


window.onload = function() {
    wrapfix()
    lst = document.getElementById("firstLst").getElementsByTagName("li")

    for (var i = 0, len = lst.length; i < len; i++ ) {
        lst[ i ].onmouseover = function() { if(this.id != "projLst") {this.style.color = "rgb(140,140,140)"; this.style.cursor = "pointer"} };
        lst[ i ].onmouseout = function() { if(this.value == 0) {this.style.color="black"} };
    }
}


var lastPg = ""

function switchm(elm,viewit) {
  
    lst = document.getElementById("firstLst").getElementsByTagName("li")

    for (var i = 0, len = lst.length; i < len; i++ ) {
        
        if(lst[i] == elm) {
            lst[ i ].style.color = "rgb(140,140,140)";
            lst[ i ].value = 1
        }
        else
        {
            lst[ i ].style.color = "black"
            lst[ i ].value = 0
        }
    }

    if(lastPg != ""){
        document.getElementById(lastPg).style.display = "none";
    }

    document.getElementById(viewit).style.display = "block";

    lastPg = viewit;

}