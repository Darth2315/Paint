import {postData} from '../services/requests';

const drop = () => {

    // drag *
    // dragend *
    // dragenter
    // dragexit *
    // dragleave
    // dragover
    // dragstart *
    // drop

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefault, false);
        });
    });

    function preventDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function highlight(input) {
        input.closest('.file_upload').style.borderRadius = '25px';
        input.closest('.file_upload').style.backgroundColor = 'pink';
    }

    function unhighlight(input) {
        input.closest('.file_upload').style.borderRadius = '0px';
        if (input.closest('.calc_form')) {
            input.closest('.file_upload').style.backgroundColor = '#fff';
        } else if (input.closest('.main')) {
            input.closest('.file_upload').style.backgroundColor = '#F7E7E6';
        } else {
            input.closest('.file_upload').style.backgroundColor = '#ededed';
        }
    }

    ['dragenter', 'dragover'].forEach(elementName => {
        fileInputs.forEach(input => {
            input.addEventListener(elementName, () => highlight(input), false);
        });
    });

    ['dragleave', 'drop'].forEach(elementName => {
        fileInputs.forEach(input => {
            input.addEventListener(elementName, () => unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;

            if (input.closest('.main')) {
                preventDefault(e);

                let formData = new FormData();
                formData.append('file', input.files[0]);

                postData('assets/server.php', formData)
                .then(res => console.log(res))
                .catch(err => console.error(err));
            }

            let dots;
            const arr = input.files[0].name.split('.');

            arr[0].length > 6 ? dots = "..." : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            input.previousElementSibling.textContent = name;
        });
    });

};

export default drop;