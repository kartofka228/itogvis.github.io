
var slova = ["жираф", "коза", "арбуз", "петух", "краб", "сверчок", "уважение"];
var slovo = [];
var n = 0;
var kolv = 0;
var s = "";
var slovopobeda = "";
function start() {
    //сначала стираем старые границы
    slovopobeda = "";
    for (var i = 0; i < kolv; i++) {
        idtd = document.getElementById("buk" + i);
        idtd.className = "net";
    }
    n = Math.floor(Math.random() * 8);

    s = slova[n];
    kolv = s.length;
    for (var i = 0; i < kolv; i++) {
        slovo[i] = s.slice(i, i + 1);
        // alert("i=" + i + "buk" + slovo[i]);
    }


    for (var i = 0; i < kolv; i++) {
        idtd = document.getElementById("buk" + i);
        idtd.className = "est";
    }
}
document.addEventListener("keydown", move);
//подслушиваем клавиатуру
function move(event) {
    var b = event.key;
    //
    //бежим в цикле и сравниваем каждую букву
   slovopobeda="";
    for (var i = 0; i <= kolv; i++) {
             if (String(b).toLocaleLowerCase() == s[i]) {

            idImg = document.getElementById("buk" + i);

            idImg.innerHTML = String(b).toLocaleUpperCase();
            slovopobeda+= s[i];

        }
        
    }
    alert("slo="+slovopobeda+"s="+s)
if (slovopobeda ==s) { 
   win.src="img/victory.jpg";
 }
}