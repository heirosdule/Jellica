<script>
    // Create floating hearts
    function createHearts() {
        const heartSymbols = ['❤️', '💜', '💕', '💖', '💗', '🌼'];
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        const pastelColors = ['#ffb6e6', '#d4b8ff', '#ffb8d9', '#c8a2ff', '#e8b5ff'];
        heart.style.color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
        
        document.body.appendChild(heart);
        
        // Animation
        const animationDuration = Math.random() * 5 + 5;
        heart.style.animation = `float ${animationDuration}s linear forwards`;
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, animationDuration * 1000);
    }
    // Create initial hearts
