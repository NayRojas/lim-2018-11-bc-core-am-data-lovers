/* Estas declaraciones manipulan el estado inicial de las pantallas ante el DOM*/
document.getElementById('primera-pantalla').style.display = 'block';
document.getElementById('segunda-pantalla').style.display = 'none';
document.getElementById('tercera-pantalla').style.display = 'none';
document.getElementById('cuarta-pantalla').style.display = 'none';

/* Variables para la manipulación de botones y elementos*/
const containerList = document.getElementById('descripion-de-los-top-5'); // CONTENEDOR 1 : Elemento padre de los primeros 5
const containerRoles = document.getElementById('todos-los-roles'); // CONTENEDOR 2 : Elemento padre de los roles por cards
const containerChampionsByRole = document.getElementById('todos-los-campeones-por-rol'); // CONTENEDOR 3 : Elemento padre de los campeones por rol
const containerChampionsWithMaxLife = document.getElementById('campeones-con-maxima-y-minima-vida'); // CONTENEDOR 4 : Elemento padre de los campeones con maximo de vida por rol
const buttonToRoleOfChampeons = document.getElementById('todos-los-campeones'); // BOTON 1 : Go to Roles
const buttonToRoles = document.getElementById('todos-los-cardroles'); // BOTON 2: Roles in the game
const buttonToAscendentOrden = document.getElementById('ordenar-ascendente'); // BOTON 3: Order by A-Z
const buttonToDescendentOrden = document.getElementById('ordenar-descendente'); // BOTON 4: Order by Z-A
const buttonToMaxAndMinLife = document.getElementById('boton-para-mayor-y-menor-vida'); // BOTON 5: Maximun Champeons with Life (Hp)
const goToHome = document.getElementById('home'); // BOTON : Icono logotipo de LOL en la esquina superior izquierda, reinicia la página
const goToHome2 = document.getElementById('home2'); // MENU : Home
const goToRoles = document.getElementById('ir-a-roles'); //  MENU : Roles
const goToTutorial = document.getElementById('ir-a-tutorial'); //  MENU : Tutorial

/* Esta constante almacena los datos de las imagenes de los roles a mostrar en la segunda función*/
const roles = [
  {img: 'img/asesino.jpeg', name: 'assassin' }, // Asesino
  {img: 'img/tank.jpeg', name: 'tank'}, // Tanque
  {img: 'img/mago.jpeg', name: 'jungler'}, // 
  {img: 'img/soporte.jpeg', name: 'support'}, // Soporte
  {img: 'img/tirador.jpeg', name: 'marksman'}, // tirador
  {img: 'img/fighter.jpeg', name: 'fighter'}, // Tanque
];

/* FUNCIONES */
/* 1. Esta función muestra los cinco campeones en cards*/
const champions = lol.getFiveChampeons(window.LOL.data);
champions.forEach((top5champions, index) => {
  // console.log(champions[index].info)
  // console.log(champions[index].info.defense)
  const card = `
      <div id="primer-campeon" class ='campeones elemento primer-campeon'>
      <img class='img-principal' src= '${ champions[index].splash }' alt='${ champions[index].name }'/>
      <h4 class='nombre-del-campeon'>${ champions[index].name }</h4>
      <p class='titulo-del-campeon'>${ champions[index].title }</p>
      <p class='blurb-del-campeon'>${ champions[index].blurb } </p>
      <div class='niveles-del-campeon'>
      <label class='icon-gitlab' for='attack' >Ataque:<span class='nivel-en-numero'>${ champions[index].info.attack }</span></label>
      <label class='icon-first-order' for='defense'>Defensa:<span class='nivel-en-numero'>${ champions[index].info.defense }</span></label>
      <label class='icon-magic' for='magic'>Magia:<span class='nivel-en-numero'>${ champions[index].info.magic }</span></label>
      <label class='icon-flattr'for='dificulty'>Dificultad:<span class='nivel-en-numero'>${ champions[index].info.difficulty }</span></label>
      </div>
      </div>`;
  window.templateListOfCards += card;
});
containerList.innerHTML = window.templateListOfCards;
/* 2. Este función muestra los seis cardroles del juego*/
const showRoles = () => {
  roles.forEach((allRoles, index2) => {
    /* Aqui se crea la plantilla literal*/
    const roleCard = `
      <div class='card-role elemento elemento-to-roles'>
        <img class='img-principal img-ppl-role' id='${ roles[index2].name }' src= '${ roles[index2].img }' alt='${ roles[index2].name }'/>
        <p class= 'cantidad-de-campeones'></p>
      </div>`;
    window.templateListOfRoles += roleCard;
  });
  containerRoles.innerHTML = window.templateListOfRoles;
  selectingChampionsByRoles();
};
/* 3. Este función muestra pequeños cards de los campeones al hacer click en los diferentes roles */
const showingChampionsByRole = (array) => {
  array.forEach((allRoles, index3) => {
  /* Aqui se crea la plantilla literal*/
    const championInRole = `
  <div id='card-avatar' class='tarjeta-del-campeon elemento-avatar'>
      <div class= 'avatar-div'>
        <img class='avatar'src='${ array[index3].img }'/>
      </div>
      <div class= 'text-div'>
        <p class='nombre-del-campeon nombre-en-rol'>${ array[index3].name }</p>
        <p class='titulo-del-campeon titulo-en-rol'>${ array[index3].title }</p>
      </div>
  </div>`;
    
    window.templateListOfChampionsByRole += championInRole;
  });
  containerChampionsByRole.innerHTML = window.templateListOfChampionsByRole;

  /* Evento para ordenar data de la A a la Z y viceversa */
  buttonToAscendentOrden.addEventListener('click', () => {
    let championsAToZ = lol.sortData(array, 'name', '');
    window.templateListOfChampionsByRole = '';
    containerChampionsByRole.innerHTML = '';
    showingChampionsByRole(championsAToZ);
  });
  buttonToDescendentOrden.addEventListener('click', () => {
    let championsZToA = lol.sortData(array, 'name', 'Desc');
    window.templateListOfChampionsByRole = '';
    containerChampionsByRole.innerHTML = '';
    showingChampionsByRole(championsZToA);
  });
};
/* 4. Esta función crea el template para los campeones con mayor vida*/
const showingChampionsByMaxLife = (array) => {
  array.forEach((allChampionsMaxLife, index4) => {
  /* Aqui se crea la plantilla literal*/
    const championWithMaxLife = `
  <div id='card-avatar' class='tarjeta-del-campeon elemento-avatar max-altura'>
      <div class= 'avatar-div'>
        <img class='avatar'src='${ array[index4].img }'/>
      </div>
      <div class= 'text-div'>
        <p class='nombre-del-campeon nombre-en-rol'>${ array[index4].name }</p>
        <p class='titulo-del-campeon titulo-en-rol'>${ array[index4].title }</p>
        <p class='vida-de-campeon'>${ array[index4].stats.hp }</p>
      </div>
  </div>`;
    window.templateWithMaxLife += championWithMaxLife;
  });
  containerChampionsWithMaxLife.innerHTML = window.templateWithMaxLife;
};
/* 5. Esta función almacena 6 eventos en cada uno de los card o roles los campeones que tienen este tipo de rol, para ejecutar la función que filtra por el tipo de campeon y el evento para mostar el(los) con maximo de vida(hp) */
const selectingChampionsByRoles = () => {
  const assassin = document.getElementById('assassin');
  assassin.addEventListener('click', () => {
    showThridScreen();
    cleanValues();
    document.getElementById('titulo').innerHTML = 'Assassin';
    document.getElementById('description-del-rol').innerHTML = 'Assassins specialize in infiltrating enemy lines with their unrivaled mobility to quickly dispatch high-priority targets.';
    let assassin = lol.filterData(window.LOL.data, 'Assassin');
    document.getElementById('numero-de-campeones').innerHTML = assassin.length + '  CHAMPIONS';
    showingChampionsByRole(assassin);
    let maxLifeChampions = lol.computeStats(assassin, 'Max'); 
    /* Evento para mostrar los campeones con mayor y menor vida por rol*/
    buttonToMaxAndMinLife.addEventListener('click', () => {
      showFourthScreen();
      showingChampionsByMaxLife(maxLifeChampions);
    });
  });
  const tank = document.getElementById('tank');
  tank.addEventListener('click', () => {
    showThridScreen();
    cleanValues();
    document.getElementById('titulo').innerHTML = 'Tank';
    document.getElementById('description-del-rol').innerHTML = 'Tanks are tough melee champions who sacrifice damage in exchange for powerful crowd control.';
    let tank = lol.filterData(window.LOL.data, 'Tank');
    document.getElementById('numero-de-campeones').innerHTML = tank.length + '  CHAMPIONS';
    showingChampionsByRole(tank);
    let maxLifeChampions = lol.computeStats(tank, 'Max'); 
    /* Evento para mostrar los campeones con mayor y menor vida por rol*/
    buttonToMaxAndMinLife.addEventListener('click', () => {
      showFourthScreen();
      showingChampionsByMaxLife(maxLifeChampions);
    });
  }); 
  const jungler = document.getElementById('jungler');
  jungler.addEventListener('click', () => {
    showThridScreen();
    cleanValues();
    document.getElementById('titulo').innerHTML = 'Mage';
    document.getElementById('description-del-rol').innerHTML = 'Mages are champions who typically possess great reach, ability-based area of effect damage and crowd control, and who use all of these strengths in tandem with each other to trap and destroy enemies from a distance.';
    let jungler = lol.filterData(window.LOL.data, 'Mage');
    document.getElementById('numero-de-campeones').innerHTML = jungler.length + '  CHAMPIONS';
    showingChampionsByRole(jungler);
    let maxLifeChampions = lol.computeStats(jungler, 'Max'); 
    /* Evento para mostrar los campeones con mayor y menor vida por rol*/
    buttonToMaxAndMinLife.addEventListener('click', () => {
      showFourthScreen();
      showingChampionsByMaxLife(maxLifeChampions);
    });
  });
  const support = document.getElementById('support');
  support.addEventListener('click', () => {
    showThridScreen();
    cleanValues();
    document.getElementById('titulo').innerHTML = 'Support';
    document.getElementById('description-del-rol').innerHTML = 'The function of Support is to strengthen your allies through bonuses and healing, or to disturb enemy lines through mass control.';
    let support = lol.filterData(window.LOL.data, 'Support');
    document.getElementById('numero-de-campeones').innerHTML = support.length + '  CHAMPIONS';
    showingChampionsByRole(support);
    let maxLifeChampions = lol.computeStats(support, 'Max'); 
    /* Evento para mostrar los campeones con mayor y menor vida por rol*/
    buttonToMaxAndMinLife.addEventListener('click', () => {
      showFourthScreen();
      showingChampionsByMaxLife(maxLifeChampions);
    });
  });
  const marksman = document.getElementById('marksman');
  marksman.addEventListener('click', () => {
    showThridScreen();
    cleanValues();
    document.getElementById('titulo').innerHTML = 'marksman';
    document.getElementById('description-del-rol').innerHTML = 'Marksmen are ranged champions whose power almost exclusively revolves around their basic attacks';
    let marksman = lol.filterData(window.LOL.data, 'marksman');
    document.getElementById('numero-de-campeones').innerHTML = marksman.length + '  CHAMPIONS';
    showingChampionsByRole(marksman);
    let maxLifeChampions = lol.computeStats(marksman, 'Max'); 
    /* Evento para mostrar los campeones con mayor y menor vida por rol*/
    buttonToMaxAndMinLife.addEventListener('click', () => {
      showFourthScreen();
      showingChampionsByMaxLife(maxLifeChampions);
    });
  });
  const fighter = document.getElementById('fighter');
  fighter.addEventListener('click', () => {
    showThridScreen();
    cleanValues();
    document.getElementById('titulo').innerHTML = 'Fighter';
    document.getElementById('description-del-rol').innerHTML = 'Fighters (also known as Bruisers) are a diverse group of short-ranged combatants who excel at both dealing and surviving damage.';
    let fighter = lol.filterData(window.LOL.data, 'Fighter');
    document.getElementById('numero-de-campeones').innerHTML = fighter.length + '  CHAMPIONS';
    showingChampionsByRole(fighter);
    let maxLifeChampions = lol.computeStats(fighter, 'Max'); 
    /* Evento para mostrar los campeones con mayor y menor vida por rol*/
    buttonToMaxAndMinLife.addEventListener('click', () => {
      showFourthScreen();
      showingChampionsByMaxLife(maxLifeChampions);
    });
  });
}; 
/* HEADER: Evento en el logo para volver al inicio*/
goToHome.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'block';
  document.getElementById('segunda-pantalla').style.display = 'none';
  document.getElementById('tercera-pantalla').style.display = 'none';
  cleanValues();
});
/* MENU: Boton para ir a home*/
goToHome2.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'block'; 
  document.getElementById('segunda-pantalla').style.display = 'none';
  document.getElementById('menu-bar').style.transform = 'translateX(-100%)';
  cleanValues();
});
/* MENU: Boton para ir a roles*/
goToRoles.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'none'; 
  document.getElementById('segunda-pantalla').style.display = 'block';
  document.getElementById('tercera-pantalla').style.display = 'none';
  document.getElementById('menu-bar').style.transform = 'translateX(-100%)';
  cleanValues();
  showRoles();
});
/* MENU: Boton para ir a el tutorial*/
goToTutorial.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'block'; 
  document.getElementById('segunda-pantalla').style.display = 'none';
  document.getElementById('menu-bar').style.transform = 'translateX(-100%)';
});
/* BOTON: Evento para regresar a todos los roles en el botón "Roles in the game*/
buttonToRoles.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'none'; 
  document.getElementById('segunda-pantalla').style.display = 'block';
  document.getElementById('tercera-pantalla').style.display = 'none';
  document.getElementById('cuarta-pantalla').style.display = 'none';
  cleanValues();
  showRoles();
});
/* BOTON: Evento para mostrar los roles en el botón "Go to Roles*/
buttonToRoleOfChampeons.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'none'; 
  document.getElementById('tercera-pantalla').style.display = 'none'; 
  cleanValues();
  showRoles();
  document.getElementById('segunda-pantalla').style.display = 'block';
});
/* OCULTAR: Función para ocultar la primera y segunda pantallas*/
const showThridScreen = () => {
  document.getElementById('primera-pantalla').style.display = 'none'; 
  document.getElementById('segunda-pantalla').style.display = 'none';
  document.getElementById('tercera-pantalla').style.display = 'block';
};
/* OCULTAR: Función para ocultar la primera, segunda, tercera y mostrar la cuarta pantalla*/
const showFourthScreen = () => {
  document.getElementById('primera-pantalla').style.display = 'none';
  document.getElementById('segunda-pantalla').style.display = 'none';
  document.getElementById('tercera-pantalla').style.display = 'none';
  document.getElementById('cuarta-pantalla').style.display = 'block';
};  
/* LIMPIAR: Función que limpia los campos de las demas variables*/
const cleanValues = () => {
  window.templateListOfRoles = '';
  containerRoles.innerHTML = '';
  containerChampionsByRole.innerHTML = '';
  window.templateListOfChampionsByRole = '';
  window.templateWithMaxLife = '';
  containerChampionsWithMaxLife.innerHTML = '';
};