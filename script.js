document.addEventListener("DOMContentLoaded", function () {
  // ====== INITIAL COUNTS ======
    var coins = 100;
    var hearts = 0;
    var copyCount = 0;

    var coinCountEl = document.getElementById("coin-count");
    var heartCountEl = document.getElementById("heart-count");
    var copyCountEl = document.querySelector(".copy-btn1 span");
    var historyList = document.querySelector(".history-list");
    var clearBtn = document.querySelector(".clear-btn");

  // Set default values
    coinCountEl.textContent = coins;
    heartCountEl.textContent = hearts;
    copyCountEl.textContent = copyCount;

  // ====== HEART BUTTONS ======
    var heartButtons = document.querySelectorAll(".card-heart");
    heartButtons.forEach(function (heart) {
        heart.addEventListener("click", function () {
            if (heart.classList.contains("fa-regular")) {
                heart.classList.remove("fa-regular");
                heart.classList.add("fa-solid");
                heart.style.color = "red";
                hearts++;
            } else {
                    heart.classList.remove("fa-solid");
                    heart.classList.add("fa-regular");
                    heart.style.color = "#a0a0a0";
                    hearts--;
                }
                heartCountEl.textContent = hearts;
            });
        });

  // ====== CALL BUTTONS ======
    var callButtons = document.querySelectorAll(".call-btn");
    callButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (coins < 20) {
                alert("⚠️ You don’t have enough coins to make a call.");
                return;
            }

    var card = button.closest(".card");
    var serviceName = card.querySelector(".service-name").textContent;
    var phoneNumber = card.querySelector(".hotline-number").textContent;

      // Deduct coins
    coins -= 20;
    coinCountEl.textContent = coins;

      // Add to Call History
    var time = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });

    var historyItem = document.createElement("div");
    historyItem.classList.add("history-item");
    historyItem.innerHTML = "<p><strong>" + serviceName + "</strong> <br>" + '<span class="history-time">' +phoneNumber + "</p>" + '<span class="history-time">' + time + "</span>";

    historyList.prepend(historyItem);

    // Alert
    alert("📞 Calling " + serviceName + " at " + phoneNumber);
    });
});

  // ====== COPY BUTTONS ======
    var copyButtons = document.querySelectorAll(".copy-btn");
    copyButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var card = button.closest(".card");
            var phoneNumber = card.querySelector(".hotline-number").textContent;

    navigator.clipboard.writeText(phoneNumber).then(function () {
        copyCount++;
        copyCountEl.textContent = copyCount;
        alert("✅ Copied number: " + phoneNumber);
        });
    });
});

  // ====== CLEAR HISTORY ======
    clearBtn.addEventListener("click", function () {
        historyList.innerHTML = "";
    });
});
