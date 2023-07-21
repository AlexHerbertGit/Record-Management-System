//This function will be used to search for patient records in the global "database".

function searchRecords() {
    console.log('--- Search Records ---');
    rl.question('Enter Search Query: ', searchQuery => {
        const filteredRecords = records.filter(record => {
           //This will perform a case-insensitive search through records array
           const idMatch = record.id.toLowercase().includes(searchQuery.toLowerCase());
           const nameMatch = record.name.toLowercase().includes(searchQuery.toLowerCase());
           const genderMatch = record.gender.toLowercase().includes(searchQuery.toLowerCase());
           const emailMatch = record.email.toLowercase().includes(searchQuery.toLowerCase());
           const dobMatch = record.dob.toLowercase().includes(searchQuery.toLowerCase());
           const phoneMatch = record.phone.toLowercase().includes(searchQuery.toLowerCase());
           const jobMatch = record.job.toLowercase().includes(searchQuery.toLowerCase());
           return idMatch|| nameMatch || genderMatch || emailMatch || dobMatch || phoneMatch || jobMatch;
           //This converts and search query to lowercase to ensure match is found. returns any of the results based on search query.
        });

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
            });
        } else {
            console.log('No record found.');
        }

    });
}
