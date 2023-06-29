import data from "./products.json";

// export default defineEventHandler(async () => {
//   return {
//     data,
//   };
// });

let productCount = 0;
export default defineEventHandler(async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productCount++);
    }, 2000);
  });
  return {
    productCount,
  }
});