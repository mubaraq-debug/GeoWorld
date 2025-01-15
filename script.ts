
// target all necessary elements
const countryInput = document.getElementById('countryName') as HTMLInputElement;
// const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
const searchResult = document.getElementById("searchResult") as HTMLElement;
const form = document.querySelector('form') as HTMLFormElement;

// API Endpoint URL
const API_URL = "https://restcountries.com/v3.1/name/";

// A Function to fetch country data
async function fetchCountryData(countryName: string): Promise<void> {
    try {
        // the result container be loading while we fetch the country details
        searchResult.innerHTML = "Loading..." //i can make this fancy later lol

        const response = await fetch(`${API_URL}${countryName}`);
        
        if(!response.ok) {
            throw new Error ("Country not found"); 
        }

        const data = await response.json();

        const country = data[0];
        // now time to extract the data we need, yay
        const countryData = `
          <h3 class="text-xl font-semibold capitalize">${country.name.common}</h3>
          <img src="${country.flags.svg}" alt="flag of ${country.name.common}" class="w-[100px] h-[60px] rounded-md" />
          <p class="text-lg capitalize"><span class="font-medium">capital:</span> ${country.capital}</p>
          <p class="text-lg capitalize"><span class="font-medium">population:</span> ${country.population.toLocaleString()}</p>
        `

        searchResult.innerHTML = countryData;
    } catch (error) {
        searchResult.innerHTML = `<p style="color: red">country not found</p>`
    }
}

form.addEventListener("click", (e) => {
    e.preventDefault()
    const countryName = countryInput.value.trim();

    if(countryName === "") {
        searchResult.innerHTML = "country not found"
        return;
    }
    fetchCountryData(countryName)
})

