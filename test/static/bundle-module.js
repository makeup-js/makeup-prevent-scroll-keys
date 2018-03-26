$_mod.def("/makeup-prevent-scroll-keys$0.0.2/index", function(require, exports, module, __filename, __dirname) { 'use strict';

function onKeyDown(e) {
    if (e.keyCode >= 32 && e.keyCode <= 36 || e.keyCode === 38 || e.keyCode === 40) {
        e.preventDefault();
    }
}

function add(el) {
    el.addEventListener('keydown', onKeyDown);
}

function remove(el) {
    el.removeEventListener('keydown', onKeyDown);
}

module.exports = {
    add: add,
    remove: remove
};

});