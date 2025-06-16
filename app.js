let Data = [
     {
          "question": "1. Ərzaq mallarının sertifikatlaşma prosedurasinda nələr nəzərdən keçirilir?",
          "options": {
               "A": "Saxlanmasında bir çox faktorlar nəzərdən keçirilir",
               "B": "Məhsulların iydə və dadda kənar zəif çalarların olması",
               "C": "Sağlamlıq üçün təhlükə yaradan maddələrin (kimyəvi çirklənmə, toksinlər) miqdarı",
               "D": "Xammalın hissələrin və resepturasının keyfiyyəti",
               "E": "Əməyin keyfiyyəti"
          },
          "correct_answer": "C"
     },
     {
          "question": "2. İnsan beyin qabığında əsas qəbul mərkəzlərinin fərqlənməsinə aid deyil?",
          "options": {
               "A": "Dad mərkəz",
               "B": "Hərəkətverici mərkəz",
               "C": "Lamisə mərkəzi",
               "D": "Fərqləndirmə mərkəzi",
               "E": "Eşitmə mərkəzi"
          },
          "correct_answer": "D"
     },
     {
          "question": "3. Patent-hüquq parametrlərinə hansilar aiddir?",
          "options": {
               "A": "Məhsulun əmtəə görünüşünü əks etdirir",
               "B": "Məhsulun sanitar normalara cavab verməsi",
               "C": "Malın istifadə olunduğu ölkədə  və xaricdə patent təmizliyinə və mühafizə olunmasını təmin edir",
               "D": "Məhsulun istifadə sahəsində tətbiq olunur",
               "E": "Malların insanın təlabatlarına görə xarakterizəsi"
          },
          "correct_answer": "C"
     },
     {
          "question": "4. Kolbasanın konsistensiyasını təyini hansı cihazla aparılır?",
          "options": {
               "A": "Purkametr",
               "B": "Penetrometr",
               "C": "Laktosimetr",
               "D": "Mutnometr",
               "E": "Piknometr"
          },
          "correct_answer": "B"
     },
     {
          "question": "5. Orqanoleptika elmi nəyi öyrədir?",
          "options": {
               "A": "Məhsulların, onların aralıq formalarını və tərkib hissələrini",
               "B": "Məhsulların qurluşunu və formasını",
               "C": "Məhsulların qidalıq dəyərini və ölçülərini",
               "D": "Məhsulların kimyəvi tərkibini",
               "E": "Məhsulların quruluşunu və istehlak xüsusiyyətlərini"
          },
          "correct_answer": "A"
     },
     {
          "question": "6. Qırmızı oynaq və qazlaşdırılmış şərablar dequstasiyadan əvvəl necə temperaturda soyutmaq lazımdır?",
          "options": {
               "A": "6-7°C",
               "B": "15-16°C",
               "C": "8-10°C",
               "D": "12-14°C",
               "E": "2-4°C"
          },
          "correct_answer": "D"
     },
     {
          "question": "7. Dadın son hədd konsentrasiyası saxaroza üçün nə qədərdir?",
          "options": {
               "A": "0,1-0,3",
               "B": "0,2-0,4",
               "C": "0,2-0,7",
               "D": "0,5-0,7",
               "E": "0,1-0,4"
          },
          "correct_answer": "B"
     },
     {
          "question": "8. İlk dəfə xüsusi dequstatorlar hazırlayan məktəblər harada açılmışdır?",
          "options": {
               "A": "Bostonda",
               "B": "Nyu-Yorkda",
               "C": "Çikaqoda",
               "D": "Meksikada",
               "E": "Parisdə"
          },
          "correct_answer": "A"
     },
     {
          "question": "9. Fransanın hansı universitetində sensor analiz metodları hazırlanmışdır?",
          "options": {
               "A": "Heçbirində",
               "B": "Aqrar Universitetdə",
               "C": "Sənaye Universitetində",
               "D": "Qida sənayesi Kollecində",
               "E": "Dicon Yeyinti Sənayesi universitetində"
          },
          "correct_answer": "E"
     },
     {
          "question": "10. Neçənci ildə Şərqi Avropa ölkələrində dequstatorların orqanoleptik qiymətləndirmə, terminologiya və sensor qabiliyyətini yoxlama təcrübəsinə əsasən, beynəlxalq standartlar tətbiq olunmuşdur?",
          "options": {
               "A": "1935",
               "B": "1988",
               "C": "1985",
               "D": "1995",
               "E": "1993"
          },
          "correct_answer": "C"
     }
];
let crIndx = undefined;
let checkClick = false;
let beforeIndex = new Array();
let statusOption = {
     ture_count: 0,
     false_count: 0,
     for50: 0,
     percent: 0,
     total: 0,
     false_question: [],
}
function loadQusetion(object) {
     let question = document.getElementById("question");
     let answers = document.querySelectorAll(".answer");
     let answerbox = document.querySelector(".answers")
     const buttons = Array.from(answers);
     for(let i = buttons.length - 1; i > 0; i --){
          const j = Math.floor(Math.random() * (i + 1));
          [buttons[i], buttons[j]] = [buttons[j], buttons[i]]
     }
     buttons.forEach(btn => {
          answerbox.appendChild(btn);
     })
     question.innerText = object.question;
     answers.forEach(button => {
          button.innerText = object.options[button.value]
     })

}

function windowOnload() {

     checkClick = false;
     document.querySelectorAll(".answer").forEach(button => {
          button.classList.remove("false")
          button.classList.remove("correct")
     })

     let random = Math.floor(Math.random() * Data.length);
     if(beforeIndex.length == Data.length){
          finishQuiz();
          return;
     }
     while (beforeIndex.includes(random)) {
          random = Math.floor(Math.random() * Data.length);
     }
     loadQusetion(Data[random]);
     crIndx = random;
     beforeIndex.push(random);

}
document.querySelector(".answers").addEventListener("click", function (event) {
     if (checkClick == true) return;
     let element = event.target;
     if (element.localName !== "button") return;

     if (element.value == Data[crIndx].correct_answer) {
          element.classList.add("correct");
          statusOption.ture_count++;
          console.log(statusOption)
     } else {
          element.classList.add("false");
          statusOption.false_question.push(Data[crIndx]);
          statusOption.false_count++;

          document.querySelectorAll(".answer").forEach(button => {
               if (button.value == Data[crIndx].correct_answer) {
                    button.classList.add("correct")
               }
          })
     }
     checkClick = true;
});
function showResult() {
     document.querySelector(".statusWindow").classList.add("show");
     document.querySelector(".lockScreen").classList.add("show");
     let resSpan = document.querySelectorAll(".res");
     resSpan[0].innerText = statusOption.ture_count;
     resSpan[1].innerText = statusOption.false_count;
     let total = statusOption.ture_count + statusOption.false_count;
     resSpan[2].innerText = total;
     if (total == 0) return;
     resSpan[3].innerText = ((50 * statusOption.ture_count) / total).toFixed(2) * 2 + "%"
     resSpan[4].innerText = ((50 * statusOption.ture_count) / total).toFixed(2);
}
function closeResult() {
     document.querySelector(".statusWindow").classList.remove("show");
     document.querySelector(".lockScreen").classList.remove("show");
}
function showStatus(){
     document.querySelector(".statusDiv").classList.add("show");
     document.querySelector(".lockScreen").classList.add("show");
     statusOption.false_question.forEach(obj => {
          let h1 = document.createElement("h1");
          let a = document.createElement("p");
          let b = document.createElement("p");
          let c = document.createElement("p");
          let d = document.createElement("p");
          let e = document.createElement("p");
          let desc = document.createElement("span");
          h1.innerText = obj.question;
          a.innerText =  "A) " + obj.options.A;
          b.innerText =  "B) " + obj.options.B;
          c.innerText =  "C) " + obj.options.C;
          d.innerText =  "D) " + obj.options.D;
          e.innerText =  "E) " + obj.options.E;
          desc.innerText = "Doğru cavab: " + obj.correct_answer; 
          let box = document.querySelector(".appendbox");
          box.appendChild(h1);
          box.appendChild(a);
          box.appendChild(b);
          box.appendChild(c);
          box.appendChild(d);
          box.appendChild(e);
          box.appendChild(desc);
     })
}
function closeResult2() {
     document.querySelector(".statusDiv").classList.remove("show");
     document.querySelector(".appendbox").innerHTML = "";
}
function finishQuiz() {
     document.querySelector(".back").remove();

     showResult()

     
};
windowOnload();