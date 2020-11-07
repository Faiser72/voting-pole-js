var javaCount = 0;
var pythonCount = 0;
var javaScriptCount = 0;
var dotNetCount = 0;
var cssCount = 0;


// count function
function createFun(value) {
    if (value.id == "java") {
        javaCount = javaCount + 1;
        document.getElementById("java").innerHTML = javaCount;
    }
    else if (value.id == "python") {
        pythonCount = pythonCount + 1;
        document.getElementById("python").innerHTML = pythonCount;
    }
    else if (value.id == "javaScript") {
        javaScriptCount = javaScriptCount + 1;
        document.getElementById("javaScript").innerHTML = javaScriptCount;
    }
    else if (value.id == "dotNet") {
        dotNetCount = dotNetCount + 1;
        document.getElementById("dotNet").innerHTML = dotNetCount;
    }
    else if (value.id == "css") {
        cssCount = cssCount + 1;
        document.getElementById("css").innerHTML = cssCount;
    }

}


