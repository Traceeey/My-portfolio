
let score = 0;

function updateScore(amount) {
    score += amount;
    document.getElementById('score').innerText = score;
}

function choosePath(choice) {
    const storySection = document.getElementById('story-section');
    
    if (choice === 'left') {
        storySection.innerHTML = `
            <p>You walk down the left path and encounter a wild dragon! 🐉</p>
            <p>Do you:</p>
            <button onclick="fightDragon()">Fight the Dragon ⚔️</button>
            <button onclick="runAway()">Run Away 🚶‍♂️</button>
        `;
    } else if (choice === 'right') {
        storySection.innerHTML = `
            <p>You take the right path and find a treasure chest! 💎</p>
            <p>Do you:</p>
            <button onclick="openChest()">Open the Chest</button>
            <button onclick="leaveChest()">Leave the Chest</button>
        `;
    }
}

function fightDragon() {
    updateScore(50);
    document.getElementById('story-section').innerHTML = `
        <p>You fought valiantly and defeated the dragon! +50 points 🏆</p>
        <button onclick="endGame()">End Adventure</button>
    `;
}

function runAway() {
    updateScore(-20);
    document.getElementById('story-section').innerHTML = `
        <p>You ran away from the dragon. Coward! -20 points 😬</p>
        <button onclick="endGame()">End Adventure</button>
    `;
}

function openChest() {
    updateScore(100);
    document.getElementById('story-section').innerHTML = `
        <p>You found a rare gem in the chest! +100 points 💎</p>
        <button onclick="endGame()">End Adventure</button>
    `;
}

function leaveChest() {
    updateScore(10);
    document.getElementById('story-section').innerHTML = `
        <p>You left the chest, but still feel accomplished. +10 points.</p>
        <button onclick="endGame()">End Adventure</button>
    `;
}

function endGame() {
    alert(`Your adventure is over! Your final score is ${score}`);
    window.location.href = "index.html"; // Go back to the main page
}
