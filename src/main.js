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
        //console.log(value)
    }
}
var newArray = entriesOfChampeons.map(currentChampeon => currentChampeon[1]).filter(currentChampeon => currentChampeon.top ==='top5')

     
//******************JS TEMPLATE FOR TOP 5****************************


//ESTE ES EL TEMPLATE

   



window.onload = function(){

    for (i = 0; i <  newArray.length; i++) { 

                //Aqui he creado el div(Clase y el ID) madre del primer campeon
        const fatherDiv = document.createElement("div");
        const valueFatherClass = document.createAttribute("class");
        valueFatherClass.value = "campeones elemento primer-campeon";
        fatherDiv.setAttributeNode(valueFatherClass);

        const valueFatherId = document.createAttribute("id");
        valueFatherId.value = "primer-campeon";
        fatherDiv.setAttributeNode(valueFatherId);
        document.getElementById("descripion-de-los-top-5").appendChild(fatherDiv);

        //Aqui he creado el img principal del primer campeon
            const champeonImage = document.createElement("img");
            const champeonImageClass = document.createAttribute("class");
            champeonImageClass.value = "img-del-campeon";
            champeonImage.setAttributeNode(champeonImageClass);
        //su alt
            const champeonImageAlt = document.createAttribute("alt");
            champeonImageAlt.value = "imagen-del-campeon";
            champeonImage.setAttributeNode(champeonImageAlt);
        //su src
            const champeonImageSrc = document.createAttribute("src");
            champeonImageSrc.value = newArray[i].splash;
            champeonImage.setAttributeNode(champeonImageSrc);
            document.getElementById("primer-campeon").appendChild(champeonImage);

        //Aqui he creado el nombre del primer campeon
        //su clase
        const champeonName = document.createElement("h4");
        const champeonNameClass = document.createAttribute("class");
        champeonNameClass.value = "nombre-del-campeon";
        champeonName.setAttributeNode(champeonNameClass);

        //su nombre en text
        const champeonNameText = document.createTextNode(newArray[i].name);
        champeonName.appendChild(champeonNameText);
        document.getElementById("primer-campeon").appendChild(champeonName);

        //Aqui he creado el titulo del primer campeon
        //su clase
        const champeonTitle = document.createElement("p");
        const champeonTitleClass = document.createAttribute("class");
        champeonTitleClass.value = "titulo-del-campeon";
        champeonTitle.setAttributeNode(champeonTitleClass);

        //su titulo en text
        const champeonTitleName = document.createTextNode(newArray[i].title);
        champeonTitle.appendChild(champeonTitleName);
        document.getElementById("primer-campeon").appendChild(champeonTitle);

        //Aqui he creado el blurb del primer campeon
        //su clase
        const champeonBlurb = document.createElement("p");
        const champeonBlurbClass = document.createAttribute("class");
        champeonBlurbClass.value = "blurb-del-campeon";
        champeonBlurb.setAttributeNode(champeonBlurbClass);

        //su titulo en text
        const champeonBlurbText = document.createTextNode(newArray[i].blurb);
        champeonBlurb.appendChild(champeonBlurbText);
        document.getElementById("primer-campeon").appendChild(champeonBlurb);

        const divLevels = document.createElement("div");

        const divLevelsId = document.createAttribute("id");
        divLevelsId.value = "niveles-del-campeon";
        divLevels.setAttributeNode(divLevelsId);

        const divLevelsClass = document.createAttribute("class");
        divLevelsClass.value = "niveles-del-campeon";
        divLevels.setAttributeNode(divLevelsClass);

        document.getElementById("primer-campeon").appendChild(divLevels);

        // Info
        info = Object.entries(newArray[i].info)

        
        for(index = 0; index <  3; index++) {
            const champeonLevels = document.createElement("LABEL");

            keys = Object.keys(info[index])
            values = Object.values(info[index])

            console.log("current key: " + keys[index])
            console.log("current value: " + values[index])
            
            /*if (keys[steps]=='attack') {
                const champeonLevelsText = document.createTextNode(keys[steps])
                champeonLevels.appendChild(champeonLevelsText)

                const champeonLevelsClass = document.createAttribute("class");
                champeonLevelsClass.value = "icon-gitlab";
                champeonLevels.setAttributeNode(champeonLevelsClass);
                
                const champeonLevelsFor = document.createAttribute("for");
                champeonLevelsFor.value = keys[steps]
                champeonLevels.setAttributeNode(champeonLevelsFor)

                const champeonLevelsSpan = document.createElement("SPAN");
                const champeonLevelsSpanText = document.createTextNode(values[steps])
                champeonLevelsSpan.appendChild(champeonLevelsSpanText)
                
                champeonLevels.appendChild(champeonLevelsSpan)

                document.getElementById("niveles-del-campeon").appendChild(champeonLevels);
            }*/
        }
   
    }

 }
      
 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTop").style.display = "block";
  } else {
    document.getElementById("scrollToTop").style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
      

      
      

      
      
 
    
 
//Arroja el campeon y RECORRE LOS INDICES
//escoger la data 5 campeones
//Mostrar Nombre del champion, titulo, Imagen principal, Descripción
//Mostrar su nivel de ataque, defense, resistencia, nivel de dificultad
//Mostrar que tipo de rol juega


