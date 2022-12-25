let scoreEl= document.querySelector('.scoreNum');
// let score = 0;
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
console.log(score.value);
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
const questionText = document.querySelector('.text');
questionText.innerText = `what is ${num1} multiply by  ${num2}`;
const form = document.querySelector('.form');
const input = document.querySelector('.answervalue');
console.log(input);


   let solution = num1 * num2;
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let answerValue = input.value;
   if(answerValue == solution){
    score++;
    updateLocalStorage();   
    scoreEl.innerText = `score: ${score}`;
   }
   else{
    alert("it is wrong");
   }
  
})
function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
  }