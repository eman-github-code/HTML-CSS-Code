// script.js (for interactivity)
const questions = document.querySelectorAll('.question');
questions.forEach(q => {
  q.addEventListener('click', () => {
    q.classList.toggle('open');
  });
});
