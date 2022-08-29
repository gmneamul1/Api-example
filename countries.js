const  loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => displaycountries(data))
}

const displaycountries = countries => {
    // for(const country of countries ){
    //     console.log(country)
    // }
    const countriesContaienr = document.getElementById('countries-container');

 countries.forEach(country => {
 
    const countryDiv = document.createElement('div')
    countryDiv.classList.add('country')
   
    countryDiv.innerHTML=`
    <h3>Name ${country.name.common}</h3>
    <p>Name ${country.capital? country.capital[0]:'no cap'}</p>
    <button onclick="loadcountydetail('${country.cca2}')"> details</button>
    `;
            countriesContaienr.appendChild(countryDiv);
  
 })

}   
 const loadcountydetail = (code) => {

    const url = `https://restcountries.com/v3.1/alpha/${code}`

   
    fetch(url)
    .then(res => res.json())
    .then(data => displaycountriesdetails (data[0]))


}
const displaycountriesdetails = country =>{
    console.log(country)
   const countrydetails = document.getElementById('countrydetail') ;
   countrydetails.innerHTML = `
   <h2> Details: ${country.name.common} </h2>
   <img src="${country.flags.png}"> 



   `;
}
loadCountries()