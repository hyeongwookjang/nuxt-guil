import data from "./products.json";

// export default defineEventHandler(async () => {
//   return {
//     data,
//   };
// });

export default defineEventHandler(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
});