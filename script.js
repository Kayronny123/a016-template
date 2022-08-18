const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]




  for(let sequencia2 of filmes){
    sequencia2 = (`O nome do filme é: ${sequencia2.titulo} foi lançado em: ${sequencia2.ano} dirigido por: ${sequencia2.diretor} e tem como elenco: ${sequencia2.elenco}`)
        console.log(sequencia2)
  }

  



// escreva seu código abaixo 👇🏻
// exercicio 1
// const jogos = [[3, 4, 12, 23, 34, 45],
// [4, 5, 8, 11, 29, 31],
// [2, 4, 6, 8, 32, 34],
// [5, 8, 13, 25, 36, 62],
// ]

// if (jogos.length === 4) {
//   // escrevendo codigo
//   for (let i = 0; i < jogos.length; i++) {
//     // percorrendo o array principal
//     let sorteio = `Sorteio ${i + 1}:`
//     for (let j = 0; j < jogos[i].length; j++) {
//       // percorre o array secundario
//       sorteio += `${jogos[i][j]}`
//     }
//     console.log(sorteio)
//   }
// } else {
//   console.log(' é necessario alterar o numero de itens o array')
// }
// exercicio2
// const jogos = [[3, 4, 12, 23, 34, 45],
// [4, 5, 8, 11, 29, 31],
// [2, 4, 6, 8, 32, 34],
// [5, 8, 13, 25, 36, 62],
// ]

// if (jogos.length === 4) {
//   // escrevendo codigo
//   for (let i in jogos) {
//     // percorrendo o array principal
//     let sorteio = `Sorteio ${ Number ( i )  +  1} : `
//     for (let j = 0; j < jogos[i].length; j++) {
//       // percorre o array secundario
//       sorteio += ` ${jogos [i][j]}`
//     }
//     console.log( sorteio ) 
//   }
// } else {
//   console.log(' é necessario alterar o numero de itens o array')
// }

// exercicio 3
// const jogos = [[3, 4, 12, 23, 34, 45],
// [4, 5, 8, 11, 29, 31],
// [2, 4, 6, 8, 32, 34],
// [5, 8, 13, 25, 36, 62],
// ]

// if (jogos.length === 4) {
//   // escrevendo codigo
//   for (let i in jogos) {
//     // percorrendo o array principal
//     let sorteio = `Sorteio ${ Number ( i ) + 1}:`
//     for (let j of jogos [ i ]) {
//       // percorre o array secundario
//       sorteio += ` ${[j]}`
//     }
//     console.log( sorteio )
//   }
// } else {
//   console.log(' é necessario alterar o numero de itens o array')
// }