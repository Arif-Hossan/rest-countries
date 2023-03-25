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

const getCountryHTML = ({name ,flags,area})=>{
    // option 2
    return `
    <div class="country">
        <h5>${name.common}</h5>
        <p>Area : ${area}</p>
        <img src ="${flags.png}">
    </div>`;
     }

// const getCountryHTML = country =>{
//     // option 1
//     const {name ,flags} = country;
//     return `
//     <div class="country">
//        <h5>${name.common}</h5>
//        <img src ="${flags.png}">
//      </div>`;
//  }

//original
// const getCountryHTML = country =>{
//    return `
//    <div class="country">
//       <h5>${country.name.common}</h5>
//       <img src ="${country.flags.png}">
//     </div>`;
// }