const serviceItems = document.querySelectorAll('.services__item');
const serviceDescs = document.querySelectorAll('.services__desc');
const showModal = document.getElementById('showModal');
const showThanks = document.querySelectorAll('.showThanks');
const overlay = document.querySelector('.overlay');
const modal = document.getElementById('consultation');
const thanks = document.getElementById('thanks');
const closeModal = document.querySelectorAll('.modal__close');
const burger = document.getElementById('burger');
const menuMobile = document.getElementById('menu-mobile');



// Добавляем обработчик клика для каждого элемента
serviceItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        // Удаляем класс активности у всех .services__circle и скрываем все .services__desc
        serviceItems.forEach(i => {
            const circle = i.querySelector('.services__circle');
            circle.classList.remove('services__circle-active');
        });
        serviceDescs.forEach(desc => {
            desc.classList.add('displayNone');
        });

        // Добавляем класс активности только к текущему элементу и показываем соответствующий .services__desc
        const circle = item.querySelector('.services__circle');
        circle.classList.add('services__circle-active');
        serviceDescs[index].classList.remove('displayNone');
    });
});

// Модальное окно
showModal.addEventListener('click', function() {
    overlay.classList.remove('displayNone');
    modal.classList.remove('displayNone');
});

showThanks.forEach(element => {
    element.addEventListener('click', function() {
        thanks.classList.remove('displayNone');
        modal.classList.add('displayNone');
    });
});

closeModal.forEach(element => {
    element.addEventListener('click', function() {
        overlay.classList.add('displayNone');
        thanks.classList.add('displayNone');
        modal.classList.add('displayNone');
    });
});

burger.addEventListener('click', function() {
    overlay.classList.remove('displayNone');
    menuMobile.classList.remove('displayNone');
});



