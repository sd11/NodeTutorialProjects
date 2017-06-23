const axios = require('axios');
const getExchangeRate = (from, to) => {
    return axios.get(`http://api.fixer.io/latest?base=${from}`).then((response) => {
        return response.data.rates[to];
    });
}
const getCurrency = (currencyCode) => {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => {
        return response.data.map((country)=> country.name);
    });
}
// getExchangeRate('USD', 'EUR').then((rate) => {
//     console.log(rate);
// });
// getCurrency('USD').then((countries) => {
//     console.log(countries);
// });

// const convertCurrency = (from, to, amount) => {
//     let countries;
//     return getCurrency(to).then((tempCountries) => {
//         countries = tempCountries;
//         return getExchangeRate(from, to);
//     }).then((rate) => {
//         const exchangeAmt = amount * rate;
//         return `${amount}${from} is worth ${exchangeAmt}${to}. ${to} is used in ${countries.toString()}`;
//     });
// };



const convertCurrency = async (from, to, amount) => {
    let countries = await getCurrency(to);
    let rate = await getExchangeRate(from, to);
    const exchangeAmt = amount * rate;
    return `${amount}${from} is worth ${exchangeAmt}${to}. ${to} is used in ${countries.toString()}`;
};

convertCurrency('USD','CAD', 100).then((res)=>{
    console.log(res);
});