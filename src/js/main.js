import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInput from './modules/checkTextInput';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import changeCalcState from './modules/changeCalcState';

window.addEventListener('DOMContentLoaded', () => {
    
    'use strict';

    let calcState = {};
    
    changeCalcState(calcState);
    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms(calcState);
    mask('[name="phone"]');
    checkTextInput('[name="name"]');
    checkTextInput('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
});