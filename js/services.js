/////////////////////
// DEFINING FUNCTIONS

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

// Define function to switch app type in .app-types section
const switchAppType = (index, appTypeSlides, appTypeCards) => {
    // Check for index exceeding number of slides
    if (index >= appTypeCards.length) {
        index = 0;
    } else if (index < 0) {
        index = appTypeCards.length - 1;
    }

    // Add active class to selected slide
    appTypeSlides.forEach((slide, idx) => {
        slide.classList.remove('active');
        if (idx === index) {
            slide.style.animation = "appTypesSlideIn .2s ease-out";
            const title = slide.querySelector('.app-types__slider__title');
            title.style.animation = "appTypesTitleIn .3s forwards ease-out";
            slide.classList.add('active');
        }
    })

    // Add active class to selected card
    appTypeCards.forEach((card, idx) => {
        card.classList.remove('active');
        if (idx === index) {
            card.classList.add('active');
        }
    })

    state.curAppType = index;
}

// Define state
const state = {
    // Current selected app type in the .app-types section
    curAppType: 0
}





/////////////////////
// CALLING READY FUNCTION
ready(() => {

    // Selecting important els in the .app-types section
    const slider = document.getElementById('app-types__slider');
    const sliderPrev = slider.querySelector('.app-types__slider__btn--prev');
    const sliderNext = slider.querySelector('.app-types__slider__btn--next');
    const appTypeSlides = slider.querySelectorAll('.app-types__slider__window');
    const appTypeCards = document.querySelectorAll('.app-types__overview__card');

    // Adding listeners to prev & next buttons to move .app-types slider
    sliderNext.addEventListener('click', () => switchAppType(state.curAppType + 1, appTypeSlides, appTypeCards));
    sliderPrev.addEventListener('click', () => switchAppType(state.curAppType - 1, appTypeSlides, appTypeCards));
    // Adding listeners to cards inside of .app-types section
    appTypeCards.forEach((card, idx) => {
        card.addEventListener('click', () => {
            switchAppType(idx, appTypeSlides, appTypeCards);
        })
    })
})

//services-features-section
const featuresHook = document.querySelector('.services-features');
const buttons = featuresHook.querySelectorAll('.services-features__button');

const removeSelectedClass = () => {
    for(const btn of buttons)  {
        btn.classList.remove('services-features__button--selected');
    }
}

const btnClickHandler = event => {
    const desc = featuresHook.querySelector('.services-features__item-info')
    desc.firstElementChild.textContent = event.target.dataset.name; 
    desc.lastElementChild.textContent = event.target.dataset.text;
    removeSelectedClass();
    event.target.classList.add('services-features__button--selected');
}

for (const btn of buttons) {
    btn.addEventListener('click', btnClickHandler)
}
//dev-process-section



const renderCards = renderedCards => {
    
for(const i of renderedCards) {
    renderNewCard(roundButtons[i]);
}
}
const stabilizeContainer = () => {
    const container = devProcessHook.querySelector('.card-container');
    container.style.width = '100vw';
    container.style.transform = 'translateX(0%)';
    container.style.transition = '';
    container.style.left = '0';


}
const moveContainer = (direction, length) => {
    const container = devProcessHook.querySelector('.card-container');
    
    
    container.style.transform = direction === 'right' ? `translateX(-${100 - (100 / length)}%)` : `translateX(${100 - (100 / length)}%)`;
    container.style.transition = 'transform 2s';
    

    
}
const setupContainer = (length, direction) => {
    const container = devProcessHook.querySelector('.card-container');
    container.style.width = `${(length)*100}vw`
    
    if(direction === 'left') {
        container.style.left = `-${(length - 1)*100}vw`;
    } else {
        container.style.left = '0';
    }
}
const getMoveProps = (lastClickedBtnId, clickedBtnId) => {
   const direction  = lastClickedBtnId < clickedBtnId ? 'right' : 'left';
   const renderedCards = [];

   for ( let i = (direction === 'right' ? lastClickedBtnId : clickedBtnId); i <= (direction === 'left' ? lastClickedBtnId : clickedBtnId); i++) {
    renderedCards.push(i);
   }
   
   return [direction, renderedCards];
}

const roundBtnClickHandler = event => {
    for (const btn of roundButtons) {
        btn.classList.remove('step-scroll__round--selected');
    }
    event.target.classList.add('step-scroll__round--selected'); // refreshing the selected button
    clickedBtnId = Array.from(roundButtons).indexOf(event.target); // getting  index of the clicked button
    const [direction, renderedCards] = getMoveProps(lastClickedBtnId, clickedBtnId); // getMoveProps() returns information about the transition that will occur. It firstly returns  the direction, secondly an array of id´s for buttons that are related to cards that are going to appear on screen during the transition.
    setupContainer(renderedCards.length, direction); // setting up the container so it´s default position is that the original card is shown and the rest of the container is overflowing
    removeCards(); //removing cards
    renderCards(renderedCards); //rendering all cards that will appear during the transition to the container (container has display: flex and justify-content: space-around so the space between cards is even)
    moveContainer(direction, renderedCards.length); // applying transition to the container, so the selected card will remain in  center of the screen at the end of the transition
    
   
    lastClickedBtnId = clickedBtnId; // refreshing clickedBtnId
    removeButtonListeners(); // removing button listeners in order to prevent the user from broking the transition

    // The end of the transition is handled on animationEndHandler(), which is triggered by 'transitionend' eventListener on container
}


const addButtonListeners = () => {
    for (const btn of roundButtons) {
        btn.addEventListener('click', roundBtnClickHandler);
    }
}
const removeButtonListeners = () => {
    for (const btn of roundButtons) {
        btn.removeEventListener('click', roundBtnClickHandler);
    }
}


const removeCards = () => {
    cardList.forEach( card => {
        
        card.remove();
    })
    cardList = [];
}

const renderNewCard = btn => {

    const template = devProcessHook.querySelector('template');
   const card = document.createElement('div');
   card.innerHTML = template.innerHTML;
  
    
    card.classList.add('step-card');
    
    devProcessHook.querySelector('.card-container').append(card);
    
    card.firstElementChild.textContent = btn.dataset.name;
    card.lastElementChild.textContent = btn.dataset.text;
    cardList.push(card);
    
    

}


const animationEndHandler = () => {
    
    removeCards(); // removing all cards
    stabilizeContainer(); // removing container´s transition and transform styles, setting it´s width to 100vw
    renderCards([clickedBtnId]); // rendering card, which the currently selected button refers to ( so )
    addButtonListeners(); // adding back all button listeners
    
}



const init = () => {
    addButtonListeners();
    stabilizeContainer();
    renderCards([0]);
    devProcessHook.querySelector('.card-container').addEventListener('transitionend', animationEndHandler);

}


const devProcessHook = document.querySelector('.dev-process'); // Hooking the seciton element
const roundButtons = devProcessHook.querySelectorAll('.step-scroll__round'); // Selecting all round buttons
let cardList = []; // Defining an array which manages a list of active cards


let lastClickedBtnId = 0; // Important for the 'click' handling phase
    let clickedBtnId = 0; // Important for the 'click' handling phase

    init(); // Rendering the first card by default, adding 'click' listeners to the round buttons, setting up the card container, adding 'transitionend' event listener to the container
