function calculateAvg(price1, price2, price3) {
  const avg = (price1 + price2 + price3) / 3;
  return avg;
}

const priceA = 1000;
const priceB = 2000;
const priceC = 3000;

const avg1 = calculateAvg(priceA, priceB, priceC);
console.log(`a와 b와 c의 합의 평균은 ${avg1}`);

// const priceC = 2000;
// const priceD = 3000;
// const avg2 = calculateAvg(priceC, priceD);
// console.log(`c와 d의 평균은 ${avg2}`);
