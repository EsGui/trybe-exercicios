/* 

1 - Dada uma matriz, transforme em um array.

*/

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];

  const juntaTudo = (acc, values) => {
      return acc + values
  } 
  
  function flatten() {
    let array = []
    let pegaArrays = arrays.reduce(juntaTudo);
    array.push(pegaArrays);
    return array
  }

  console.log(flatten())