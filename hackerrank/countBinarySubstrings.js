// https://leetcode.com/articles/count-binary-substrings/
// Find the number of substrings of string s, such that 0's and 1's are grouped consecutively 
// and number of 0's in the substring is equal to number of 1's

const counting = (s => {
  sum = 0
  left = 0
  right = 1
  s.split('').forEach((e,i) => 
    i > 0 
    ? (s[i-1] !== s[i])
      ? (sum += Math.min(left,right), 
        left = right, 
        right = 1)
      : (right += 1) 
    : 0
    )
  return sum + Math.min(left,right)
  })
