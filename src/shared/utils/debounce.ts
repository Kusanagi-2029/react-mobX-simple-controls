export function debounce<T extends string>(
  func: (arg: T) => void,
  delay: number | undefined,
): (arg: T) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function (arg: T): void {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(arg);
    }, delay);
  };
}
