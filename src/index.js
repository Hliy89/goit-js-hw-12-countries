import './styles.css';
// import fetchCountries from './js/fetchCountries.js';
import cardCreate from './templates/cards.hbs';
import cardList from './templates/card-list.hbs';
import _ from 'lodash';
import '@pnotify/core/dist/BrightTheme.css';
const { error } = require('@pnotify/core');

const countryList = document.getElementById("country-list");
const countryCard = document.getElementById("country-card");
const myInput = document.getElementById("my-input");
const basicURL = "https://restcountries.eu/rest/v2/name";

myInput.addEventListener("input", _.debounce(fetchCountries, 500));

function fetchCountries() {
    const fetchCountry = fetch(`${basicURL}/${this.value}`);
    countryList.innerHTML = "";
    countryCard.innerHTML = "";
    fetchCountry
        .then((response) => {
            if(!response.ok){
                throw new Error("Error")
            }
            return response.json()
        })
        .then(result => {
            onRenderCountry(result) 
        })
        .catch(error => {
            countryCard.innerHTML = '';
        })
}

function onRenderCountry(result) {
    if (result.length === 1) {
        countryCard.innerHTML = cardCreate(result);
        countryList.innerHTML = "";
    } else if (result.length <= 10) {
        countryList.innerHTML = cardList(result);
        countryCard.innerHTML = "";
    } else {
        error({
            text: "Ввели слишком много стран!",
            delay: 600,
            hide: true,
        })
    }
}
 
// const pnotify = document.querySelector(".pnotify");
//         countryCard.append(pnotify);









