window.addEventListener('scroll', function() {
    const parallaxBg = document.querySelector('.parallax__bg');
    let scrollPosition = window.pageYOffset;
  
    parallaxBg.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });
