//Write a function that displays the menu with options to direct the user to specific functionality.

function displayMenu() {
    console.log('--- Patient Records Management System ---');
    console.log('1. Search for Patient Record');
    console.log('2. Add a New Record');
    console.log('3. Update Patient Record');
    console.log('Exit');
    rl.question('Select an option: ' , menuSelection);
}

//Write menuSelection function to initiate correct functionality based on user input.

function menuSelection(option) {
    switch (option) {
        case '1':
            searchRecords();
            break;
        case '2':
            addRecord();
            break;
        case '3':
            editRecord();
            break;
        case '4':
            exitProgram(); //Part of the main code block to close readline and the program.
            break;
        default:
            console.log('Invalid option. Please choose a valid option from the list.');
            displayMenu();
            break;
    }
}