function addRecord() {
    console.log('--- Add New Record ---');
    rl.question('Enter New User ID: ', (id) => {
      const idValidation = validateInput('id', id);
      if (idValidation !== '') {
        console.log('Invalid Input, please try again');
        return addRecord();
      }
      rl.question('Enter New Patient Name: ', (name) => {
        const nameValidation = validateInput('name', name);
        if (nameValidation !== '') {
          console.log('Invalid Input, please try again');
          return addRecord();
        }
        rl.question('Enter New Patient Gender: ', (gender) => {
          const genderValidation = validateInput('gender', gender);
          if (genderValidation !== '') {
            console.log('Invalid Input, please try again');
            return addRecord();
          }
          rl.question('Enter New Patient Email: ', (email) => {
            const emailValidation = validateInput('email', email);
            if (emailValidation !== '') {
              console.log('Invalid Input, please try again');
              return addRecord();
            }
            rl.question('Enter New Patient DOB: ', (dob) => {
              const dobValidation = validateInput('dob', dob);
              if (dobValidation !== '') {
                console.log('Invalid Input, please try again');
                return addRecord();
              }
              rl.question('Enter New Patient Phone (e.g 0213456789): ', (phone) => {
                const phoneValidation = validateInput('phone', phone);
                if (phoneValidation !== '') {
                  console.log('Invalid Input, please try again');
                  return addRecord();
                }
                rl.question('Enter New Patient Job: ', (job) => {
                  const jobValidation = validateInput('job', job);
                  if (jobValidation !== '') {
                    console.log('Invalid Input, please try again');
                    return addRecord();
                  }
  
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