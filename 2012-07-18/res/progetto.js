/**
 * @author Fabio Ganci 454900
 */
/*
 * **/


//la scala di ingresso

var base= SIMPLEX_GRID([
	[16.4], 
	[30],				
	[0.1]						
]);
var pianosx= SIMPLEX_GRID([
	[2], 
	[12],				
	[1.8]						
]);
var pianodx= SIMPLEX_GRID([
	[-14.4, 2], 
	[12],				
	[1.8]						
]);

var pianouno= SIMPLEX_GRID([
	[16.4], 
	[-12, 18],				
	[3.6]						
]);
var pianounosx= SIMPLEX_GRID([
	[2], 
	[-12, 18],				
	[4]						
]);
var pianounodx= SIMPLEX_GRID([
	[-14.4, 2], 
	[-12, 18],				
	[4]						
]);

var pianodue= SIMPLEX_GRID([
	[16.4], 
	[-27.5, 2.5],				
	[7.3]						
]);

//primo livello della scala
var scalauno= SIMPLEX_GRID([
	[-2, 12.4], 
	[13],				
	[0.5]						
]);
var scalaunorotata=R([1,2])([PI/14])(scalauno);

var scalasup1= SIMPLEX_GRID([
	[-2.5, 3], 
	[-0.5,12],				
	[0.6]						
]);
var scalasupr1=R([1,2])([PI/14])(scalasup1);





var scalasup2= SIMPLEX_GRID([
	[-6.5, 3], 
	[-0.5,12],				
	[0.6]						
]);
var scalasupr2=R([1,2])([PI/14])(scalasup2);



var scalasup3= SIMPLEX_GRID([
	[-10.5, 3], 
	[-0.5,12],				
	[0.6]						
]);

var scalasupr3=R([1,2])([PI/14])(scalasup3);



//bordi scala

var bordounosx= SIMPLEX_GRID([
	[2], 
	[-0.5,12],				
	[-0.3,1]						
]);

var bordounosxrotata= R([1,2])([PI/16])(bordounosx);

var bunosx= SIMPLEX_GRID([
	[2], 
	[-7,7],				
	[1.5]						
]);

var bunosxrotata= R([1,2])([PI/21])(bunosx);

var bordounodx= SIMPLEX_GRID([
	[-14.4, 2], 
	[-0.5,12],				
	[-0.3,1]						
]);
var bunodx= SIMPLEX_GRID([
	[-14.4,2], 
	[-7,7],				
	[1.5]						
]);
var bunodxrotata= R([1,2])([PI/21])(bunodx);

var bordounodxrotata= R([1,2])([PI/16])(bordounodx);

//secondo livello della scala
var scaladue= SIMPLEX_GRID([
	[-2, 12.4], 
	[-17, 13],				
	[0.5]						
]);
var scaladuerotata=R([1,2])([PI/14])(scaladue);


//gradini secondo livello

var scalasup11= SIMPLEX_GRID([
	[-2.5, 3], 
	[-17,13],				
	[0.6]						
]);
var scalasupr11=R([1,2])([PI/14])(scalasup11);




var scalasup22= SIMPLEX_GRID([
	[-6.5, 3], 
	[-17,13],				
	[0.6]						
]);
var scalasupr22=R([1,2])([PI/14])(scalasup22);



var scalasup33= SIMPLEX_GRID([
	[-10.5, 3], 
	[-17,13],				
	[0.6]						
]);

var scalasupr33=R([1,2])([PI/14])(scalasup33);



var strutturascalasup =STRUCT([scalasupr1,scalasupr2,scalasupr3,scalasupr11,scalasupr22,scalasupr33])
DRAW(COLOR([0.5,0.5,0.5])(strutturascalasup))

//bordo scala 2 livello

var bordoduesx= SIMPLEX_GRID([
	[2], 
	[-17.5, 11],				
	[1]						
]);
var bordoduesxrotata=R([1,2])([PI/14])(bordoduesx);
var puntitrsx = [[0,0,0],[0,12,0],[0,12,3.1]];
var trsx =T([1,2])([16.5,4])(TRIANGLE_STRIP(puntitrsx));

//destro
var bordoduedx= SIMPLEX_GRID([
	[-14.4, 2], 
	[-17.5, 11],				
	[1]						
]);
var bordoduedxrotata=R([1,2])([PI/14])(bordoduedx);
var puntitrdx = [[0,0,0],[0,12,0],[0,12,3.1]];
var trdx =T([0,1,2])([16.4,16.5,4])(TRIANGLE_STRIP(puntitrdx));

var scalacompleta=STRUCT([base,pianosx,pianodx,pianouno,pianounosx,pianounodx,pianodue,scalaunorotata,scaladuerotata,
	bordounosxrotata,bordounodxrotata,bunosxrotata,bunodxrotata,bordoduesxrotata,bordoduedxrotata,trsx,trdx]);

DRAW(scalacompleta); 







//Facciata anteriore

var fascialungasx=T([0,1])([-2,30])(SIMPLEX_GRID([
	[2], 
	[0.5],				
	[25]						
]));
var fascialungasx1=T([0,1])([-8.3,30])(SIMPLEX_GRID([
	[2], 
	[0.5],				
	[25]						
]));
var bloccosx=T([0,1])([-6.3,30])(SIMPLEX_GRID([
	[4.3], 
	[0.5],				
	[4.3]						
]));



var bloccosx1=T([0,1,2])([-6.3,30,6])(SIMPLEX_GRID([
	[4.3], 
	[0.5],				
	[4]						
]));

var bloccosx2=T([0,1,2])([-6.3,30,16])(SIMPLEX_GRID([
	[4.3], 
	[0.5],				
	[6]						
]));

var bloccosx3=T([0,1,2])([-6.3,30, 23.6])(SIMPLEX_GRID([
	[4.3], 
	[0.5],				
	[1.4]						
]));

var bloccocn=T([1,2])([30,21.5])(SIMPLEX_GRID([
	[16.4], 
	[0.5],				
	[3.5]						
]));


var facciatalatisx= STRUCT([fascialungasx,fascialungasx1,bloccosx,bloccosx1,bloccosx2,bloccosx3]);
var facciatalatidx=T([0])([24.7])(facciatalatisx);

DRAW(COLOR([1,1,0.65])(facciatalatisx));
DRAW(COLOR([1,1,0.65])(facciatalatidx));
DRAW(COLOR([1,1,0.65])(bloccocn));



//Facciata laterali

var latosx=T([0,1])([-8.3,30])(SIMPLEX_GRID([
	[0.5], 
	[33],				
	[25]						
]));

var latodx=T([0])([33])(latosx);

var laterali = STRUCT([latosx,latodx]);

DRAW(COLOR([1,1,0.65])(laterali));

//facciata posteriore

var retrocn=T([0,1])([-8.3,63])(SIMPLEX_GRID([
	[33.5], 
	[0.5],				
	[25]						
]));

DRAW(COLOR([1,1,0.65])(retrocn));

//ingresso

var ingressocn=T([0,1])([-8.3,43])(SIMPLEX_GRID([
	[33.5], 
	[0.5],				
	[25]						
]));

DRAW(COLOR([1,1,0.65])(ingressocn));

var portaingresso=T([0,1])([5.5,42.9])(SIMPLEX_GRID([
	[5.5], 
	[0.5],				
	[-7.2,12]						
]));



//vetrata ingrsso
var vetro0=T([0,1])([6,42.8])(SIMPLEX_GRID([
	[4.5], 
	[0.1],				
	[-7.2,5]						
]));



var vetro1=T([0,1])([6.2,42.8])(SIMPLEX_GRID([
	[2], 
	[0.1],				
	[-12.5,4]						
]));



var vetro2=T([0])([2.2])(vetro1);

 

var vetro3=T([0,1])([6,42.8])(SIMPLEX_GRID([
	[4.5], 
	[0.1],				
	[-17,2]						
]));





var finestraingresso=T([0,1])([0.5,42.9])(SIMPLEX_GRID([
	[4.5], 
	[0.5],				
	[-8,5.5]						
]));



var finestraingresso2=T([0])([11])(finestraingresso)



var finestraingresso3=T([0,1])([0.5,42.9])(SIMPLEX_GRID([
	[4], 
	[0.5],				
	[-18,4]						
]));



var finestraingresso4=T([0])([11])(finestraingresso3)










var allingresso= STRUCT([COLOR([0,0,0])(portaingresso),COLOR([0,0.6,0.6])(vetro0),COLOR([0,0.6,0.6])(vetro1),COLOR([0,0.6,0.6])(vetro2),COLOR([0,0.6,0.6])(vetro3),
COLOR([0,0.2,0])(finestraingresso),COLOR([0,0.2,0])(finestraingresso2),COLOR([0,0.2,0])(finestraingresso3),COLOR([0,0.2,0])(finestraingresso4) ])

DRAW(allingresso)











//muri attaccati alle colonne 
var muropilastro1= T([1,2])([30,7.3])(SIMPLEX_GRID([
	[0.3], 
	[13],				
	[17.5]						
]));

DRAW(COLOR([1,1,0.65])(muropilastro1))

var muropilastro2= T([0])([16.2])(muropilastro1);


DRAW(COLOR([1,1,0.65])(muropilastro2))




//extra base centrale

var basecentro = T([0,1])([-8.7,29.6])(SIMPLEX_GRID([
	[34.1], 
	[34.1],				
	[1]						
]));
DRAW(COLOR([1,1,0.65])(basecentro))

var basecentro2 = T([0,1])([-8.5,29.8])(SIMPLEX_GRID([
	[33.9], 
	[33.9],				
	[1.5]						
]));
DRAW(COLOR([1,1,0.65])(basecentro2))



//floor palazzo centrale

var floor = T([0,1])([-8.3,30])(SIMPLEX_GRID([
	[33], 
	[33],				
	[0.1]						
]));
var floor1 = T([0,1,2])([-8.3,30,7.2])(SIMPLEX_GRID([
	[33], 
	[33],				
	[0.1]						
]));


var soffitto = T([0,1,2])([-8.3,30,25])(SIMPLEX_GRID([
	[33], 
	[33],				
	[0.1]						
]));

DRAW(COLOR([1,1,0.65])(floor));
DRAW(COLOR([1,1,0.65])(floor1));
DRAW(COLOR([1,1,0.65])(soffitto));



//tetto centrale 

var puntitetto = [[0,0,0],[33.5,0,0],[16.75,0,23.68]];
var t1 =R([1,2])([-(PI/4)])(TRIANGLE_STRIP(puntitetto));

var puntitetto2 = [[0,0,0],[0,33.5,0],[0,16.75,23.68]];
var t2 =R([0,2])([PI/4])(TRIANGLE_STRIP(puntitetto2));

var ttre =R([1,2])([PI/4])(TRIANGLE_STRIP(puntitetto));
var t3 = T([1])([33.5])(ttre);

var tquattro =R([0,2])([-(PI/4)])(TRIANGLE_STRIP(puntitetto2));
var t4=T([0])([33.5])(tquattro);

var tettocompleto= STRUCT([t1,t2,t3,t4]);
DRAW(T([0,1,2])([-8.3,30,25])(COLOR([0.8,0.4,0.2])(tettocompleto)));


//floor esterni lati
var floorsx = T([0,1])([-80.3,33])(SIMPLEX_GRID([
	[72], 
	[21],				
	[0.5]						
]));

var floorsx2 = T([0,1,2])([-80.3,33.5,0.5])(SIMPLEX_GRID([
	[72], 
	[20.5],				
	[0.5]						
]));

var strutturaflooresterno= STRUCT([floorsx,floorsx2]);
DRAW(strutturaflooresterno);


//muri laterali

var murolatosx = T([0,1])([-81,33])(SIMPLEX_GRID([
	[0.8], 
	[21],				
	[10]						
]));

var murolatoretrosx = T([0,1])([-81,54])(SIMPLEX_GRID([
	[73], 
	[0.5],				
	[10]						
]));

var murocentrolatosx = T([0,1])([-81,40])(SIMPLEX_GRID([
	[73], 
	[0.5],				
	[13]						
]));

DRAW(COLOR([1,1,0.65])(murocentrolatosx))
DRAW(COLOR([1,1,0.65])(murolatosx));
DRAW(COLOR([1,1,0.65])(murolatoretrosx));


//torre+tetto sx

var torresx = T([0,1])([-81,41.5])(SIMPLEX_GRID([
	[13], 
	[13],				
	[20]						
]));
var puntitettotorre = [[0,0,0],[13,0,0],[6.5,0,9.2]];
var ttorre1 =R([1,2])([-(PI/4)])(TRIANGLE_STRIP(puntitettotorre));

var puntitettotorre2 = [[0,0,0],[0,13,0],[0,6.5,9.2]];
var ttorre2 =R([0,2])([PI/4])(TRIANGLE_STRIP(puntitettotorre2));

var ttretorre =R([1,2])([PI/4])(TRIANGLE_STRIP(puntitettotorre));
var ttorre3 = T([1])([13])(ttretorre);

var tquattrotorre =R([0,2])([-(PI/4)])(TRIANGLE_STRIP(puntitettotorre2));
var ttorre4=T([0])([13])(tquattrotorre);

var tettotorrecompleto= STRUCT([ttorre1,ttorre2,ttorre3,ttorre4]);
var tettotorreposok=T([0,1,2])([-81,41.5,20])(tettotorrecompleto);

var strutturatorre = STRUCT([torresx,tettotorreposok]);

DRAW(COLOR([1,1,0.65])(torresx));
DRAW(COLOR([0.8,0.4,0.2])(tettotorreposok));



//tetto sinistro portico
var tetto1 = R([1,2])([-(PI/8)])(SIMPLEX_GRID([
	[60], 
	[12],				
	[0.5]						
]));

var ftetto1=T([0,1,2])([-68,44,14])(tetto1);



var tetto2 = R([1,2])([PI/9])(SIMPLEX_GRID([
	[73], 
	[12],				
	[0.5]						
]));

var ftetto2 = T([0,1,2])([-81,32.5,10])(tetto2);


var tetto3 = T([0,1,2])([-68,43.5,14.5])(SIMPLEX_GRID([
	[60], 
	[0.8],				
	[0.8]						
]));

var strutturatettoesterno = STRUCT([ftetto1,ftetto2,tetto3]);
DRAW(COLOR([0.8,0.4,0.2])(strutturatettoesterno));



var tappapuntitr = [[0,0,0],[0,10,0],[0,10,4]];
var tappatrdx =T([0,1,2])([-81,32.5,10])(TRIANGLE_STRIP(tappapuntitr));
DRAW(COLOR([1,1,0.65])(tappatrdx));

var tappatrsx =T([0])([178.8])(tappatrdx);
DRAW(COLOR([1,1,0.65])(tappatrsx));





//floor esterni dx e mura esterne
 var flooresternidx= T([0])([105.5])(strutturaflooresterno);
 DRAW(flooresternidx);


//muri laterali dx

var murolatodx = T([0])([178])(murolatosx)
var murolatoretrodx = T([0])([105.7])(murolatoretrosx)
var murocentrolatodx = T([0])([105.7])(murocentrolatosx);


DRAW(COLOR([1,1,0.65])(murocentrolatodx));
DRAW(COLOR([1,1,0.65])(murolatodx));
DRAW(COLOR([1,1,0.65])(murolatoretrodx));


//torre dx

var torredx = T([0])([165.8])(torresx);
var tettotorredx=T([0])([165.8])(tettotorreposok);
DRAW(COLOR([1,1,0.65])(torredx));
DRAW(COLOR([0.8,0.4,0.2])(tettotorredx));


//tetto dx

var tettodx1 =T([0])([92.8])(ftetto1);

var tettodx2 = T([0])([105.8])(ftetto2);


var tettodx3 = T([0])([92.8])(tetto3)

var strutturatettoesternodx = STRUCT([tettodx1,tettodx2,tettodx3]);
DRAW(COLOR([0.8,0.4,0.2])(strutturatettoesternodx));







//Dettagli colonna
// base colonnato
var basecolonnasx=T([0,1])([-77.5,32.8])(SIMPLEX_GRID([
	[2], 
	[1.5],				
	[1.5]						
]));




//spessore alto pilastro

var fasciacolonnasx=T([0,1,2])([-77.5,32.8,5])(SIMPLEX_GRID([
	[2], 
	[1.4],				
	[0.3]						
]));



//extra spessore sx
var basecolonnaextrasx=T([0,1])([-11.5,32.8])(SIMPLEX_GRID([
	[4], 
	[1.4],				
	[1.5]						
]));


DRAW(COLOR([1,1,0.65])(basecolonnaextrasx))


var fasciacolonnaextrasx=T([0,1,2])([-11.5,32.8,5])(SIMPLEX_GRID([
	[4], 
	[1.7],				
	[0.3]						
]));

DRAW(COLOR([1,1,0.65])(fasciacolonnaextrasx))


var basecolonnaextrasx2=T([0,1])([-80.9,32.8])(SIMPLEX_GRID([
	[4], 
	[1.5],				
	[1.5]						
]));


DRAW(COLOR([1,1,0.65])(basecolonnaextrasx2))


var fasciacolonnaextrasx2=T([0,1,2])([-80.9,32.8,5])(SIMPLEX_GRID([
	[4], 
	[1.7],				
	[0.3]						
]));

DRAW(COLOR([1,1,0.65])(fasciacolonnaextrasx2))

var fasciatorrextrasx=T([0,1,2])([-81.2,41.3,16])(SIMPLEX_GRID([
	[13.4], 
	[13.4],				
	[0.3]						
]));

DRAW(COLOR([1,1,0.65])(fasciatorrextrasx))

var fasciatorrextradx=T([0])([165.8])(fasciatorrextrasx);

DRAW(COLOR([1,1,0.65])(fasciatorrextradx))














//arco + facciata esterna sinistra
var domain = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);
var controls = [[0,0,0], [0,0,5], [0.5,0,6], [1,0,7], [2.5,0,8], [4,0,7], [5,0,6], [5,0,0]];
var curve = BEZIER(S0)(controls);



var controls1 = [[0,1,0], [0,1,5], [0.5,1,6], [1,1,7], [2.5,1,8], [4,1,7], [5,1,6], [5,1,0]];
var curve1 = BEZIER(S0)(controls1);



var spessore= BEZIER(S1)([curve,curve1])
var surface = MAP(spessore)(domain2);


var controls2 = [[-1,0,0], [-1,0,10], [2,0,12], [6.5,0,10], [6,0,0]];
var curve2 = BEZIER(S0)(controls2);

var spessore1= BEZIER(S1)([curve,curve2])
var surface1 = MAP(spessore1)(domain2);

//muri facciata tappa buchi
var muroarco1= T([0,1,2])([-77,33,1])(SIMPLEX_GRID([
	[1], 
	[1],				
	[8]						
]));

var muroarco2= T([0,1,2])([-80.3,32.99,7.9])(SIMPLEX_GRID([
	[72], 
	[1],				
	[2.5]						
]));

DRAW(COLOR([1,1,0.65])(muroarco2))

var muroesternosx = T([0,1])([-80.3,33])(SIMPLEX_GRID([
	[4], 
	[1],				
	[8]						
]));
DRAW(COLOR([1,1,0.65])(muroesternosx));

var muroesterno2sx = T([0,1])([-11,33])(SIMPLEX_GRID([
	[3], 
	[1],				
	[8]						
]));
DRAW(COLOR([1,1,0.65])(muroesterno2sx));



var strutturarco1= T([0,1,2])([-76,33,1])(STRUCT([surface,surface1]));

var strutturarco= STRUCT([strutturarco1,muroarco1,fasciacolonnasx,basecolonnasx]);
var arco2sx = T([0])([(6)])(strutturarco);
var arco3sx = T([0])([12])(strutturarco);
var arco4sx = T([0])([18])(strutturarco);
var arco5sx = T([0])([24])(strutturarco);
var arco6sx = T([0])([30])(strutturarco);
var arco7sx = T([0])([36])(strutturarco);
var arco8sx = T([0])([42])(strutturarco);
var arco9sx = T([0])([48])(strutturarco);
var arco10sx = T([0])([54])(strutturarco);
var arco11sx = T([0])([60])(strutturarco);


var colonnato =STRUCT([strutturarco,arco2sx,arco3sx,arco4sx,arco5sx,arco6sx,arco7sx,arco8sx,arco9sx,arco10sx,arco11sx]);
DRAW(COLOR([1,1,0.65])(colonnato));




//facciata esterna destra 

var colonnatodx= T([0])([104.2])(colonnato);
DRAW(COLOR([1,1,0.65])(colonnatodx))

var muroesternodx = T([0,1])([25.2,33])(SIMPLEX_GRID([
	[3], 
	[1],				
	[8]						
]));
DRAW(COLOR([1,1,0.65])(muroesternodx));

var muroesterno2dx = T([0,1])([93,33])(SIMPLEX_GRID([
	[4], 
	[1],				
	[8]						
]));
DRAW(COLOR([1,1,0.65])(muroesterno2dx));

var muroarcosopra= T([0,1,2])([25.2,32.99,7.9])(SIMPLEX_GRID([
	[72], 
	[1],				
	[2.5]						
]));
DRAW(COLOR([1,1,0.65])(muroarcosopra));


//extra spssore dx
var basecolonnaextradx=T([0,1])([25.2,32.8])(SIMPLEX_GRID([
	[2], 
	[1.5],				
	[1.5]						
]));


DRAW(COLOR([1,1,0.65])(basecolonnaextradx));


var fasciacolonnaextradx=T([0,1,2])([25.2,32.8,5])(SIMPLEX_GRID([
	[4], 
	[1.7],				
	[0.3]						
]));

DRAW(COLOR([1,1,0.65])(fasciacolonnaextradx));


var basecolonnaextradx2=T([0,1])([92.6,32.8])(SIMPLEX_GRID([
	[5.2], 
	[1.5],				
	[1.5]						
]));


DRAW(COLOR([1,1,0.65])(basecolonnaextradx2));


var fasciacolonnaextradx2=T([0,1,2])([92.6,32.8,5])(SIMPLEX_GRID([
	[5.2], 
	[1.7],				
	[0.3]						
]));

DRAW(COLOR([1,1,0.65])(fasciacolonnaextradx2));



//Pilastro ingresso 

var basepilastro= SIMPLEX_GRID([
	[1.5], 
	[1.5],				
	[0.3]						
]);
var basepilastro1=T([2])([14])(SIMPLEX_GRID([
	[1.5], 
	[1.5],				
	[0.3]						
]));

var domain = INTERVALS(1)(20);
var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);

var controls11 = [[0,0,0], [0,0.5,0], [0.5,0.8,0], [1,0.5,0],[1,0,0]];
var curve11 = BEZIER(S0)(controls11);

var controls33 = [[0,0,14], [0,0.5,14], [0.5,0.8,14], [1,0.5,14],[1,0,14]];
var curve33 = BEZIER(S0)(controls33);

var contornopilastro= BEZIER(S1)([curve11,curve33]);
var pilastro1 = MAP(contornopilastro)(domain2);




var pilastro2 = R([1,2])([PI])(pilastro1)
var pilastro3= STRUCT([pilastro1,T([2])([14])(pilastro2)])

var pilastrok= 	T([0,1])([0.25,0.75])(pilastro3)

var pilastro =STRUCT([pilastrok,basepilastro,basepilastro1])



var fpilastro1=T([1,2])([29.5,7.3])(pilastro)	
var fpilastro2=T([0,1,2])([4.5,29.5,7.3])(pilastro)
var fpilastro3=T([0,1,2])([10.5,29.5,7.3])(pilastro)
var fpilastro4=T([0,1,2])([15,29.5,7.3])(pilastro)

var pilastri =STRUCT([fpilastro1,fpilastro2,fpilastro3,fpilastro4]);
DRAW(COLOR([1,1,0.65])(pilastri))




//pezzo sporgente facciata principale

var strato1=T([0,1,2])([0.2,29.5,21.5])(SIMPLEX_GRID([
	[16], 
	[1.5],				
	[0.5]						
]));

DRAW(COLOR([1,1,0.65])(strato1))

var strato2=T([1,2])([29.7,22])(SIMPLEX_GRID([
	[16.4], 
	[0.5],				
	[0.7]						
]));

DRAW(COLOR([1,1,0.65])(strato2))

var strato3=T([0,1,2])([-0.1,29.5,22.7])(SIMPLEX_GRID([
	[16.6], 
	[0.5],				
	[0.1]						
]));

DRAW(COLOR([1,1,0.65])(strato3))

var strato4=T([1,2])([29.7,22.8])(SIMPLEX_GRID([
	[16.4], 
	[0.5],				
	[1]						
]));

DRAW(COLOR([1,1,0.65])(strato4))

var strato5=T([0,1,2])([-0.1,29.7,23.9])(SIMPLEX_GRID([
	[16.6], 
	[0.5],				
	[0.6]						
]));

DRAW(COLOR([1,1,0.65])(strato5))

var strato6=T([0,1,2])([-1,29.8,24.5])(SIMPLEX_GRID([
	[18], 
	[0.5],				
	[0.6]						
]));

DRAW(COLOR([1,1,0.65])(strato6));

//triangolo facciata
var puntitrfacciata= [[0,0,0],[16,0,0],[8,0,4.5]];
var trfacciata =T([1,2])([29.9,25.1])(TRIANGLE_STRIP(puntitrfacciata));
DRAW(COLOR([1,0.8,0.4])(trfacciata))


//tetto extra frontale

var tettofr1 = R([0,2])([PI/6])(SIMPLEX_GRID([
	[11], 
	[10],				
	[1]						
]));



var tettofr2 = R([0,2])([PI])(SIMPLEX_GRID([
	[11], 
	[10],				
	[1]						
]));

var tettofr22= R([0,2])([-PI/6])(tettofr2)

var tettofr222= T([0,2])([0.45,0.85])(tettofr22)


var tettoextra =T([0,1,2])([7.5,29.8,30])(STRUCT([tettofr1,tettofr222]));
DRAW(COLOR([1,1,0.65])(tettoextra));





var tettofr3 = R([0,2])([PI/6])(SIMPLEX_GRID([
	[11], 
	[10],				
	[0.1]						
]));



var tettofr4 = R([0,2])([PI])(SIMPLEX_GRID([
	[11.2], 
	[10],				
	[0.1]						
]));

var tettofr44= R([0,2])([-PI/6])(tettofr4)

var tettofr444= T([0,2])([0.1,0.2])(tettofr44)
var tettoextra2 =T([0,1,2])([8,29.5,30.8])(STRUCT([tettofr3,tettofr444]));
DRAW(COLOR([0.8,0.4,0.2])(tettoextra2));

//finestre e porte standard

var finestraquadrata1=SIMPLEX_GRID([
	[2], 
	[-0.1,0.1],				
	[2]						
]);


var finestraquadrata2=SIMPLEX_GRID([
	[0.95], 
	[0.1],				
	[2]						
]);



var finestraquadrata3=SIMPLEX_GRID([
	[-1,1], 
	[0.1],				
	[2]						
]);


var squarewin=STRUCT([COLOR([0,0,0])(finestraquadrata1),COLOR([0,0.2,0])(finestraquadrata2),COLOR([0,0.2,0])(finestraquadrata3)])









//finestre e porte esterne  lato sx

var fin1= T([0,1,2])([-75,39.9,6])(squarewin)
var fin2=T([0,])([10])(fin1)
var fin3=T([0,])([15])(fin1)
var fin4=T([0,])([25])(fin1)
var fin5=T([0,])([35])(fin1)
var fin6=T([0,])([45])(fin1)
var fin7=T([0,])([50])(fin1)
var fin8=T([0,])([60])(fin1)

var porta = T([0,1,2])([-70,39.9,1])(SIMPLEX_GRID([
	[2.5], 
	[0.1],				
	[4]						
]));
DRAW(COLOR([0.8,0.4,0.2])(porta))

var porta1 = T([0])([50])(porta);
DRAW(COLOR([0.8,0.4,0.2])(porta1))

var fintot=STRUCT([fin1,fin2,fin3,fin4,fin5,fin6,fin7,fin8])
DRAW(fintot)


//finestre e porte esterne lato dx

var findx=T([0])([100])(fintot);
DRAW(findx)

var porta3 = T([0])([100])(porta);
DRAW(COLOR([0.8,0.4,0.2])(porta3))

var porta4 = T([0])([150])(porta);
DRAW(COLOR([0.8,0.4,0.2])(porta4))


//finestre centrali lato sx
var winr= R([0,1])([-(PI/2)])(squarewin)


var fin11= T([0,1,2])([-8.4,35,22])(winr)
var fin22=T([1])([8])(fin11)
var fin33=T([1])([16])(fin11)
var fin44=T([1])([24])(fin11)
var fintot1=STRUCT([fin11,fin22,fin33,fin44])
DRAW(fintot1)



//finestre centrali lato dx
var winr1= R([0,1])([PI/2])(squarewin)


var fin111= T([0,1,2])([25.3,35,22])(winr1)
var fin222=T([1])([8])(fin111)
var fin333=T([1])([16])(fin111)
var fin444=T([1])([24])(fin111)
var fintot2=STRUCT([fin111,fin222,fin333,fin444])
DRAW(fintot2)




//finestre lato dx torre

var fin1111= T([0,1,2])([98,35,12])(winr1)
var fin2222=T([1])([8])(fin1111)
var fin3333=T([1])([16])(fin1111)
DRAW(fin2222)
DRAW(fin3333)
var findue=T([2])([-5])(fin2222)
var fintre=T([2])([-5])(fin3333)
DRAW(findue)
DRAW(fintre)
var findu=T([2])([-5])(findue)
var fintr=T([2])([-5])(fintre)
DRAW(findu)
DRAW(fintr)





//finestre chiuse retro
var finretro = SIMPLEX_GRID([
	[2], 
	[0.1],				
	[3]						
]);


var finr1= T([0,1,2])([90,54.5,1.6])(finretro)
var finr2=T([0])([-10])(finr1)
var finr3=T([0])([-20])(finr1)
var finr4=T([0])([-30])(finr1)
var finr5=T([0])([-40])(finr1)
var finr6=T([0])([-50])(finr1)
var finr7=T([0])([-60])(finr1)
var finrtot=STRUCT([finr1,finr2,finr3,finr4,finr5,finr6,finr7])
DRAW(COLOR([0,0.2,0])(finrtot))

var finrh1= T([0,1,2])([90,54.5,11])(finretro)
DRAW(COLOR([0,0.2,0])(finrh1))
var finrh2= T([0,1,2])([-75,54.5,12])(finretro)
DRAW(COLOR([0,0.2,0])(finrh2))

var finr11= T([0,1,2])([90,54.5,6])(finretro)
var finr22=T([0])([-10])(finr11)
var finr33=T([0])([-20])(finr11)
var finr44=T([0])([-30])(finr11)
var finr55=T([0])([-40])(finr11)
var finr66=T([0])([-50])(finr11)
var finr77=T([0])([-60])(finr11)
var finrtot1=STRUCT([finr11,finr22,finr33,finr44,finr55,finr66,finr77])
DRAW(COLOR([0,0.2,0])(finrtot1))



var finestreretrototali= COLOR([0,0.2,0])(STRUCT([finrtot,finrtot1]))
var finrdestro= T([0])([-105])(finestreretrototali)
DRAW(finrdestro)







//persiane facciata principale
//basse
var persianelow1=T([0,1])([-6.6,29.9])(SIMPLEX_GRID([
	[1.5], 
	[0.1],				
	[-4.1,2]						
]));


var persianelow2=T([0,1])([-3,29.9])(SIMPLEX_GRID([
	[1.5], 
	[0.1],				
	[-4.1,2]						
]));



//medie
var persianecn1=T([0,1])([-6.6,29.9])(SIMPLEX_GRID([
	[1.5], 
	[0.1],				
	[-9.9,6.2]						
]));



var persianecn2=T([0,1])([-3,29.9])(SIMPLEX_GRID([
	[1.5], 
	[0.1],				
	[-9.9,6.2]						
]));



//alte

var persianeh1=T([0,1])([-6.6,29.9])(SIMPLEX_GRID([
	[1.5], 
	[0.1],				
	[-21.8,2]						
]));



var persianeh2=T([0,1])([-3,29.9])(SIMPLEX_GRID([
	[1.5], 
	[0.1],				
	[-21.8,2]						
]));


var persiane=STRUCT([persianelow1,persianelow2,persianecn1,persianecn2,persianeh1,persianeh2])

DRAW(COLOR([0,0.2,0])(persiane))


var persianedx= T([0])([25])(persiane);
DRAW(COLOR([0,0.2,0])(persianedx))








//scale retro e finestre 
var allretro= T([1])([20.5])(allingresso)

DRAW(allretro)

var vetroretro=T([0,1])([6,63.5])(SIMPLEX_GRID([
	[4.5], 
	[0.5],				
	[-7.2,11.2]						
]));

DRAW(COLOR([0,0.6,0.6])(vetroretro))

var pianodueretro=T([1])([63])(SIMPLEX_GRID([
	[-4.5,8], 
	[5],				
	[7.3]						
]));

DRAW(pianodueretro)

var pianodueretrolatosx=T([1])([63])(SIMPLEX_GRID([
	[-12.5,1], 
	[5],				
	[7.7]						
]));

DRAW(pianodueretrolatosx)
var pianodueretrolatodx=T([1])([63])(SIMPLEX_GRID([
	[-3.5,1], 
	[5],				
	[7.7]						
]));

DRAW(pianodueretrolatodx)


var grad1=T([1])([68])(SIMPLEX_GRID([
	[-3.5,10], 
	[10],				
	[0.75]						
]));


var grad2=T([1])([68])(SIMPLEX_GRID([
	[-3.5,10], 
	[9],				
	[-0.75,0.75]						
]));


var grad3=T([1])([68])(SIMPLEX_GRID([
	[-3.5,10], 
	[8],				
	[-1.5,0.75]						
]));


var grad4=T([1])([68])(SIMPLEX_GRID([
	[-3.5,10], 
	[7],				
	[-2.25,0.75]						
]));


var grad5=T([1])([68])(SIMPLEX_GRID([
	[-3.5,10], 
	[6],				
	[-3,0.75]						
]));


var grad6=T([1])([68])(SIMPLEX_GRID([
	[-3.5,10], 
	[5],				
	[-3.75,0.75]						
]));


var grad7=T([1])([68])(SIMPLEX_GRID([
	[-3.5,10], 
	[4],				
	[-4.5,0.75]						
]));


var grad8=T([1])([68])(SIMPLEX_GRID([
	[-3.5,10], 
	[3],				
	[-5.25,0.75]						
]));


var grad9=T([1])([68])(SIMPLEX_GRID([
	[-3.5,10], 
	[2],				
	[-6,0.75]						
]));

var gradall=STRUCT([grad1,grad2,grad3,grad4,grad5,grad6,grad6,grad7,grad8,grad9])
DRAW(gradall)