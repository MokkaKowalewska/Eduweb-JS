(function() {


    function createButton() {

        let button = document.createElement("button");
        button.classList.add("backToTop", "hidden");
        document.body.appendChild(button);
        button.textContent = "go up";

        return button;

    }

    const button = createButton();

    function animateScroll() {

        if(document.documentElement.scrollTop > 0) {
            window.scrollBy(0, -10);
            setTimeout(animateScroll, 10);
        }

    }

    button.addEventListener("click", function(e) {

        e.stopPropagation();

        animateScroll();

    }, false);

    window.addEventListener("scroll", function(e) {
        let pxScrolled = document.documentElement.scrollTop;
        if(pxScrolled > 100) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }
    }, false);




})();
