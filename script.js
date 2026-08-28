window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      header.classList.add('colored');
    } else {
      header.classList.remove('colored');
    }
  });

function scrollL() {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlider(currentIndex);
}

function scrollR() {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlider(currentIndex);
}

 const toggleButton = document.getElementById('theme-toggle');

    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
