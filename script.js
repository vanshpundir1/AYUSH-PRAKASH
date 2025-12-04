function notifyMe() {
    const email = document.getElementById('emailInput').value;
    if (email && email.includes('@')) {
        alert('Thank you! We will notify you at ' + email + ' when the Allopathic section launches!');
        document.getElementById('emailInput').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});