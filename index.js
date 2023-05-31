/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
20 meters = 65.616 feet | 20 feet = 6.096 meters
*/
const lengthPara =document.getElementById("length-para");
const VolumnPara =document.getElementById("volumn-para");
const massPara =document.getElementById("mass-para");
const btn=document.getElementById("btn");
const val = document.getElementById("num");
 lengthPara.textContent =`20 meters = 65.616 feet | 20 feet = 6.096 meters`;
VolumnPara.textContent =`20 liters = 5.284 gallons | 20 gallons = 75.708 liters`;
massPara.textContent =`20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos`;
  
 btn.addEventListener("click",calculator);

function calculator() {
     var num =Number(val.value)
     lengthCalculator(num)
     volumeCalculator(num)
     massCalculator(num)
     
     }
function lengthCalculator(num){
    var feet= num * 3.281;
    var meter= num/3.281
      lengthPara.textContent =`${num} meters = ${feet.toFixed(3)} feet | ${num} feet = ${meter.toFixed(3)} meters`;

     
}
function volumeCalculator(num){
     var litreToGallon= num *0.264;
    var gallonToLitre= num/0.264
      VolumnPara.textContent =`${num} Litres = ${litreToGallon.toFixed(3)} Gallons | ${num}Gallon = ${gallonToLitre.toFixed(3)} Litres`;
    
}
function massCalculator(num){
     var kilosToPounds= num * 2.204;
    var PoundToKilos= num/2.204
      massPara.textContent =`${num} kilos = ${kilosToPounds.toFixed(3)} feet | ${num} Pounds = ${PoundToKilos.toFixed(3)} meters`;
    
}



