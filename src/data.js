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


const createCardsRoles = (array2) => {
  let newRoleArray = Object.values(array2);
 /* const rolesOfChampeons = newRoleArray.reduce(function(result, role) {
    if (LOL.tag === 'tank') {
      let result = '';
      result += 1;
    }
  });
  return rolesOfChampeons;*/
};

window.lol = {
  getFiveChampeons: createTemplateChampeonsFive,
  getRoles: createCardsRoles,
};