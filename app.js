const loadCountries = () =>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then( res => res.json())
    .then(data => displayCountries(data))
}

loadCountries()

const displayCountries = (countries) => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country =>getCountryHTML(country))
    // console.log(countriesHTML);
    const countriesDiv = document.getElementById('countries');
    countriesDiv.innerHTML = countriesHTML.join(" ");
}

const getCountryHTML = country =>{
   return `
   <div class="country">
      <h5>${country.name.common}</h5>
      <img src ="${country.flags.png}">
    </div>`;
}