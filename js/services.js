// Define function for executing callback when DOM content loaded
function ready(callbackFunc) {
    if (document.readyState !== 'loading') {
        // Document is already ready, call the callback directly
        callbackFunc();
    } else if (document.addEventListener) {
        // All modern browsers to register DOMContentLoaded
        document.addEventListener('DOMContentLoaded', callbackFunc);
    } else {
        // Old IE browsers
        document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'complete') {
            callbackFunc();
        }
        });
    }
}

const state = {
    curAppType: 0
}

ready(() => {

    const slider = document.getElementById('app-types__slider');
    const sliderPrev = slider.querySelector('.app-types__slider__btn--prev');
    const sliderNext = slider.querySelector('.app-types__slider__btn--next');
    const appTypeSlides = slider.querySelectorAll('.app-types__slider__window');
    const appTypeCards = document.querySelectorAll('.app-types__overview__card');

    sliderNext.addEventListener('click', () => switchAppType(state.curAppType + 1, appTypeSlides, appTypeCards));
    sliderPrev.addEventListener('click', () => switchAppType(state.curAppType - 1, appTypeSlides, appTypeCards));
    appTypeCards.forEach((card, idx) => {
        card.addEventListener('click', () => {
            switchAppType(idx, appTypeSlides, appTypeCards);
        })
    })
})

const switchAppType = (index, appTypeSlides, appTypeCards) => {
    if (index >= appTypeCards.length) {
        index = 0;
    } else if (index < 0) {
        index = appTypeCards.length - 1;
    }

    appTypeSlides.forEach((slide, idx) => {
        if (idx === state.curAppType && idx !== index) {
            slide.classList.remove('active');
        } else {
            slide.classList.remove('active');
        }
        if (idx === index) {
            slide.style.animation = "appTypesSlideIn .2s";
            const title = slide.querySelector('.app-types__slider__title');
            title.style.animation = "appTypesTitleIn .4s forwards";
            slide.classList.add('active');
        }
    })
    appTypeCards.forEach((card, idx) => {
        card.classList.remove('active');
        if (idx === index) {
            card.classList.add('active');
        }
    })

    state.curAppType = index;
}

//zaridimevsechno-section
const zaridemevsechnoHook = document.querySelector('.zaridimevsechno');
const buttons = zaridemevsechnoHook.querySelectorAll('.zaridimevsechno__button');
const removeSelectedClass = () => {
    for(const btn of buttons)  {
        btn.classList.remove('zaridimevsechno__button--selected');
    }
}
const btnClickHandler = event => {
    const desc = zaridemevsechnoHook.querySelector('.zaridimevsechno__iteminfo')
    desc.firstElementChild.textContent = event.target.dataset.name; 
    desc.lastElementChild.textContent = event.target.dataset.text;
    removeSelectedClass();
    event.target.classList.add('zaridimevsechno__button--selected');
}
for (const btn of buttons) {
    btn.addEventListener('click', btnClickHandler)
}