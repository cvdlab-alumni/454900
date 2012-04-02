var drawToroid = function (rex, rin, n, m, color) {

	var r1 = (rex - rin)/2;
	var r2 = (rex - r1);

	var toroidDomain = DOMAIN([[0, 2*PI],[0, 2*PI]])([n,m]);

	var mappingToroid = function (p) {
		var a = p[0];
		var b = p[1];

		var x = (r2 + (r1 * COS(a))) * SIN(b);
		var y = (r2 + (r1 * COS(a))) * COS(b);
		var z = r1 * SIN(a);

		return [x, y, z]; 
	}

	var mappedToroid = MAP(mappingToroid)(toroidDomain);

	COLOR(color)(mappedToroid);
	DRAW(mappedToroid);

	return mappedToroid; 
}
var drawSphere = function (r, m, color) {
	// in cui r = raggio, m = risoluzione, color = [r,g,b];

	var sphereDomain = DOMAIN([[0, PI],[0, 2*PI]])([m, 2*m]);

	var traslateDomain = function (p) {  //Prima traslo il dominio
		var u = p[0];
		var w = p[1];

		return [u-(PI/2), w];
	}

	var traslatedDomain = MAP(traslateDomain)(sphereDomain);

	var mappingSphere = function (p) {
		var a = p[0];
		var b = p[1];

		var x = r * COS(a) * SIN(b);  //Coordinate x ed y invertite per vedere bene il colore esterno
		var y = r * COS(a) * COS(b);
		var z = r * SIN(a);
		return [x, y, z];
	}

	var mappedSphere = MAP(mappingSphere)(traslatedDomain);

	COLOR(color)(mappedSphere);
	DRAW(mappedSphere);

	return mappedSphere; //restituisco la sfera in modo da poterla gestire con le funzioni di visualizzazione
}

drawToroid(5, 2, 50, 50, [0,1,0]);
drawSphere(2, 50, [0,0,1]);
drawSphere(2, 40, [0,1,0]);