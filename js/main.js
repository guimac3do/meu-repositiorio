// Faq-list exibição
function initAcordeon(){
  const faqList = document.querySelectorAll('.js-acordeon dt');
  const activeClass = 'ativo';
  if (faqList.length){
    faqList[0].classList.add(activeClass);
    faqList[0].nextElementSibling.classList.add(activeClass);
    function acordeonAnimation(){
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    faqList.forEach((item, index) => {
      item.addEventListener('click', acordeonAnimation);
    })
  }
}
initAcordeon();

function initAnimaScroll(){
  const sections = document.querySelectorAll('.js-section');
  const windowMetade = window.innerHeight * 0.6;

  if (sections.length){
    function animaScroll(){
      sections.forEach((section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
          if (isSectionVisible)
            section.classList.add('ativo');
      }))
    }

    window.addEventListener('scroll', animaScroll);
  }
  }
initAnimaScroll();


function initScrollSuave(){
  const linksInternos = document.querySelectorAll('a[href^="#"]')

  if (linksInternos.length){
    function scrollToSection(event){
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      // const topo = section.offsetTop;

      section.scrollIntoView({
        behavior: 'smooth',
      });

      // Forma alternativa
      // window.scrollTo({
      //   top: topo,
      //   behavior: 'smooth',
      // });
    }

    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
}

initScrollSuave();