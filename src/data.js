const arraySetOfChampeons = Object.keys(LOL.data); // La data tiene indices :(
const entriesOfChampeons = Object.entries(LOL.data);

/entriesOfChampeons.map(function(champeons) {
  champeons[1].top = '';
  return champeons;
});*/

const newArray = Object.assign(entriesOfChampeons.map(currentChampeon => currentChampeon[1]).filter(currentChampeon => currentChampeon.top === 'top5'));
console.log(newArray);

// const newArray = Object.assign(entriesOfChampeons.map(currentChampeon => currentChampeon[1]).push(entriesOfChampeons.top = '').filter(currentChampeon => currentChampeon.top ==='top5'))
// console.log(newArray);


// añadir a la data una nueva propiedad a todos los campeones (top) object.push
// random object/array 
// ya tenemos los campeones con el top 5
// esos campeones van a tener 2 propiuedad top5

