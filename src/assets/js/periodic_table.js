let element_captionSpan = document.querySelectorAll('.element-caption span');
let element_captionParentNode

let classList = [];
let currentElement;

element_captionSpan.forEach((element) => {
    element.addEventListener('click', () => {
        classList = [...element.parentNode.classList];


        if ((classList.indexOf('non-metals')) > -1) {
            currentElement = document.querySelectorAll('.non-metalsElement');
            currentElement.forEach((element) => {
                if (!(element.hasAttribute('style'))) {
                    element.setAttribute('style', 'background-color: #a1d344;');
                } else {
                    element.removeAttribute('style');
                }

            });
        };

        if ((classList.indexOf('noble-gases')) > -1) {
            currentElement = document.querySelectorAll('.noble-gasesElement');
            currentElement.forEach((element) => {
                if (!(element.hasAttribute('style'))) {
                    element.setAttribute('style', 'background-color: #3d9ee3;');
                } else {
                    element.removeAttribute('style');
                }

            });
        }

        if ((classList.indexOf('alkali-metals')) > -1) {
            currentElement = document.querySelectorAll('.alkali-metalsElement');
            currentElement.forEach((element) => {
                if (!(element.hasAttribute('style'))) {
                    element.setAttribute('style', 'background-color: #f1b200;');
                } else {
                    element.removeAttribute('style');
                }

            });
        }



        if ((classList.indexOf('alkaline-earth-metals')) > -1) {
            currentElement = document.querySelectorAll('.alkaline-earth-metalsElement');
            currentElement.forEach((element) => {
                if (!(element.hasAttribute('style'))) {
                    element.setAttribute('style', 'background-color: #eada00;');
                } else {
                    element.removeAttribute('style');
                }

            });
        }

        if ((classList.indexOf('semimetals')) > -1) {
            currentElement = document.querySelectorAll('.semimetalsElement');
            currentElement.forEach((element) => {
                if (!(element.hasAttribute('style'))) {
                    element.setAttribute('style', 'background-color: #4db6ac;');
                } else {
                    element.removeAttribute('style');
                }

            });
        }

        if ((classList.indexOf('halogens')) > -1) {
            currentElement = document.querySelectorAll('.halogensElement');
            currentElement.forEach((element) => {
                if (!(element.hasAttribute('style'))) {
                    element.setAttribute('style', 'background-color: #70cbeb;');
                } else {
                    element.removeAttribute('style');
                }

            });
        }

        if ((classList.indexOf('other-metals')) > -1) {
            currentElement = document.querySelectorAll('.other-metalsElement');
            currentElement.forEach((element) => {
                if (!(element.hasAttribute('style'))) {
                    element.setAttribute('style', 'background-color: #a2c7d3;');
                } else {
                    element.removeAttribute('style');
                }

            });
        }

        if ((classList.indexOf('transition-metals')) > -1) {
            currentElement = document.querySelectorAll('.transition-metalsElement');
            currentElement.forEach((element) => {
                if (!(element.hasAttribute('style'))) {
                    element.setAttribute('style', 'background-color: #eb8e8e;');
                } else {
                    element.removeAttribute('style');
                }

            });
        }

        if ((classList.indexOf('lanthanides')) > -1) {
            currentElement = document.querySelectorAll('.lanthanidesElement');
            currentElement.forEach((element) => {
                if (!(element.hasAttribute('style'))) {
                    element.setAttribute('style', 'background-color: #90e3e9;');
                } else {
                    element.removeAttribute('style');
                }

            });
        }

        if ((classList.indexOf('actinides')) > -1) {
            currentElement = document.querySelectorAll('.actinidesElement');
            currentElement.forEach((element) => {
                if (!(element.hasAttribute('style'))) {
                    element.setAttribute('style', 'background-color: #90e3e9;');
                } else {
                    element.removeAttribute('style');
                }

            });
        }

    });
});
