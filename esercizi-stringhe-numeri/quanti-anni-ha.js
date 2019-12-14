/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

var eta;
var mancanti_x100;
var annocorrente =2019;
var annodinascita =1982;
var anni;

anni = annocorrente-annodinascita;
mancanti_x100 = 100-anni;

console.log('ha '+anni+' e ne mancano '+mancanti_x100+' per arrivare a 100');