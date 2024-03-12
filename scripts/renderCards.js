<<<<<<< HEAD
function imprimirDivs (movie){
=======
const moviesDiv = document.getElementById("movies");

const divs = (data)=>{
>>>>>>> 50044f72d81333b566e5d431442fbd23d69e27bf

    



    const imprimirDivs =  (movie)=>{

        const {title,year,director,genre,rate,poster} = movie
    
        const div = document.createElement("div");
        const divDos = document.createElement("div");
        const divTres = document.createElement("div")
        const titleDom = document.createElement("h3");
        const yearDom = document.createElement("p");
        const directorDom = document.createElement("p");
        const genreDom = document.createElement("p");
        const rateDom = document.createElement("p");
        const posterDom  = document.createElement("img");
    
        titleDom.innerHTML = `Title: ${title}`;
        yearDom.innerHTML = `Year: ${year}`;
        directorDom.innerHTML = `Director: ${director}`; 
        genreDom.innerHTML = `Genre: ${genre.join(", ")}`; 
        rateDom.innerHTML = `Rate: ${rate}`; 
        posterDom.src = poster;
        posterDom.alt = `${title} Poster`;
    
        div.appendChild(titleDom);
        div.appendChild(yearDom);
        div.appendChild(directorDom);
        div.appendChild(genreDom);
        div.appendChild(rateDom);
        divTres.appendChild(posterDom); 
    
        divDos.appendChild(divTres)
        divDos.appendChild(div)
    
        divTres.classList.add("img-m2")
        divDos.classList.add("card-m2");
        div.classList.add("info-card-m2");
        return divDos;
    
    }

    const movieElements = data.map((movie) => imprimirDivs(movie));

    movieElements.forEach(movieElement => {
        moviesDiv.appendChild(movieElement);
    });
}

<<<<<<< HEAD
module.exports = renderCards;
=======
module.exports = divs;
>>>>>>> 50044f72d81333b566e5d431442fbd23d69e27bf
