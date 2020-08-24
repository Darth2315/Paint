const mask = (selector) => {

    function createMask(event) {
        let matrix = '+3 (___) ___ __ __',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '');

            if (def.length >= val.length) {
                val = def;
            }

    }
};

export default mask;