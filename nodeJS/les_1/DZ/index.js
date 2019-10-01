const fs = require('fs');


exports.criatedDir = function (NameDir) {
    fs.mkdir(`./nodeJS/les_1/DZ/${NameDir}`, err => {
        if (!err){
            console.log('ok');
        }
    })
};


exports.createdStud = function (whereFold, nameFoldersStudents, nameFile, dateStudents) {
    fs.mkdir(`./nodeJS/les_1/DZ/${whereFold}/${nameFoldersStudents}`, err => {
        if (!err) {
            console.log('createdStudFold!!!!!!!!!!!!!!!!!!!');
        }
    });

    setTimeout(()=> {
        let writeStreamFile = fs.createWriteStream(`./nodeJS/les_1/DZ/${whereFold}/${nameFoldersStudents}/${nameFile}.txt`);
        writeStreamFile.write(JSON.stringify(dateStudents))
    },0);

};



// k.hjhv










