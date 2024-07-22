function initKeys(str) {
    let temparr = [];
    for (let i = 0; i < str.length; i++) {
        temparr.push(str.charAt(i));
    }
    return temparr;
}
const keysArr = initKeys("qwertyuiopasdfghjklzxcvbnm1234567890");

function setup(arr) {
    let str = "";
    str += `<div class="row">`;

    for (let i = 0; i < arr.length; i++) {
        str += `
        <div class="col-md-2" onclick="playSound(${i})">
            <div class="card mb-4 box-shadow">
                <img class="card-img-top" src="imgs/1.png">
                <div class="card-body"><h1 class="card-text fw-bold text-center">${arr[i]} (${keysArr[i].toUpperCase()})</h1></div>
            </div>
        </div>
        `;
    }

    str += `</div>`;
    return str;
}

function playSound(n) {
    try {
        var audio = new Audio(`audio/${n}.mp3`);
        audio.play();
    } catch (error) {
        console.log(`No valid audio for ${n}`);
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    let container = document.getElementsByClassName("main")[0];
    let temparr = [];

    temparr.push("Clap");

    container.innerHTML = setup(temparr);
});

//Button Press Checking
document.addEventListener(
    "keydown",
    (event) => {
        const keyName = event.key;
        console.log(`Key pressed ${keyName}`);
        playSound(keysArr.indexOf(keyName));
    },
    false,
);