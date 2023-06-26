export default defineNuxtRouteMiddleware((to, from) => {
  console.log("hello from middleware auth");

}
)








// export default defineNuxtRouteMiddleware((to, from) => {
//   const isLoggedin = true;
//   // to is the destination
//   console.log(to);
//   if (isLoggedin) {
//     // redirect to the page we want to go
//     return navigateTo(to.fullPath);
//   }
//   // redirect to a login page
//   return navigateTo("/login");

//   // console.log(to);
//   // console.log(from);
// })