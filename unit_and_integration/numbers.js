import { transformToNumber } from "./transformToNumber";
import { validateNumber, validateStringNotEmpty } from "./validation";

export function cleanNumbers(inputNumbers) {
  const numbers = [];

  for (const numberInput of inputNumbers) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }

  return numbers;
}
