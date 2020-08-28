const changeCalcState = (state) => {
    const picSize = document.querySelectorAll('#size'),
          picMaterial = document.querySelectorAll('#material'),
          picOptions = document.querySelectorAll('#options'),
          picPromocode = document.querySelectorAll('.promocode'),
          picSum = document.querySelector('.calc-price');

          state.sum = picSum.textContent;
         
    function bindActionToSum(event, elem, prop) {
        elem.forEach((item) => {
            item.addEventListener(event, () => {
                state[prop] = item.value;
                state.sum = picSum.textContent;
                console.log(state);
            });
        }); 
    }

    bindActionToSum('change', picSize, 'size');
    bindActionToSum('change', picMaterial, 'material');
    bindActionToSum('change', picOptions, 'option');
    bindActionToSum('input', picPromocode, 'promocode');
};

export default changeCalcState;