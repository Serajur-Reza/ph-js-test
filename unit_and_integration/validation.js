export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error("Input cannot be empty.");
  }
}

export function validateNumber(number) {
  if (isNaN(number)) {
    throw new Error("Invalid number input.");
  }
}

export function validateEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;

  if (!emailRegex.test(email)) {
    throw new Error("Invalid email addres");
  }
}

export function validateArrayNotEmpty(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("Array cannot be empty");
  }
}
