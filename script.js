
function startGame() {
    window.location.href = "adventure.html"; // Redirects to an adventure page
}

function showProjects() {
    const projectsHTML = `
        <h2>My Projects</h2>
        <ul>
            <li>🎨 Portfolio Website</li>
            <li>💻 Interactive Web App</li>
            <li>📱 Mobile Game Prototype</li>
        </ul>
        <p>More projects coming soon! 🚀</p>
    `;
    openModal(projectsHTML);
}

function contactMe() {
    const contactHTML = `
        <h2>Contact Me</h2>
        <p>Email: <a href="mungetracey@gmail.com">MUNGETRACEY@GMAIL.COM</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/myprofile" target="_blank">Visit my LinkedIn</a></p>
        <p>Github: <a href="https://github.com/Traceeey" target="_blank">Visit my Github</a></p>
        <p>Phone: <a href="(+254)-791-814-288"> CALL ME</a></p>
        <p>Feel free to reach out for collaborations or just to say hi! 😊</p>
    `;
    openModal(contactHTML);
}

function openModal(content) {
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('modal').style.display = "flex";
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
}

let playerPoints = 0;
let playerLevel = 1;
let badges = [];

function updatePlayerStats() {
    document.getElementById('playerPoints').innerText = playerPoints;
    document.getElementById('playerLevel').innerText = playerLevel;
    document.getElementById('playerBadges').innerText = badges.join(', ') || 'None';
}

function earnPoints(amount) {
    playerPoints += amount;
    checkLevelUp();
    updatePlayerStats();
}

function checkLevelUp() {
    if (playerPoints >= 100 && playerLevel === 1) {
        playerLevel = 2;
        badges.push('Explorer');
        alert("Congratulations! You've reached Level 2 and earned the 'Explorer' badge!");
    } else if (playerPoints >= 200 && playerLevel === 2) {
        playerLevel = 3;
        badges.push('Adventurer');
        alert("Congratulations! You've reached Level 3 and earned the 'Adventurer' badge!");
    }
}

function startAdventure() {
    window.location.href = "adventure.html"; // Link to your adventure page
}


