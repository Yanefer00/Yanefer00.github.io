// Debug Script - Add this after your slider.js to check issues
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.log('=== SLIDER DEBUG INFO ===');
        
        // Check if elements exist
        const slider = document.querySelector('.game-slider');
        const track = document.querySelector('.slider-track');
        const items = document.querySelectorAll('.slider-item');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const dots = document.querySelector('.slider-dots');
        
        console.log('Slider element:', slider ? 'Found' : 'NOT FOUND');
        console.log('Track element:', track ? 'Found' : 'NOT FOUND');
        console.log('Items count:', items.length);
        console.log('Prev button:', prevBtn ? 'Found' : 'NOT FOUND');
        console.log('Next button:', nextBtn ? 'Found' : 'NOT FOUND');
        console.log('Dots container:', dots ? 'Found' : 'NOT FOUND');
        
        // Check FontAwesome
        const hasFA = document.querySelector('link[href*="font-awesome"]') || 
                     document.querySelector('script[src*="font-awesome"]') ||
                     window.FontAwesome;
        console.log('FontAwesome loaded:', hasFA ? 'Yes' : 'NO - Add FontAwesome');
        
        // Check if slider instance exists
        console.log('Slider instance:', window.gameSlider ? 'Created' : 'NOT CREATED');
        
        if (window.gameSlider) {
            console.log('Current slide:', window.gameSlider.currentSlide);
            console.log('Items per view:', window.gameSlider.itemsPerView);
            console.log('Total slides:', window.gameSlider.totalSlides);
        }
        
        // Test click events
        if (prevBtn) {
            console.log('Testing prev button click...');
            prevBtn.addEventListener('click', () => {
                console.log('Prev button clicked!');
            });
        }
        
        if (nextBtn) {
            console.log('Testing next button click...');
            nextBtn.addEventListener('click', () => {
                console.log('Next button clicked!');
            });
        }
        
        // Check CSS
        const sliderStyles = window.getComputedStyle(slider);
        console.log('Slider overflow:', sliderStyles.overflow);
        
        if (track) {
            const trackStyles = window.getComputedStyle(track);
            console.log('Track display:', trackStyles.display);
            console.log('Track transform:', trackStyles.transform);
        }
        
        console.log('=== END DEBUG INFO ===');
        
        // Manual test functions
        window.testSliderNext = () => {
            if (window.gameSlider) {
                window.gameSlider.slide('next');
                console.log('Manual next slide test');
            }
        };
        
        window.testSliderPrev = () => {
            if (window.gameSlider) {
                window.gameSlider.slide('prev');
                console.log('Manual prev slide test');
            }
        };
        
        console.log('Manual test functions available:');
        console.log('- testSliderNext()');
        console.log('- testSliderPrev()');
        
    }, 1000);
});