//ala singola
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
var surf = MAP(wing)(domain2);
DRAW(surf);

