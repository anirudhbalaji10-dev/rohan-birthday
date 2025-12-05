document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const greetingScreen = document.getElementById('greeting-screen');
    const startButton = document.getElementById('start-button');

    // Wait for the loading bar animation to finish (3 seconds)
    const LOADING_DURATION_MS = 3000; 

    // 1. Handle the transition from loading to greeting screen
    setTimeout(() => {
        loadingScreen.style.opacity = '0';

        // After the fade-out transition (1 second), hide it and show the greeting screen
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            greetingScreen.classList.remove('hidden');
        }, 1000); 

    }, LOADING_DURATION_MS);


    // 2. Handle the 'Start the Surprise' button click
    startButton.addEventListener('click', () => {
        // Redirect to the Memory Album page
        window.location.href = 'memory_album.html';
    });
});