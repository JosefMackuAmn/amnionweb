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

// Define function for checking if el has parent with selector
function hasParentWithMatchingSelector (target, selector) {
    return [...document.querySelectorAll(selector)].some(el => {
        return el !== target && el.contains(target)
    });
}


//////////////////////////////////////////
///// MENU
// Highlight active navigation link
ready(() => {
    // Get current url substing
    url = window.location.pathname;
    url = url.substr(1);

    if (url == "") {
        url = "/";
    }

    // Find link element
    const hrefEl = document.querySelectorAll(".menu__list [href='" + url + "']");

    // Highlight link
    if (hrefEl[1]) {
        hrefEl[1].style.color = "#5CB2F0";
    } else {
        hrefEl[0].style.color = "#5CB2F0";
    }
});

ready(() => {
    const menu = document.querySelector('.menu');
    const hamBtn = document.getElementById('ham-btn');
    const mobMenu = document.getElementById('mob-menu');
    let prevScrollTop = window.pageYOffset;

    // Hide menu when scrolling down
    window.addEventListener('scroll', () => {
        let newScrollTop = window.pageYOffset;
        if (newScrollTop > prevScrollTop) {
            menu.style.transform = 'translateY(-100px)';
        } else if (newScrollTop < prevScrollTop) {
            menu.style.transform = 'translateY(0)';
        }
        prevScrollTop = newScrollTop;
    });
    
    // Toggling menu button
    hamBtn.addEventListener('click', () => {
        mobMenu.classList.toggle('slidedMenu');
    }, )

    // Slide up menu on resize
    window.addEventListener('resize', () => {
        mobMenu.classList.remove('slidedMenu');
    })

    // Slide menu up if clicked away
    window.addEventListener('click', (event) => {
        const target = event.target;
        if (!hasParentWithMatchingSelector(target, '.menu')) {
            mobMenu.classList.remove('slidedMenu');
        }
    })

    ///// Animations
    // Define elements with animation classes
    const elementsFromLeft = document.querySelectorAll('.fadeFromLeft');
    const elementsFromRight = document.querySelectorAll('.fadeFromRight');
    const elementsPricing = document.querySelectorAll('.pricing-card');
    
    // Add event listener on window for evocation of animations at given time
    ['resize', 'scroll', 'load'].forEach(action => {
        window.addEventListener(action, () => {
            showElement(elementsFromLeft, elementsFromRight, elementsPricing)
        })
    })

});


//////////////////////////////////////////
///// ANIMATIONS
const showElement = (elementsFromLeft, elementsFromRight, elementsPricing) => {
    const deviceHeight = window.innerHeight;
    const deviceWidth = window.innerWidth;
    const scrollTop = window.pageYOffset;
    let elTopOffset;
    // Loop through elements with certain animation classes
    elementsFromLeft.forEach(el => {
        if (deviceWidth > 850 || !el.classList.contains('feature-box')) {
            elTopOffset = el.getBoundingClientRect().top + window.scrollY;
            // Add animation if the element can be seen
            if (elTopOffset < (deviceHeight + scrollTop - 100)) {
                if (el.classList.contains('delay')) {
                    el.style.animation = 'fromLeft 1s 1.2s forwards';
                    setTimeout(() => {
                        el.classList.remove('fadeFromLeft');
                    }, 1500);
                } else if (el.classList.contains('delayLong')) {
                    el.style.animation = 'fromLeft 1s 2s forwards';
                    setTimeout(() => {
                        el.classList.remove('fadeFromLeft');
                    }, 2300);
                } else {
                    el.style.animation = 'fromLeft 1s forwards';
                    el.classList.remove('fadeFromLeft');
                }
            }
        } else {
            el.classList.remove('fadeFromLeft');
        }
    });
    elementsFromRight.forEach(el => {        
        if (deviceWidth > 850 || !el.classList.contains('feature-box')) {
            elTopOffset = el.getBoundingClientRect().top + window.scrollY;
            // Add animation if the element can be seen
            if (elTopOffset < (deviceHeight + scrollTop - 100)) {
                el.style.animation = 'fromRight 1s forwards';
                el.classList.remove('fadeFromRight')
            }
        } else {
            el.classList.remove('fadeFromRight');
        }
    })
    elementsPricing.forEach(el => {
        elTopOffset = el.getBoundingClientRect().top + window.scrollY;
        const elRight = el.querySelectorAll('.pricingFromRight');
        const elLeft = el.querySelectorAll('.pricingFromLeft');
        // Add animation if the element can be seen
        if (elRight.length) {
            if (elTopOffset < (deviceHeight + scrollTop - 100)) {
                el.classList.add('animateRight');
                elRight.forEach(elem => {
                    elem.style.animation = 'pricingCardFromRight .8s .7s forwards cubic-bezier(.23,.97,.46,1.03)';
                })
            }
        } else if (elLeft.length) {
            if (elTopOffset < (deviceHeight + scrollTop - 100)) {
                el.classList.add('animateLeft');
                elLeft.forEach(elem => {
                    elem.style.animation = 'pricingCardFromLeft .8s .7s forwards cubic-bezier(.23,.97,.46,1.03)';
                })
            }
        }
    })
}


//////////////////////////////////////////
///// Form validation
const onSubmitHandler = () => {
    //e.preventDefault();
    let nameEl = document.getElementById('full-name');
    let emailEl = document.getElementById('email');
    let messageEl = document.getElementById('message');

    nameEl.classList.remove('u-invalid-input');
    emailEl.classList.remove('u-invalid-input');
    messageEl.classList.remove('u-invalid-input');

    name = nameEl.value.trim();
    email = emailEl.value.trim();
    message = messageEl.value.trim();

    const errors = [];
    
    if (!/^[a-zA-ZěšŠčČřŘžŽýÝáÁíÍéÉůŮúÚďĎťŤňŇľĽóÓäÄöÖ ]+$/.test(name) || !name.split(' ')[1]) {
        errors.push(nameEl);
    }
    if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        errors.push(emailEl);
    }
    if (message.length < 20) {
        errors.push(messageEl);
    }
    
    if (errors.length) {
        errors.forEach(el => {
            el.classList.add('u-invalid-input');
        })
        return false;
    } else if (errors.length === 0) {
        return true;
    }
}

//////////////////////////////////////////
///// Service workers
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}