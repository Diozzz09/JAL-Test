// Contoh interaktivitas sederhana
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Terima kasih! Anda akan diarahkan ke halaman pemesanan tiket.');
    // Tambahkan logika redirect atau lainnya di sini
});

// Contoh animasi scroll untuk navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});