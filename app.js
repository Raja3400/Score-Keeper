const p1o={
    score:0,
    button: document.querySelector("#p1button"),
    display: document.querySelector("#p1")
}
const p2o={
    score:0,
    button: document.querySelector("#p2button"),
    display: document.querySelector("#p2")
}

function updatescore(player1,player2)
{
    if (!isGameover) {
        player1.score += 1;
        if (player1.score === winscore) {
          isGameover = true;
          player1.display.classList.add('has-text-success');
          player2.display.classList.add('has-text-danger');
          player1.button.disabled=true;
          player2.button.disabled=true;
        }
        player1.display.textContent = player1.score;
      }
}


const reset = document.querySelector("#reset");
const playtill = document.querySelector("#playtill");


let winscore = 3;
let isGameover = false;

p1o.button.addEventListener("click", function () {
 updatescore(p1o,p2o);
});

p2o.button.addEventListener("click", function () {
 updatescore(p2o,p1o);
});
reset.addEventListener("click", function () {
  resetbutton();
});

playtill.addEventListener("change", function () {
  winscore = parseInt(this.value);
  resetbutton();
});
function resetbutton() {
    isGameover = false;
    for(let p of [p1o,p2o])
    {
        p.score=0;
        p.display.textContent=0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled=false;
    }
}
