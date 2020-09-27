/////////////////////
// DEFINING FUNCTIONS

// Define function for executing callback when DOM content loaded
function ready(callbackFunc) {
  if (document.readyState !== "loading") {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener("DOMContentLoaded", callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState === "complete") {
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
    slide.classList.remove("active");
    if (idx === index) {
      slide.style.animation = "appTypesSlideIn .2s ease-out";
      const title = slide.querySelector(".app-types__slider__title");
      title.style.animation = "appTypesTitleIn .3s forwards ease-out";
      slide.classList.add("active");
    }
  });

  // Add active class to selected card
  appTypeCards.forEach((card, idx) => {
    card.classList.remove("active");
    if (idx === index) {
      card.classList.add("active");
    }
  });

  state.curAppType = index;
  
 

};
// Handling logic for show-more and show-less button for mobile-phone users on App-Types section
const showLessCardsBtnHandler = (event) => {
  document.documentElement.scrollTo(0, -state.lastScrollPos);
  const cards = document.querySelectorAll('.app-types__overview__card');
  [...cards].forEach( (card, id) => {
    if (id > 2) {
      card.classList.add('app-types__overview__card--hidden');
    }
  })
  const showMoreCardsBtn = event.target.cloneNode(true);
  event.target.after(showMoreCardsBtn);
  event.target.remove();
  showMoreCardsBtn.textContent = "Zobrazit další produkty ->";
  showMoreCardsBtn.addEventListener('click', showMoreCardsBtnHandler);
  state.lastScrollPos = document.documentElement.getBoundingClientRect().y;
}

const showMoreCardsBtnHandler = (event) => {
  
  const cards = document.querySelectorAll('.app-types__overview__card');
  [...cards].forEach( (card, id) => {
    if (id > 2) {
      card.classList.remove('app-types__overview__card--hidden');
    }
  })
  const showLessCardsBtn = event.target.cloneNode(true);
  event.target.after(showLessCardsBtn);
  event.target.remove();
  showLessCardsBtn.textContent = "Zobrazit méně produktů";
  showLessCardsBtn.addEventListener('click', showLessCardsBtnHandler);
  state.lastScrollPos = document.documentElement.getBoundingClientRect().y;
  
}

// Define state
const state = {
  // Current selected app type in the .app-types section
  curAppType: 0,
  // Current and last selected button in the dev-process section
  devProcessLastClickedBtnId: 0,
  devProcessClickedBtnId: 0,
  lastScrollPos: 0
};

//SERVICES-FEATURES SECTION

const removeSelectedClass = buttons => {
  for (const btn of buttons) {
    btn.classList.remove("services-features__button--selected");
  }
};

const btnClickHandler = (hook, buttons, event) => {
  
  if(document.documentElement.clientWidth > 750) { // executing this code only for non-mobile sized viewports
    const desc = hook.querySelector(".services-features__item-info");
    console.log(document.documentElement.clientWidth);
  desc.firstElementChild.textContent = event.target.dataset.name;
  desc.lastElementChild.textContent = event.target.dataset.text;
  } else {
    const label = hook.querySelector('p');
    label.textContent = event.target.dataset.text;
    event.target.after(label);
  }
  
  removeSelectedClass(buttons);
  event.target.classList.add("services-features__button--selected");
};

//DEV-PROCESS SECTION

const renderCards = (renderedCards, hook, buttons) => {
  for (const i of renderedCards) {
    renderNewCard(buttons[i], hook);
  }
  if (
    state.devProcessClickedBtnId === 0 ||
    state.devProcessLastClickedBtnId === 0
  ) {
    cardList[0].querySelector("button:first-of-type").remove();
  }
  if (
    state.devProcessClickedBtnId === buttons.length - 1 ||
    state.devProcessLastClickedBtnId === buttons.length - 1
  ) {
    cardList[cardList.length - 1].querySelector("button:last-of-type").remove();
  }
};
const stabilizeContainer = (hook) => {
  const container = hook.querySelector(".card-container");
  container.style.width = "100%";
  container.style.transform = "translateX(0%)";
  container.style.transition = "";
  container.style.left = "0";
};
const refreshSelectedButton = (buttons) => {
  for (const btn of buttons) {
    btn.classList.remove("step-scroll__round--selected");
  }
  if(document.documentElement.clientWidth > 750) {
    buttons[state.devProcessClickedBtnId].classList.add(
      "step-scroll__round--selected"
    );
  } else {
    buttons.forEach( (button, id) => {
      if (id <= state.devProcessClickedBtnId) {
       button.classList.add(
          "step-scroll__round--selected"
        );
      }

    })
  }
  
};
const moveContainer = (direction, length, hook) => {
  const container = hook.querySelector(".card-container");

  container.style.transform =
    direction === "right"
      ? `translateX(-${100 - 100 / length}%)`
      : `translateX(${100 - 100 / length}%)`;
  container.style.transition = "transform 1s";
};
const setupContainer = (length, direction, hook) => {
  const container = hook.querySelector(".card-container");
  container.style.width = `${length * 100}%`;

  if (direction === "left") {
    container.style.left = `-${(length - 1) * 100}%`;
  } else {
    container.style.left = "0";
  }
};
const getMoveProps = (lastClickedBtnId, clickedBtnId) => {
  const direction = lastClickedBtnId < clickedBtnId ? "right" : "left";
  const renderedCards = [];

  for (
    let i = direction === "right" ? lastClickedBtnId : clickedBtnId;
    i <= (direction === "left" ? lastClickedBtnId : clickedBtnId);
    i++
  ) {
    renderedCards.push(i);
  }

  return [direction, renderedCards];
};
const performTransition = (hook, buttons) => {
  // getMoveProps() returns information about the transition that will occur. It firstly returns  the direction, secondly an array of id´s for buttons that are related to cards that are going to appear on screen during the transition.
  const [direction, renderedCards] = getMoveProps(
    state.devProcessLastClickedBtnId,
    state.devProcessClickedBtnId
  );

  // setting up the container so it´s default position is that the original card is shown and the rest of the container is overflowing
  setupContainer(renderedCards.length, direction, hook);
  //removing cards
  removeCards();
  //rendering all cards that will appear during the transition to the container (container has display: flex and justify-content: space-around so the space between cards is even)
  renderCards(renderedCards, hook, buttons);
  // applying transition to the container, so the selected card will remain in  center of the screen at the end of the transition
  moveContainer(direction, renderedCards.length, hook);
  // refreshing state.devProcessClickedBtnId
  state.devProcessLastClickedBtnId = state.devProcessClickedBtnId;
  // removing button listeners in order to prevent the user from broking the transition
  removeButtonListeners(hook);

  // The end of the transition is handled on animationEndHandler(), which is triggered by 'transitionend' eventListener on container
};
const roundBtnClickHandler = (hook, buttons, event) => {
  // getting  index of the clicked button
  state.devProcessClickedBtnId = Array.from(buttons).indexOf(event.target);
  refreshSelectedButton(buttons);
  performTransition(hook, buttons);
};

const addButtonListeners = (hook, buttons) => {
  for (const btn of buttons) {
    btn.addEventListener(
      "click",
      roundBtnClickHandler.bind(null, hook, buttons)
    );
  }
};
const removeButtonListeners = (hook) => {
  const stepScroll = hook.querySelector(".step-scroll");
  stepScrollHTML = stepScroll.innerHTML;
  const newStepScroll = document.createElement("div");
  newStepScroll.className = "step-scroll";
  newStepScroll.innerHTML = stepScrollHTML;
  stepScroll.remove();
  hook.append(newStepScroll);
};
const addPrevAndNextListeners = (card, hook, buttons) => {
  const prevBtn = card.querySelector(".step-card__button--left");
  const nextBtn = card.querySelector(".step-card__button--right");
  if (prevBtn) {
    prevBtn.addEventListener(
      "click",
      prevButtonClickHandler.bind(null, hook, buttons)
    );
  }
  if (nextBtn) {
    nextBtn.addEventListener(
      "click",
      nextButtonClickHandler.bind(null, hook, buttons)
    );
  }
};



prevButtonClickHandler = (hook, buttons) => {
  state.devProcessClickedBtnId = state.devProcessClickedBtnId - 1;
  refreshSelectedButton(buttons);
  performTransition(hook, buttons);
  /* if (document.documentElement.clientWidth <= 750) {
    refreshProgressBar(hook);
  }  */
};
nextButtonClickHandler = (hook, buttons) => {
  state.devProcessClickedBtnId = state.devProcessClickedBtnId + 1;
  refreshSelectedButton(buttons);
  performTransition(hook, buttons);
  /* if(document.documentElement.clientWidth <= 750) {
    refreshProgressBar(hook);
  } */
};
const removeCards = () => {
  cardList.forEach((card) => {
    card.remove();
  });
  cardList = [];
};

const renderNewCard = (btn, hook) => {
  const template = hook.querySelector("template");
  const card = document.createElement("div");
  card.innerHTML = template.innerHTML;

  card.classList.add("step-card");

  hook.querySelector(".card-container").append(card);

  card.querySelector(".step-card__heading").textContent = btn.dataset.name;
  card.querySelector("p").textContent = btn.dataset.text;
  cardList.push(card);
};

const animationEndHandler = (hook, getButtons, event) => {
  // In order for the next and last button to work
  event.stopPropagation();
  if (event.target !== hook.querySelector(".card-container")) {
    return;
  }
  // removing all cards
  removeCards();
  // removing container´s transition and transform styles, setting it´s width to 100vw
  stabilizeContainer(hook);
  // rendering card, which the currently selected button refers to
  renderCards([state.devProcessClickedBtnId], hook, getButtons());
  // adding back all button listeners
  addButtonListeners(hook, getButtons());
  addPrevAndNextListeners(cardList[0], hook, getButtons());
};

const init = (hook, getButtons) => {
  addButtonListeners(hook, getButtons());
  stabilizeContainer(hook);
  renderCards([0], hook, getButtons());
  addPrevAndNextListeners(cardList[0], hook, getButtons());
  hook
    .querySelector(".card-container")
    .addEventListener(
      "transitionend",
      animationEndHandler.bind(this, hook, getButtons)
    );
};

let cardList = []; // Defining an array which manages a list of active cards
let devProcessLastClickedBtnId = 0; // Important for the 'click' handling phase
let devProcessClickedBtnId = 0; // Important for the 'click' handling phase

/////////////////////
// CALLING READY FUNCTION
ready(() => {
  // Selecting important els in the .app-types section
  const slider = document.getElementById("app-types__slider");
  const sliderPrev = slider.querySelector(".app-types__slider__btn--prev");
  const sliderNext = slider.querySelector(".app-types__slider__btn--next");
  const appTypeSlides = slider.querySelectorAll(".app-types__slider__window");
  const appTypeCards = document.querySelectorAll(".app-types__overview__card");
  const showMoreCardsBtn = document.querySelector('.app-types__display-more--mobile');


  // Adding listeners to prev & next buttons to move .app-types slider
  sliderNext.addEventListener("click", () =>
    switchAppType(state.curAppType + 1, appTypeSlides, appTypeCards)
  );
  sliderPrev.addEventListener("click", () =>
    switchAppType(state.curAppType - 1, appTypeSlides, appTypeCards)
  );
  // Adding listeners to cards inside of .app-types section
  appTypeCards.forEach((card, idx) => {
    card.addEventListener("click", () => {
      switchAppType(idx, appTypeSlides, appTypeCards);
    });
  });
  //Adding listener to "Show more button" for mobile users
  showMoreCardsBtn.addEventListener('click', showMoreCardsBtnHandler);

  // Services-features

  const featuresHook = document.querySelector(".services-features");
  const featuresButtons = featuresHook.querySelectorAll(
    ".services-features__button"
  );
  for (const btn of featuresButtons) {
    btn.addEventListener("click", btnClickHandler.bind(this, featuresHook, featuresButtons));
  }

  // Dev-Process

  // Hooking the seciton element
  const devProcessHook = document.querySelector(".dev-process");

  // Selecting all round buttons
  const getRoundButtons = () => {
    return devProcessHook.querySelectorAll(".step-scroll__round");
  };

  // Rendering the first card by default, adding 'click' listeners to the round buttons, setting up the card container, adding 'transitionend' event listener to the container
  init(devProcessHook, getRoundButtons);
});
