<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    // 1. Fitur Salin Email
    const copyBtn = document.getElementById('copyEmailBtn');
    const myEmail = 'avioktaviani1002@gmail.com';

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(myEmail).then(() => {
            copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Tersalin!';
            copyBtn.style.borderColor = '#38bdf8';
            
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fa-solid fa-copy"></i> Salin Email';
                copyBtn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }, 2000);
        });
    });

    // 2. Fitur Filter Proyek (ERP vs AI vs Semua)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus status aktif dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
=======
// Interactive JavaScript for Avi Oktaviani's Portfolio

document.addEventListener('DOMContentLoaded', () => {
    // Set tahun otomatis di footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Toggle Dark/Light Mode
    const themeToggleBtn = document.getElementById('themeToggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Inisialisasi Swiper Slider pada proyek yang membutuhkan foto slide
    if (typeof Swiper !== 'undefined') {
        new Swiper('.projectSwiper', {
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
>>>>>>> 327efae (update)
});