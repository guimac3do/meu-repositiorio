function animationLink(){
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  if (linksInternos.length){
    function ativar(link){
      link.preventDefault();

      const href = link.currentTarget.getAttribute('href');
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: 'smooth',
      });
    }

    linksInternos.forEach((item) => {
      item.addEventListener('click', ativar);
    })
  }
}
animationLink();

function animationScroll(){
  const sectionsAnimation = document.querySelectorAll('.js-scroll');
  if (sectionsAnimation.length){
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll(){
      sectionsAnimation.forEach((item) => {
        sectionTop = item.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible)
          item.classList.add('ativo')
      })
    }

    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
animationScroll();