const entriesOfChampeons = Object.entries(LOL.data);

const newArray = () => {
  Object.assign(entriesOfChampeons.map(currentChampeon => currentChampeon[1]).filter(currentChampeon => currentChampeon.top === 'top5'))
};

window.dataLOL = {
  newArray, 
};

/* entriesOfChampeons.map(function(champeons) {
  champeons[1].top = '';
  return champeons;
}); */

