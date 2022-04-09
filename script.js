
var deneme = 3; //deneme sayısı
function validate() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if (username == "cyber@demo.com" && password == "cyber1") {
        alert("Hoşgeldin " + username);
        window.location = "user.html"; //Gidilecek Sayfa
        return false;
    } else {
        deneme--;
        alert("Kalan Deneme " + deneme);
        //3 Deneme Sonrası Girişi Kilitle
        if (deneme == 0) {
            document.getElementById("user").disabled = true;
            document.getElementById("pass").disabled = true;
            document.getElementById("submit").disabled = true;
            alert('Giriş Kitlendi!')
            return false;
        }
    }
}

