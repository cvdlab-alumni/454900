//STABILIZZATORI
//modello stabilizzatore orizzontale
var pezzorettangolo = SIMPLEX_GRID([
	[2.5], 
	[0.1],				
	[7.5]						
]); 
var pezzoquadrato = SIMPLEX_GRID([
	[-2.5,2.5], 
	[0.1],				
	[-2.5,5]						
]); 
var pezzobliquo =T([0,2])([1,1.5])(R([0,2])([PI/4])(SIMPLEX_GRID([
	[2.1], 
	[0.1],				
	[3.5]
]))); 		

var strutturao1 = STRUCT([pezzorettangolo,pezzoquadrato,pezzobliquo]);
var strutturao2 = S([2])([-1])(STRUCT([pezzorettangolo,pezzoquadrato,pezzobliquo]));

stabilizzatoreorizzontale= STRUCT([strutturao1,strutturao2]);


//modello stabilizzatore verticale
var pezzorettangoloverticale =T([2])([-0.05])(SIMPLEX_GRID([
	[2.5], 
	[6],				
	[0.08]						
])); 


//parte tonda della coda
var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

var controls1sx = [[0,6,-0.05],[2.5,0,-0.05],[2.5,0,-0.05],[0,-2,0]]; // p0, p1, t0, t1
var controlscentro = [[0,6,0],[5,10,0],[15,11,0],[12,-2,0],[2.5,-4,0]];
var controls1dx = [[0,6,0.05],[2.5,0,0.05],[2.5,0,0.05],[0,-2,0]]; // p0, p1, t0, t1

var c1sx = CUBIC_HERMITE(S0)(controls1sx);
var curve1 = MAP(c1sx)(domain1);
var c2 = BEZIER(S0)(controlscentro);
var curve2 = MAP(c2)(domain1);
var c1dx = CUBIC_HERMITE(S0)(controls1dx);
var curve1dx = MAP(c1dx)(domain1);

var s12sx = CUBIC_HERMITE(S1)([c1sx,c2,[0,0,-0.05],[0,0,-0.05]]);
var surface12sx = MAP(s12sx)(domain2);
var s12dx = CUBIC_HERMITE(S1)([c1dx,c2,[0,0,0.05],[0,0,0.05]]);
var surface12dx = MAP(s12dx)(domain2);

var stabilizzatoreverticale= STRUCT([pezzorettangoloverticale,surface12dx,surface12sx]);



var stabilizzatorecompleto=STRUCT([stabilizzatoreverticale,stabilizzatoreorizzontale]);

DRAW(stabilizzatorecompleto);