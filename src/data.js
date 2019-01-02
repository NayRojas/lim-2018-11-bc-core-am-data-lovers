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

let mapChampionsPerRole = [];
const createNumbersOfRoles = (array2, role) => {
  /* if (array2 === '') {
    console.log('esta en blanco el arreglo');
  }
  if (role === '') {
    console.log('Rol esta en blanco');
  } */
  let arrayOfRoles = Object.values(array2);
  arrayOfRoles.filter(function(val) {
    val.tags.map((currentRole) => {
      if (currentRole === role) {
        mapChampionsPerRole.push(val);
      }
    });
  }, []);
  return mapChampionsPerRole;
};

const order = (array) => {
  array.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } 
    if (a.name < b.name) {
      return -1;
    } 
    return 0;
  });
};

window.lol = {
  getFiveChampeons: createTemplateChampeonsFive,
  getRoles: createNumbersOfRoles,
  getOrderChampions: order
};