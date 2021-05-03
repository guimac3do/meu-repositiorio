let imagensModal = document.querySelectorAll('.img-potfolio');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btnClose = document.querySelector('#btn-close');
let srcValue = '';

imagensModal.forEach((i, num) => {
    i.addEventListener('click', function(){
        srcVal = i.getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.add('active');
    })
})

btnClose.addEventListener('click', function(){
    modal.classList.remove('active');
})


