const selectFiveChampions = (array) => {
  let newChampionArray = Object.values(array);
  const champions = newChampionArray.reduce(function(result, champion) {
    if (champion.top === 'top5') {
      result.push(champion);
    }
    return result;
  }, []);
  return champions;
};

const createNumbersOfRoles = (data, role) => {
  let mapChampionsPerRole = [];
  /* if (array2 === '') {
    console.log('esta en blanco el arreglo');
  }
  if (role === '') {
    console.log('Rol esta en blanco');
  } */
  let arrayOfRoles = Object.values(data);
  arrayOfRoles.filter(function(val) {
    val.tags.map((currentRole) => {
      if (currentRole === role) {
        mapChampionsPerRole.push(val);
      }
    });
  }, []);
  return mapChampionsPerRole;
};

const sorting = (data, sortBy, sortOrder) => {
  if (sortOrder === '') {
    sortOrder = 1;
  } else {
    if (sortOrder === 'Desc') {
      sortOrder = -1;
    }
  }
  const order = data.sort(function(propertyA, propertyB) {
    if (sortOrder === -1) {
      return propertyB[sortBy].localeCompare(propertyA[sortBy]);
    } else {
      return propertyA[sortBy].localeCompare(propertyB[sortBy]);
    }        
  });
  return order;
};

window.lol = {
  getFiveChampeons: selectFiveChampions,
  filterData: createNumbersOfRoles,
  sortData: sorting
};