export default function rollDice(n, fc) {
  let dcSum = 0;
  let dcTmp;
  for (let i = 0; i < n; i++) {
    dcTmp = Math.floor(Math.random() * fc + 1);
    dcSum += dcTmp;
  }
  return dcSum;
}
