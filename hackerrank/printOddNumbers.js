// print all the odd numbers between integers l and r
function oddNumbers(l, r) {
  odds = []
  while (l <= r) {
    if (l % 2 === 1) odds.push(l);
    l++;
  }
  return odds
}
