var convert = (str => {
  num = 0; 
  arr = str.split(''); 
  arr.forEach(e => num = num * 10 + (e.charCodeAt(0) - 48)); 
  return num
  })
