//Validation is here so it can be accessed at anytime during program run time.

function validateInput(field, value) {
    switch (field) {
      case 'id':
        // Validates ID format (integer)
        if (!Number.isInteger(Number(value))) {
          return 'id';
        }
        break;
      case 'name':
      case 'gender':
      case 'job':
        // Validates the name, gender, and job fields as they all require the same format (no numbers or special characters)
        if (!/^[A-Za-z\s]+$/.test(value)) {
          return field;
        }
        break;
      case 'email':
        // Validate the email formatting
        if (!/\S+@\S+\.\S+/.test(value)) {
          return 'email';
        }
        break;
      case 'dob':
        // Validate date of birth format (YYYY-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          return 'dob';
        }
        break;
      case 'phone':
        // Validate phone number formatting.
        if (!/^\d{10}$/.test(value)) {
          return 'phone';
        }
        break;
      default:
        // Handles unrecognizable fields
        break;
    }
    return '';
  }

const readline = require('readline');
const fs = require('fs');
// Class method to create a default JSON object format for any records being saved into JSON file.
class PatientRecord {
  constructor(id, name, gender, email, dob, phone, job) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.email = email;
    this.dob = dob;
    this.phone = phone;
    this.job = job;
  }
}
//Global array for temp saving of record inputs
let records = [];

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

//Initate readline module.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Displays menu in terminal.
function displayMenu() {
  console.log('--- Patient Records Management System ---');
  console.log('1. Search for Patient Record');
  console.log('2. Add a New Record');
  console.log('3. Update Patient Record');
  console.log('4. Exit Program');
  rl.question('Select an option: ' , menuSelection);
}

//menuSelection function to initiate correct functionality based on user input.

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
// Search records function.
function searchRecords() {
  console.log('--- Search Records ---');
  rl.question('Enter Patient Information to Search (Name or ID number): ', searchQuery => {
      const filteredRecords = records.filter(record => {
         //This will perform a case-insensitive search through records array
         const idMatch = record.id.toLowerCase().includes(searchQuery.toLowerCase());
         const nameMatch = record.name.toLowerCase().includes(searchQuery.toLowerCase());
         const genderMatch = record.gender.toLowerCase().includes(searchQuery.toLowerCase());
         const emailMatch = record.email.toLowerCase().includes(searchQuery.toLowerCase());
         const dobMatch = record.dob.toLowerCase().includes(searchQuery.toLowerCase());
         const phoneMatch = record.phone.toLowerCase().includes(searchQuery.toLowerCase());
         const jobMatch = record.job.toLowerCase().includes(searchQuery.toLowerCase());
         return idMatch|| nameMatch || genderMatch || emailMatch || dobMatch || phoneMatch || jobMatch;
         //This converts and search query to lowercase to ensure match is found. returns any of the results based on search query.
      });
        //Displays the record that has been searched.
      if (filteredRecords.length > 0) {
          console.log ('--- Search Results ---');
          filteredRecords.forEach((record, index) => {
              console.log(`ID: ${record.id}`);
              console.log(`Name: ${record.name}`);
              console.log(`Gender: ${record.gender}`);
              console.log(`Email: ${record.email}`);
              console.log(`DOB: ${record.dob}`);
              console.log(`Phone: ${record.phone}`);
              console.log(`Job: ${record.job}`);
              console.log('-------------------');
              displayMenu();
          });
      } else {
          console.log('No record found.');
          displayMenu();
      }

  });
}
// Add a new record function
function addRecord() {
    console.log('--- Add New Record ---');
    //Input prompt for patient ID and validation
    rl.question('Enter New Patient ID: ', (id) => {
      const idValidation = validateInput('id', id);
      if (idValidation !== '') {
        console.log('Invalid Input, please try again');
        return addRecord();
      } //Input prompt for patient Name and validation
      rl.question('Enter New Patient Name: ', (name) => {
        const nameValidation = validateInput('name', name);
        if (nameValidation !== '') {
          console.log('Invalid Input, please try again');
          return addRecord();
        } // Input prompt for Patient Gender and validation
        rl.question('Enter New Patient Gender: ', (gender) => {
          const genderValidation = validateInput('gender', gender);
          if (genderValidation !== '') {
            console.log('Invalid Input, please try again');
            return addRecord();
          } // Input prompt for Patient Email and validation
          rl.question('Enter New Patient Email: ', (email) => {
            const emailValidation = validateInput('email', email);
            if (emailValidation !== '') {
              console.log('Invalid Input, please try again');
              return addRecord();
            } // Input prompt for Patient DOB and validation
            rl.question('Enter New Patient DOB: ', (dob) => {
              const dobValidation = validateInput('dob', dob);
              if (dobValidation !== '') {
                console.log('Invalid Input, please try again');
                return addRecord();
              } // Input prompt for Patient Phone number and validation.
              rl.question('Enter New Patient Phone (e.g 0213456789): ', (phone) => {
                const phoneValidation = validateInput('phone', phone);
                if (phoneValidation !== '') {
                  console.log('Invalid Input, please try again');
                  return addRecord();
                } //Input prompt for Patient Job and validation
                rl.question('Enter New Patient Job: ', (job) => {
                  const jobValidation = validateInput('job', job);
                  if (jobValidation !== '') {
                    console.log('Invalid Input, please try again');
                    return addRecord();
                  }
                  // Parsing all of the inputs into patient record class for JSON formating before saving.
                  const record = new PatientRecord(id, name, gender, email, dob, phone, job);
                  records.push(record);
                  saveRecords();
                  console.log('New Record added successfully!');
                  displayMenu();
                });
              });
            });
          });
        });
      });
    });
  }
    //Edit and Update existing patient record.
    function editRecord() {
        console.log('--- Edit and Update Patient Record ---');
        rl.question('Enter the Patient ID of the record you want to edit: ' , recordID => {
            const record = records.find(record => record.id === recordID);
            //Uses the .find method to search the records array for the specific ID number that was entered and returns the current record information.
    
            if (record) {
                console.log('--- Current Record Details ---');
                console.log(`ID: ${record.id}`);
                console.log(`Name: ${record.name}`);
                console.log(`Gender: ${record.gender}`);
                console.log(`Email: ${record.email}`);
                console.log(`DOB: ${record.dob}`);
                console.log(`Phone: ${record.phone}`);
                console.log(`Job: ${record.job}`);
                console.log('---------------------');
                // Input prompt for updated name and validation
                rl.question('Enter the updated name: ' , name => {
                    const nameValidation = validateInput('name', name);
                        if (nameValidation) {
                        console.log('Invalid Input, please try again');
                        return editRecord();
                } //Input prompt for updated gender and validation
                    rl.question('Enter the updated gender: ' , gender => {
                        const genderValidation = validateInput('gender', gender);
                            if (genderValidation) {
                            console.log('Invalid Input, please try again');
                            return editRecord();
                    } // Input prompt for updated email and validation
                        rl.question('Enter the updated Email: ' , email => {
                            const emailValidation = validateInput('email', email);
                                if (emailValidation) {
                                console.log('Invalid Input, please try again');
                                return editRecord();
                        } // Input prompt for updated DOB and validation
                            rl.question('Enter the updated DOB: ' , dob => {
                                const dobValidation = validateInput('dob', dob);
                                    if (dobValidation) {
                                    console.log('Invalid Input, please try again');
                                    return editRecord();
                            } // Input prompt for updated Phone number and validation
                                rl.question('Enter the Updated Phone: ' , phone => {
                                    const phoneValidation = validateInput('phone', phone);
                                        if (phoneValidation) {
                                        console.log('Invalid Input, please try again');
                                        return editRecord();
                                } // Input prompt for updated Job and validation
                                    rl.question('Enter the updated Job: ' , job => {
                                        const jobValidation = validateInput('job', job);
                                            if (jobValidation) {
                                            console.log('Invalid Input, please try again');
                                            return editRecord();
                                    } // Assigns new information to records fields.
                                        record.name = name;
                                        record.gender = gender;
                                        record.email = email;
                                        record.dob = dob;
                                        record.phone = phone;
                                        record.job = job;
                                        //Saves new information to JSON file
                                        console.log('Record updated successfully!');
                                        saveRecords();
                                        displayMenu();
                                    });
                                });
                            });
                        });
                    });
                });
            } else {
                console.log('Record Not Found')
                displayMenu();
            }
        });
    }
//Exit program function

function exitProgram() {
  console.log('Exiting program...');
  rl.close();
}

loadRecords();
displayMenu();
