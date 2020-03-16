(function() {

    let button = document.querySelector(".button");
        output = document.querySelector(".output");


        function getRandom(max) { 

        return Math.ceil(Math.random() * max);

        };

        function showRandomNbs() {

        const randomNbArr = [];

        for (i = 0; i < 6; i++) {
            let random = getRandom(49);

            while(randomNbArr.indexOf(random) !== -1) {
                random = getRandom(49);
                
            }

            randomNbArr.push(random);
            
            

        };

        output.value = randomNbArr.join(", ");

        }

    button.onclick = showRandomNbs;

})();