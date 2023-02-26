document.addEventListener("DOMContentLoaded", () => {

    // Wow JS
    (function() {
        new WOW().init();
    }());


    // Fancybox settings
    (function() {
        Fancybox.bind("[data-fancybox]", {
            autoFocus: false,
            dragToClose: false
        });
    }());


    // Form validation
    (function() {
        $('form').each(function() {
            jQuery.validator.addMethod("checkMask", function (e, t) {
                return /.\d..\d{3}..\d{3}.\d{2}.\d{2}/g.test(e);
            });

            $(this).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2,
                        maxlength: 50
                    },
                    phone: {
                        required: true,
                        checkMask: true
                    },
                    email: {
                        required: true,
                        minlength: 2,
                        maxlength: 50,
                        email: true
                    }
                },
            });
        });

        let elements = document.querySelectorAll('input[name="phone"]');
        let maskOptions = {
            mask: '+{7} (000) 000-00-00',
            lazy: false
        };
        elements.forEach(element => {
            element.addEventListener('focus', () => {
                let mask = IMask(element, maskOptions);
            }); 
        });
    }());


    // Sliders
    (function() {
        new Splide('.promo__slider', {
            type: 'loop',
            arrows: false,
            pagination: true,
            gap: '50px',
            mediaQuery: 'min',
            breakpoints: {
                768: {
                    destroy: true
                }
            }
        }).mount();

        new Splide('.edu__slider', {
            type: 'loop',
            perPage: 3,
            focus  : 'center',
            trimSpace: false,
            arrows: true,
            pagination: false,
            gap: '15px',
            height: '237px',
            breakpoints: {
                1249: {
                    pagination: true
                },
                991: {
                    perPage: 1,
                    width: '377px',
                    gap: '100px'
                },
                575: {
                    arrows: false,
                    width: '300px',
                    height: '200px'
                }
            }
        }).mount();
    }());


    // Показываем модальное окно при уходе со страницы
    (function() {
        function t() {
            Fancybox.show(
                [
                    {
                        src: '#modal3',
                    },
                ],
                {
                    autoFocus: false,
                    dragToClose: false
                }
            );
        }

        $(document).one("mouseleave", function (e) {
            $("#pageMain").length && e.clientY < 10 && t();
        });
    }());


    // Обрезаем лишнюю часть секции Massage
    // (function() {
    //     let section = document.querySelector('section.massage');
    //     let main = document.querySelector('section.massage .massage__main');
    //     let bottom = document.querySelector('section.massage .massage__bottom');

    //     let length = parseFloat(getComputedStyle(main).height) + parseFloat(getComputedStyle(bottom).height);
    //     let newLength = length - 70;
    //     section.style.height = `${newLength}px`;

    //     window.addEventListener('resize', () => {
    //         let length = parseFloat(getComputedStyle(main).height) + parseFloat(getComputedStyle(bottom).height);
    //         let newLength = length - 70;
    //         section.style.height = `${newLength}px`;
    //     });
    // }());


    // Calculator (section result)
    (function() {
        let inputs = document.querySelectorAll('.calc__table input'),
            totalSums = document.querySelectorAll('[data-calcsum]'),
            profitSums = document.querySelectorAll('[data-calcprofit]'),
            a = document.querySelector('input[data-input="1"]'),
            b = document.querySelector('input[data-input="2"]'),
            c = document.querySelector('input[data-input="3"]'),
            d = document.querySelector('input[data-input="4"]'),
            e = document.querySelector('input[data-input="5"]'),
            col1 = document.querySelector('[data-column="1"]'),
            col2 = document.querySelector('[data-column="2"]'),
            diagram = document.querySelector('.result__diagram');

        col1.style.height = 425000 * 211 / 500000 + 'px';
        col2.style.height = 147475 * 211 / 500000 + 'px';

        inputs.forEach(item => {
            item.addEventListener('input', () => {
                let sum = a.value*12000 + b.value*7000 + c.value*1040 + d.value*300 + e.value*1000;
                totalSums.forEach(item => {
                    item.innerHTML = `${sum.toLocaleString('ru-RU')} ₽`;
                });
                let profit = Math.floor(sum*0.347);
                profitSums.forEach(item => {
                    item.innerHTML = `${profit.toLocaleString('ru-RU')} ₽`;
                });
                col1.style.height = sum * 211 / 500000 +'px';
                col2.style.height = profit * 211 / 500000 +'px';

                diagram.style.background = `conic-gradient(#588783 0% ${a.value*1200000/sum}%, #1F6C66 ${a.value*1200000/sum}% ${a.value*1200000/sum + b.value*700000/sum}%, #154542 ${a.value*1200000/sum + b.value*700000/sum}% ${a.value*1200000/sum + b.value*700000/sum + c.value*104000/sum}%, #122E2C ${a.value*1200000/sum + b.value*700000/sum + c.value*104000/sum}% ${a.value*1200000/sum + b.value*700000/sum + c.value*104000/sum + d.value*30000/sum}%, #0D1616 ${a.value*1200000/sum + b.value*700000/sum + c.value*104000/sum + d.value*30000/sum}% 100%)`;
            });
        });
    }());


    // Устанавливаем текущий год в футере
    (function() {
        let span = document.querySelectorAll('[data-year]');
        let year = new Date().getFullYear();
        span.forEach(item => {
            item.textContent = year;
        });
    }());
    

});