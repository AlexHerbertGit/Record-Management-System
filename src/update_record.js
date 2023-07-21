//Function that will handle editing and updating patient records when searched.

function editRecord() {
    console.log('--- Edit and Update Patient Record ---');
    rl.question('Enter the Patient ID of the record you want to edit; ' , recordID => {
        const record = records.find(record => record.id === recordID);
        //Uses the .find method to search the records array for the specific ID number that was entered and retuns the record.

        if (record) {
            console.log('--- Current Record Details ---');
            console.log(`ID: ${record.id}`);
            console.log(`Name: ${record.name}`);
            console.log(`Gender: ${record.gender}`);
            console.log(`Email: ${record.email}`);
            console.log(`DOB: ${record.dob}`);
            console.log(`Phone: ${record.phone}`);
            console.log(`Job: ${record.job}`);

            rl.question('Enter the updated name: ' , name => {
                const nameValidation = validateInput('name', name);
                    if (nameValidation) {
                    console.log('Invalid Input, please try again');
                    return editRecord();
            }
                rl.question('Enter the updated gender: ' , gender => {
                    const genderValidation = validateInput('gender', gender);
                        if (genderValidation) {
                        console.log('Invalid Input, please try again');
                        return editRecord();
                }
                    rl.question('Enter the updated Email: ' , email => {
                        const emailValidation = validateInput('email', email);
                            if (emailValidation) {
                            console.log('Invalid Input, please try again');
                            return editRecord();
                    }
                        rl.question('Enter the updated DOB: ' , dob => {
                            const dobValidation = validateInput('dob', dob);
                                if (dobValidation) {
                                console.log('Invalid Input, please try again');
                                return editRecord();
                        }
                            rl.question('Enter the Updated Phone: ' , phone => {
                                const phoneValidation = validateInput('phone', phone);
                                    if (phoneValidation) {
                                    console.log('Invalid Input, please try again');
                                    return editRecord();
                            }
                                rl.question('Enter the updated Job: ' , job => {
                                    const jobValidation = validateInput('job', job);
                                        if (jobValidation) {
                                        console.log('Invalid Input, please try again');
                                        return editRecord();
                                }
                                    record.name = name;
                                    record.gender = gender;
                                    record.email = email;
                                    record.dob = dob;
                                    record.phone = phone;
                                    record.job = job;

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
