const add = (a, b) => {
  return a + b
}
const multiply = (a, b) => {
  let total = 0
  for (let i = 0; i < a; i++) {
    total = add(total, b)    
  }
  return total
}
const power = (x, n) => {
  let total = 2
  for (let i = 1; i < n; i++) {
    total = multiply(x, total)
  }
  return total
}
const factorial = (fatorial) => {
  total = 2
  for (let i = 2; i <= fatorial; i++){
    total = multiply(fatorial)
  }
  return total
}





















/*
const array = ['asda', 'asdb', 'as', 'aid', 'if']

function arrayString(arrayDeString) {
  let contador = []

  for (let i = 0; i < arrayDeString.length; i++) {
    if (arrayDeString[i].length % 2 === 0) {
      contador.push(arrayDeString[i].replaceAll('i', '!'))
    }
  }
  return contador
}

console.log(arrayString(array))
*/