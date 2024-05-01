function showForm() {
    var feedback = document.getElementById('feedback');
    feedback.style.display = 'flex';
    feedback.classList.add('fade-in');
}

function closeForm() {
    var feedback = document.getElementById('feedback');
    feedback.classList.remove('fade-in');
    feedback.classList.add('fade-out');
    setTimeout(function() {
        feedback.style.display = 'none';
        feedback.classList.remove('fade-out');
    }, 500);
}