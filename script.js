// Heart Count
const heartCountElement = document.getElementById("heart-count");
var heartCount = Number(heartCountElement.innerText);


const heartIcons = document.querySelectorAll(".heart-icon");

for(const heart of heartIcons){
    heart.addEventListener("click",function(){
        heartCount++;
        heartCountElement.innerText = heartCount;
    })
}

// Coin Count

const coinElement = document.getElementById("coin-count");
console.log(coinElement);
var coinCount = Number(coinElement.innerText);

const callButtons = document.querySelectorAll(".call-button");
for(const call of callButtons){
    call.addEventListener("click",function(){
        coinCount-=20;
        coinElement.innerText = coinCount;
    })
}