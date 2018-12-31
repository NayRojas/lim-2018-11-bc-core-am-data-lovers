document.getElementById('primera-pantalla').style.display = 'block';
document.getElementById('segunda-pantalla').style.display = 'none';
document.getElementById('tercera-pantalla').style.display = 'none';

const containerList = document.getElementById('descripion-de-los-top-5');
const buttonToRoleOfChampeons = document.getElementById('todos-los-campeones');
const containerRoles = document.getElementById('todos-los-roles');
const goToHome = document.getElementById('home');
const goToHome2 = document.getElementById('home2');
const goToRoles = document.getElementById('ir-a-roles');
const goToTutorial = document.getElementById('ir-a-tutorial');

/* FUNCIÓN DE LA PRIMERA HISTORIA: MOSTRAR 5 CAMPEONES */
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

/* SEGUNDA HISTORIA: Mostrar todos los roles */
/* Evento que crea el card para cada rol*/
const roles = [
  {img: 'img/asesino.jpeg', name: 'assassin'},
  {img: 'img/tank.jpeg', name: 'tank'},
  {img: 'img/mago.jpeg', name: 'marksman  '},
  {img: 'img/soporte.jpeg', name: 'support'},
  {img: 'img/tirador.jpeg', name: 'jungker'},
  {img: 'img/fighter.jpeg', name: 'fighter'},
];

buttonToRoleOfChampeons.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'none'; 
  document.getElementById('segunda-pantalla').style.display = 'block';
  document.getElementById('tercera-pantalla').style.display = 'none'; 
  roles.forEach((allRoles, index2) => {
    const roleCard = `
      <div class='card-role elemento elemento-to-roles'>
        <img class='img-principal img-ppl-role' id='${ roles[index2].name }' src= '${ roles[index2].img }' alt='${ roles[index2].name }'/>
        <p class= 'cantidad-de-campeones'></p>
      </div>`;
    window.templateListOfRoles += roleCard;
  });
  containerRoles.innerHTML = window.templateListOfRoles;
});

const showThridScreen = () => {
  document.getElementById('primera-pantalla').style.display = 'none'; 
  document.getElementById('segunda-pantalla').style.display = 'none';
  document.getElementById('tercera-pantalla').style.display = 'block';
};


/* HEADER: Boton para volver al inicio*/
goToHome.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'block';
  document.getElementById('segunda-pantalla').style.display = 'none';
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
  window.getFiveChampeons();
});
/* MENU: Boton para ir a el tutorial*/
goToTutorial.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'block'; 
  document.getElementById('segunda-pantalla').style.display = 'none';
  document.getElementById('menu-bar').style.transform = 'translateX(-100%)';
});

