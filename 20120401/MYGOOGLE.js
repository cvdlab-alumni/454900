// X ROSSO Y VERDE Z BLU
//Quando andiamo a creare la struttura dobbiamo ragionare per parti piccole che si ripetono tramite il metodo replica
//gli assegno un valore negativo perchè corrisponde ad un spazio vuoto.mette la distanza corretta tra un pezzo e un altro senza però graficarlo 
//inizio disegnando i pilastri
var pillars = SIMPLEX_GRID([
	REPLICA(3)([0.15,-6*2.4,0.15]), //x replica viene soltanto su x
	[0.15,-6*2.4,0.15],				//y
	[1.5,3,3]						//z
]);

//sulla dimensione delle y ora abbiamo solo spazi pieni
var beams = SIMPLEX_GRID([
	REPLICA(3)([0.15,-6*2.4,0.15]), //replica viene applicato solo sul componente X   il n.negativo la distanza tra un componente e un altro
	[14.7], //l'altezza del componente in Y (0.15 + 6*2.4 + 0.15)                     la larghezza del pezzo
	[-7.5,1.5] //-(1.5 + 3 + 3)                                                       -7,5=l'altezza da gli ass. cartesiani e 1,5=l'altezza del componente
]);
//tramite la variabile steelFrames costruisco una struct= è una struttura che gestisce più plasm.model tramite un array
var steelFrames = COLOR([0.2,0.2,0.2])(STRUCT([pillars,beams])); 

//andiamo ad aggiungere anche i solai

var floors = SIMPLEX_GRID([
	REPLICA(3)(14.7),
	[-0.15,14.4,-0.15],
	[-1.2,0.3,-2.7,0.3,-2.7,0.3]
]);

//abbiamo aggiunto i piani a sbalzo laterali
//la trasformazione di scala con coefficiente negativo provoca la creazione dell'ombra dove non ci dovrebbe essere 
//cantileverFloor rappresenta lo spazio laterale dei solai
var cantileverFloor = SIMPLEX_GRID([
	[0.15,2*2.4,0.15],
	[-0.15,14.4,-0.15],
	[-1.2,0.3,-2.7,0.3,-2.7,0.3]
]);
//cantileverPillars è il pilastro che sorregge i solai esterni
var cantileverPillars = SIMPLEX_GRID([
	[0.15],
	[0.15,-14.4,0.15],
	[1.5,3,3]
]);
//cantileverBeams è il pezzo superiore che esce dalla struttura
var cantileverBeams = SIMPLEX_GRID([
	[0.15],
	[14.7],
	[-7.5,1.5]
]);
//dopo aver costruito tutti i pezzi singoli della struttura laterlae , li riuniamo in un'unica struct=sbalzo+trave+beams 
var cantilever = STRUCT(
	[cantileverFloor,cantileverPillars,cantileverBeams]
);
//applicando S (simplesso) su un valore negativo quando lo ribalto mi restituisce l'ombra nera sulla figura diversamente da come sarebbe nella realtà
var cantilever1 = S([0])([-1])(cantilever);
var cantilever2 = T([0])([3*14.7])(cantilever);
//ora tramite queste grid andiamo a costruire la facciata delle finestre

var grid1 = SIMPLEX_GRID([ [-0.15, 0.05, -2.3, 0.05], [0.15], [1.5,3,3] ]);

var grid2 = SIMPLEX_GRID([ [-0.15, -0.05, 2.3, -0.05], [0.15], [0.3, -0.9, 0.3,-2.95,0.05,-2.7,0.3] ]);

var grid3 = SIMPLEX_GRID([ [-0.15, -0.05, -1.125, 0.05, -1.125,  -0.05], [0.15], [-0.3, 0.9, -0.3, 2.95,0.05] ]);

var panel = SIMPLEX_GRID([ [-0.15, -0.05, 1.125, -0.05, 1.125,  -0.05], [-0.1,0.05], [-0.3, 0.9, -0.3, 2.95/2] ]);
//costruiamo la struttura della finestra e poi tramite il frame costruiamo l'intera facciata assegnandogli una struttura e un colore
var grid = COLOR([0.2,0.2,0.2])(STRUCT([grid1,grid2,grid3]));
var frame = function(color) {return STRUCT([ COLOR(color)(panel), grid])};
var frameGroup = function(number,color) {return STRUCT( REPLICA(number)([ frame(color), T([0])([2.4]) ]))};

var colors = [[1,0,0],[0,1,0],[0,0,1],[0,1,1],[1,0,1],[1,1,0]];
var frames = STRUCT([
	frameGroup(3,colors[3]), T([0])([3*2.4]),
	frameGroup(3,colors[3]), T([0])([3*2.4]), T([0])([0.3]),
	frameGroup(3,colors[3]), T([0])([3*2.4]),
	frameGroup(3,colors[3]), T([0])([3*2.4]), T([0])([0.3]),
	frameGroup(3,colors[3]), T([0])([3*2.4]),
	frameGroup(3,colors[3])
]);

var backFrames = T([1])([14.7])(S([1])([-1])(frames));



//cose da fare :vetrate,le porte d'ingresso, l'ultimo piano, gli scalini

var structMansarda = SIMPLEX_GRID([REPLICA(4)([2.4]), [10], [0.15, -1.2, 0.15]]);
var pilarsMansarda = SIMPLEX_GRID([REPLICA(4)([0.15, -2.1, 0.15]),[10], [1.5]]);
var telaioFinMansarda = SIMPLEX_GRID([REPLICA(4)([-0.15, -1.0475, 0.05, -0.15, -1.0475]), [0.05], [-0.15, 1.2, 0.15]]);
var finestra = SIMPLEX_GRID([REPLICA(4)([-0.15, 2.1, -0.15]), [0.05], [-0.15, 1.2, -0.15]]);
COLOR([0,1,1])(finestra);
var mansarda = STRUCT([T([0])([17.4]),T([1])([4.7]),T([2])([7.5]), 
		structMansarda, pilarsMansarda, telaioFinMansarda, finestra, 
		T([1])([9.95]), telaioFinMansarda, finestra]);



‎//funzione per definire la scalinata 
var scale = function (n, z, x, y, t, h){
	var elementi = [];
	for (var i =0; i<=n; i++){
		var gradino = CUBOID([x, y, z]);
		elementi[i] =gradino;
		y= y-t;
		z= z+h;
		}
	var scalinata= STRUCT(elementi);
	return scalinata;
	};

//pilastri per la scalinata 
var pillarstairs = SIMPLEX_GRID([
	[-14.7, 0.5, -13.9, 0.5], 
	[-14.85, 0.5, -8, 0.5],				
	[1]						
]);

//siccome i pilastri me li disegna dietro usa la traslazione e la traslazione di scala 
var pilastrigradini = T([1])([14.7])(S([1])([-1])(pillarstairs));

//DRAW(pilastrigradini);

//base per le scale 
var stairsbase= SIMPLEX_GRID([
	[-14.7, 14.9],     
	[-14.85, 9],				
	[-1, 0.15]						
]);
var basescala = T([1])([14.7])(S([1])([-1])(stairsbase));



//scale utilizzate nell'ingresso
var sottostairs = scale(4, 0.1625, 5, 3, 0.75, 0.1625);
var sottoscala = DRAW(T([0, 1, 2])([20 , -9, 0.3])(S([1])([-1])(sottostairs)));
var soprascala = DRAW(T([0, 2])([20, 1])(S([1])([-1])(sottostairs)));

var ingresso = COLOR([0.2,0.2,0.2])(STRUCT([pilastrigradini,basescala,soprascala,sottoscala]));


DRAW(STRUCT([ steelFrames,floors,cantilever1,cantilever2,frames,backFrames, mansarda, ingresso]));