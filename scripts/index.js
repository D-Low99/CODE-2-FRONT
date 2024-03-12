<<<<<<< HEAD

const moviesDiv = document.getElementById("movies");

const imprimirDivs =  require("./renderCards");

=======
const divs = require("./renderCards")
>>>>>>> 50044f72d81333b566e5d431442fbd23d69e27bf
$.get("https://webpt19b.web.app/data/movies.json", (data) => {
    
    divs(data)
});






