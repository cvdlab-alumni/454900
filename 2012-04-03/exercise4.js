/**
 * @author Fabio Ganci 454900
 */
/*
Reproduce a 3D model of one piece of furniture, at your choice,
and instance it one or more times inside the Pavillion.

Produce a colored version of the previous model.
 * **/


//come pezzo di arredamento ho creato una sedia particolare si trova in fondo alla pagina.



//definisco il pavimento tramite tanti pezzi e poi li riunisco in un'unica struttura dello stesso colore
var baseA = SIMPLEX_GRID([
	[-1, 8], 
	[-10, 12],				
	[1]						
]); 
var baseAtraslata = T([0, 1])([38, -6])(baseA);	

var baseB = SIMPLEX_GRID([
	[1], 
	[-1,1],				
	[1]						
]); 
var baseBtraslata= T([0, 1])([51, 4])(baseB);

var baseC = SIMPLEX_GRID([
	[-47, 5], 
	[-4, 1],				
	[1]						
]); 
var baseD = SIMPLEX_GRID([
	[-9, 12], 
	[-10, 7],				
	[1]						
]); 
var baseE = SIMPLEX_GRID([
	[39], 
	[1],				
	[1]						
]); 
var baseF = SIMPLEX_GRID([
	[-21, 15], 
	[-1, 16],				
	[1]						
]); 
var baseG = SIMPLEX_GRID([
	[-36, 3], 
	[-4, 13],				
	[1]						
]); 

//definisco la scala e la metto insieme alla struttura del pavimento
var scala= SIMPLEX_GRID([
	[-36, 3], 
	[-1, 3],				
	[0.16]						
]);
var scala1= SIMPLEX_GRID([
	[-36, 2.5], 
	[-1, 3],				
	[-0.16, 0.16]						
]);
var scala2= SIMPLEX_GRID([
	[-36, 2], 
	[-1, 3],				
	[-0.32,0.16]						
]);
var scala3= SIMPLEX_GRID([
	[-36, 1.5], 
	[-1, 3],				
	[-0.48,0.16]						
]);
var scala4= SIMPLEX_GRID([
	[-36, 1], 
	[-1, 3],				
	[-0.64,0.16]						
]);
var scala5= SIMPLEX_GRID([
	[-36, 0.5], 
	[-1, 3],				
	[-0.80,0.16]						
]);
var scalinata=STRUCT([scala,scala1,scala2,scala3,scala4,scala5]);  
var strutturafloor= COLOR([0.5,0.5,0.5])(STRUCT([scalinata,baseA,baseAtraslata,baseBtraslata,baseB,baseC,baseD,baseE,baseF,baseG]));


//definisco le piscine 

var piscina1 = SIMPLEX_GRID([
	[-1,20], 
	[-1,9],				
	[0.5]						
]); 

var piscina2 = SIMPLEX_GRID([
	[-47,4], 
	[-5,11],				
	[0.5]						
]); 

var strutturawaterpools= COLOR([0,1,1])(STRUCT([piscina1,piscina2]));
DRAW(strutturawaterpools);
//definisco i pilastri per sorreggere il tetto
var pilastro =T([0,1])([26,6.5])(SIMPLEX_GRID([
	REPLICA(3)([0.50,-5, 0.50]), 
	[0.50,-7,0.50],				
	[-1,4]						
]));

var strutturapilastri= STRUCT([pilastro]);



//definisco i muri di cemento alto, le linee più scure sulla planimetria
//muro sinistro
var wallsx1=SIMPLEX_GRID([
	[-1,7], 
	[-0.5, 0.5],				
	[-1,4]						
]); 

var wallsx2=SIMPLEX_GRID([
	[-1,0.4], 
	[-0.5, 21.5],				
	[-1,4]						
]); 


var wallsx3=SIMPLEX_GRID([
	[-1, 8], 
	[-21.5,0.5],				
	[-1,4]						
]);

var wallsx4=SIMPLEX_GRID([
	[-8.5, 0.5], 
	[-17,5],				
	[-1,4]						
]); 

var strutturawallsx= STRUCT([wallsx1,wallsx2,wallsx3,wallsx4]);



//definisco il muro destro

var walldx1=SIMPLEX_GRID([
	[-37.5,13.5], 
	[-15.5, 0.5],				
	[-1,4]						
]); 

var walldx2=SIMPLEX_GRID([
	[-50.5,0.5], 
	[-5, 11],				
	[-1,4]						
]); 


var walldx3=SIMPLEX_GRID([
	[-41.5, 9.5], 
	[-5, 0.5],				
	[-1,4]						
]);


var strutturawalldx=COLOR([0,0.2,0])(STRUCT([walldx1,walldx2,walldx3]));


//definisco i pezzi di muro sparsi nel Pavilion

var wallbig=SIMPLEX_GRID([
	[-7.5, 18.5], 
	[-15, 0.5],				
	[-1,4]						
]);

var wallmedium=SIMPLEX_GRID([
	[-25, 9], 
	[-7.2, 0.5],				
	[-1,4]						
]);

var wallshort=SIMPLEX_GRID([
	[-37, 5.2], 
	[-11.2 , 0.5],				
	[-1,4]						
]);

var strutturawallsize= STRUCT([COLOR([0.5,0.5,0.5])(wallbig),COLOR([0,0,0])(wallmedium),COLOR([0.6,0.6,0])(wallshort)]);

//definisco la panca 

var gambepanca=T([0, 1, 2])([6.8,14,1])(SIMPLEX_GRID([REPLICA(9)([-1.5,0.4]),[0.4],[0.4]]));

var panca=T([0, 1, 2])([8,14,1.4])(SIMPLEX_GRID([REPLICA(7)([2.30]),[0.4],[0.2]]));

var strutturapanca = COLOR([0.6,0.6,0])(STRUCT([gambepanca,panca]));


//definisco vetrate
var vetrodoppio=T([0])([30])(SIMPLEX_GRID([
	REPLICA(2)([-0.8,0.3]), 
	[-7.7 , 5.5],				
	[-1,4]						
]));

var vetrosingolo=SIMPLEX_GRID([
	[-29,10], 
	[-13.2 , 0.3],				
	[-1,4]						
]);
var infissivetrosingolo=T([0])([29])(SIMPLEX_GRID([
	REPLICA(5)([0.05, -1.95]), 
	[-13.3, 0.1],				
	[-1,4]	
]));
DRAW(T([1, 2])([0.2 ,6])(S([2])([-1])(COLOR([0.6,0.6,0.6])(infissivetrosingolo))));

var vetrofaccia=SIMPLEX_GRID([
	[-30,11.5], 
	[-5.2, 0.3],				
	[-1,4]	
]);	
var infissivetrofaccia=T([0])([30])(SIMPLEX_GRID([
	REPLICA(6)([0.05, -2.28]), 
	[-5.1, 0.1],				
	[-1,4]	
]));
DRAW(COLOR([0.6,0.6,0.6])(infissivetrofaccia));

var vetrolaterale=SIMPLEX_GRID([
	[-43 ,0.3], 
	[-6.8, 6.8],				
	[-1,4]	
]);	


var vetroporta=SIMPLEX_GRID([
	[-1.5 ,7], 
	[-17, 0.3],				
	[-1,4]	
]);
var infissivetroporta=T([0])([1.5])(SIMPLEX_GRID([
	REPLICA(3)([0.05, -1.80]), 
	[-16.9, 0.1],				
	[-1,4]	
]));

DRAW(COLOR([0.6,0.6,0.6])(infissivetroporta));

var strutturavetrate=COLOR([0,0.6,0.6])(STRUCT([vetrodoppio,vetrosingolo,vetrofaccia,vetrolaterale,vetroporta]));




//definisco il tetto piccolo

var tettosmallbelow=SIMPLEX_GRID([
	[-0.5,9], 
	[-13, 10],				
	[-5,0.5]	
]);	
var tettosmallmiddle=SIMPLEX_GRID([
	[-0.5,9], 
	[-13, 10],				
	[-5.5,0.1]	
]);	
var tettosmallabove=SIMPLEX_GRID([
	[-0.5, 9], 
	[-13, 10],				
	[-5.6,0.2]	
]);	


//definisco il tetto grosso

var tettobigbelow=SIMPLEX_GRID([
	[-25,22], 
	[-4, 13],				
	[-5,0.5]	
]);	
var tettobigmiddle=SIMPLEX_GRID([
	[-25,22], 
	[-4, 13],				
	[-5.5,0.1]	
]);	
	
var tettobigabove=SIMPLEX_GRID([
	[-25,22], 
	[-4, 13],				
	[-5.6,0.2]	
]);	

var strutturatetto=STRUCT([tettobigabove,tettosmallabove,
					COLOR([0,0,0])(tettosmallmiddle),
					COLOR([0,0,0])(tettobigmiddle),
					COLOR([1,1,1])(tettobigbelow),
					COLOR([1,1,1])(tettosmallbelow)
]);


//definisco la struttura completa con tutte le strutture dei componenti
var pavilion = STRUCT([strutturatetto,strutturavetrate,strutturapanca,
					strutturawallsize,strutturawalldx,strutturawallsx,
					strutturapilastri,strutturafloor]);


DRAW(pavilion);






//la sedia creata come oggetto di arredamento

var sedile= CUBOID([0.2, 0.8, 2])
var torusSolid =TORUS_SOLID([0.1,0.9])([3,6,10]);
var torusTraslato = T([2])([2])(torusSolid);
var sedia = STRUCT([sedile,torusSolid,torusTraslato])

var sediafuture1= DRAW(COLOR([0,0,1])(T([0,1,2])([22,1,2.1])(ROTATE(1)(3*PI/2)(sedia))))	
var sediafuture2= DRAW(COLOR([0,0.60,0.60])(T([0,1,2])([25,1,2.1])(ROTATE(1)(3*PI/2)(sedia))))
var sediafuture3= DRAW(COLOR([0,1,0])(T([0,1,2])([28,1,2.1])(ROTATE(1)(3*PI/2)(sedia))))	
var sediafuture4= DRAW(COLOR([0,0,0])(T([0,1,2])([31,1,2.1])(ROTATE(1)(3*PI/2)(sedia))))

