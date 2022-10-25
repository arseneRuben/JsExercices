'use strict'
const temperature = 21.3
const fruits = ['pomme', 'poire', 'orange']
console.log('Salut')
console.log(temperature)
console.log(fruits)
console.info('La temperature est %f', temperature)
console.info('La collection de fruits est %o', fruits)
console.dirxml("<h1> Pas d'interpreteur HTML </h1>")
console.group('Ceci est un groupe a part')
console.log('Contenu du groupe')
console.groupEnd()

console.group('Ceci est un second groupe a part')
console.log('Contenu du second groupe')
console.groupEnd()
