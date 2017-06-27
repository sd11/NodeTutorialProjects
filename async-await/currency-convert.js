const axios = require('axios');
// Calls without async
// const getExchangeRate = (from, to) => {
//     return axios.get(`http://api.fixer.io/latest?base=${from}`).then((response) => {
//         return response.data.rates[to];
//     });
// }
// const getCurrency = (currencyCode) => {
//     return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => {
//         return response.data.map((country)=> country.name);
//     });
// }

// Calls with async
const getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get(`http://api.fixer.io/latest?base=${from}`);
        const rate = response.data.rates[to];
        if (rate) {
            return rate;
        } else {
            throw new Error();
        }
    } catch (e) {
        throw new Error(`Unable to get exchange rate for ${from} and ${to}.`);
    }
}

const getCurrency = async (currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country)=> country.name);
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}.`);
    }

}
//NON ASYNC VERSIONS
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
   // let countries = await getCurrency(to);
    let rate = await getExchangeRate(from, to);
   // const exchangeAmt = amount * rate;
   // return `${amount}${from} is worth ${exchangeAmt}${to}. ${to} is used in ${countries.toString()}`;
};

convertCurrency('QUE', 'MMM', 100).then((res)=>{
    console.log(res);
}).catch((e) => {
    console.log(e.message);
});