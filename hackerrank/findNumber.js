// find number k in array arr
function findNumber(arr, k) {
  answer = 'NO'
  arr.forEach(function(element) {if (element === k) answer = 'YES'})
  return answer
}
