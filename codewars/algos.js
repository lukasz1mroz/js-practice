// isPanagram
function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const input = string.split("");

  input.forEach((elem) => {
    if (elem.match(/[a-z]/i) && alphabet.includes(elem)) {
      const index = alphabet.indexOf(elem);
      alphabet.splice(index, 1);
    }
  });

  const result = alphabet == "" ? true : false;
  console.log(result);
}

// highAndLow
function highAndLow(numbers) {
  const intArrSorted = numbers
    .split(" ")
    .map((num) => parseInt(num))
    .sort((a, b) => a - b);

  const result = `${intArrSorted[intArrSorted.length - 1]} ${intArrSorted[0]}`;
  console.log(result);
}

function sumTwoSmallestNumbers(numbers) {
  numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, curr) => acc + curr);
}

var divisors = (int) => {
  if (int > 1) {
    const result = [];
    for (var i = 2; i <= int - 1; i++) {
      if (int % i == 0) {
        result.push(i);
      }
    }
    const outcome = result.length == 0 ? `${int} is prime` : result;
    console.log(result);
    return outcome;
  }
};

var xoxo = (input) => {
  const list = {};
  var test = input
    .toLowerCase()
    .split("")
    .map((a) => {
      if (a in list) list[a]++;
      else list[a] = 1;
    });
  console.log(list);
  if (list["o"] == list["x"]) {
    console.log("true");
  } else {
    console.log("false");
  }
};

function population(p0, percent, aug, p) {
  var result = p0;
  var i = 0;
  while (result < p) {
    i++;
    result = result + result * (percent / 100) + aug;
  }
  console.log(i);
}

isPangram("abcdefghijklmnopq.rstuvwxyz");
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");
sumTwoSmallestNumbers([19, 5, 42, 2, 77]);
divisors(4);
xoxo("ooxx");
population(1500, 5, 100, 5000);