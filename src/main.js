/* Estas declaraciones manipulan el estado inicial de las pantallas ante el DOM*/
document.getElementById('primera-pantalla').style.display = 'block';
document.getElementById('segunda-pantalla').style.display = 'none';
document.getElementById('tercera-pantalla').style.display = 'none';
document.getElementById('cuarta-pantalla').style.display = 'none';

/* Variables para la manipulación de botones y elementos*/
const containerList = document.getElementById('descripion-de-los-top-5');
const buttonToRoleOfChampeons = document.getElementById('todos-los-campeones'); // Primer botón
const buttonToRoles = document.getElementById('todos-los-cardroles'); // Botón para volver a los cards
const containerRoles = document.getElementById('todos-los-roles');
const containerChampionsByRole = document.getElementById('todos-los-campeones-por-rol');
const goToHome = document.getElementById('home');
const goToHome2 = document.getElementById('home2');
const goToRoles = document.getElementById('ir-a-roles');
const goToTutorial = document.getElementById('ir-a-tutorial');

/* Esta constante almacena los datos de las imagenes de los roles a mostrar en la segunda función*/
const roles = [
  {img: 'img/asesino.jpeg', name: 'assassin' }, // Asesino
  {img: 'img/tank.jpeg', name: 'tank'}, // Tanque
  {img: 'img/mago.jpeg', name: 'jungler'}, // 
  {img: 'img/soporte.jpeg', name: 'support'}, // Soporte
  {img: 'img/tirador.jpeg', name: 'marksman'}, // tirador
  {img: 'img/fighter.jpeg', name: 'fighter'}, // Tanque
];

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
/* 2. Este función muestra los seis roles del juego en cards*/
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
        <!--<p class='vida-del-campeon'>${ array[index3].stats[1] } </p>-->
      </div>
  </div>`;
    
    window.templateListOfChampionsByRole += championInRole;
  });
  containerChampionsByRole.innerHTML = window.templateListOfChampionsByRole;
};
/* Esta función almacena 6 eventos almacenan en cada uno de los card o roles los campeones que tienen este tipo de rol */
const selectingChampionsByRoles = () => {
  const assassin = document.getElementById('assassin');
  assassin.addEventListener('click', () => {
    showThridScreen();
    let assassin = lol.getRoles(window.LOL.data, 'Assassin');
    showingChampionsByRole(assassin);
    // let names = Object.entries(assassin).map(currentChampeon => currentChampeon[1].name);
  });
  const tank = document.getElementById('tank');
  tank.addEventListener('click', () => {
    showThridScreen();
    let tank = lol.getRoles(window.LOL.data, 'Tank');
    let tankOrdered = lol.getOrderChampions(tank).sort();
    console.log(tankOrdered);
    //showingChampionsByRole(tankOrdered);
    
  });
  const jungler = document.getElementById('jungler');
  jungler.addEventListener('click', () => {
    showThridScreen();
    let jungler = lol.getRoles(window.LOL.data, 'Mage');
    showingChampionsByRole(jungler);
    // createTitle();
  });
  const support = document.getElementById('support');
  support.addEventListener('click', () => {
    showThridScreen();
    let support = lol.getRoles(window.LOL.data, 'Support');
    showingChampionsByRole(support);
    // createTitle();
  });
  const marksman = document.getElementById('marksman');
  marksman.addEventListener('click', () => {
    showThridScreen();
    let marksman = lol.getRoles(window.LOL.data, 'Mage');
    showingChampionsByRole(marksman);
    // createTitle();
  });
  const fighter = document.getElementById('fighter');
  fighter.addEventListener('click', () => {
    showThridScreen();
    let fighter = lol.getRoles(window.LOL.data, 'Fighter');
    showingChampionsByRole(fighter);
    // createTitle();
  });
};
/* Evento para mostrar los roles en el botón "conoce todos los campeones*/
buttonToRoleOfChampeons.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'none'; 
  document.getElementById('segunda-pantalla').style.display = 'block';
  document.getElementById('tercera-pantalla').style.display = 'none'; 
  showRoles();
});
/* Función para ocultar la primera y segunda pantallas*/
const showThridScreen = () => {
  document.getElementById('primera-pantalla').style.display = 'none'; 
  document.getElementById('segunda-pantalla').style.display = 'none';
  document.getElementById('tercera-pantalla').style.display = 'block';
};
/* HEADER: Evento en el logo para volver al inicio*/
goToHome.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'block';
  document.getElementById('segunda-pantalla').style.display = 'none';
  document.getElementById('tercera-pantalla').style.display = 'none';
});
/* MENU: Boton para ir a home*/
goToHome2.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'block'; 
  document.getElementById('segunda-pantalla').style.display = 'none';
  document.getElementById('menu-bar').style.transform = 'translateX(-100%)';
});
/* MENU: Boton para ir a roles*/
goToRoles.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'none'; 
  document.getElementById('segunda-pantalla').style.display = 'block';
  document.getElementById('menu-bar').style.transform = 'translateX(-100%)';
  showRoles();
});
/* MENU: Boton para ir a el tutorial*/
goToTutorial.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'block'; 
  document.getElementById('segunda-pantalla').style.display = 'none';
  document.getElementById('menu-bar').style.transform = 'translateX(-100%)';
});
/* Evento para regresar a todos los roles en el botón "Roles in the game*/
buttonToRoles.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'none'; 
  document.getElementById('segunda-pantalla').style.display = 'block';
  document.getElementById('tercera-pantalla').style.display = 'none';
  document.getElementById('cuarta-pantalla').style.display = 'none';
});

