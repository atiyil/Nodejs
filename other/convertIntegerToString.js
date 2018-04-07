var convert = (num => {
  str = ''; 
  while(num > 0) {
    str += String.fromCharCode((num % 10) + 48); 
    num = Math.trunc(num / 10);
  } 
  return str.split('').reverse().join('');
  })
