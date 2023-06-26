export const useUtils = () => {
  const sayHello = () => console.log("Hello from useUtils");

  const onClickOutside = () => {
    
  }
  return {
    sayHello,
  };
};