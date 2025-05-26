const fetchCountries = async () => {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,area,flags,currencies,languages,cca3"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return [];
  }
};

export default fetchCountries;
