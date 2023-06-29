// api/coutires/find
// method post
// post { country : string} 'france'

import { countryList } from "@doubco/countries";

console.log(countryList);

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const { country } = body;
  return {
    countries: countryList.filter((obj) => obj.label.includes(country))
  };
});