export default defineNuxtRouteMiddleware((to, from) => {
  const isLoggedin = false;
  // to is the destination
  console.log(to);
  if (isLoggedin) {
    // redirect to the page we want to go
  }
  // redirect to a login page


  // console.log(to);
  // console.log(from);
})