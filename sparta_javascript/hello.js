function solution(numbers) {
  let answer = [];
  const arr = [...numbers];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i] + arr[i + 1] + arr[i + 2]) {
      case "one":
        answer.push(1);
        break;
      case "two":
        answer.push(2);
        break;
      case "six":
        answer.push(6);
        break;
    }
    switch (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3]) {
      case "zero":
        answer.push(0);
        break;
      case "four":
        answer.push(4);
        break;
      case "five":
        answer.push(5);
        break;
      case "nine":
        answer.push(9);
        break;
    }
    switch (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] + arr[i + 4]) {
      case "three":
        answer.push(3);
        break;
      case "eight":
        answer.push(8);
        break;
      case "seven":
        answer.push(7);
        break;
    }
  }

  let result = answer.toString().replace(/,/g, "");
  return console.log(+result);
}

solution("onetwothreefourfivesixseveneightnine");
