
let trace = '';
let provinces = '';

const fs = require("fs");

fs.readFile('provinces.JSON', 'utf8', (err, data) => {

 		if (err) throw err;
 		provinces = JSON.parse(data);
 		//console.log(provinces);

});

const contenu_objet_json = (o) => {

	trace = '<table>';

	for (let p in o) { 

		trace += '<tr><th>' + p + '</th>';
		trace += '<th>' + o[p] + '</th></tr>'; 

	} 

	trace += '</table>';
	//console.log(trace);

}

const http = require("http"); 
http.createServer((request, response) => 
{

	contenu_objet_json(provinces);
	response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
 	response.write(trace); 
 	response.end(); 


}).listen(3000);


