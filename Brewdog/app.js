document.addEventListener('DOMContentLoaded', () => {
    const api = 'https://api.punkapi.com/v2/beers?beer_name=';
    const randomBeertBtn = document.querySelector('.randomBeerBtn')
    const randomBeer = document.querySelector('.random-beer')
    const randomBeerTagline = document.querySelector('.random-beerTagline')
    const randomBeerAbv = document.querySelector('.random-beerAbv')
    const randomBeerDescription = document.querySelector('.randomBeerDescription')
    const beerRandomDiv = document.querySelector("#beerRandomDiv");
    const randomBtnNav = document.querySelector("#randomBeerBtnNav");
    const beerSearchDiv = document.querySelector("#beerSearchDiv");
    const beerBtnNav = document.querySelector("#searchBeerBtnNav");

    beerSearchDiv.classList.add("hidden");
    beerRandomDiv.classList.remove("hidden");
    document.getElementById("BeerSearchBtn").onclick = beerAsk;
    randomBeertBtn.addEventListener("click", getData)

    function beerAsk(e) {
        const resultContainer = document.getElementById("search-result");
        const beerComponent = document.getElementsByClassName("beer-component")[0];

        const beerage = document.getElementById("BeerInputSearch").value;
        const url = api + beerage;
        e.preventDefault()
        fetch(url)
            .then(reponse => {
                return reponse.json()

            })
            .then(data => {
                clearhtml = resultContainer.innerHTML = "";

                data.forEach((beer) => {

                    const theBeer = beer.name;
                    const theTagline = beer.tagline;
                    const theDescription = beer.description;
                    const theAbv = beer.abv;
                    const thePic = beer.image_url;



                    function imgDisplay() {
                        if (thePic === null) {
                            return document.getElementById('imageSearch').src = "https://images.punkapi.com/v2/keg.png";
                        } else {
                            return thePic;
                        }
                    }

                    let component = beerComponent.cloneNode(true);

                    let titleBeer = component.getElementsByClassName('beer-title')[0];
                    let taglineBeer = component.getElementsByClassName('beer-tagline')[0];
                    let abvBeer = component.getElementsByClassName('beer-abv')[0];
                    let descriptionBeer = component.getElementsByClassName('beer-description')[0];
                    let imgBeer = component.querySelector('.beer-image img');

                    component.style = "display: block;";
                    titleBeer.innerHTML = theBeer
                    taglineBeer.innerHTML = theTagline
                    abvBeer.innerHTML = "ABV: " + theAbv + "%"
                    descriptionBeer.innerHTML = theDescription
                    imgBeer.src = imgDisplay();
                    imgBeer.alt = theBeer;

                    resultContainer.appendChild(component);
                    clear();
                })

            })

    }

    function getData(e) {
        e.preventDefault()
        fetch('https://api.punkapi.com/v2/beers/random')
            .then(reponse => {
                return reponse.json()
            })
            .then(data => {
                const name = data[0].name
                const tagline = data[0].tagline
                const description = data[0].description
                const abv = data[0].abv
                const pic = data[0].image_url
                const nopic = document.getElementById('imageRandom').src = "https://images.punkapi.com/v2/keg.png"
                function imgDisplay() {
                    if (data[0].image_url === null) {
                        return nopic;
                    }
                    else {
                        return pic;
                    }
                }

                randomBeer.innerHTML = name
                randomBeerTagline.innerHTML = tagline
                randomBeerAbv.innerHTML = "ABV: " + abv + "%"
                randomBeerDescription.innerHTML = description
                document.getElementById('imageRandom').src = imgDisplay();

            })
    }

    randomBtnNav.addEventListener("click", function () {

        randomBtnNav.classList.add("selected")
        beerBtnNav.classList.remove("selected")
        beerSearchDiv.classList.add("hidden")
        beerRandomDiv.classList.remove("hidden")
    })

    beerBtnNav.addEventListener("click", function () {

        beerBtnNav.classList.add("selected")
        randomBtnNav.classList.remove("selected")
        beerRandomDiv.classList.add("hidden")
        beerSearchDiv.classList.remove("hidden")

    })

})

function clear() {
    theBeer = undefined;
    theTagline = undefined;
    theDescription = undefined;
    theAbv = undefined;
    thePic = undefined;
}

