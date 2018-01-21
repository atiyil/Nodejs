// takes an array of strings and returns an array having 1 or 0 for each string 
// if the string includes all characters in the alphabet

function isPanagram(strings) {
  ret = []
  a = "abcdefghijklmnopqrstuvwxyz".split('')
  strings.forEach(function(s) {r = 1;a.forEach(function(e) {
  	sa=s.split('');
  	if (sa.findIndex(i => i === e) === -1) r = 0});
  	ret.push(r) })
  return ret
}
