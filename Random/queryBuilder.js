const fs = require('fs');
const readline = require('readline');
const path = require('path');
  
const queryPath = path.join(__dirname, 'query.txt');
const file = readline.createInterface({
    input: fs.createReadStream(queryPath),
    output: process.stdout,
    terminal: false
});


const queryResultPath = path.join(__dirname, 'queryResult.txt');

fs.unlink(queryResultPath, (err) => {
    if (err)
      console.log(err);
  });
  
// Printing the content of file line by
//  line to console by listening on the
// line event which will triggered
// whenever a new line is read from
// the stream
file.on('line', (line) => {
    //console.log(line);
    if(line.indexOf("'UPDATED_BY_CRAWLER'=") == -1 && line.indexOf("`partition_0` string,") == -1 ){

        fs.appendFileSync(queryResultPath, '"'+line + `\\n"+\n`, (err) => {
            if (err) {
            console.log(err);
            }
        });
    }
});