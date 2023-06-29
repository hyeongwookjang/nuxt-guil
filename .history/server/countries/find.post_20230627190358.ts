// api/coutires/find
// method post
// post { country : string}

import { countryList } from "@doubco/countries";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const { country } = body;
  return {
    
  };
});