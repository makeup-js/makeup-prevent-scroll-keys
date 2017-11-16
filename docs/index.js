var scrollKeysPreventer = require('../index.js');

var widgetEl = document.querySelector('.widget');

scrollKeysPreventer.add(widgetEl);

window.addEventListener('scroll', function(e) {
    console.log(e);
});

// scrollKeysPreventer.remove(widgetEl);
