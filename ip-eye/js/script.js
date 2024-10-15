const serviceItems = document.querySelectorAll('.services__item');
const serviceItemsTablet = document.querySelectorAll('.services__item__tablet');
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
        const circle = item.querySelector('.services__circle');
        const desc = serviceDescs[index];

        // Проверка на наличие класса 'services__item__tablet'
        if (item.classList.contains('services__item__tablet')) {
            // Если соответствующий .services__desc уже показан
            if (!desc.classList.contains('displayNone')) {
                // Убираем класс активности и скрываем элемент
                circle.classList.remove('services__circle-active');
                desc.classList.add('displayNone');
                return; // Прерываем выполнение, чтобы не показывать снова
            }
        }

        // Удаляем класс активности у всех .services__circle и скрываем все .services__desc
        serviceItems.forEach(i => {
            const circle = i.querySelector('.services__circle');
            circle.classList.remove('services__circle-active');
        });
        serviceDescs.forEach(desc => {
            desc.classList.add('displayNone');
        });

        // Добавляем класс активности только к текущему элементу и показываем соответствующий .services__desc
        circle.classList.add('services__circle-active');
        desc.classList.remove('displayNone');

        // Плавный скролл к соответствующему элементу
        desc.scrollIntoView({ behavior: 'smooth' });
    });
});


// Модальное окно
showModal.addEventListener('click', function() {
    overlay.classList.add('overlay-active');
    modal.classList.add('modal-active');
});

// showThanks.forEach(element => {
//     element.addEventListener('click', function() {
//         thanks.classList.add('thanks-active');
//         modal.classList.remove('modal-active');
//     });
// });

closeModal.forEach(element => {
    element.addEventListener('click', function() {
        overlay.classList.remove('overlay-active');
        thanks.classList.remove('thanks-active');
        modal.classList.remove('modal-active');
        menuMobile.classList.remove('menu-mobile-active');
    });
});

burger.addEventListener('click', function() {
    overlay.classList.add('overlay-active');
    menuMobile.classList.add('menu-mobile-active');
});



