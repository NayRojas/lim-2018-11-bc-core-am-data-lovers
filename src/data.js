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
    return mapChampionsPerRole;
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

const getMaxAndMinChampions = (array, mathFunction) => {
  let maxHpchampion = [];
  let stats = Object.values(array);
  let mapStatsPerChampion = stats.map(stat => { // Esta función me retorna un array de solo los stats de los campeones
    return stat.stats;
  });
  const hpPerChampion = mapStatsPerChampion.reduce(function(result, champions) { // Esta función me arroja un array de los valores que tiene el key, hp(vida) de cada campeón
    result.push(champions.hp);
    return result;
  }, []);
  let mathOperation = calminAndMaxHpChampion(hpPerChampion, mathFunction); // Esta función me arroja el número maximo de vida

  mapStatsPerChampion.map(accum => accum).filter(function(accum, index) {
    if (mathOperation === accum.hp) { // Esta condición compara si el maximo de vida es igual a la vida de cada stats de los campeones
      maxHpchampion.push(array[index]); // Si se cumple agrega a la variable el indice de ese campeon con sus
    }
    return maxHpchampion;
  });
  return maxHpchampion;
};

const calminAndMaxHpChampion = (hpPerChampion, mathFunction) => {
  let minAndMaxHpChampion;
  if (mathFunction === 'Max') {
    minAndMaxHpChampion = Math.max.apply(Math, hpPerChampion);
  } else {
    if (mathFunction === 'Min')
      minAndMaxHpChampion = Math.min.apply(Math, hpPerChampion);
  }
  return minAndMaxHpChampion;
};

window.lol = {
  getFiveChampeons: selectFiveChampions,
  filterData: createNumbersOfRoles,
  sortData: sorting,
  computeStats: getMaxAndMinChampions,
  calculateStats: calminAndMaxHpChampion
};


