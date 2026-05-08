function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/7", true);

    xhr.onload = function () {
        if (this.status === 200) {
            const data = JSON.parse(this.responseText);

            document.getElementById("output").innerHTML =
                "<h3>" + data.title + "</h3><p>" + data.body + "</p>";
        }
    };

    xhr.send();
}