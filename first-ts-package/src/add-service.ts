export namespace AddService {
  export function add(...numbers: number[]): number {
    let sum = 0;
    numbers.forEach(x => (sum += x))
    return sum;
  }
}