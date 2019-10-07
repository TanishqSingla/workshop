//little flavour of nodejs

const fs = require('fs');

//save in file system
const saveToFile = () => {
    const dataJSON = JSON.stringify([{
        "name":"aniket",
        "roll":"1710991094"
    }])
    fs.writeFileSync('notes.json', dataJSON);
}

//always use try catch while reading from file because node throws error if file dosenot exist
const readFromFile = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        console.log(dataJSON);
    } catch (e) {
        return []
    }
}

saveToFile();
readFromFile();