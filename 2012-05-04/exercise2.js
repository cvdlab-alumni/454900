//fusoliera,l'elica e le ruote le ho inserite nel exercise4
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

DRAW(fusoliera)