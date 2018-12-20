const entriesOfChampeons = Object.entries(LOL.data);
const newArray = Object.assign(entriesOfChampeons.map(currentChampeon => currentChampeon[1]).filter(currentChampeon => currentChampeon.top === 'top5'));
console.log(newArray);


window.LOL = newArray;

// const newArray = Object.assign(entriesOfChampeons.map(currentChampeon => currentChampeon[1]).push(entriesOfChampeons.top = '').filter(currentChampeon => currentChampeon.top ==='top5'))
// console.log(newArray);
// const arraySetOfChampeons = Object.keys(LOL.data); // La data tiene indices :(

/* entriesOfChampeons.map(function(champeons) {
  champeons[1].top = '';
  return champeons;
}); */

