const responses = ["c", "a", "b", "a", "c"];
const emojis = ["✔️", "✨", "👀", "😭", "👎"];

const vIcon = document.getElementsByClassName("v-icon");
console.log(vIcon);

for (const e of vIcon) {
    e.innerHTML = emojis[0];
}

const btn = document.querySelector('button');
const score = document.querySelector('.score');


btn.addEventListener('click', (e) => {
    e.preventDefault(); //empêche de submit et donc de reload la page


    let scoreValue = 0;
    const repArray = document.querySelectorAll("input[type='radio']:checked");
    const maxScore = repArray.length;

    for (let i = 0; i < repArray.length; i++) {
        if (repArray[i].value == responses[i]) {
            scoreValue += 1
        }
    }
    score.textContent = "Score : ";
    score.textContent += scoreValue.toString() + " / " + maxScore.toString();

})


