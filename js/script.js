/*Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)*/

//definire le variabili e recuperare gli elementi che mi servono dal DOM
/*creare la funzione che attraverso il click del pulsante  mi cambi l'immagine della lampadina spenta in accesa*/

const img = document.getElementById('foto');

const button = document.getElementById('on-of');

//creo la funzione

button.addEventListener('click',function(){

   img.src = "./img/yellow_lamp.png";

})

