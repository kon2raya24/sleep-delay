/**
 * delay<T>
 * @param fn
 */
export function delay<T>(fn: () => T, ms: number): Promise<T> {
  if (fn === null || fn === undefined) throw new Error("Invalid input");
  return new Promise(resolve => setTimeout(() => resolve(fn()), ms));
}
