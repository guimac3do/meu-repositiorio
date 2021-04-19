// const menuToggler = document.querySelector('.nav-links');
// const largJanela = document.body.clientWidth;
// console.log(largJanela);

// function modalMobile(){
//   alert('olá');
// }

// if (largJanela < 1200){
//     menuToggler.addEventListener('click', modalMobile)
// }

function animaScroll(){
  const section = document.querySelectorAll('.js-section');
  const windowMetade = window.innerHeight*0.6;

  function animaScroll(){
    section.forEach( (sessao) => {
      const sectionTop = sessao.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if (isSectionVisible)
        sessao.classList.add('ativo');
    })
  }

  window.addEventListener('scroll', animaScroll);
}
animaScroll();

function animaProdutos(){
  const section = document.querySelectorAll('.produtos');

  function animaProdutos(){
    section.forEach((sessao) =>{
      sessao.classList.add('ativo');
    })
  }

  window.addEventListener('scroll', animaProdutos);
}
animaProdutos();