const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
    const toggleContent = button.nextElementSibling;

    button.addEventListener('click', () => {
        if (toggleContent.style.display === 'none') {
            toggleContent.style.display = 'block';
            button.textContent = 'Show Less';
        } else {
            toggleContent.style.display = 'none';
            button.textContent = 'Show More';
        }
    });
});
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const toggleContent = button.nextElementSibling;
        toggleContent.classList.toggle('show');
    });
});
