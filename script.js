const texts = [
    "You're awesome!",
    "Thanks a bunch!",
    "You made my day!",
    "Feeling blessed!",
    "Grateful for you!"
];

function showMessage() {
    const popup = document.getElementById('messagePopup');
    const randomMessage = texts[Math.floor(Math.random() * texts.length)];
    popup.textContent = randomMessage;
    popup.style.display = 'block';
    
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}

function createConfetti() {
    confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 }
    });
}

setInterval(createConfetti, 5000);

function animateCandles() {
    const candles = document.querySelectorAll('.candle');
    candles.forEach((candle, index) => {
        candle.style.animation = `candleFlicker 0.5s infinite alternate ${index * 0.1}s`;
        const flame = candle.querySelector('.flame');
        flame.style.animation = `flameFlicker 0.3s infinite alternate ${index * 0.1}s`;
    });
}

animateCandles();

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDuration = Math.random() * 3 + 5 + 's';
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(balloon);
    
    setTimeout(() => {
        balloon.remove();
    }, 8000);
}

setInterval(createBalloon, 1000);

function fireworks() {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

setInterval(fireworks, 10000);

function changeBackgroundColor() {
    const hue = Math.floor(Math.random() * 360);
    document.body.style.background = `linear-gradient(45deg, 
        hsl(${hue}, 100%, 75%),
        hsl(${(hue + 60) % 360}, 100%, 75%),
        hsl(${(hue + 120) % 360}, 100%, 75%),
        hsl(${(hue + 180) % 360}, 100%, 75%),
        hsl(${(hue + 240) % 360}, 100%, 75%))`;
    document.body.style.backgroundSize = '500% 500%';
    document.body.style.animation = 'gradientBG 20s ease infinite';
}

setInterval(changeBackgroundColor, 10000);

// function animateText(elementId) {
//     const element = document.getElementById(elementId);
//     const text = element.innerText;
//     element.innerHTML = text.split('').map(char => 
//         `<span class="animated-text">${char === ' ' ? '&nbsp;' : char}</span>`
//     ).join('');
// }

animateText('title');
animateText('message');