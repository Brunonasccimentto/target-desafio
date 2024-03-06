// questão 2 - Verificar se um número pertence a sequencia de fibonacci ou não.

function fibonacci(n) {
    let arr = [0, 1];
    
    while (arr[arr.length - 1] < n) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
    
    if(arr[arr.length - 1]  === n){
      console.log(arr);
      return true;
    }
    
    return false;
}
  
console.log(fibonacci(55));

//questão 5 - reverter uma String sem utilizar métodos prontos de strings

function reverseString(string) {
    return string === '' ? '' : reverseString(string.substring(1)) + string.charAt(0);
  }
  