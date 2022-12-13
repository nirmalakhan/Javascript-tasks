



let countryObject = {
    India: {
        "maharshtra": ["nagpur", "chandrapur", "bhandara", "wardha"],
        "madhyapradesh": ["bhopal", "indore", "betul", "chindwada"],
        "gujrat": ["vadodara", "ahemadabad", "surat", "gandhinagar"]
    },

    America: {
        "california": ["oakland", "fresno", "irvine", "fremont"],
        "texas": ["houston", "austin", "dallas", "arlington"],
        "florida": ["miami", "tampa", "orlando", "destin"]
    },

    Nepal: {
        "bagmatipradesh": ["lalitpur", "hetauda", "kathmandu", "bhaktapur"],
        "lumbinipradesh": ["rupandehi", "banke", "dang", "ghorahi"],
        "karnalipradesh": ["dullu", "simikot", "birendranagar", "dunai"]
    }
}

let countries = document.querySelector('#selcountry');
let state = document.querySelector("#selstate");


let CountryObject = Object.keys(countryObject);
function getValue(country, value) {
    for (let i = 0; i < country.length; i++) {
        let opt = document.createElement("option");
        opt.textContent = country[i];
        value.appendChild(opt);

    };

};
getValue(CountryObject, countries);

let stateSel = "";
function countryValue() {
    stateSel = countries.value;
    console.log(stateSel);
    let stateAll = Object.keys(countryObject[stateSel]);
    console.log(stateAll);
    let state = document.querySelector("#selstate");
    getValue(stateAll, state)
};





let city = "";
function stateValue() {
    city = state.value;
    console.log(city);
    let cityAll = Object.values(countryObject[stateSel][city]);
    console.log(cityAll);
    let optcity = document.querySelector('#selcity');
    getValue(cityAll, optcity);
};































