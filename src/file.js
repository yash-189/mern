const fs = require('fs');
const path = require('path');

const dir = './'; 

fs.readdir(dir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    console.log(file);
  });
});
