const objectSetOfChampeons = LOL.data;
const arraySetOfChampeons = Object.keys(LOL.data); //La data tiene indices :(
const entriesOfChampeons = Object.entries(LOL.data);
//const propertyChampeons = arraySetOfChampeons(Object.value("top5"))
//console.log(propertyChampeons);


//Arroja el campeon pero NO RECORRE LOS INDICES
/*const topFive = () =>{
    const allChampeons = {
    
    return 
}*/
/*
const champeon1 = objectSetOfChampeons[arraySetOfChampeons[16]];
const champeon2 = objectSetOfChampeons[arraySetOfChampeons[57]];
const champeon3 = objectSetOfChampeons[arraySetOfChampeons[71]];
const champeon4 = objectSetOfChampeons[arraySetOfChampeons[92]];
const champeon5 = objectSetOfChampeons[arraySetOfChampeons[99]];

const champeons = [champeon1, champeon2, champeon3, champeon4, champeon5];
//console.log(champeons);
//englobariamos todos los 5 para que se muestren en sus posiciones

//const checkChampeons = (champeons) => {
    //return champeons.top = "top5";
//}
//console.log(checkChampeons);

//////////////////////////////////////////////////////////

function showChampeons (){
   document.getElementById("primer-campeon").innerHTML = champeons.filter(indexOfChampeons);
}
//console.log(showChampeons);


const champeonsMap = arraySetOfChampeons.filter(arraySetOfChampeons => arraySetOfChampeons.top = "top5");
//const champeonsFilter = arraySetOfChampeons.filter(objectSetOfChampeons => objectSetOfChampeons.indexOf = "0");
console.log(champeonsMap);
*/

//6to intento

const freeChampeonWeekly = [];
const allChampeonWeekly = [];
const champions = [];

//const gettingFreeChampeons = entriesOfChampeons.filter(currentChampeons => console.log(currentChampeons));
const gettingFreeChampeons3 = entriesOfChampeons.map(currentChampeons => allChampeonWeekly << currentChampeons);
//console.log(gettingFreeChampeons3)
for (var [key, value] of entriesOfChampeons) {
    if (value.top ==='top5') {
        console.log("Campion de la semana:" + value.name)
    }
}

//var newArray = entriesOfChampeons.filter(function(currentChampeon){
//    return currentChampeon.top === 'top5'
//});
//console.log(newArray)
 
//Arroja el campeon y RECORRE LOS INDICES
//escoger la data 5 campeones
//Mostrar Nombre del champion, titulo, Imagen principal, Descripción
//Mostrar su nivel de ataque, defense, resistencia, nivel de dificultad
//Mostrar que tipo de rol juega


