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


const createNumbersOfRoles = (array2) => {
  let arrayOfRoles = Object.values(array2);
  const rolesOfChampions = arrayOfRoles.reduce(function(resultTanks, role) {
    if (role.tag === 'tank') {
      resultTanks.push(role);
      let cuantosTanques = resultTanks.length;
      console.log(cuantosTanques);
    }
    return role;
  });
  return rolesOfChampions;
};

console.log(createNumbersOfRoles(window.LOL.data));

window.lol = {
  getFiveChampeons: createTemplateChampeonsFive,
  getRoles: createNumbersOfRoles,
};