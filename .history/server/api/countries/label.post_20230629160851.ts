// api/coutires/find
// method post
// post { country : string} 'france'
// http://localhost:3000/api/countries/find
import { countryList } from "@doubco/countries";

// console.log(countryList);

export default 
eventHandler(async (event) => {
  const body = await readBody(event);
  const { label } = body;
  if (!label) {
    return {
      status: 400,
      message: "No label provided in body.",
    };
  }
  return {
    countries: countryList.filter((obj) => obj.label.includes(label))
  };
});

