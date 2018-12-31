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


const createNumbersOfRoles = (array2, role) => {
  let mapChampionsPerRole = [];
  let arrayOfRoles = Object.values(array2)
  arrayOfRoles.filter(function(val) {
    val.tags.map((currentRole) => {
      if (currentRole === role ) {
        mapChampionsPerRole.push(val);
      }
    });
  }, []);
  return mapChampionsPerRole;
};

// const createCardsRoles = (array2) => {
// const newArray = Object.assign(entriesOfChampeons.map(currentChampeon => currentChampeon[1]).filter(currentChampeon => currentChampeon.top === 'top5'));
/*arrayOfRoles.reduce(function(resultTanks, role) {
  resultTanks.push(role);
});
console.log('este es ' + arrayOfRoles);*/

/*const createNumbersOfRoles = (array2) => {
  let arrayOfRoles = Object.values(array2);
  console.log(arrayOfRoles);
  const rolesOfChampions = arrayOfRoles.reduce(function(resultTanks, role) {
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
  getRoles: createNumbersOfRoles,
};