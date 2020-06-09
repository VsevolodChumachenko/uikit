export default function getNoun(number, one, two, five, inclusive) {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return inclusive ? `${number} ${five}` : five;
  }
  n %= 10;
  if (n === 1) {
    return inclusive ? `${number} ${one}` : one;
  }
  if (n >= 2 && n <= 4) {
    return inclusive ? `${number} ${two}` : two;
  }
  return inclusive ? `${number} ${five}` : five;
}
