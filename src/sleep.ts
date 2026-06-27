
// Type exports for consumers
// Add specific types as needed
/**
 * sleep
 * @param ms
 */
export function sleep(ms: number): Promise<void> {
  if (ms < 0) throw new Error("Delay must be non-negative");
  return new Promise(resolve => setTimeout(resolve, ms));
}
