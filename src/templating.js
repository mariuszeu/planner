var fs = require('fs'); //moduł potrzebny do odczytywanie plików z widokami

//view - nazwa pliku z widokiem
//params - parametry przekazywane do widoku
//httpCode - kod http jaki ma być zwrócony
var render = function(response, view, params, httpCode){
    fs.readFile(view, 'utf8', function(err, data){
        if(err){
            console.log(err);
            return;
        }

        params = params||{}; //jeśli params nie został podany, to wstaw pusty obiekt
        httpCode = httpCode||200; //jeśli kod http nie został podany, to przypisz 200

        for(var key in params){
            data = data.replace(new RegExp('@'+key+'@', 'g'), params[key]);
        }

        response.writeHead(httpCode, {'Content-type': 'text/html; charset=utf-8'});
        response.write(data);
        response.end();
    });
};

exports.render = render;