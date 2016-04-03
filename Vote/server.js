var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.');
var fs = require('fs');
var votes = new Array(0,0);

fs.readFile('result.txt', {encoding: 'utf8'}, function (err, data) {
    if (err) throw err;
    if(data != 0){
        votes = data.split(',');
    }
    else{
        votes[0] = 0;
        votes[1] = 0;
    }
});

function accept(req, res) {
  if (req.url.indexOf("number") != -1) {
		var query = url.parse(req.url).query,
			params = querystring.parse(query);

		votes[params.number-1]++;
          fs.writeFile('result.txt',votes, function(err){
              if(err){
                  console.log(err);
              }
          });

		res.end(""+votes);
	} else {
    // иначе считаем это запросом к обычному файлу и выводим его
    file.serve(req, res); // (если он есть)
  }

}


// ------ этот код запускает веб-сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}