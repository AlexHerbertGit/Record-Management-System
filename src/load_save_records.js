//Write a function that will load the records from the json file into the program.

function loadRecords() {
    try {
        const data = fs.readFileSync('src/records.json');
        records = JSON.parse(data);
    } catch (error) {
        //Handles file read errors or empty file
        console.error('Error loading records:', error.message);
    }
}

//Write function that saves the updated records from user input into the json file.

function saveRecords() {
    try {
        fs.writeFileSync('src/records.json' , JSON.stringify(records));
    } catch (error) {
        console.error('Error saving records:', error.message);
    }
}