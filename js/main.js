document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.link-item').forEach((link) => {
    link.addEventListener('click', function (event) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();

        ripple.className = 'ripple';
        ripple.style.left = `${event.clientX - rect.left - 4}px`;
        ripple.style.top = `${event.clientY - rect.top - 4}px`;
        this.appendChild(ripple);

        window.setTimeout(() => ripple.remove(), 700);
    });
});
