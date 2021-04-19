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

const section = document.querySelectorAll('.js-section');



window.addEventListener('scroll', initSection);