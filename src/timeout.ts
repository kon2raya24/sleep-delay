
// Type exports for consumers
// Add specific types as needed
/**
 * timeout<T>
 * @param promise
 * @param ms
 * @param message = "Operation timed out"
 */
export function timeout<T>(promise: Promise<T>, ms: number, message = "Operation timed out"): Promise<T> {
  if (promise === null || promise === undefined) throw new Error("Invalid input");
  let timer: ReturnType<typeof setTimeout>;
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => { timer = setTimeout(() => reject(new Error(message)), ms); })
  ]).finally(() => clearTimeout(timer));
}
