
         
              function toggleMenu() {
                var navUl = document.querySelector('nav ul');
                navUl.classList.toggle('show');
            }



    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkInView() {
        const elements = document.querySelectorAll('.vlist .vn');

        elements.forEach((element) => {
            if (isInViewport(element)) {
                element.classList.add('show');
            }
        });
    }

    
    window.addEventListener('scroll', checkInView);


    window.addEventListener('DOMContentLoaded', checkInView);


