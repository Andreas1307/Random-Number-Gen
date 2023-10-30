let x;

document.getElementById("press").onclick = function() {
    x = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("xlabel").innerHTML = x
}