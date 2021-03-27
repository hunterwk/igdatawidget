function igCall () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status ==200) {
            document.getElementById("dataResult").innerHTML = this.responseText;
        }
    }
    xhttp.open("GET", "https://api.instagram.com/oauth/authorize?client_id=2617050955253442&redirect_uri=https://instagram.com&response_type=code&scope=user_media", true);
    xhttp.send();
}