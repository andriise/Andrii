
var btn = document.getElementById("btn");
console.log(window.innerWidth);

function btnclk() {
    var elements = document.getElementsByClassName("bg-light");
    if (elements[0]) {
        
                    elements[0].className = "bg-dark";
        
                    replaceClass();

};

btn.onclick = btnclk;

}