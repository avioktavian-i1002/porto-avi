// Interactive JavaScript for Avi Oktaviani's Portfolio

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });
    }

    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    if (typeof Swiper !== 'undefined') {
        document.querySelectorAll('.projectSwiper').forEach(slider => {
            const hasMultipleSlides = slider.querySelectorAll('.swiper-slide').length > 1;
            const nextButton = slider.querySelector('.swiper-button-next');
            const previousButton = slider.querySelector('.swiper-button-prev');
            const pagination = slider.querySelector('.swiper-pagination');

            if (!hasMultipleSlides) {
                [nextButton, previousButton, pagination].forEach(control => {
                    if (control) {
                        control.hidden = true;
                    }
                });
            }

            new Swiper(slider, {
                loop: hasMultipleSlides,
                grabCursor: hasMultipleSlides,
                autoplay: hasMultipleSlides
                    ? {
                        delay: 3500,
                        disableOnInteraction: false,
                    }
                    : false,
                pagination: {
                    el: pagination,
                    clickable: true,
                },
                navigation: {
                    nextEl: nextButton,
                    prevEl: previousButton,
                },
            });
        });
    }
});
