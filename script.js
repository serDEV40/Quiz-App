console.log("/*************************************************************/");

var i = 0;
const j = 0;
const finalWord = "Sorular bitmiştir uygulamayı kullandığın için teşekkürler";
const title = document.querySelector(".title");
const answer_a = document.querySelector(".answer_a");
const answer_b = document.querySelector(".answer_b");
const answer_c = document.querySelector(".answer_c");
var allSelectedButtons = document.querySelectorAll(".btn-warning");

const myObject = [
    new Quiz("Soru 1-) Veri madenciliğinde en çok kullanılan dil hangisidir?", ["Python", "JS", "C#"], "Python"),
    new Quiz("Soru 2-) Web tasarımında yaygun olarak kullanılan framework hangisidir?", ["React.js", "Angular.js", "Vue.js"], "Vue.js"),
    new Quiz("Soru 3-) Oyun yapımından vs. birçok programlamanın atası hangi programlama dilidir?", ["Python", "C/C++", "HTML"], "C/C++")
];

window.addEventListener("load", Quests);
document.getElementById("minus").addEventListener("click", Quests);

function Quiz(Question, Answers, Answer) {
    this.soru = Question;
    this.cevaplar = Answers;
    this.cevap = Answer;
};

function Quests() {
    title.innerText = myObject[i].soru;
    answer_a.innerText = myObject[i].cevaplar[0];
    answer_b.innerText = myObject[i].cevaplar[1];
    answer_c.innerText = myObject[i].cevaplar[2];
    i++;
    allSelectedButtons.forEach(bttns => {
        bttns.addEventListener("click", (event) => {
            if (myObject[i - 1].cevap == event.target.innerText) {
                bttns.classList.remove("btn-warning");
                bttns.classList.add("btn-success");
            } else {
                bttns.classList.remove("btn-warning");
                bttns.classList.add("btn-danger");
            }
        });
        if (bttns.classList.contains("btn-success")) {
            bttns.classList.remove("btn-success");
            bttns.classList.add("btn-warning");
        } else if (bttns.classList.contains("btn-danger")) {
            bttns.classList.remove("btn-danger");
            bttns.classList.add("btn-warning");
        }
    });
    if (i >= myObject.length) {
        document.getElementById("warning").innerText = finalWord;
        document.getElementById("minus").disabled = true;
    }
};