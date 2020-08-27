const changeCalcState = (state) => {
    const picSize = document.querySelectorAll('#size'),
          picMaterial = document.querySelectorAll('#material'),
          picOptions = document.querySelectorAll('#options'),
          picPromocode = document.querySelectorAll('.promocode'),
          picSum = document.querySelectorAll('.calc-price');
          
    function bindActionToSum(event, elem, prop) {
        elem.forEach(item => {
            item.addEventListener(event, () => {
                state[prop] = item.value;
            });
        });
    }

    console.log(state);

    bindActionToSum('change', picSize, 'size');
    bindActionToSum('change', picMaterial, 'material');
    bindActionToSum('change', picOptions, 'option');
    bindActionToSum('input', picPromocode, 'promocode');
    bindActionToSum('change', picSum, 'sum');
};

export default changeCalcState;