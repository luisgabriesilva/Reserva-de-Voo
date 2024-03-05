const nameOnPass = "luis gabriel da silva "
console.log("Passagem Name;" + nameOnPass);
const nameOnId = " luis gabrile da silva ";
const nameMatch = nameOnPass === nameOnId;
console.log("ID confrima?" + nameMatch)
const lenght = 25;
const doesleghtPass = lenght < 30;
const height = 85 ;
const doesHeightPass = height < 55;
const isHandBaggageEligible = doesHeightPass && doesleghtPass;
console.log("A bagagem de mão é elegível?" + isHandBaggageEligible);
const flightDes = "Canela";
const returnFrom = "Gramado";
const isRoundTrip = flightDes === returnFrom; 
console.log("Verificação de ida e volta?" + isRoundTrip);
const bookings = 12;
const totalCapacity = 54;
const isFlinghtAvailable= bookings < totalCapacity;
console.log("Os assentos estão disponíveis?" + isFlinghtAvailable);
document.querySelector("#name").innerHTML = nameOnPass
document.querySelector("#id"). innerHTML = nameMatch
document.querySelector("#bag"). innerHTML = isHandBaggageEligible
document.querySelector("#des"). innerHTML = isRoundTrip
document.querySelector("#seat"). innerHTML = isFlinghtAvailable