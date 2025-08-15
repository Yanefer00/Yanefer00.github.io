let currentSlide = 0;
        const itemsPerSlide = 2; // Scroll 2 items at a time
        const slider = document.getElementById('sliderTrack');
        const cards = document.querySelectorAll('.game-card');
        const totalCards = cards.length;
        const maxSlides = Math.ceil(totalCards / itemsPerSlide) - 1;

        // Generate dots - REMOVED
        function generateDots() {
            // Dots functionality removed
        }

        // Update slider position
        function updateSlider() {
            const cardWidth = 300; // 280px card + 20px gap
            const translateX = -(currentSlide * itemsPerSlide * cardWidth);
            slider.style.transform = `translateX(${translateX}px)`;
        }

        // Slide right (next)
        function slideRight() {
            if (currentSlide < maxSlides) {
                currentSlide++;
                updateSlider();
            } else {
                // Loop back to start
                currentSlide = 0;
                updateSlider();
            }
        }

        // Slide left (previous)
        function slideLeft() {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlider();
            } else {
                // Loop to end
                currentSlide = maxSlides;
                updateSlider();
            }
        }

        // Go to specific slide
        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            updateSlider();
        }

        // Play game function
        function playGame(gameName) {
            console.log(`Playing ${gameName}`);
            // Add your game launching logic here
        }

        // Auto-slide functionality
        let autoSlideInterval;

        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                slideRight();
            }, 4000); // Change slide every 4 seconds
        }

        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        // Touch/Swipe support for mobile
        let startX = 0;
        let isDragging = false;

        slider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            stopAutoSlide();
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
        });

        slider.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) { // Minimum swipe distance
                if (diff > 0) {
                    slideRight();
                } else {
                    slideLeft();
                }
            }
            
            isDragging = false;
            startAutoSlide();
        });

        // Mouse drag support for desktop
        let isMouseDown = false;
        let startMouseX = 0;

        slider.addEventListener('mousedown', (e) => {
            startMouseX = e.clientX;
            isMouseDown = true;
            stopAutoSlide();
            slider.style.cursor = 'grabbing';
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;
            e.preventDefault();
        });

        slider.addEventListener('mouseup', (e) => {
            if (!isMouseDown) return;
            
            const endMouseX = e.clientX;
            const diff = startMouseX - endMouseX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    slideRight();
                } else {
                    slideLeft();
                }
            }
            
            isMouseDown = false;
            slider.style.cursor = 'grab';
            startAutoSlide();
        });

        // Prevent dragging of images
        slider.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

        // Scroll wheel support
        sliderContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            stopAutoSlide();
            
            if (e.deltaY > 0) {
                // Scroll down = slide right
                slideRight();
            } else {
                // Scroll up = slide left
                slideLeft();
            }
            
            // Restart auto-slide after 2 seconds
            setTimeout(startAutoSlide, 2000);
        });

        // Initialize slider
        updateSlider();
        startAutoSlide();

        // Pause auto-slide on hover
        const sliderContainer = document.querySelector('.slider-container');
        sliderContainer.addEventListener('mouseenter', stopAutoSlide);
        sliderContainer.addEventListener('mouseleave', startAutoSlide);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') {
                slideRight();
                stopAutoSlide();
                setTimeout(startAutoSlide, 2000);
            } else if (e.key === 'ArrowLeft') {
                slideLeft();
                stopAutoSlide();
                setTimeout(startAutoSlide, 2000);
            }
        });