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
const offersItems = document.querySelectorAll('.offers__services_item');
const offersOffers = document.querySelectorAll('.offers__services_offer');
const sectorsHeaders = document.querySelectorAll('.sectors__header');
const sectorsCircles = document.querySelectorAll('.sectors__circle');
const sectorsDescs = document.querySelectorAll('.sectors__desc');

sectorsHeaders.forEach((item, index) => {
    item.addEventListener('click', function() {
        const desc = sectorsDescs[index];
        const circle = sectorsCircles[index];

        // Если соответствующий desc уже показан
        if (!desc.classList.contains('displayNone')) {
            // Убираем класс активности и скрываем элемент
            circle.classList.remove('sectors__circle-active');
            desc.classList.add('displayNone');
            return; // Прерываем выполнение, чтобы не показывать снова
        }

        // Удаляем класс активности у всех header и скрываем все desc
        sectorsCircles.forEach(circle => {
            circle.classList.remove('sectors__circle-active');
        });
        sectorsDescs.forEach(desc => {
            desc.classList.add('displayNone');
        });

        // Добавляем класс активности только к текущему элементу и показываем соответствующий desc
        circle.classList.add('sectors__circle-active');
        desc.classList.remove('displayNone');

        // Плавный скролл к соответствующему элементу
        desc.scrollIntoView({ behavior: 'smooth' });
    });
});


if (window.innerWidth < 577) {
    // Удаляем класс активности у всех header и скрываем все offer
    offersItems.forEach(i => {
        const header = i.querySelector('.offers__services_header');
        header.classList.remove('offers__services_header-active');
    });
    offersOffers.forEach(offer => {
        offer.classList.add('displayNone');
    });
}

// Добавляем обработчик клика для каждого элемента offers -> services.html
offersItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        const header = item.querySelector('.offers__services_header');
        const offer = offersOffers[index];

        // Если соответствующий offer уже показан
        if (!offer.classList.contains('displayNone')) {
            // Убираем класс активности и скрываем элемент
            header.classList.remove('offers__services_header-active');
            offer.classList.add('displayNone');
            return; // Прерываем выполнение, чтобы не показывать снова
        }

        // Удаляем класс активности у всех header и скрываем все offer
        offersItems.forEach(i => {
            const header = i.querySelector('.offers__services_header');
            header.classList.remove('offers__services_header-active');
        });
        offersOffers.forEach(offer => {
            offer.classList.add('displayNone');
        });

        // Добавляем класс активности только к текущему элементу и показываем соответствующий .services__desc
        header.classList.add('offers__services_header-active');
        offer.classList.remove('displayNone');

        // Плавный скролл к соответствующему элементу
        header.scrollIntoView({ behavior: 'smooth' });
    });
});

// Добавляем обработчик клика для каждого элемента services -> index.html
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
if (showModal) {
    showModal.addEventListener('click', function() {
        overlay.classList.add('overlay-active');
        modal.classList.add('modal-active');
    });
}


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

if (burger) {
    burger.addEventListener('click', function() {
        overlay.classList.add('overlay-active');
        menuMobile.classList.add('menu-mobile-active');
    });
}



// UP
const scrollToTopButton = document.getElementById('pageup');
// Функция для плавного скролла наверх
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Показ кнопки при скролле
window.addEventListener('scroll', () => {
    if (window.scrollY > 800) {
        scrollToTopButton.classList.add('pageup-show');
    } else {
        scrollToTopButton.classList.remove('pageup-show'); 
    }
});

