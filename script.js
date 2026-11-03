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
});