import enhanceTimeout from "./enhanceTimeout"

export const debounce = (
    fn: Function,
    ms = 0,
  ) => {
  
    const {
      setTimer: setMainTimer,
      clearTimer: clearMainTimer,
    } = enhanceTimeout();

  
    const callFn = (args: any[]) => {
      fn(...args);
      clearMainTimer();
    };
  
    const setFnTimerCall = (args: any[]) => {
      clearMainTimer();
      setMainTimer(() => callFn(args), ms);
    };
  
    return (...args: any[]) => {
      setFnTimerCall(args);
    };
  };
  
  export default debounce;