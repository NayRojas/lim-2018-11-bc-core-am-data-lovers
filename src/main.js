document.getElementById('primera-pantalla').style.display = 'block';
document.getElementById('segunda-pantalla').style.display = 'none';

const containerList = document.getElementById('descripion-de-los-top-5');
const buttonToRoleOfChampeons = document.getElementById('todos-los-campeones');
const containerRoles = document.getElementById('todos-los-roles');


const roles = [
  {img: 'img/asesino.jpeg', name: 'Asesino'},
  {img: 'img/tank.jpeg', name: 'Tanque'},
  {img: 'img/mago.jpeg', name: 'Mago'},
  {img: 'img/soporte.jpeg', name: 'Soporte'},
  {img: 'img/tirador.jpeg', name: 'Tirador'},
  {img: 'img/fighter.jpeg', name: 'Luchador'},
];

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
      <label class='icon-gitlab" for="Attack' >Ataque <span>${ champions[index].info.attack }</span></label>
      <label class='icon-first-order' for='defense'>Defensa <span>${ champions[index].info.defense }</span></label>
      <label class='icon-magic' for='magic'>Magia <span>${ champions[index].info.magic }</span></label>
      <label class='icon-flattr'for='dificulty'>Dificultad <span>${ champions[index].info.difficulty }</span></label>
      </div>
      </div>`;
  window.templateListOfCards += card;
});
containerList.innerHTML = window.templateListOfCards;

/* FUNCIÓN DE LA SEGUNDA HISTORIA: MOSTRAR LOS ROLES */

/* PRIMERA HISTORIA: Boton */
buttonToRoleOfChampeons.addEventListener('click', () => {
  document.getElementById('primera-pantalla').style.display = 'none'; 
  document.getElementById('segunda-pantalla').style.display = 'block';
  roles.forEach((allRoles, index2) => {
    const roleCard = `
      <div class='card-role elemento elemento-to-roles'>
        <img class='img-principal' src= '${ roles[index2].img }' alt='${ roles[index2].name }'/>
        <p class= 'cantidad-de-campeones'></p>
      </div>`;
    window.templateListOfRoles += roleCard;
  });
  containerRoles.innerHTML = window.templateListOfRoles;
});