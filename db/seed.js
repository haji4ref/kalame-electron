let fs = require('fs');

let files = fs.readdirSync('./scripts');

files.forEach((e) => {
    if (e.includes('.js'))
        require(`./scripts/${e}`);
});