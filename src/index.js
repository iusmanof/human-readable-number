module.exports = function toReadable(number) {
  var numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  var decimals = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  if (number < 20) return numbers[number];
  var digit = number % 10;
  // Double tilde ~~ is used to convert some types to int,
  // since ~ operator converts the value to a 32-bit int before inverting its bits. Thus:
  // ~~'-1' = -1
  // ~~true = 1
  // ~~false = 0
  // ~~5.6 = 5
  if (number < 100)
    return decimals[~~(number / 10) - 2] + (digit ? " " + numbers[digit] : "");
  if (number < 1000)
    return (
      numbers[~~(number / 100)] +
      " hundred" +
      (number % 100 == 0 ? "" : " " + toReadable(number % 100))
    );
  return (
    toReadable(~~(number / 1000)) +
    " thousand" +
    (number % 1000 != 0 ? " " + toReadable(number % 1000) : "")
  );
};
