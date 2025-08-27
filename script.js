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
