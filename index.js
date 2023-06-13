function numeroPrimo(num) {
  num = 0
  for (var i = 2; i < num; i++) {
    if(num % i === 0) {
       return false;
    }
  }
  return num !== 1;  
}
console.log( numeroPrimo(5) );