export function throttle(callback: Function, delay: number) {
  let lastCall = 0;

  return (...args: any[]) => {
    const now = new Date().getTime();

    if (now - lastCall >= delay) {
      lastCall = now;
      callback(...args);
    }
  };
}
