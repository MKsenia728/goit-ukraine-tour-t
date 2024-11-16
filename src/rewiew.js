const scrollBtns = document.querySelectorAll('.scroll-btn');
const blockComment = document.querySelector('.block-comment');
const scrollAmount = 356 + 16; // ширина елемента + gap

scrollBtns.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.getAttribute('data-direction');
    blockComment.scrollBy({
      left: direction === 'right' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  });
});
