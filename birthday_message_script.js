document.addEventListener('DOMContentLoaded', () => {
    const typedMessageElement = document.getElementById('typed-message');
    const confettiContainer = document.getElementById('confetti-container');

    // --- YOUR PERSONAL MESSAGE ---
    // **CRITICAL: CUSTOMIZE THIS MESSAGE!**
    const MESSAGE_LINES = [
        "Hey Huli! 💕",
        "You are My Best Hostel friend",
        "Through every laugh, every tear, every crazy adventure...",
        "You've been my constant, my support, my in crime! 🥳",
        "Thank you for being the most amazing friend anyone could ask for! ✨",
        "Here's to many more years of friendship, fun, and unforgettable memories! 💖",
        "Happy Birthday, my dear friend! 🥂"
    ];
    
    // Combine lines with line breaks
    const MESSAGE = MESSAGE_LINES.join('\n\n'); 
    
    const TYPING_SPEED = 50; 
    let charIndex = 0;
    
    function typeMessage() {
        if (charIndex < MESSAGE.length) {
            let char = MESSAGE.charAt(charIndex);
            
            if (char === '\n') {
                typedMessageElement.appendChild(document.createElement('br'));
                typedMessageElement.appendChild(document.createElement('br'));
            } else {
                typedMessageElement.textContent += char;
            }
            
            charIndex++;
            setTimeout(typeMessage, TYPING_SPEED);
        } else {
            // Message is fully typed, remove the cursor animation
            typedMessageElement.style.borderRight = 'none';
        }
    }
    
    // --- Confetti Generation ---
    const COLORS = ['#4fffd7', '#ff4fd7', '#8a4ff3', '#ffffff']; // Cyan, Pink, Purple, White
    const MAX_CONFETTI = 50;

    function createConfetti() {
        for (let i = 0; i < MAX_CONFETTI; i++) {
            const confetti = document.createElement('div');
            const color = COLORS[Math.floor(Math.random() * COLORS.length)];
            const isSquare = Math.random() > 0.5;

            confetti.className = 'confetti' + (isSquare ? ' confetti-square' : '');
            confetti.style.backgroundColor = color;
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = Math.random() * -100 + 'px'; // Start off-screen
            
            const size = Math.random() * 10 + 5; 
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

            confetti.style.animation = `fall ${Math.random() * 8 + 5}s linear infinite, wobble ${Math.random() * 5 + 2}s ease-in-out infinite alternate`;
            
            confettiContainer.appendChild(confetti);
        }
    }
    
    // Define the fall and wobble keyframes dynamically
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = `
        @keyframes fall {
            to { transform: translateY(100vh) rotate(720deg); opacity: 1; }
        }
        @keyframes wobble {
            from { margin-left: -50px; }
            to { margin-left: 50px; }
        }
    `;
    document.head.appendChild(styleSheet);


    // Start all effects
    createConfetti();
    typeMessage();
});