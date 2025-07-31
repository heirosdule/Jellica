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
for (let i = 0; i < 20; i++) {
    setTimeout(createHearts, i * 300);
}

// Continue creating hearts periodically
setInterval(createHearts, 1000);

// Remove all message editing functionality
const messageBox = document.getElementById('messageBox');
const message = document.getElementById('message');
const editBtn = document.createElement('button');
editBtn.classList.add('edit-btn');
editBtn.textContent = 'Edit Message';
messageBox.appendChild(editBtn);

editBtn.addEventListener('click', function() {
    if (editBtn.textContent === 'Edit Message') {
        const currentMessage = message.textContent;
        messageBox.innerHTML = `
            <textarea id="newMessage">${currentMessage}</textarea>
            <button class="edit-btn save-btn" id="saveBtn">Save Message</button>
        `;
        
        document.getElementById('saveBtn').addEventListener('click', saveMessage);
    }
});

function saveMessage() {
    const newMessage = document.getElementById('newMessage').value;
    messageBox.innerHTML = `
        <p class="message" id="message">${newMessage}</p>
        <button class="edit-btn" id="editBtn">Edit Message</button>
    `;
    
    // Reattach event listener to the new edit button
    document.getElementById('editBtn').addEventListener('click', function() {
        if (this.textContent === 'Edit Message') {
            const currentMessage = document.getElementById('message').textContent;
            messageBox.innerHTML = `
                <textarea id="newMessage">${currentMessage}</textarea>
                <button class="edit-btn save-btn" id="saveBtn">Save Message</button>
            `;
            
            document.getElementById('saveBtn').addEventListener('click', saveMessage);
        }
    });
}
