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

// History

const history =[];


function historyShow(){
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.classList.add("history")
    for(var data of history){
        div.innerHTML = `<div class="history-text">
                            <h3>${data.title}</h3>
                            <p>${data.number}</p>
                        </div>
                        <div class="history-time">
                            ${data.time}
                        </div>`
    }
    historyContainer.appendChild(div);

}

// Clear Button

document.getElementById("clear-btn").addEventListener("click",function(){
    document.getElementById("history-container").innerHTML = ' '
})

// Coin Count

const coinElement = document.getElementById("coin-count");
var coinCount = Number(coinElement.innerText);

const callButtons = document.querySelectorAll(".call-button");
for(const call of callButtons){
    call.addEventListener("click",function(){
        const serviceName = call.parentNode.parentNode.children[1].children[0].innerText;
        const service = call.parentNode.parentNode.children[1].children[0].innerText;
        const number = call.parentNode.parentNode.children[2].children[0].innerText;
        
        
        if(coinCount - 20 < 0){
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
            return;
        }
        
        alert("📞 Calling " + service + ' ' + number + "...")
        coinCount-=20;
        coinElement.innerText = coinCount;

        
        const data = {
        title : serviceName,
        number : number,
        time : new Date().toLocaleTimeString()
        }

        history.push(data);
        historyShow();
        
    })
}