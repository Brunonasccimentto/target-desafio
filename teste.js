// questão - 1
// Resposta: 91

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

//questão - 3
// Respostas:
// a) 9
// b) 128
// c) 49
// d) 100
// e) 13
// f) 20

// 4) Primeiro ligaria duas lâmpadas e iria a primeira sala, caso estivesse apagada, já saberia a qual sala um dos interruptores pertence, e bastaria apagados os dois, ligar o terceiro e ir para uma outra sala. Caso estivesse acesa a luz da sala, desligaria um interruptor qualquer e ligaria o que faltou e iria para a próxima sala, caso apagada saberia que o interruptor que acabei de desligar corresponde àquela sala, o que mantive ligado corresponde primeira sala que visitei, e o que acabei de ligar corresponde a ultima sala. Caso acesa, saberia que a que mantive ligada da minha primeira ida corresponde a essa sala e a que apaguei seria a primeira sala, e a sala a qual não visitei estaria com a luz ligada, pois corresponde ao ultimo interruptor que liguei.


//questão 5 - reverter uma String sem utilizar métodos prontos de strings

function reverseString(string) {
    return string === '' ? '' : reverseString(string.substring(1)) + string.charAt(0);
}

console.log(reverseString("Fibonacci"));

  