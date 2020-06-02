//1-
//a-
let fahKel = (77-32) * (5/9) + (273.15)
let respostaFahKel = ('77°F convertidos em Kelvin = ') + (fahKel) + (' K')
console.log(respostaFahKel)

//b-
let celFah = (80) * (9/5) + (32)
let respostaCelFah = ('80°C convertidos em Fahrenheit = ') + (celFah + ' C°')
console.log(respostaCelFah)

//c-
let celFah2 = (30) * (9/5) + (32)
let respostaCelFah2 = ('30°C convertidos em Fahrenheit = ') + (celFah2 + ' C°')
let respostaCelKel = (' e ') + ('convertidos em Kelvin são ') + (30 + 273.15) + (' K')
console.log(respostaCelFah2+respostaCelKel)

//d-
const valorUsuario = prompt ("Insira o valor em Celsius a ser convertido:")
const celFah3 = (valorUsuario) * (9/5) + (32)
const respostaCelFah3 = (valorUsuario) + (' convertidos em Fahrenheit = ') + (celFah3 + ' °F')
const respostaCelKel2 = (' e ') + ('convertidos em Kelvin são ') + (valorUsuario) + (273.15) + (' K')
let respostaFinal = respostaCelFah3+ respostaCelKel2
console.log(respostaFinal)