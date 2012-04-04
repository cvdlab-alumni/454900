/**
 * @author Fabio Ganci 454900
 */

/*
Reproduce a 2D model of the floor plan of the Barcelona Pavilion
using only the plasm.js primitives POLYLINE and STRUCT.

Let assume the grid of squares on the floor be 1.0m x 1.0m.
 * **/

 //inizialmente definisco il perimetro per il pavimento mattonellato

 var perimeterfloor=[[1,2],[0,2],[0,0],[39,0],[39,4],[52,4],[52,6],[51,6],[51,5],[47,5],[47,16],[39,16],
 								[39,17],[9,17],[9,22],[1,22],[1,10],[21,10],[21,1],[1,1],[1,2]];
 var polylineperimeterfloor=POLYLINE(perimeterfloor);
 
 

 //definisco le linee più scure e poi le inserisco in un'unica struct

 var darklines1= [[8,1],[1,1],[1,22],[9,22],[9,17]];
 var polylinedark1= POLYLINE(darklines1);

 var darklines2 = [[7.5,15],[26.5,15]];
 var polylinedark2= POLYLINE(darklines2);

 var darklines3 = [[25.2,7.3],[33.9,7.3],[31,7.3],[31,13.6],[30,13.6],[40,13.6]];
 var darklines3b =[[32,7.3],[32,13.6]]
 var polylinedark3 = POLYLINE(darklines3);
var polylinedark3b = POLYLINE(darklines3b);


 var darklines4 = [[37.2,11.2],[42.5,11.2]];
 var polylinedark4= POLYLINE(darklines4);

 var darklines5 = [[45.5,7],[45.5,14]];
 var polylinedark5= POLYLINE(darklines5);

 var darklines6 = [[37.8, 16],[51,16],[51,5],[41.2,5]];
 var polylinedark6= POLYLINE(darklines6);

var strutturadarklines= COLOR([0,0,0])(STRUCT([polylinedark1,polylinedark2,polylinedark3,polylinedark3b,polylinedark4,polylinedark5,polylinedark6]));

DRAW(strutturadarklines);
DRAW(polylineperimeterfloor);


//linee divisorie per le stanze
var walline1 = [[1,17],[9,17]];
var polylinewall1= POLYLINE(walline1);

var walline2 = [[5,17],[5,22]];
var polylinewall2= POLYLINE(walline2);

var walline3 = [[5,20],[9,20],[7,20],[7,22]];
var polylinewall3= POLYLINE(walline3);

var strutturawall= STRUCT([polylinewall1,polylinewall2,polylinewall3]);


//definisco la scalinata

var scale=[[39,1],[36,1],[36,4],[36,4],[39,4]];
var polylinescale= POLYLINE(scale);

var gradino1= [[36.5,1],[36.5,4]];
var polylinegradino1= POLYLINE(gradino1);

var gradino2= [[37,1],[37,4]];
var polylinegradino2= POLYLINE(gradino2);

var gradino3= [[37.5,1],[37.5,4]];
var polylinegradino3= POLYLINE(gradino3);

var gradino4= [[38,1],[38,4]];
var polylinegradino4= POLYLINE(gradino4);

var gradino5= [[38.5,1],[38.5,4]];
var polylinegradino5= POLYLINE(gradino5);

var strutturascale= STRUCT([polylinescale,polylinegradino1,polylinegradino2,polylinegradino3,polylinegradino4,polylinegradino5]);


//definisco gli oggetti della stanza in alto a sinistra

var tableroom1= [[2.5,17.2],[3.5,17.2],[3.5,18.2],[2.5,18.2],[2.5,17.2]];
var polylinetableroom1 = POLYLINE(tableroom1);

var chairoom1= [[1.5,17.5],[2,17.5],[2,18],[1.5,18],[1.5,17.5]];
var polylinechairoom1 = POLYLINE(chairoom1);

var chairoom2= [[4,17.5],[4.5,17.5],[4.5,18],[4,18],[4,17.5]];
var polylinechairoom2 = POLYLINE(chairoom2);

var chairoom3= [[1.5,20],[2,20],[2,20.5],[1.5,20.5],[1.5,20]];
var polylinechairoom3 = POLYLINE(chairoom3);


var chairoom4= [[2.5,21],[3,21],[3,21.5],[2.5,21.5],[2.5,21]];
var polylinechairoom4 = POLYLINE(chairoom4);

var chairoom5= [[3.5,21],[4,21],[4,21.5],[3.5,21.5],[3.5,21]];
var polylinechairoom5 = POLYLINE(chairoom5);


//definisco gli oggetti della stanze in alto a destra
var chairoom6= [[5,21],[5.5,21],[5.5,21.5],[5,21.5],[5,21]];
var polylinechairoom6 = POLYLINE(chairoom6);

var chairoom7= [[8.5,21],[9,21],[9,21.5],[8.5,21.5],[8.5,21]];
var polylinechairoom7 = POLYLINE(chairoom7);

var strutturaobjectroom= STRUCT([polylinetableroom1,polylinechairoom1,polylinechairoom2,polylinechairoom3,
								 polylinechairoom4,polylinechairoom5,polylinechairoom6,polylinechairoom7]);


//definisco la panca lunga
var panche=[[8,14],[8,14.5],[22.2,14.5],[22.2,14],[8,14]];
var polylinepanche= POLYLINE(panche);

var panca1=[[10.2,14],[10.2,14.5]];
var polylinepanca1= POLYLINE(panca1);

var panca2=[[12.2,14],[12.2,14.5]];
var polylinepanca2= POLYLINE(panca2);

var panca3=[[14.2,14],[14.2,14.5]];
var polylinepanca3= POLYLINE(panca3);

var panca4=[[16.2,14],[16.2,14.5]];
var polylinepanca4= POLYLINE(panca4);

var panca5=[[18.2,14],[18.2,14.5]];
var polylinepanca5= POLYLINE(panca5);

var panca6=[[20.2,14],[20.2,14.5]];
var polylinepanca6= POLYLINE(panca6);

var strutturapanca= STRUCT([polylinepanche,polylinepanca1,polylinepanca2,polylinepanca3,polylinepanca4,polylinepanca5,polylinepanca6]);

//tavolo + 2 sedie a lato vicino ai pannelli

var tableex1=[[32.2,9],[32.2,12],[33,12],[33,9],[32.2,9]];
var polylinetablex1=POLYLINE(tableex1);

var chairex1=[[32.5,8],[32.5,8.5],[33,8.5],[33,8],[32.5,8]];
var polylinechairex1=POLYLINE(chairex1);

var chairex2=[[32.5,12.5],[32.5,13],[33,13],[33,12.5],[32.5,12.5]];
var polylinechairex2=POLYLINE(chairex2);

//l'altro tavolo e 2 sedie nel pannello più a destra
var tableex2=[[39.5,10],[39.5,10.5],[40.2,10.5],[40.2,10],[39.5,10]];
var polylinetablex2=POLYLINE(tableex2);

var chairex3=[[38.5,10.2],[38.5,10.8],[39,10.8],[39,10.2],[38.5,10.2]];
var polylinechairex3=POLYLINE(chairex3);

var chairex4=[[40.5,10.2],[40.5,10.8],[41,10.8],[41,10.2],[40.5,10.2]];
var polylinechairex4=POLYLINE(chairex4);

var strutturaobjectex=STRUCT([polylinetablex1,polylinetablex2,polylinechairex1,polylinechairex2,polylinechairex3,polylinechairex4]);



//definisco la struttura completa 
var strutturacompleta=STRUCT([strutturaobjectex,strutturapanca,strutturaobjectroom,
							strutturascale,strutturawall,strutturadarklines,polylineperimeterfloor]);

DRAW(strutturacompleta);