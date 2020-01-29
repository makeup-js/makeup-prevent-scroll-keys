/* eslint-disable no-console */

const scrollKeysPreventer = require('../../src/index.js');
const widgetEl = document.querySelector('.widget');

scrollKeysPreventer.add(widgetEl);

window.addEventListener('scroll', (e) => console.log(e));

// scrollKeysPreventer.remove(widgetEl);
