const createTemplateChampeonsFive = (array) => {
  let newChampionArray = Object.values(array);
  const champions = newChampionArray.reduce(function(result, champion) {
    if (champion.top === 'top5') {
      result.push(champion);
    }
    return result;
  }, []);
  return champions;
};

// const createCardsRoles = (array2) => {
// const newArray = Object.assign(entriesOfChampeons.map(currentChampeon => currentChampeon[1]).filter(currentChampeon => currentChampeon.top === 'top5'));


// const createNumbersOfRoles = (array2) => {
let arrayOfRoles = Object.entries(window.LOL.data).map(currentRole => currentRole[1]).filter(currentRole => currentRole.name === 'Soraka');
arrayOfRoles.reduce(function(resultTanks, role) {
  resultTanks.push(role);
});
console.log('este es ' + arrayOfRoles);
   //  let arrayOfRoles = Object.values(array2);
    // console.log('este es '+ arrayOfRoles);
/*  const rolesOfChampions = arrayOfRoles.reduce(function(resultTanks, role) {
    if (role.tags === 'Tank') {
      resultTanks.push(role);
    }
    return resultTanks;
  });
  return rolesOfChampions;
  console.log(rolesOfChampions);
};

console.log(createNumbersOfRoles(window.LOL.data));*/

window.lol = {
  getFiveChampeons: createTemplateChampeonsFive,
  // getRoles: createNumbersOfRoles,
};