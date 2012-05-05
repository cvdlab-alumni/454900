//Assemble the various assemblies and/or subassemblies into a single model.
//struttura ali

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);

var pa  =[[10,0,-3],[3,5,-3],[3,-3,-3],[5,2,-3],[10,0,-3]];
var pb  = [[10,0,-2.5],[2,5,-2.5],[2,-3,-2.5],[5,2,-2.5],[10,0,-2.5]];
var p0  = [[10,0,0],[0,5,0],[0,-3,0],[5,2,0],[10,0,0]];

var p1 =  [[9.3,0,1.25],[0,5,1.25],[0,-3,1.25],[5,2,1.25],[9.3,0,1.25]];

var p2 =  [[9.5,0,2.5],[0,5,2.5],[0,-3,2.5],[5,2,2.5],[9.5,0,2.5]];

var p3 =  [[8.6,0,5],[0,5,5],[0,-3,5],[5,2,5],[8.6,0,5]];

var p4 =  [[9,0,7.5],[0,5,7.5],[0,-3,7.5],[5,2,7.5],[9,0,7.5]];

var p5  = [[7.9,0,10],[0,5,10],[0,-3,10],[5,2,10],[7.9,0,10]];

var p6  = [[8.5,0,12.5],[0,5,12.5],[0,-3,12.5],[5,2,12.5],[8.5,0,12.5]];

var p7  = [[7.2,0,15],[0,5,15],[0,-3,15],[5,2,15],[7.2,0,15]];

var p8  = [[8,0,17.5],[0,5,17.5],[0,-3,17.5],[5,2,17.5],[8,0,17.5]];

var p9  = [[6.5,0,20],[0,5,20],[0,-3,20],[5,2,20],[6.5,0,20]];

var p10 = [[7.5,0,22.5],[0,3,22.5],[0,-3,22.5],[5,2,22.5],[7.5,0,22.5]];

var p11 = [[6,0,25],[1.5,2,25],[1.5,-2,25],[5,0,25],[6,0,25]];

var p12 = [[5.5,0,26.25],[3,0.5,26.25],[3,-1,26.25],[5,0,26.25],[5.5,0,26.25]];

var p13 = [[4,0,27.5],[4,0.1,27.5],[4,-0.1,27.5],[4,0,27.5],[4,0,27.5]];


var controls = AA(BEZIER(S0))([pa,pb,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13]);

var curves = STRUCT(CONS(AA(MAP)(controls))(domain1));




var wing = BEZIER(S1)(controls);
var surf = T([2])([-6])(S([2])([-1])(MAP(wing)(domain2)));

var ala2 =R([0,1])([2*PI])(surf);
var ala1 = MAP(wing)(domain2);
var ali= T([0,1,2])([10,6.8,3.5])(STRUCT([ala1,ala2]));








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
var controlscentro = [[0,6,0],[5,10,0],[15,11,0],[12,-1,0],[2.5,-2,0]];
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



var stabilizzatorecompleto=T([0,1,2])([37.5,8,2.5])(STRUCT([stabilizzatoreverticale,stabilizzatoreorizzontale]));





//FUSOLIERA

var domain1 = INTERVALS(1)(30);
var domain2 = DOMAIN([[0,1],[0,1]])([15,30]);


var p0 = [[40,8,0],[18,8,-5],[6,7,-5],[-1,3,0],[8,-2,-5],[18,3,-5],[40,6,0]];
var p1 = [[40,8,0],[18,8,0],[6,7,0],[-1,3,0],[8,-2,0],[18,3,0],[40,6,0]];
var p2 = [[40,8,5],[18,8,5],[6,7,5],[-1,3,0],[8,-2,5],[18,3,5],[40,6,5]];


var controls = AA(BEZIER(S0))([p0,p1,p2]);
var c1 = BEZIER(S1)(controls);
var body= MAP(c1)(domain2);



var controls1dx = [[40,6,0],[40,8,0],[0,2,0],[0.01,0,0]]; // p0, p1, t0, t1
var controls1sx = [[40,6,5],[40,8,5],[0,2,0],[0.01,0,0]]; // p0, p1, t0, t1

var c1dx = CUBIC_HERMITE(S0)(controls1dx);
var curve1dx = MAP(c1dx)(domain1);

var c1sx = CUBIC_HERMITE(S0)(controls1sx);
var curve1sx = MAP(c1sx)(domain1);

var bezierdx = BEZIER(S0)(p0);
var curve2dx = MAP(bezierdx)(domain1);


var beziersx = BEZIER(S0)(p2);
var curve2sx = MAP(beziersx)(domain1);


//lato destro della fusoliera
var latodx = BEZIER(S1)([c1dx,bezierdx]);
var surfacedx = MAP(latodx)(domain2);
//lato sinistro fusoliera 
var latosx = BEZIER(S1)([c1sx,beziersx]);
var surfacesx = MAP(latosx)(domain2);

var posteriore =SIMPLEX_GRID([
	[-40,0.01], 
	[-6,2],				
	[5]						
]); 


var fusoliera=STRUCT([body,surfacesx,surfacedx,posteriore]);




//ruote 


var asta= CUBOID([0.2, 0.2, 5])
var ruota =TORUS_SOLID([0.1,1])([3,20,15]);
var ruota2 = T([2])([5])(ruota);
var gomme =T([0,1,2])([15,2.5,-2])(STRUCT([asta,COLOR([0,0,0])(ruota),COLOR([0,0,0])(ruota2)]))



//motore

var mp0 = [[7,0,0],[0,0,0],[0,-3,0],[5,-2,0],[7,0,0]];
var mp1 = [[7,0,1],[0,3,1],[0,-3,1],[5,-2,1],[7,0,1]];
var mp2 = [[7,0,3],[0,15,3],[0,-3,3],[5,-2,3],[7,0,3]];
var mp3 = [[7,0,5],[0,3,5],[0,-3,5],[5,-2,5],[7,0,5]];
var mp4 = [[7,0,6],[0,0,6],[0,-3,6],[5,-2,6],[7,0,6]];


var mcontrols = AA(BEZIER(S0))([mp0,mp1,mp2,mp3,mp4]);


var mcurves = STRUCT(CONS(AA(MAP)(mcontrols))(domain1));




var ming = BEZIER(S1)(mcontrols);
var motore = T([0,1,2])([6.2,5,-2.85])(MAP(ming)(domain2));




//elica

var asta= T([0,1])([-0.2,-0.2])(CUBOID([0.4, 0.4, 3]))
var perno =TORUS_SOLID([0.1,0.4])([3,10,10]);
var e0 = [[0.2,-0.5,0],[0.2,0.5,0],[1,0,0],[-1,0,0]];
var ce0= CUBIC_HERMITE(S0)(e0);
var curvae0 = MAP(ce0)(domain1);
var e1 = [[1,-0.5,0],[10,-4,0],[10,5,0],[3,1,0],[1,0.5,0]];
var ce1= BEZIER(S0)(e1);
var curvae1 = MAP(ce1)(domain1);

var pala = BEZIER(S1)([ce0,ce1]);
var surfacepala = MAP(pala)(domain2);
var surfacepala2 =S([0,1])([-1,-1])(MAP(pala)(domain2));
var elica =COLOR([0,0,0])(STRUCT([perno,asta,surfacepala,surfacepala2]));

var elicacompleta=T([0,1])([8,6])(R([0,2])([PI/2])(elica));










//aereo finale
var electricwren=STRUCT([motore,gomme,elicacompleta,ali,fusoliera,stabilizzatorecompleto]);

DRAW(electricwren);