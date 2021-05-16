var userName = prompt("lütfen adınızı giriniz");
console.log(userName);
document.getElementById('myName').innerHTML = userName;

(function showTime() {
    days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];

    var now = new Date();
    var day = now.getDay();
    var s = now.getSeconds();
    var m = now.getMinutes();
    var h = now.getHours();
    document.getElementById("myClock").innerHTML = addZero(h) + ":" + addZero(m)+ ":" + addZero(s) + " " + days[day];
    setTimeout(showTime, 100);    
})();c

function addZero(num) {
    if(num < 10){
        num = '0' + num;
    }
    return num;
}

