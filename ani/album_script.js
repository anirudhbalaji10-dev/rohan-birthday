document.addEventListener('DOMContentLoaded', () => {
    const albumBook = document.getElementById('album-book');
    const photoCarousel = document.getElementById('photo-carousel');
    const albumMessage = document.getElementById('album-message');
    const currentPhoto = document.getElementById('current-photo');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentIndexSpan = document.getElementById('current-index');
    const finalMessageLink = document.getElementById('final-message-link');

    // --- 1. CONFIGURATION ---
    // IMPORTANT: Make sure these file names EXACTLY match the photos in your folder!
    const PHOTOS = [
        'photo-1.jpeg',
        'photo-2.jpeg',
        'photo-3.jpeg',
        'photo-4.jpeg' 
        // Add more photo file names here!
    ];
    document.getElementById('total-photos').textContent = PHOTOS.length;
    let currentIndex = 0;

    // --- 2. LOGIC FUNCTIONS ---

    const updatePhoto = (index) => {
        currentPhoto.style.opacity = '0'; 

        setTimeout(() => {
            // Check if we are at the end to show the link
            if (index === PHOTOS.length - 1) {
                finalMessageLink.classList.add('visible-link');
                albumMessage.textContent = 'We\'ve reached the end! Continue to your final message.';
            } else {
                finalMessageLink.classList.remove('visible-link');
                albumMessage.textContent = 'Swipe or click the arrows to see more memories.';
            }

            currentPhoto.src = PHOTOS[index];
            currentIndexSpan.textContent = index + 1;
            currentPhoto.style.opacity = '1';

        }, 200); // Wait for fade-out to finish
    };

    const navigate = (direction) => {
        let newIndex = currentIndex + direction;

        // Loop back to start/end if we go past the limits
        if (newIndex < 0) {
            newIndex = PHOTOS.length - 1; 
        } else if (newIndex >= PHOTOS.length) {
            newIndex = 0; 
        }
        
        currentIndex = newIndex;
        updatePhoto(currentIndex);
    };


    // --- 3. EVENT LISTENERS ---

    // A. Initial Book Click to open the album
    albumBook.addEventListener('click', () => {
        albumBook.classList.add('hidden-book');
        albumMessage.textContent = 'Swipe or click the arrows to see more memories.';
        
        setTimeout(() => {
            photoCarousel.classList.remove('hidden-album');
            updatePhoto(0); 
        }, 500); 
    });


    // B. Navigation button clicks
    prevBtn.addEventListener('click', () => navigate(-1));
    nextBtn.addEventListener('click', () => navigate(1));
    
    // C. Set the Final Message Link's target (***UPDATED HERE***)
    finalMessageLink.href = 'birthday_message.html';
});