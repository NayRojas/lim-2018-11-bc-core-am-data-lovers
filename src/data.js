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
  if (array2 === '') {
    console.log('esta en blanco el arreglo');
  }
  if (role === '') {
    console.log('Rol esta en blanco');
  }
  let mapChampionsPerRole = [];
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

window.lol = {
  getFiveChampeons: createTemplateChampeonsFive,
  getRoles: createNumbersOfRoles,
};