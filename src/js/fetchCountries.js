import _ from 'lodash';
import onRenderCountry from "./renderCard.js";
import refs from "./refs.js";


const basicURL = "https://restcountries.eu/rest/v2/name";

refs.myInput.addEventListener("input", _.debounce(fetchCountries, 500));

function fetchCountries() {
    const fetchCountry = fetch(`${basicURL}/${this.value}`);
    refs.countryList.innerHTML = "";
    refs.countryCard.innerHTML = "";
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
            refs.countryCard.innerHTML = '';
        })
}

    
