/*
    Window resize listener module
 */

import UserAgent from './user_agent';
import { forceComparisonTabUpdate } from './comparison';

let _width = 0,
    _height = 0,
    time = null,
    timeout = false,
    delta = 50;

const HTML = document.querySelector('.challenge-impulse');//document.documentElement;

const findWinW = function() {
    return Math.max(HTML.clientWidth, window.innerWidth || 0);
};

const findWinH = function() {
    return Math.max(HTML.clientHeight, window.innerHeight || 0);
};

const endResize = () => {
    if (new Date() - time < delta) {
        setTimeout(endResize, delta);
    } else {
        timeout = false;
        _width = findWinW();
        _height = findWinH();

        if (_width < 480) {
            forceComparisonTabUpdate();
        }

        HTML.classList.remove('noAnim');
        // console.log(`W_RESIZE: ${_width} x ${_height}`);
    }
};

const startResize = () => {
    time = new Date();

    if (timeout === false) {
        timeout = true;
        HTML.classList.add('noAnim');

        setTimeout(endResize, delta);
    }
};

const WinResize = {
    init: () => {
        _width = findWinW();
        _height = findWinH();

        if (_width < 480) {
            forceComparisonTabUpdate();
        }

        if (!UserAgent.getTouch()) {
            window.addEventListener('resize', startResize);
        } else {
            window.addEventListener('orientationchange', startResize);
        }
    },

    getWidth: () => _width,
    getHeight: () => _height
};

export default WinResize;
