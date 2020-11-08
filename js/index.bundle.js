function ready(e) {
    "loading" !== document.readyState ? e() : document.addEventListener ? document.addEventListener("DOMContentLoaded", e) : document.attachEvent("onreadystatechange", function () {
      "complete" === document.readyState && e();
    });
  }
  
  function hasParentWithMatchingSelector(e, t) {
    return [].concat(document.querySelectorAll(t)).some(function (t) {
      return t !== e && t[0].contains(e);
    });
  }
  
  "undefined" != typeof NodeList && NodeList.prototype && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), String.prototype.includes || (String.prototype.includes = function (e, t) {
    return void 0 === t && (t = 0), -1 !== this.indexOf(e, t);
  }), ready(function () {
    url = window.location.pathname, url = url.substr(1), "" == url && (url = "/");
    var e = document.querySelectorAll(".menu__list [href='" + url + "']");
    e[1] ? e[1].style.color = "#5CB2F0" : e[0].style.color = "#5CB2F0";
  }), ready(function () {
    var e = document.querySelector(".menu"),
        t = document.getElementById("ham-btn"),
        n = document.getElementById("mob-menu");
    var o = window.pageYOffset;
    window.addEventListener("scroll", function () {
      var t = window.pageYOffset;
      t > o ? e.style.transform = "translateY(-100px)" : t < o && (e.style.transform = "translateY(0)"), o = t;
    }), t.addEventListener("click", function () {
      n.classList.toggle("slidedMenu");
    }), window.addEventListener("resize", function () {
      n.classList.remove("slidedMenu");
    }), window.addEventListener("click", function (e) {
      hasParentWithMatchingSelector(e.target, ".menu") || n.classList.remove("slidedMenu");
    });
    var s = document.querySelectorAll(".fadeFromLeft"),
        r = document.querySelectorAll(".fadeFromRight"),
        i = document.querySelectorAll(".pricing-card");
    ["resize", "scroll", "load"].forEach(function (e) {
      window.addEventListener(e, function () {
        showElement(s, r, i);
      });
    });
  });
  
  var showElement = function showElement(e, t, n) {
    var o = window.innerHeight,
        s = window.innerWidth,
        r = window.pageYOffset;
    var i;
    e.forEach(function (e) {
      s > 850 || !e.classList.contains("feature-box") ? (i = e.getBoundingClientRect().top + document.documentElement.scrollTop, i < o + r - 100 && (e.classList.contains("delay") ? (e.style.animation = "fromLeft 1s 1.2s forwards", setTimeout(function () {
        e.classList.remove("fadeFromLeft");
      }, 1500)) : e.classList.contains("delayLong") ? (e.style.animation = "fromLeft 1s 2s forwards", setTimeout(function () {
        e.classList.remove("fadeFromLeft");
      }, 2300)) : (e.style.animation = "fromLeft 1s forwards", e.classList.remove("fadeFromLeft")))) : e.classList.remove("fadeFromLeft");
    }), t.forEach(function (e) {
      s > 850 || !e.classList.contains("feature-box") ? (i = e.getBoundingClientRect().top + document.documentElement.scrollTop, i < o + r - 100 && (e.style.animation = "fromRight 1s forwards", e.classList.remove("fadeFromRight"))) : e.classList.remove("fadeFromRight");
    }), n.forEach(function (e) {
      i = e.getBoundingClientRect().top + document.documentElement.scrollTop;
      var t = e.querySelectorAll(".pricingFromRight"),
          n = e.querySelectorAll(".pricingFromLeft");
      t.length ? i < o + r - 100 && (e.classList.add("animateRight"), t.forEach(function (e) {
        e.style.animation = "pricingCardFromRight .8s .7s forwards cubic-bezier(.23,.97,.46,1.03)";
      })) : n.length && i < o + r - 100 && (e.classList.add("animateLeft"), n.forEach(function (e) {
        e.style.animation = "pricingCardFromLeft .8s .7s forwards cubic-bezier(.23,.97,.46,1.03)";
      }));
    });
  },
      onSubmitHandler = function onSubmitHandler() {
    var e = document.getElementById("full-name"),
        t = document.getElementById("email"),
        n = document.getElementById("message");
    e.classList.remove("u-invalid-input"), t.classList.remove("u-invalid-input"), n.classList.remove("u-invalid-input"), name = e.value.trim(), email = t.value.trim(), message = n.value.trim();
    var o = [];
    return /^[a-zA-ZěšŠčČřŘžŽýÝáÁíÍéÉůŮúÚďĎťŤňŇľĽóÓäÄöÖ ]+$/.test(name) && name.split(" ")[1] || o.push(e), /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) || o.push(t), message.length < 20 && o.push(n), o.length ? (o.forEach(function (e) {
      e.classList.add("u-invalid-input");
    }), !1) : 0 === o.length || void 0;
  };
  
  "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js");