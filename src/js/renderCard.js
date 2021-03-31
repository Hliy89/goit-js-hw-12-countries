import cardCreate from '../templates/cards.hbs';
import cardList from '../templates/card-list.hbs';
import refs from "./refs.js";
import '@pnotify/core/dist/BrightTheme.css';
const { error } = require('@pnotify/core');

function onRenderCountry(result) {
    if (result.length === 1) {
        refs.countryCard.innerHTML = cardCreate(result);
        // refs.countryList.innerHTML = "";
    } else if (result.length <= 10) {
        refs.countryList.innerHTML = cardList(result);
        // refs.countryCard.innerHTML = "";
    } else {
        error({
            text: "Ввели слишком много стран!",
            delay: 600,
            hide: true,
        })
    }
}

export default onRenderCountry;