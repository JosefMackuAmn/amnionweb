var _this = this;

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ready(e) {
  "loading" !== document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", function () {
    "complete" === document.readyState && e();
  });
}

var switchAppType = function switchAppType(e, t, r) {
  e >= r.length ? e = 0 : e < 0 && (e = r.length - 1), t.forEach(function (t, r) {
    if (t.classList.remove("active"), r === e) {
      t.style.animation = "appTypesSlideIn .2s ease-out";
      t.querySelector(".app-types__slider__title").style.animation = "appTypesTitleIn .3s forwards ease-out", t.classList.add("active");
    }
  }), r.forEach(function (t, r) {
    t.classList.remove("active"), r === e && t.classList.add("active");
  }), state.curAppType = e;
},
    removeCurrentAppTypeDesc = function removeCurrentAppTypeDesc() {
  document.querySelector(".app-types__mobile-desc") && document.querySelector(".app-types__mobile-desc").remove();
},
    showAppTypeDesc = function showAppTypeDesc(e, t, r) {
  removeCurrentAppTypeDesc();
  var s = document.createElement("p");
  s.textContent = t[e].querySelector(".app-types__slider__text").textContent, s.classList.add("app-types__mobile-desc"), s.setAttribute("num", e), r[e].after(s), s.style.animation = "appTypesMobileDescIn .3s forwards ease-in";
},
    resizeWindowAppTypesHandler = function resizeWindowAppTypesHandler() {
  state.curWindowSize > 750 && state.lastWindowSize <= 750 && removeCurrentAppTypeDesc();
},
    showLessCardsBtnHandler = function showLessCardsBtnHandler(e) {
  document.documentElement.scrollTo(0, -state.lastScrollPos);
  [].concat(document.querySelectorAll(".app-types__overview__card")).forEach(function (e, t) {
    t > 2 && e.classList.add("app-types__overview__card--hidden");
  });
  var t = e.target.cloneNode(!0);
  e.target.after(t), e.target.remove(), t.textContent = "Zobrazit další produkty ->", t.addEventListener("click", showMoreCardsBtnHandler), document.querySelector(".app-types__mobile-desc").getAttribute("num") > 1 && removeCurrentAppTypeDesc();
},
    showMoreCardsBtnHandler = function showMoreCardsBtnHandler(e) {
  [].concat(document.querySelectorAll(".app-types__overview__card")).forEach(function (e, t) {
    t > 2 && (e.classList.remove("app-types__overview__card--hidden"), e.style.animation = "appTypesMobileCardIn .5s forwards ease-in");
  });
  var t = e.target.cloneNode(!0);
  e.target.after(t), e.target.remove(), t.textContent = "Zobrazit méně produktů", t.addEventListener("click", showLessCardsBtnHandler), state.lastScrollPos = document.documentElement.getBoundingClientRect().y;
},
    state = {
  curAppType: 0,
  devProcessLastClickedBtnId: 0,
  devProcessClickedBtnId: 0,
  lastScrollPos: 0,
  cardList: [],
  lastWindowSize: document.documentElement.clientWidth,
  curWindowSize: document.documentElement.clientWidth
},
    renderCards = function renderCards(e, t, r) {
  for (var _iterator = _createForOfIteratorHelperLoose(e), _step; !(_step = _iterator()).done;) {
    var s = _step.value;
    renderNewCard(r[s], t);
  }
},
    stabilizeContainer = function stabilizeContainer(e) {
  var t = e.querySelector(".card-container");
  t.style.width = "100%", t.style.transform = "translateX(0%)", t.style.transition = "", t.style.left = "0";
},
    refreshSelectedButton = function refreshSelectedButton(e) {
  for (var _iterator2 = _createForOfIteratorHelperLoose(e), _step2; !(_step2 = _iterator2()).done;) {
    var t = _step2.value;
    t.classList.remove("step-scroll__round--selected");
  }

  document.documentElement.clientWidth > 750 ? e[state.devProcessClickedBtnId].classList.add("step-scroll__round--selected") : e.forEach(function (e, t) {
    t <= state.devProcessClickedBtnId && e.classList.add("step-scroll__round--selected");
  });
},
    moveContainer = function moveContainer(e, t, r) {
  var s = r.querySelector(".card-container");
  s.style.transform = "right" === e ? "translateX(-" + (100 - 100 / t) + "%)" : "translateX(" + (100 - 100 / t) + "%)", s.style.transition = "transform 1s";
},
    setupContainer = function setupContainer(e, t, r) {
  var s = r.querySelector(".card-container");
  s.style.width = 100 * e + "%", s.style.left = "left" === t ? "-" + 100 * (e - 1) + "%" : "0";
},
    getMoveProps = function getMoveProps(e, t) {
  var r = e < t ? "right" : "left",
      s = [];

  for (var n = "right" === r ? e : t; n <= ("left" === r ? e : t); n++) {
    s.push(n);
  }

  return [r, s];
},
    performTransition = function performTransition(e, t) {
  var _getMoveProps = getMoveProps(state.devProcessLastClickedBtnId, state.devProcessClickedBtnId),
      r = _getMoveProps[0],
      s = _getMoveProps[1];

  setupContainer(s.length, r, e), removeCards(), renderCards(s, e, t), moveContainer(r, s.length, e), state.devProcessLastClickedBtnId = state.devProcessClickedBtnId;
},
    roundBtnClickHandler = function roundBtnClickHandler(e, t, r) {
  state.devProcessClickedBtnId = Array.from(t()).indexOf(r.target), state.devProcessLastClickedBtnId !== state.devProcessClickedBtnId && (reRenderStepScroll(e), reRenderPrevAndNextButton(e, t), refreshSelectedButton(t()), performTransition(e, t()));
},
    addButtonListeners = function addButtonListeners(e, t) {
  for (var _iterator3 = _createForOfIteratorHelperLoose(t()), _step3; !(_step3 = _iterator3()).done;) {
    var r = _step3.value;
    r.addEventListener("click", roundBtnClickHandler.bind(null, e, t));
  }
},
    reRenderStepScroll = function reRenderStepScroll(e) {
  var t = e.querySelector(".step-scroll");
  stepScrollHTML = t.innerHTML;
  var r = document.createElement("div");
  r.className = "step-scroll", r.innerHTML = stepScrollHTML, t.remove(), e.append(r);
},
    reRenderPrevAndNextButton = function reRenderPrevAndNextButton(e, t) {
  for (var _iterator4 = _createForOfIteratorHelperLoose(e.querySelectorAll("button")), _step4; !(_step4 = _iterator4()).done;) {
    var _t = _step4.value;

    var r = _t.cloneNode(!0);

    e.querySelector(".dev-process__buttons").prepend(r), _t.remove(), r.style.display = "block";
  }

  0 === state.devProcessClickedBtnId && (e.querySelector(".dev-process__button--left").style.display = "none"), state.devProcessClickedBtnId === t().length - 1 && (e.querySelector(".dev-process__button--right").style.display = "none");
},
    addPrevAndNextListeners = function addPrevAndNextListeners(e, t) {
  var r = e.querySelector(".dev-process__button--left"),
      s = e.querySelector(".dev-process__button--right");
  r && r.addEventListener("click", prevButtonClickHandler.bind(null, e, t)), s && s.addEventListener("click", nextButtonClickHandler.bind(null, e, t));
};

prevButtonClickHandler = function prevButtonClickHandler(e, t) {
  state.devProcessClickedBtnId = state.devProcessClickedBtnId - 1, reRenderStepScroll(e), reRenderPrevAndNextButton(e, t), refreshSelectedButton(t()), performTransition(e, t());
}, nextButtonClickHandler = function nextButtonClickHandler(e, t) {
  state.devProcessClickedBtnId = state.devProcessClickedBtnId + 1, reRenderStepScroll(e), reRenderPrevAndNextButton(e, t), refreshSelectedButton(t()), performTransition(e, t());
};

var removeCards = function removeCards() {
  state.cardList.forEach(function (e) {
    e.remove();
  }), state.cardList = [];
},
    renderNewCard = function renderNewCard(e, t) {
  var r = t.querySelector("template"),
      s = document.createElement("div");
  s.innerHTML = r.innerHTML, s.classList.add("step-card"), t.querySelector(".card-container").append(s), s.querySelector(".step-card__heading").textContent = e.dataset.name, s.querySelector("p").innerHTML = e.dataset.text, state.cardList.push(s);
},
    animationEndHandler = function animationEndHandler(e, t, r) {
  r.stopPropagation(), r.target === e.querySelector(".card-container") && (removeCards(), stabilizeContainer(e), renderCards([state.devProcessClickedBtnId], e, t()), addPrevAndNextListeners(e, t), addButtonListeners(e, t));
},
    resizeWindowHandler = function resizeWindowHandler(e, t) {
  state.curWindowSize = document.documentElement.clientWidth, resizeWindowDevProcessHandler(e, t), state.curWindowSize > 750 && state.lastWindowSize <= 750 && removeCurrentAppTypeDesc(), state.lastWindowSize = state.curWindowSize;
},
    resizeWindowDevProcessHandler = function resizeWindowDevProcessHandler(e, t) {
  state.curWindowSize <= 750 && state.lastWindowSize > 750 && t().forEach(function (e, t) {
    t < state.devProcessClickedBtnId && e.classList.add("step-scroll__round--selected");
  }), state.curWindowSize > 750 && state.lastWindowSize <= 750 && t().forEach(function (e, t) {
    t < state.devProcessClickedBtnId && e.classList.remove("step-scroll__round--selected");
  });
},
    init = function init(e, t) {
  addButtonListeners(e, t), stabilizeContainer(e), renderCards([0], e, t()), reRenderPrevAndNextButton(e, t), addPrevAndNextListeners(e, t), e.querySelector(".card-container").addEventListener("transitionend", animationEndHandler.bind(_this, e, t)), window.addEventListener("resize", resizeWindowHandler.bind(_this, e, t));
};

ready(function () {
  var e = document.getElementById("app-types__slider"),
      t = e.querySelector(".app-types__slider__btn--prev"),
      r = e.querySelector(".app-types__slider__btn--next"),
      s = e.querySelectorAll(".app-types__slider__window"),
      n = document.querySelectorAll(".app-types__overview__card"),
      d = document.querySelector(".app-types__display-more--mobile");
  r.addEventListener("click", function () {
    return switchAppType(state.curAppType + 1, s, n);
  }), t.addEventListener("click", function () {
    return switchAppType(state.curAppType - 1, s, n);
  }), n.forEach(function (e, t) {
    e.addEventListener("click", function () {
      switchAppType(t, s, n), state.curWindowSize < 750 && showAppTypeDesc(t, s, n);
    });
  }), d.addEventListener("click", showMoreCardsBtnHandler);
  var o = document.querySelector(".dev-process");
  init(o, function () {
    return o.querySelectorAll(".step-scroll__round");
  });
});