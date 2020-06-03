//1-
//a-
/*let fahKel = (77-32) * (5/9) + (273.15)
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
console.log(respostaCelFah2+respostaCelKel)*/

//d-
let valorUsuario = prompt ('Insira o valor em Celsius a ser convertido:')
let celFah2 = Number(valorUsuario) * (9/5) + (32)
let respostaCelFah2 = Number(valorUsuario) + (' convertidos em Fahrenheit são ') + (celFah2 + ' °F!')
let respostaCelKel3 = ('\nE ') + Number(valorUsuario) + (' convertidos em Kelvin são ')
let respostaCelKel1 = (273.15) + Number(valorUsuario)
console.log(respostaCelFah2 + respostaCelKel3 + respostaCelKel1)
