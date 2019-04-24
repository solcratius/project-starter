/*
    User agent checker module
 */

let isTouch = false;

const HTML = document.querySelector('.challenge-impulse');//document.documentElement;
const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints;

const UserAgent = {
    init: () => {
        if (HTML.classList.contains('touch')) {
            HTML.classList.remove('touch');
        }

        if (navigator.appVersion.indexOf('Win') !== -1) {
            HTML.classList.add('osWin');
        }

        // if (window.navigator.userAgent.indexOf("MSIE ") > 0)
        if (navigator.appName === 'Microsoft Internet Explorer' || /MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
            HTML.classList.add('browserIE');
        }

        if (isTouchDevice()) {
            isTouch = true;
            HTML.classList.remove('no-touch');
            document.addEventListener('touchstart', () => {}, true);
        } else {
            HTML.classList.add('no-touch');
        }
    },

    getTouch: () => isTouch,
    setTouch: (arg) => {
        isTouch = arg;
        arg ? HTML.classList.remove('no-touch') : HTML.classList.add('no-touch');
    }
};

export default UserAgent;
