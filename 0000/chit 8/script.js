function loadData() {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
        if (xhr.status == 200) {
            document.getElementById("output").innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", "data.txt", true);
    xhr.send();
}