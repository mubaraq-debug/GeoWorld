var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// target all necessary elements
var countryInput = document.getElementById('countryName');
// const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
var searchResult = document.getElementById("searchResult");
var form = document.querySelector('form');
// API Endpoint URL
var API_URL = "https://restcountries.com/v3.1/name/";
// A Function to fetch country data
function fetchCountryData(countryName) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, country, countryData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    // the result container be loading while we fetch the country details
                    searchResult.innerHTML = "Loading..."; //i can make this fancy later lol
                    return [4 /*yield*/, fetch("".concat(API_URL).concat(countryName))];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("Country not found");
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    country = data[0];
                    countryData = "\n          <h3>".concat(country.name.common, "</h3>\n          <img src=\"").concat(country.flags.svg, "\" alt=\"flag of ").concat(country.name.common, "\" class=\"w-[100px] h-[80px] rounded-md\" />\n          <p>").concat(country.capital, "</p>\n          <p>").concat(country.population.toLocaleString(), "</p>\n        ");
                    searchResult.innerHTML = countryData;
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    searchResult.innerHTML = "<p class='text-red-500'>error: country not found</p>";
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
form.addEventListener("click", function (e) {
    e.preventDefault();
    var countryName = countryInput.value.trim();
    if (countryName === "") {
        searchResult.innerHTML = "country not found";
        return;
    }
    fetchCountryData(countryName);
});
// export {}
// Define types for the country data
// interface Country {
//     name: {
//         common: string;
//     };
//     flags: {
//         svg: string;
//     };
//     capital: string[];
//     population: number;
// }
// // Target all necessary elements with type annotations
// const countryInput = document.getElementById("countryName") as HTMLInputElement;
// const searchResult = document.getElementById("searchResult") as HTMLDivElement;
// const form = document.querySelector("form") as HTMLFormElement;
// // API Endpoint URL
// const API_URL = "https://restcountries.com/v3.1/name/";
// // Function to fetch country data
// async function fetchCountryData(countryName: string): Promise<void> {
//     try {
//         // Show loading state while fetching country details
//         searchResult.innerHTML = "Loading...";
//         const response = await fetch(`${API_URL}${countryName}`);
//         if (!response.ok) {
//             throw new Error("Country not found");
//         }
//         const data: Country[] = await response.json();
//         const country = data[0];
//         // Extract and display the required data
//         const countryData = `
//           <h3 class="text-xl font-bold">${country.name.common}</h3>
//           <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" class="w-[100px] h-[80px] rounded-md" />
//           <p class="mt-2">Capital: ${country.capital.join(", ")}</p>
//           <p>Population: ${country.population.toLocaleString()}</p>
//         `;
//         searchResult.innerHTML = countryData;
//     } catch (error) {
//         searchResult.innerHTML = `<p class="text-red-500">Error: ${(error as Error).message}</p>`;
//     }
// }
// // Add event listener to the form
// form.addEventListener("submit", (event: SubmitEvent) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     const countryName = countryInput.value.trim();
//     if (countryName === "") {
//         searchResult.innerHTML = `<p class="text-red-500">Please enter a country name</p>`;
//         return;
//     }
//     fetchCountryData(countryName);
// });
